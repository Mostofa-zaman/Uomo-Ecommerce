import { useState } from "react";
import Container from "@/component/common/Container";
import Images from "@/component/common/Images";
import reviewOne from "@/assets/images/clientReviewsOne.png";
import Add_review from "./Add_review";

const Tabs_desc = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-10 xl:gap-x-19 gap-y-6 sm:gap-y-0 texts_16_medium text-[#767676]">
        {/* DESCRIPTION Button */}
        <button
          onClick={() => setActiveTab("description")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "description"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          DESCRIPTION
        </button>

        {/* ADDITIONAL INFORMATION Button */}
        <button
          onClick={() => setActiveTab("additional")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "additional"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          ADDITIONAL INFORMATION
        </button>

        {/* REVIEWS Button */}
        <button
          onClick={() => setActiveTab("reviews")}
          className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
            activeTab === "reviews"
              ? "text-head after:w-full after:bg-head"
              : "after:w-0 hover:after:w-full after:bg-head"
          }`}
        >
          REVIEWS ({product?.reviews?.length || 0})
        </button>
      </div>

      <div className={"px-4 md:px-20 xl:px-60 mt-8 md:mt-10 lg:mt-12.5"}>
        <Container>
          {/* DESCRIPTION CONTENT */}
          {activeTab === "description" && (
            <div className="animate-fadeIn">
              <div className="">
                <h5 className="texts_16_medium text-head">
                  {product?.title}
                </h5>
                <p className="texts_14_regular text-head w-full xl:w-232.5 leading-7.5 pt-6 lg:pt-11.25 text-justify lg:text-left">
                  {product?.description}
                </p>
              </div>
              <div className="mt-9.75 flex flex-col md:flex-row gap-y-8 md:gap-x-20 xl:gap-x-37.5">
                <div className="">
                  <h4 className="texts_16_medium text-head">
                    Why choose product?
                  </h4>
                  <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head">
                        Creat by cotton fibric with soft and smooth
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head">
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2.5">
                      <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                      <p className="texts_14_regular text-head">
                        Downloadable/Digital Products, Virtual Products
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <h4 className="texts_16_medium text-head">
                    Sample Number List
                  </h4>
                  <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                    <div className="flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head">
                        1 Create Store-specific attrittbutes on the fly
                      </p>
                    </div>
                    <div className="flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head">
                        2 Simple, Configurable (e.g. size, color, etc.), bundled
                      </p>
                    </div>
                    <div className="flex items-start gap-x-2.5">
                      <p className="texts_14_regular text-head">
                        3 Downloadable/Digital Products, Virtual Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="texts_16_medium text-head pt-9.25">Lining</h4>
              <p className="texts_14_regular text-head pb-4 lg:pb-0">
                100% Polyester, Main: 100% Polyeste
              </p>
            </div>
          )}

          {/* ADDITIONAL INFORMATION CONTENT */}
          {activeTab === "additional" && (
            <div className="flex flex-row gap-x-10 md:gap-x-16 lg:gap-x-22.5 my-8 lg:my-12.5 animate-fadeIn">
              <div className="w-[100px] lg:w-[82px] space-y-[20px] lg:space-y-[31px]">
                <h4 className="texts_16_medium text-head whitespace-nowrap">Weight</h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">Dimensions</h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">Warranty</h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">Shipping</h4>
                <h4 className="texts_16_medium text-head whitespace-nowrap">Stock</h4>
              </div>
              <div className="space-y-[20px] lg:space-y-[31px]">
                <h5 className="texts_14_regular text-head">
                  {product?.weight} kg
                </h5>
                <h5 className="texts_14_regular text-head">
                  {product?.dimensions?.width} x {product?.dimensions?.height} x {product?.dimensions?.depth} cm
                </h5>
                <h5 className="texts_14_regular text-head">
                  {product?.warrantyInformation}
                </h5>
                <h5 className="texts_14_regular text-head">
                  {product?.shippingInformation}
                </h5>
                <h5 className="texts_14_regular text-head">
                  {product?.stock} units
                </h5>
              </div>
            </div>
          )}

          {/* REVIEWS CONTENT */}
          {activeTab === "reviews" && (
            <div className="animate-fadeIn space-y-8">
              <div className="border-b border-footer pb-5.75">
                <h4 className="texts_16_medium text-head">Reviews</h4>

                {product?.reviews?.map((review, index) => (
                  <div key={index} className="mt-6.5">
                    <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center">
                      <div className="flex-shrink-0 w-12 md:w-auto">
                        <Images imgSrc={reviewOne} />
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                          <h5 className="texts_14_regular text-head">
                            {review?.reviewerName}
                          </h5>
                          <div className="flex text-yellow-400 mt-1 md:mt-0">
                            {[...Array(review?.rating)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="texts_14_regular text-[#767676] block mt-1">
                          {new Date(review?.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <p className="pt-5 md:pl-21 texts_14_regular text-[#767676] w-full lg:w-210 leading-6">
                      {review?.comment}
                    </p>
                  </div>
                ))}
              </div>
              <Add_review />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default Tabs_desc;