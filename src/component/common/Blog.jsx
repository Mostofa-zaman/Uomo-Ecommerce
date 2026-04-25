import React from "react";
import Images from "./Images";
import Button from "./Button";

const Blog = ({ imgSrc, imgAlt, author, date, blogname, blogdescription }) => {
  return (
    <div className="cursor-pointer w-full max-w-full sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] mx-auto">
      <Images imgSrc={imgSrc} imgAlt={imgAlt} />
      <div className="pt-4 sm:pt-5">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <p className="texts_14_regular text-second">{author}</p>
          <p className="texts_14_regular text-second">{date}</p>
        </div>

        <h3 className="head_26_regular text-head pt-1 pb-3 sm:pb-5 text-lg sm:text-xl lg:text-2xl">
          {blogname}
        </h3>

        <p className="texts_14_regular text-head max-w-full sm:max-w-[95%] lg:max-w-[450px] pb-2.5 text-sm sm:text-base lg:text-[15px] leading-6">
          {blogdescription}
        </p>

        <Button
          className={"hover:after:w-24"}
          btnText={"CONTINUE READING"}
        />
      </div>
    </div>
  );
};

export default Blog;