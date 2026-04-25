import React, { useState } from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Product = ({
  imgSrc,
  imgAlt,
  category, // typo fix: catagory -> category
  itemName,
  itemPrice,
  discountPrice,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="relative w-full max-w-[330px] group">

      {/* IMAGE */}
      <div className="relative overflow-hidden bg-gray-200">

        <Images
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          className="w-full h-[250px] object-cover"
        />

        {/* ADD TO CART */}
        <Link
          to="/shop-single"
          className="absolute bottom-4 left-1/2 w-[90%] -translate-x-1/2 translate-y-[20%]
          bg-black text-white text-center whitespace-nowrap
          py-3 text-sm font-medium
          opacity-0 transition duration-500 ease-in-out
          group-hover:translate-y-0 group-hover:opacity-100"
        >
          ADD TO CART
        </Link>

      </div>

      {/* PRODUCT INFO */}
      <div className="mt-3.5">

        {/* CATEGORY + LIKE */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">{category}</p>

          <button
            onClick={() => setIsLiked(!isLiked)}
            className="cursor-pointer"
            aria-label="Toggle wishlist"
          >
            <FaHeart
              size={14}
              className={isLiked ? "text-red-500" : "text-gray-400"}
            />
          </button>
        </div>

        {/* NAME */}
        <p className="pt-1 text-base text-black line-clamp-2">
          {itemName}
        </p>

        {/* PRICE */}
        <div className="flex items-center gap-2 mt-1">
          {discountPrice ? (
            <>
              <p className="text-sm text-gray-400 line-through">
                ${itemPrice}
              </p>
              <p className="text-sm font-bold text-red-500">
                ${discountPrice}
              </p>
            </>
          ) : (
            <p className="text-sm text-black">${itemPrice}</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Product;