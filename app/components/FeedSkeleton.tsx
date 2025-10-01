"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FeedSkeleton() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center px-6 bg-black">
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl bg-gray-950/20 backdrop-blur-md border border-white/10">
        {/* Video skeleton */}
        <div className="relative w-full h-[70vh] bg-gray-900">
          <Skeleton
            width="100%"
            height="100%"
            baseColor="#1f2937"
            highlightColor="#374151"
            duration={1.5}
          />

          {/* Mute button skeleton */}
          <div className="absolute top-4 right-4">
            <Skeleton
              circle
              width={40}
              height={40}
              baseColor="#000000"
              highlightColor="#1f2937"
            />
          </div>

          {/* Mobile overlay info skeleton */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            <Skeleton
              width="60%"
              height={24}
              baseColor="#1f2937"
              highlightColor="#374151"
              className="mb-2"
            />
            <Skeleton
              width="90%"
              height={18}
              baseColor="#1f2937"
              highlightColor="#374151"
              className="mb-3"
            />
            <div className="flex gap-2">
              <Skeleton
                width={100}
                height={28}
                baseColor="#1f2937"
                highlightColor="#374151"
                borderRadius={20}
              />
              <Skeleton
                width={120}
                height={28}
                baseColor="#1f2937"
                highlightColor="#374151"
                borderRadius={20}
              />
            </div>
          </div>
        </div>

        {/* Desktop info skeleton */}
        <div className="hidden lg:block p-6 space-y-3 bg-black/80 backdrop-blur-md">
          <Skeleton
            width="50%"
            height={28}
            baseColor="#1f2937"
            highlightColor="#374151"
          />
          <Skeleton
            width="85%"
            height={20}
            baseColor="#1f2937"
            highlightColor="#374151"
          />
          <div className="flex gap-2 pt-2">
            <Skeleton
              width={120}
              height={32}
              baseColor="#1f2937"
              highlightColor="#374151"
              borderRadius={20}
            />
            <Skeleton
              width={140}
              height={32}
              baseColor="#1f2937"
              highlightColor="#374151"
              borderRadius={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedSkeleton;
