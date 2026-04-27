import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="lg:max-w-82.5 w-full relative">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden bg-gray-200 aspect-square rounded-sm">
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
      </div>

      {/* Product Description Skeleton */}
      <div className="mt-3.5 space-y-3">
        {/* Category and Heart Icon Row */}
        <div className="flex justify-between items-center">
          <div className="h-3.5 bg-gray-200 rounded w-20 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
          <div className="h-3.5 w-3.5 bg-gray-200 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>

        {/* Product Name Skeleton - 2 lines */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>

        {/* Price Skeleton */}
        <div className="flex gap-2 items-center">
          <div className="h-4 bg-gray-200 rounded w-16 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-16 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;