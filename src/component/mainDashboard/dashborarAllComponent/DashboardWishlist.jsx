import useWishlistStore from "@/store/wishlist";
import React from "react";

const DashboardWishlist = () => {
  const wishlistItems = useWishlistStore((state) => state.wishlistItems);
  console.log("wishlist store:", wishlistItems);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const getImage = (item) => {
    if (item.thumbnail) return item.thumbnail;
    if (item.image) return item.image;
    if (item.images?.length > 0) return item.images[0];
    return "https://placehold.co/300x300/d1d5db/9ca3af";
  };

  return (
    <div className="w-full pt-8 sm:pt-14 lg:pt-27 px-4 sm:px-6 lg:px-0">
      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-sm text-gray-400">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-[30px]">
          {wishlistItems.map((item) => (
            <div key={item.id} className="w-full group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getImage(item)}
                  alt={item.title || item.name}
                  className="w-full object-cover"
                />
                {/* X button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 left-3 w-7 h-7 bg-white border border-gray-200 flex items-center justify-center text-gray-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between pt-2">
                <div>
                  <p className="text-[11px] text-gray-400 mb-[2px]">
                    {item.category}
                  </p>
                  <p className="text-[12px] sm:text-sm text-gray-900 font-normal">
                    {item.title || item.name}
                  </p>
                  <p className="text-[12px] sm:text-sm text-gray-900 mt-[2px]">
                    ${item.price}
                  </p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-400 hover:text-red-600 mt-1 shrink-0 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardWishlist;
