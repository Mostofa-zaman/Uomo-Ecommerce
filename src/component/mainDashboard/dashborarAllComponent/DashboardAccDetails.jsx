import Container from "@/component/common/Container";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ─── Zod Schema ────────────────────────────────────────────────────────────────
const schema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    displayName: z.string().min(1, "Display name is required"),
    email: z.string().email("Invalid email address"),
    currentPassword: z.string().optional(),
    newPassword: z
      .string()
      .optional()
      .refine((val) => !val || val.length >= 6, {
        message: "Password must be at least 6 characters",
      }),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.newPassword && data.newPassword !== data.confirmPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

// ─── Main Component ────────────────────────────────────────────────────────────
const DashboardAccDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);
    reset();
  };

  const inputClass =
    "w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400";

  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-8 sm:mt-12 lg:mt-25"
        >
          {/* First Name + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-[27px] mb-5 sm:mb-7.5">
            <div className="flex-1">
              <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First Name"
                  className={inputClass}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last Name"
                  className={inputClass}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Display Name */}
          <div className="mb-5 sm:mb-7.5">
            <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
              <input
                {...register("displayName")}
                type="text"
                placeholder="Display Name"
                className={inputClass}
              />
            </div>
            {errors.displayName && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.displayName.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="mb-5 sm:mb-7.5">
            <div className="border border-[#c8dde9] focus-within:border-gray-900 transition-all">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className={inputClass}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-[11px] mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Change */}
          <div className="pt-2 sm:pt-4">
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-900 mb-5 sm:mb-7.5">
              Password Change
            </p>

            {/* Current Password */}
            <div className="mb-5 sm:mb-7.5">
              <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
                <input
                  {...register("currentPassword")}
                  type="password"
                  placeholder="Current password (leave blank to leave unchanged)"
                  className="w-full px-4 py-3 lg:pl-5.5 lg:pt-5 lg:pb-3.75 lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.currentPassword && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.currentPassword.message}
                </p>
              )}
            </div>

            {/* New Password */}
            <div className="mb-5 sm:mb-7.5">
              <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
                <input
                  {...register("newPassword")}
                  type="password"
                  placeholder="New password (leave blank to leave unchanged)"
                  className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.newPassword && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="mb-5 sm:mb-7.5">
              <div className="border border-[#c8dde9] focus-within:border-gray-400 transition-all">
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 lg:pl-[22px] lg:pt-[20px] lg:pb-[15px] lg:pr-0 text-xs sm:text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-[11px] mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-2 sm:pt-4 pb-5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-black text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase px-8 py-3 sm:px-10 sm:py-4 lg:pl-25 lg:pt-5.25 lg:pr-23.5 lg:pb-3.75 hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default DashboardAccDetails;