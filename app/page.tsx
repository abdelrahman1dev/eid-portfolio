import AboutSec from "./about/page";
import HeroSec from "./pagesComp/HeroSec";
import StoryTellingSec from "./pagesComp/StoryTellingSec";
import WorkSec from "./pagesComp/WorkSec";

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

