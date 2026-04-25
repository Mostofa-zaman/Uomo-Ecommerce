import React from "react";
import Images from "./Images";
import Button from "./Button";

const FeaturedProducts = ({
  imgSrc,
  imgAlt = "product image",
  price,
  category,
}) => {
  return (
    <div className="relative overflow-hidden rounded-md group">
      
      {/* Product Image */}
      <Images
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-red-500/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute z-10 bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        
        <p className="texts_14_regular text-head transition-colors duration-300 group-hover:text-white">
          {price}
        </p>

        <h3 className="pb-1 head_26_medium text-head transition-colors duration-300 group-hover:text-white">
          {category}
        </h3>

        <Button
          btnText="SHOP NOW"
          className="transition-all duration-300 group-hover:text-white group-hover:after:bg-white hover:after:w-12"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;