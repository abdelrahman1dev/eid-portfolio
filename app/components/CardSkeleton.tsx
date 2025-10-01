"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <div
      className="w-[80%] relative p-6 rounded-2xl flex lg:flex-row flex-col gap-4
        bg-gray-950/20 backdrop-blur-md
        border border-white/10
        shadow-2xl shadow-black/60
        ring-1 ring-white/2
        overflow-hidden"
    >
      {/* Avatar */}
      <div className="flex items-center">
        <Skeleton
          circle
          width={180}
          height={180}
          baseColor="#1f2937"       // dark gray
          highlightColor="#374151"  // lighter gray shimmer
          duration={1.5}            // shimmer speed
        />
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-2 px-4 py-8">
          <Skeleton width={180} height={28} baseColor="#1f2937" highlightColor="#374151" />
          <Skeleton width={220} height={20} baseColor="#1f2937" highlightColor="#374151" />
          <Skeleton width={250} height={20} baseColor="#1f2937" highlightColor="#374151" />
        </div>

        {/* Stats cards */}
        <div className="w-full flex items-center gap-2 lg:flex-row flex-col">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full px-4 py-2 rounded-2xl flex flex-col gap-2
                bg-gray-950/20 backdrop-blur-md
                border border-white/10
                shadow-2xl shadow-black/60
                ring-1 ring-white/2
                overflow-hidden"
            >
              <Skeleton width={100} height={18} baseColor="#1f2937" highlightColor="#374151" />
              <Skeleton width={60} height={22} baseColor="#1f2937" highlightColor="#374151" />
              <Skeleton width={140} height={16} baseColor="#1f2937" highlightColor="#374151" />
            </div>
          ))}
        </div>
      </div>

      {/* Mail button */}
      <button
        disabled
        className="absolute py-1 px-2 rounded right-5 top-5
          bg-gray-950/20 backdrop-blur-md
          border border-white/10
          shadow-2xl shadow-black/60
          ring-1 ring-white/2
          overflow-hidden"
      >
        <Skeleton circle width={24} height={24} baseColor="#1f2937" highlightColor="#374151" />
      </button>
    </div>
  );
}

export default CardSkeleton;
