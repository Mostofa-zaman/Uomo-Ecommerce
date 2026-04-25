import React, { useEffect, useState } from "react";
import allImages from "@/helper/imagesProvider";

const ComingSoon = () => {
  const { notFoundPage } = allImages;

  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "07",
    mins: "09",
    secs: "03",
  });
  const [email, setEmail] = useState("");

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 5);
    target.setHours(target.getHours() + 7);
    target.setMinutes(target.getMinutes() + 9);
    target.setSeconds(target.getSeconds() + 3);

    const pad = (n) => String(Math.floor(n)).padStart(2, "0");

    const interval = setInterval(() => {
      const diff = target - new Date();
      if (diff <= 0) return clearInterval(interval);

      setTimeLeft({
        days: pad(diff / 86400000),
        hours: pad((diff % 86400000) / 3600000),
        mins: pad((diff % 3600000) / 60000),
        secs: pad((diff % 60000) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${notFoundPage})` }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-[90%] sm:max-w-[600px] md:max-w-[771px] mx-auto">

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[100px] font-bold text-head text-center leading-tight">
          COMING SOON
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-head text-center mt-5 pb-6 sm:pb-8 md:pb-[clamp(24px,4vw,45px)] max-w-[90%] sm:max-w-[505px] px-2">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>

        {/* Countdown */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-x-[clamp(4px,2vw,8px)] mb-6 sm:mb-[clamp(28px,4vw,49px)]">
          <TimeBlock value={timeLeft.days} label="Days" />
          <Colon />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeBlock value={timeLeft.mins} label="Mins" />
          <Colon />
          <TimeBlock value={timeLeft.secs} label="Sec" />
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-5 items-stretch sm:items-center w-full px-2 sm:px-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 p-3 sm:p-4 border border-footer rounded text-sm sm:text-base text-second placeholder:text-second bg-white w-full"
          />
          <button className="bg-head rounded py-3 sm:py-4 px-4 sm:px-6 text-white text-sm sm:text-base font-semibold tracking-[1.5px] uppercase hover:bg-[#d6001c] transition-colors duration-200 flex-shrink-0 w-full sm:w-auto">
            JOIN
          </button>
        </div>

      </div>
    </div>
  );
};

const TimeBlock = ({ value, label }) => (
  <div className="flex flex-col items-center min-w-[60px] sm:min-w-[72px]">
    <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-head">
      {value}
    </span>
    <span className="text-xs sm:text-sm md:text-base text-second uppercase mt-1">
      {label}
    </span>
  </div>
);

const Colon = () => <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-head mx-1">:</span>;

export default ComingSoon;