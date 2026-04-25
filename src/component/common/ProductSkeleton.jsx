import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="lg:max-w-82.5 w-full relative">
      
      {/* Image Skeleton */}
      <div className="relative aspect-square overflow-hidden rounded-sm bg-gray-200">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Product Description Skeleton */}
      <div className="mt-3.5 space-y-3">
        
        {/* Category & Heart Icon */}
        <div className="flex items-center justify-between">
          <div className="relative h-3.5 w-20 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          <div className="relative h-3.5 w-3.5 overflow-hidden rounded-full bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>

        {/* Product Name (2 lines) */}
        <div className="space-y-2">
          <div className="relative h-4 w-full overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          <div className="relative h-4 w-3/4 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="relative h-4 w-16 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          <div className="relative h-4 w-16 overflow-hidden rounded bg-gray-200">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;