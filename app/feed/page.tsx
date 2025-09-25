"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Hls from "hls.js";
import { Underline, Volume1, VolumeOff } from "lucide-react";

interface Project {
  id: number;
  title: string;
  desc: string;
  video: string; // playbackId
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Brand Motion Reel",
    desc: "A showcase of motion graphics for international clients.",
    video: "HRRh02uWVd7B7jBlLTJMV4xrkyxAxT1slJfxjXeJz5w8",
    tags: ["Motion Design", "Branding"],
  },
  {
    id: 2,
    title: "Infographic Explainer",
    desc: "Animated infographic simplifying complex data.",
    video: "JyFBc1oOIu5vaFM0201icgzwyLCStdkNbiTWRa5Cc00d38",
    tags: ["Infographic", "Animation"],
  },
];

function FeedPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [muted, setMuted] = useState<boolean>(false);

  // Attach HLS to video refs
  useEffect(() => {
    playerRefs.current.forEach((video, index) => {
      if (!video) return;

      const playbackId = projects[index].video;
      const hlsUrl = `https://stream.mux.com/${playbackId}.m3u8`;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari
        video.src = hlsUrl;
      }
    });
  }, []);

  // Scroll detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: number;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        const sections = container.querySelectorAll("section") as NodeListOf<HTMLElement>;
        const center = container.scrollTop + container.clientHeight / 2;

        sections.forEach((section, index) => {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (center >= top && center <= bottom) {
            if (activeIndex !== index) {
              setActiveIndex(index);
              setMuted(true);
            }
          }
        });
      }, 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  // Autoplay active video only
  useEffect(() => {
    playerRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  return (
    <main
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black text-white"
    >
      {projects.map((project, index) => (
        <section
          key={project.id}
          className="snap-start h-screen flex flex-col justify-center items-center px-6"
        >
          <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-[70vh] bg-gray-900">
              <video
                ref={el => { playerRefs.current[index] = el; }}
                autoPlay
                muted={muted}
                loop
                playsInline
                className="w-full h-full object-fit"
              />
              <button
                onClick={() => setMuted(!muted)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                {!muted ? (
                  <Volume1 className="h-6 w-6" />
                ) : (
                  <VolumeOff className="h-6 w-6" />
                )}
              </button>


              {/* Overlay Info (Mobile) */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h2 className="text-lg sm:text-xl font-bold text-teal-400">{project.title}</h2>
                <p className="text-sm sm:text-base text-gray-200">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-teal-500/30 text-teal-300 border border-teal-400/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Info */}
            <div className="hidden lg:block p-6 space-y-3 bg-black/80 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-teal-400">{project.title}</h2>
              <p className="text-gray-300">{project.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}

export default FeedPage;
