import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import allIcons from "@/helper/iconProvider";
import { auth } from "../../firebase/firebase";
import useAuthStore from "../../store/authSlice";

const Login = ({ unMount }) => {
  const { close } = allIcons;
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const navtabRef = useRef(null);

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navtabRef.current && !navtabRef.current.contains(event.target)) {
        unMount(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [unMount]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Please Enter Your Email";
    if (!formData.password) newErrors.password = "Please Enter Your Password";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setErrors({});
        setLoginSuccess(true);
        setUser({ uid: user.uid, email: user.email, displayName: user.displayName });
        setTimeout(() => {
          unMount(null);
          navigate("/");
        }, 1500);
      })
      .catch(() => setErrors({ firebase: "Invalid email or password" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:py-16 lg:py-24">
      <div
        ref={navtabRef}
        className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <p className="texts_16_medium text-head text-sm sm:text-base">LOGIN</p>
          <span className="text-xl sm:text-2xl cursor-pointer" onClick={() => unMount(null)}>
            {close}
          </span>
        </div>

        {/* Success Message */}
        {loginSuccess && (
          <div className="bg-green-50 border border-footer text-green-700 px-4 py-3 text-sm mb-5 rounded">
            ✅ Login successful! Redirecting...
          </div>
        )}

        {/* Form */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Username or email address *"
              className="w-full border-2 border-footer px-3 sm:px-4 py-3 sm:py-4 texts_14_regular text-head placeholder:text-second rounded"
            />
            {errors.email && <span className="text-xs sm:text-sm text-red-500">{errors.email}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <fieldset className="relative border-2 border-head px-3 sm:px-4 pt-1 pb-2 rounded">
              <legend className="texts_14_regular text-head px-1">Password *</legend>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent texts_14_regular text-head focus:outline-none"
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </fieldset>
            {errors.password && <span className="text-xs sm:text-sm text-red-500">{errors.password}</span>}
            {errors.firebase && <span className="text-xs sm:text-sm text-red-500">{errors.firebase}</span>}
          </div>

          {/* Remember + Forgot */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember((prev) => !prev)}
                className="w-4 h-4 border border-footer accent-head cursor-pointer"
              />
              <span className="texts_14_regular text-head text-sm sm:text-base">Remember me</span>
            </label>
            <Link
              to="/lost-password"
              className="texts_14_regular text-head underline underline-offset-2 text-sm sm:text-base"
            >
              Lost password?
            </Link>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-head text-white py-3 sm:py-4 texts_14_medium text-sm sm:text-base rounded hover:bg-[#DB4444] transition"
          >
            LOG IN
          </button>

          {/* Footer */}
          <p className="texts_14_regular text-second text-center text-xs sm:text-sm">
            No account yet?{" "}
            <Link
              to="/login-register"
              className="text-head underline underline-offset-2"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;