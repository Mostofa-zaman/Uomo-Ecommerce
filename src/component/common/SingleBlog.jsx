import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { IoStar } from "react-icons/io5";

import Container from "./Container";
import Images from "./Images";
import Button from "./Button";

import blogImg from "@/assets/images/singleBlog.png";
import insideblogImg from "@/assets/images/insideBlog.png";

const SingleBlog = () => {
  return (
    <div className="mt-[85px] py-[60px] lg:pt-[85px] lg:pb-[110px]">
      <Container>

        {/* ===== Header ===== */}
        <div className="lg:pl-60">
          <h2 className="head_35_bold text-head">
            5 Tips to Increase Your Online Sales
          </h2>

          <div className="mb-8 flex gap-5 lg:mb-10.75">
            <p className="texts_14_regular text-second">BY ADMIN</p>
            <p className="texts_14_regular text-second">APRIL 05, 2020</p>
            <p className="texts_14_regular text-second">TRENDS</p>
          </div>
        </div>

        {/* ===== Hero Image ===== */}
        <div className="mb-6 h-[200px] w-full bg-red sm:h-full lg:mb-12.5">
          <Images
            imgSrc={blogImg}
            className="h-full w-full object-cover"
          />
        </div>

        {/* ===== Content ===== */}
        <div className="lg:pl-60">
          <p className="pb-15 max-w-232.5 texts_14_regular text-head">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>

          <h5 className="texts_16_medium text-head">
            Sed do eiusmod tempor incididunt ut labore
          </h5>

          <p className="max-w-289.5 texts_14_regular text-head">
            Saw wherein fruitful good days image them...
          </p>

          {/* ===== Lists ===== */}
          <div className="my-8.5 grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Bullet List */}
            <div>
              <h3 className="mb-4 texts_16_medium text-head">
                Why choose product?
              </h3>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Creat by cotton fibric with soft and smooth
                </li>

                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Simple, Configurable (e.g. size, color, etc.), bundled
                </li>

                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" />
                  Downloadable/Digital Products, Virtual Products
                </li>
              </ul>
            </div>

            {/* Number List */}
            <div>
              <h3 className="mb-4 texts_16_medium text-head">
                Sample Number List
              </h3>

              <ol className="space-y-2">
                {[1, 2, 3].map((num) => (
                  <li
                    key={num}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="shrink-0 font-medium text-gray-600">
                      {num}
                    </span>
                    Sample list content
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className="mb-7.5 max-w-232.5 texts_14_regular text-head">
            She'd years darkness days...
          </p>
        </div>

        {/* ===== Inside Images ===== */}
        <div className="mb-8 flex gap-5 lg:gap-7.75 lg:px-30 lg:mb-[50px]">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-red min-h-[200px]">
              <Images
                imgSrc={insideblogImg}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ===== More Content ===== */}
        <div className="lg:pl-60">
          <p className="mb-8 max-w-232.5 texts_14_regular text-head lg:mb-15">
            Lorem ipsum dolor sit amet...
          </p>

          <p className="mb-12.5 max-w-232.5 texts_14_regular text-head">
            She'd years darkness days...
          </p>
        </div>

        {/* ===== Share Buttons ===== */}
        <div className="flex flex-wrap gap-2.5 lg:justify-center">
          <Link to="/">
            <div className="w-[220px] lg:w-auto cursor-pointer bg-[#306199] pt-3.5 pb-3 pl-14.5 pr-12 text-white">
              Share on Facebook
            </div>
          </Link>

          <Link to="/">
            <div className="w-[220px] lg:w-auto cursor-pointer bg-[#26C4F1] pt-3.5 pb-3 pl-14.5 pr-12 text-white">
              Share on Twitter
            </div>
          </Link>

          <Link to="/">
            <div className="w-[220px] lg:w-auto cursor-pointer bg-[#E82B2D] pt-3.5 pb-3 pl-14.5 pr-12 text-white">
              Share on Pinterest
            </div>
          </Link>

          <Link to="/">
            <div className="cursor-pointer bg-head px-4.75 pt-3.5 pb-3 text-white">
              +
            </div>
          </Link>
        </div>

        {/* ===== Reviews Section ===== */}
        <div className="mx-auto mt-12.5 max-w-232.5 px-4">

          <h2 className="mb-6.5 texts_18_medium text-head">Reviews</h2>

          {[1, 2].map((_, i) => (
            <div
              key={i}
              className={`flex gap-7.5 pb-6 ${
                i === 0
                  ? "mb-7.5 border-b border-[#E4E4E4]"
                  : "mb-8 lg:mb-13.5"
              }`}
            >
              <div className="h-15 w-15 shrink-0 rounded-full bg-[#E4E4E4]" />

              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="texts_14_regular text-head">
                      Janice Miller
                    </p>
                    <p className="texts_14_regular text-second">
                      April 06, 2020
                    </p>
                  </div>

                  <div className="flex gap-1.25 text-[#EEBA36]">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} />
                    ))}
                  </div>
                </div>

                <p className="mt-5 max-w-210 texts_14_regular text-second">
                  Nam libero tempore...
                </p>
              </div>
            </div>
          ))}

          {/* ===== Review Form ===== */}
          <h3 className="mb-1 texts_18_medium text-head">
            Be the first to review "Message Cotton T-Shirt"
          </h3>

          <p className="mb-7.5 texts_14_regular text-head">
            Your email address will not be published...
          </p>

          <div className="mb-4 flex items-center gap-4.5">
            <label className="texts_14_regular text-head">
              Your rating *
            </label>

            <div className="flex gap-1.25 text-[#EEBA36]">
              {[...Array(5)].map((_, i) => (
                <IoStar key={i} size={13} />
              ))}
            </div>
          </div>

          <div className="space-y-7.5">
            <div className="textarea-container w-full">
              <textarea id="message" placeholder=" " className="textarea" />
              <label htmlFor="message" className="textarea-label">
                ADD REVIEW
              </label>
            </div>

            <div className="input-container w-full">
              <input type="text" placeholder=" " className="input" />
              <label className="label">Name *</label>
            </div>

            <div className="input-container w-full">
              <input type="text" placeholder=" " className="input" />
              <label className="label">Email address *</label>
            </div>
          </div>

          <div className="mt-7.5 flex items-center gap-2.75">
            <input type="checkbox" className="text-second" />
            <p className="texts_14_regular text-second">
              Save my name, email, and website...
            </p>
          </div>

          <Button
            btnText="SUBMIT"
            className="mt-7.75 bg-head pt-5.5 pb-3.5 pl-18.5 pr-19.25 text-white texts_14_medium"
          />
        </div>
      </Container>
    </div>
  );
};

export default SingleBlog;