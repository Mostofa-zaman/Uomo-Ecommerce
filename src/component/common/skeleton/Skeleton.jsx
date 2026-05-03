import { memo } from "react";

const Skeleton = memo(
  ({
    width = "w-full",
    height = "h-4",
    rounded = "rounded-md",
    circle = false,
    className = "",
  }) => {
    return (
      <span
        aria-hidden="true"
        className={`
        relative block overflow-hidden shrink-0
        bg-secondbg

        ${circle ? "rounded-full" : rounded}
        ${circle ? height : width}
        ${height}

        before:absolute before:inset-0
        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/10
        before:to-transparent
        before:animate-shimmer

        ${className}
      `}
      />
    );
  },
);

export default Skeleton;
