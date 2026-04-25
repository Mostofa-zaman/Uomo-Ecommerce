import React from "react";

const ProductImageSkeleton = ({ className = "" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg 
        bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}
    >
      {/* SHIMMER EFFECT */}
      <div
        className="absolute inset-0 -translate-x-full 
        animate-[shimmer_2s_infinite] 
        bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />

      {/* CONTENT */}
      <div className="flex h-full items-center justify-center p-8">
        <div className="relative w-full max-w-[180px]">

          {/* BOTTLE CAP */}
          <div className="mx-auto mb-1 h-8 w-16 rounded-t-xl bg-gray-300 animate-pulse" />

          {/* BOTTLE NECK */}
          <div className="mx-auto mb-1 h-6 w-12 bg-gray-300 animate-pulse" />

          {/* BOTTLE BODY */}
          <div className="relative mx-auto h-48 w-full overflow-hidden rounded-lg bg-gray-300 animate-pulse">
            
            {/* LABEL */}
            <div
              className="absolute top-1/2 left-1/2 h-24 w-3/4 
              -translate-x-1/2 -translate-y-1/2 
              rounded border-2 border-gray-400/30 bg-gray-400/50"
            />
          </div>

          {/* BOTTLE BASE */}
          <div className="mx-auto h-3 w-full rounded-b-sm bg-gray-300 animate-pulse" />

        </div>
      </div>
    </div>
  );
};

export default ProductImageSkeleton;