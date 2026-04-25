import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../store/authSlice";

const RegiLog = () => {
  const navigate = useNavigate();
  const { setUser } = useAuthStore();
  const [activeTab, setActiveTab] = React.useState("login");

  const switchTab = (tab) => setActiveTab(tab);

  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md sm:max-w-lg lg:max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 lg:p-10">

          {/* Tabs */}
          <div className="flex justify-center gap-6 sm:gap-10 mb-8 sm:mb-10">
            {["login", "register"].map((tab) => (
              <button
                key={tab}
                onClick={() => switchTab(tab)}
                className={`text-sm sm:text-base lg:text-lg font-medium relative transition-all ${
                  activeTab === tab
                    ? "after:w-full"
                    : "opacity-40 hover:opacity-100"
                } after:absolute after:h-0.5 after:bg-head after:-bottom-0.5 after:left-0 after:duration-500`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Placeholder for Forms */}
          <div className="mt-6 space-y-4">
            {activeTab === "login" ? (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <button className="w-full bg-head text-white py-3 rounded text-sm sm:text-base hover:bg-head/90 transition">
                  Login
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 rounded border border-gray-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-head"
                />
                <button className="w-full bg-head text-white py-3 rounded text-sm sm:text-base hover:bg-head/90 transition">
                  Register
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegiLog;