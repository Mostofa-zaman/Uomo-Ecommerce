import Skeleton from "./Skeleton";

const SectionSkeleton = () => {
  return (
    <div className="p-4 space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Skeleton width="w-40" height="h-6" />
        <Skeleton width="w-24" height="h-8" rounded="rounded-full" />
      </div>

      {/* Hero / Banner */}
      <Skeleton width="w-full" height="h-48" rounded="rounded-xl" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-4 border border-secondbg rounded-xl space-y-3"
          >
            <Skeleton width="w-full" height="h-32" rounded="rounded-lg" />
            <Skeleton width="w-2/3" height="h-4" />
            <Skeleton width="w-1/2" height="h-3" />
          </div>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton height="h-10" circle />
            <div className="flex-1 space-y-2">
              <Skeleton width="w-2/5" height="h-3" />
              <Skeleton width="w-3/5" height="h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSkeleton;
