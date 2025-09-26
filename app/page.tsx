"use client";
import AboutSec from "./about/page";
import HeroSec from "./pagesComp/HeroSec";
import StoryTellingSec from "./pagesComp/StoryTellingSec";
import dynamic from "next/dynamic";

const WorkSec = dynamic(() => import("./pagesComp/WorkSec"), { ssr: false });


export default function Home() {
  return (
    <div className="">
      <HeroSec />
      <AboutSec />
      <StoryTellingSec />
      <WorkSec />
    </div>
  );
}

