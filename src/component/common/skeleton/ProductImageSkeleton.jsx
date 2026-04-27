import React from "react";

const ProductImageSkeleton = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg ${className}`}>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      
      {/* Bottle Shape Skeleton */}
      <div className="flex items-center justify-center h-full p-8">
        <div className="relative w-full max-w-[180px]">
          {/* Bottle Cap */}
          <div className="mx-auto w-16 h-8 bg-gray-300 rounded-t-xl mb-1 animate-pulse"></div>
          
          {/* Bottle Neck */}
          <div className="mx-auto w-12 h-6 bg-gray-300 mb-1 animate-pulse"></div>
          
          {/* Main Bottle Body */}
          <div className="mx-auto w-full h-48 bg-gray-300 rounded-lg relative overflow-hidden animate-pulse">
            {/* Label Area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-gray-400/50 rounded border-2 border-gray-400/30"></div>
          </div>
          
          {/* Bottle Base */}
          <div className="mx-auto w-full h-3 bg-gray-300 rounded-b-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSkeleton;