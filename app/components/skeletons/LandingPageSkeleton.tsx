"use client";

import HeroSecSkeleton from "./HeroSecSkeleton";
import StoryTellingSecSkeleton from "./StoryTellingSecSkeleton";
import WorkSecSkeleton from "./WorkSecSkeleton";
import CardSkeleton from "../CardSkeleton";

function LandingPageSkeleton() {
  return (
    <div className="bg-black">
      <HeroSecSkeleton />

      {/* About Section Skeleton */}
      <section className="w-full flex items-center justify-center py-20">
        <CardSkeleton />
      </section>

      <StoryTellingSecSkeleton />
      <WorkSecSkeleton />
    </div>
  );
}

export default LandingPageSkeleton;
