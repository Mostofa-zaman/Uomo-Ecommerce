import allIcons from "@/helper/iconProvider";
import { Link } from "react-router-dom";
import React from "react";

const Register = () => {
  const { close } = allIcons;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 sm:py-16 lg:py-24 px-4">
      <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <p className="texts_16_medium text-head text-sm sm:text-base">CREATE AN ACCOUNT</p>
          <span className="text-xl sm:text-2xl cursor-pointer">{close}</span>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full border-2 border-footer px-3 sm:px-4 py-3 sm:py-4 texts_14_regular text-second placeholder:text-second rounded"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email address *"
            className="w-full border-2 border-footer px-3 sm:px-4 py-3 sm:py-4 texts_14_regular text-second placeholder:text-second rounded"
          />

          {/* Password */}
          <fieldset className="border-2 border-head px-3 sm:px-4 pt-1 pb-2 rounded">
            <legend className="texts_14_regular text-head px-1">Password *</legend>
            <input
              type="password"
              defaultValue="••••••••"
              className="w-full texts_14_regular text-head bg-transparent focus:outline-none"
            />
          </fieldset>

          {/* Privacy Note */}
          <p className="texts_14_regular text-second leading-relaxed text-xs sm:text-sm">
            Your personal data will be used to support your experience throughout
            this website, to manage access to your account, and for other purposes
            described in our{" "}
            <Link
              to="/privacy-policy"
              className="text-head underline underline-offset-2"
            >
              privacy policy.
            </Link>
          </p>

          {/* Register Button */}
          <button className="w-full bg-head text-white texts_14_medium tracking-widest py-3 sm:py-4 cursor-pointer text-sm sm:text-base rounded hover:bg-head/90 transition">
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;