"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function StoryTellingSecSkeleton() {
  return (
    <div className="w-full flex flex-col items-center text-center justify-center md:justify-between py-10 md:py-20 px-4 md:px-20">
      {/* Section Header */}
      <div className="relative text-center mb-12 md:mb-20">
        <div className="flex justify-center mb-6">
          <Skeleton
            width={300}
            height={40}
            baseColor="#1f2937"
            highlightColor="#374151"
            duration={1.5}
          />
        </div>
        <div className="max-w-xl mx-auto space-y-2">
          <Skeleton
            width="100%"
            height={20}
            baseColor="#1f2937"
            highlightColor="#374151"
            duration={1.5}
          />
          <Skeleton
            width="85%"
            height={20}
            baseColor="#1f2937"
            highlightColor="#374151"
            duration={1.5}
          />
        </div>
      </div>

      {/* Timeline Section */}
      <section className="relative flex flex-col gap-16 md:gap-32 pl-8 md:pl-20 w-full">
        {/* Animated Vertical Timeline Line */}
        <div className="absolute left-3 md:left-8 top-0 w-1 md:w-2 h-full bg-gradient-to-b from-teal-400 via-teal-500/80 to-transparent rounded-full animate-pulse"></div>

        {/* Timeline Items */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-3 md:gap-6 p-6 md:p-16 rounded-2xl md:rounded-3xl
              bg-gray-950/60 backdrop-blur-lg
              border border-white/10
              shadow-2xl shadow-black/70
              ring-1 ring-white/10
              overflow-hidden"
          >
            {/* Animated Dot Indicator */}
            <span
              className="absolute -left-5 md:-left-10 top-6 md:top-12 w-4 h-4 md:w-8 md:h-8 rounded-full bg-teal-400 shadow-[0_0_20px_5px] md:shadow-[0_0_30px_10px] shadow-teal-500/40 animate-pulse"
              style={{animationDelay: `${index * 0.3}s`}}
            />

            {/* Year Skeleton */}
            <Skeleton
              width={120}
              height={32}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />

            {/* Subtitle Skeleton */}
            <Skeleton
              width="70%"
              height={28}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />

            {/* Description Skeletons */}
            <div className="space-y-2">
              <Skeleton
                width="100%"
                height={18}
                baseColor="#1f2937"
                highlightColor="#374151"
                duration={1.5}
              />
              <Skeleton
                width="95%"
                height={18}
                baseColor="#1f2937"
                highlightColor="#374151"
                duration={1.5}
              />
              <Skeleton
                width="85%"
                height={18}
                baseColor="#1f2937"
                highlightColor="#374151"
                duration={1.5}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default StoryTellingSecSkeleton;
