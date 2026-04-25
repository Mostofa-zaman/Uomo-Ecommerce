import React from "react";
import Images from "./Images";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useWishlistStore from "@/store/wishlist";

const Product = ({
  imgSrc,
  imgAlt,
  catagory,
  itemName,
  itemPrice,
  discountPrice,
  id,
  product,
}) => {
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );
  const isLiked = useWishlistStore((state) =>
    state.wishlistItems.some((i) => i.id === id),
  );

  const handleWishlist = () => {


    if (isLiked) {
      removeFromWishlist(id);
    } else {
      const itemToAdd = product || {
        id,
        title: itemName,
        price: itemPrice,
        category: catagory,
        thumbnail: imgSrc,
      };
     
      addToWishlist(itemToAdd);
       
    }
  };

  return (
    <>
      <div className="lg:max-w-82.5 w-full h-fit  relative group shadow-[0_4px_16px_rgba(99,102,241,0.15)]">
        <div className="relative overflow-hidden ">
          <Images
            className={"w-[250px] object-cover"}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
          {/* Add To Cart Start */}
          <Link
            to={`/shop-single/${id}`}
            className="texts_14_medium text-white bg-head w-full pt-4 pb-2.5 text-center absolute bottom-0 lg:bottom-4 left-1/2 -translate-x-1/2 lg:opacity-0 lg:translate-y-[50%] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 ease-in-out duration-500 whitespace-nowrap cursor-pointer"
          >
            ADD TO CART
          </Link>
          {/* Add To Cart End*/}
        </div>
        {/* Product Description Start */}
        <div className="mt-3.5 px-5 pb-3">
          <div className="flex justify-between items-center">
            <p className="texts_14_regular text-second">{catagory}</p>
            <div onClick={handleWishlist} className="cursor-pointer">
              {isLiked ? (
                <FaHeart className="text-red cursor-pointer" size={14} />
              ) : (
                <FaHeart className="text-second cursor-pointer" size={14} />
              )}
            </div>
          </div>
          <p className="texts_16_regular truncate text-head pt-0.5 line-clamp-2">
            {itemName}
          </p>
          <div className="flex gap-2 items-center">
            {discountPrice ? (
              <>
                <p className="texts_16_regular text-second line-through">
                  ${itemPrice}
                </p>
                <p className="texts_16_regular text-red font-bold">
                  ${discountPrice}
                </p>
              </>
            ) : (
              <p className="texts_16_regular text-head">${itemPrice}</p>
            )}
          </div>
        </div>
        {/* Product Description End */}
      </div>
    </>
  );
};

export default Product;
