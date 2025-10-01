"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function WorkSecSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Glowing Background */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 -translate-x-1/3 translate-y-1/3 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="w-full flex flex-col items-center text-center justify-center md:justify-between py-20 px-4 md:px-20">
        {/* Section Title */}
        <div className="mb-12 flex justify-center">
          <Skeleton
            width={250}
            height={48}
            baseColor="#1f2937"
            highlightColor="#374151"
            duration={1.5}
          />
        </div>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 transition-all duration-300"
            >
              {/* Video Thumbnail Skeleton */}
              <div className="relative aspect-video w-full">
                <Skeleton
                  width="100%"
                  height="100%"
                  baseColor="#1f2937"
                  highlightColor="#374151"
                  duration={1.5}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Skeleton
                    circle
                    width={64}
                    height={64}
                    baseColor="#059669"
                    highlightColor="#10b981"
                    duration={1.5}
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 space-y-3">
                {/* Title */}
                <Skeleton
                  width="70%"
                  height={24}
                  baseColor="#1f2937"
                  highlightColor="#374151"
                  duration={1.5}
                />

                {/* Description */}
                <div className="space-y-2">
                  <Skeleton
                    width="100%"
                    height={16}
                    baseColor="#1f2937"
                    highlightColor="#374151"
                    duration={1.5}
                  />
                  <Skeleton
                    width="85%"
                    height={16}
                    baseColor="#1f2937"
                    highlightColor="#374151"
                    duration={1.5}
                  />
                </div>

                {/* Tags */}
                <div className="flex gap-2 pt-2">
                  <Skeleton
                    width={100}
                    height={28}
                    baseColor="#1f2937"
                    highlightColor="#374151"
                    duration={1.5}
                    borderRadius={20}
                  />
                  <Skeleton
                    width={120}
                    height={28}
                    baseColor="#1f2937"
                    highlightColor="#374151"
                    duration={1.5}
                    borderRadius={20}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSecSkeleton;
