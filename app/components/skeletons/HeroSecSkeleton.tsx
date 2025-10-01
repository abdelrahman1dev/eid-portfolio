"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HeroSecSkeleton() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-teal-500 to-green-400 rounded-full blur-[160px] opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-[140px] opacity-20 translate-x-1/3 translate-y-1/3 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-2 flex justify-center">
            <Skeleton
              width={200}
              height={28}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
          </div>

          {/* Name */}
          <div className="mb-4 flex justify-center">
            <Skeleton
              width={350}
              height={56}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
          </div>

          {/* Title */}
          <div className="mb-6 flex justify-center">
            <Skeleton
              width={450}
              height={40}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
          </div>

          {/* Description */}
          <div className="mb-8 max-w-2xl mx-auto space-y-2">
            <Skeleton
              width="100%"
              height={20}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
            <Skeleton
              width="90%"
              height={20}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton
                key={i}
                circle
                width={40}
                height={40}
                baseColor="#1f2937"
                highlightColor="#374151"
                duration={1.5}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Skeleton
              width={180}
              height={48}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
              borderRadius={8}
            />
          </div>
        </div>
      </section>

      {/* Scrolling Keywords Section */}
      <section className="bg-black w-full overflow-hidden py-6">
        <div className="flex gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              width={200}
              height={60}
              baseColor="#1f2937"
              highlightColor="#374151"
              duration={1.5}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSecSkeleton;
