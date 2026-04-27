import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useCartStore from "@/store/cartSlice";

// ─── Zod Schema ────────────────────────────────────────────────────────────────
const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  streetAddress2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postcode: z.string().min(1, "Postcode is required"),
  province: z.string().min(1, "Province is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  orderNotes: z.string().optional(),
  createAccount: z.boolean().optional(),
  shipDifferent: z.boolean().optional(),
});

// ─── Main ShopCheckout ─────────────────────────────────────────────────────────
const ShopCheckout = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      createAccount: false,
      shipDifferent: false,
    },
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const vat = Math.round(subtotal * 0.015);
  const total = subtotal + vat;

  const onSubmit = async (data) => {
    console.log("Order data:", { ...data, paymentMethod, cartItems });
    // এখানে API call করুন
  };

  const inputClass =
    "w-full border-2 border-footer px-5.5 pt-5.25 pb-4 px-4 text-sm text-head outline-none bg-white appearance-none cursor-pointer focus:border-head leading-6";

  return (
    <div className="flex flex-col lg:flex-row gap-15 items-start w-full">
      {/* ── Left: Billing Details ── */}
      <div className="flex-1 w-full max-w-232.5">
        <h2 className="text-[16px] font-medium text-head leading-[100%] mb-6 lg:mb-8.5">
          BILLING DETAILS
        </h2>

        {/* First / Last */}
        <div className="flex gap-4 lg:gap-7.5 mb-4 lg:mb-7.5 w-full">
          <div className="flex-1">
            <input
              {...register("firstName")}
              placeholder="First Name"
              className={inputClass}
            />
            {errors.firstName && (
              <p className="text-red-500 text-[11px] mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div className="flex-1">
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className={inputClass}
            />
            {errors.lastName && (
              <p className="text-red-500 text-[11px] mt-1">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="mb-4 lg:mb-7.75">
          <input
            {...register("company")}
            placeholder="Company Name (optional)"
            className={inputClass}
          />
        </div>

        {/* Country */}
        <div className="mb-4 relative border border-footer transition-colors">
          <label className="absolute -top-2.5 left-3 bg-white px-1 texts_14_regular">
            Country / Region *
          </label>
          <select
            {...register("country")}
            className="w-full pt-5.25 pb-3.75 px-4 text-sm text-head outline-none bg-white appearance-none cursor-pointer border-2 border-transparent focus:border-2 focus:border-head"
          >
            <option value="">Select a country / region</option>
            <option value="Turkey">Turkey</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="BD">Bangladesh</option>
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-second pointer-events-none">
            <FaAngleDown className="text-[10px]" />
          </span>
          {errors.country && (
            <p className="text-red-500 text-[11px] mt-1">{errors.country.message}</p>
          )}
        </div>

        {/* Street Address */}
        <div className="mb-4 flex flex-col gap-2.5">
          <div>
            <input
              {...register("streetAddress")}
              placeholder="Street Address *"
              className={inputClass}
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-[11px] mt-1">{errors.streetAddress.message}</p>
            )}
          </div>
          <input
            {...register("streetAddress2")}
            placeholder=""
            className={inputClass}
          />
        </div>

        {/* Town / City */}
        <div className="mb-4">
          <input
            {...register("city")}
            placeholder="Town / City *"
            className={inputClass}
          />
          {errors.city && (
            <p className="text-red-500 text-[11px] mt-1">{errors.city.message}</p>
          )}
        </div>

        {/* Postcode */}
        <div className="mb-4">
          <input
            {...register("postcode")}
            placeholder="Postcode / ZIP *"
            className={inputClass}
          />
          {errors.postcode && (
            <p className="text-red-500 text-[11px] mt-1">{errors.postcode.message}</p>
          )}
        </div>

        {/* Province */}
        <div className="mb-4">
          <input
            {...register("province")}
            placeholder="Province *"
            className={inputClass}
          />
          {errors.province && (
            <p className="text-red-500 text-[11px] mt-1">{errors.province.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <input
            {...register("phone")}
            placeholder="Phone *"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-red-500 text-[11px] mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <input
            {...register("email")}
            type="email"
            placeholder="Your Mail"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-500 text-[11px] mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-2 mb-6.5">
          {[
            { name: "createAccount", label: "CREATE AN ACCOUNT?" },
            { name: "shipDifferent", label: "SHIP TO A DIFFERENT ADDRESS?" },
          ].map((cb) => (
            <label key={cb.name} className="flex items-center gap-3.25 cursor-pointer">
              <input
                type="checkbox"
                {...register(cb.name)}
                className="w-4 h-4 border border-footer rounded-none accent-head cursor-pointer shrink-0"
              />
              <span className="text-sm text-head font-medium">{cb.label}</span>
            </label>
          ))}
        </div>

        {/* Order Notes */}
        <textarea
          {...register("orderNotes")}
          placeholder="Order Notes (optional)"
          rows={5}
          className="w-full border border-footer px-5.25 pt-5 pb-30 text-sm text-head placeholder:text-second outline-none focus:border-head transition-colors bg-white resize-none"
        />
      </div>

      {/* ── Right: Your Order ── */}
      <div className="shrink-0 w-full md:max-w-full lg:w-auto lg:max-w-105">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-head px-10.25 pt-9.5 pb-5.5"
        >
          <h3 className="text-[16px] font-medium leading-[100%] mb-8">
            YOUR ORDER
          </h3>

          {/* Header row */}
          <div className="flex justify-between border-b border-footer pb-3 mb-3">
            <span className="texts_14_medium">PRODUCT</span>
            <span className="texts_14_medium">SUBTOTAL</span>
          </div>

          {/* Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-3.25">
              <span className="texts_14_medium text-second">
                {item.title} x{item.quantity}
              </span>
              <span className="texts_14_medium text-second flex items-center">
                <LiaDollarSignSolid />
                {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          {/* Subtotal */}
          <div className="flex justify-between border-t border-footer pt-5 pb-3.25 mt-0.75">
            <span className="texts_14_medium">SUBTOTAL</span>
            <span className="texts_14_medium flex items-center">
              <LiaDollarSignSolid />
              {subtotal.toFixed(2)}
            </span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between border-t border-footer pt-5 pb-5.25">
            <span className="texts_14_medium">SHIPPING</span>
            <span className="texts_14_regular">Free shipping</span>
          </div>

          {/* VAT */}
          <div className="flex justify-between border-t border-footer pt-3.5 pb-3.25">
            <span className="texts_14_medium">VAT</span>
            <span className="texts_14_medium">${vat}</span>
          </div>

          {/* Total */}
          <div className="flex justify-between border-t border-footer pt-3.75">
            <span className="texts_14_medium">TOTAL</span>
            <span className="texts_14_medium">${total}</span>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-footer pl-10.5 pr-7.75 pt-10.5 pb-6.5 mt-5"
        >
          {/* Direct bank transfer */}
          <label className="flex items-center gap-3.75 cursor-pointer mb-2">
            <div className="relative w-4 h-4 rounded-full border-2 border-head flex items-center justify-center shrink-0">
              <div
                className={`w-2 h-2 rounded-full bg-head transition-opacity ${paymentMethod === "bank" ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={paymentMethod === "bank"}
              onChange={() => setPaymentMethod("bank")}
              className="hidden"
            />
            <span className="text-[16px] text-head font-normal leading-[100%]">
              Direct bank transfer
            </span>
          </label>

          {paymentMethod === "bank" && (
            <p className="texts_14_regular mb-4 pl-7.75 max-w-73.5">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}

          {[
            { value: "check", label: "Check payments" },
            { value: "cod", label: "Cash on delivery" },
            { value: "paypal", label: "PayPal" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer mb-3">
              <div className="relative w-4 h-4 rounded-full border-2 border-head flex items-center justify-center shrink-0">
                <div
                  className={`w-2 h-2 rounded-full bg-head transition-opacity ${paymentMethod === opt.value ? "opacity-100" : "opacity-0"}`}
                />
              </div>
              <input
                type="radio"
                name="payment"
                value={opt.value}
                checked={paymentMethod === opt.value}
                onChange={() => setPaymentMethod(opt.value)}
                className="hidden"
              />
              <span className="text-sm text-head font-medium leading-6">
                {opt.label}
              </span>
            </label>
          ))}

          <p className="text-[12px] text-head leading-6 mt-2 max-w-86.75">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <Link to="/privacy" className="text-second">
              privacy policy
            </Link>
            .
          </p>
        </motion.div>

        {/* Place Order Button */}
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
          className="mt-5 w-full block text-center pt-5.25 pb-3.75 bg-head text-white text-sm font-medium leading-6 hover:bg-[#DB4444] transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? "Placing Order..." : "PLACE ORDER"}
        </button>
      </div>
    </div>
  );
};

export default ShopCheckout;