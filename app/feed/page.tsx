"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import MuxPlayer from "@mux/mux-player-react";
import MuxPlayerElement from "@mux/mux-player"

interface Project {
  id: number;
  title: string;
  desc: string;
  video: string;
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
  const playerRefs = useRef<(MuxPlayerElement | null)[]>([]);
  const [muted, setMuted] = useState<boolean>(true);

  // Scroll to active video
  const scrollToIndex = useCallback((index: number) => {
    const container = containerRef.current;
    if (container) {
      const section = container.querySelectorAll("section")[index] as HTMLElement;
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Detect scroll position and update active index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: number;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        const sections = container.querySelectorAll("section") as NodeListOf<HTMLElement>;
        const containerTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const centerPoint = containerTop + containerHeight / 2;

        sections.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (centerPoint >= sectionTop && centerPoint <= sectionBottom) {
            if (activeIndex !== index) {
              setActiveIndex(index);
              setMuted(true); // re-mute when switching videos
            }
          }
        });
      }, 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeIndex < projects.length - 1) {
        e.preventDefault();
        setActiveIndex((i) => i + 1);
      }
      if (e.key === "ArrowUp" && activeIndex > 0) {
        e.preventDefault();
        setActiveIndex((i) => i - 1);
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // Scroll to active video when changed
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  // Ensure only active video plays
  useEffect(() => {
    playerRefs.current.forEach((player, index) => {
      if (!player) return;
      if (index === activeIndex) {
        player.play().catch(() => {
          console.warn("Autoplay failed, waiting for user interaction.");
        });
      } else {
        player.pause();
      }
    });
  }, [activeIndex]);

  // Toggle mute/unmute for active video
  const handleToggleMute = () => {
    const player = playerRefs.current[activeIndex];
    if (player) {
      player.muted = !muted;
      setMuted(!muted);
    }
  };

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
              <MuxPlayer
                ref={(el) => {
                  playerRefs.current[index] = el;
                }}
                streamType="on-demand"
                playbackId={project.video}
                muted={muted}
                loop
                playsInline
                autoPlay
                accentColor="#14b8a6"
                className="w-full h-full object-cover"
              />

              {/* Tap to unmute button */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={handleToggleMute}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                  title={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    // muted icon
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.812L6.029 15H4a1 1 0 01-1-1V6a1 1 0 011-1h2.029l2.354-1.812a1 1 0 011.276-.188z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    // unmuted icon
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.812L6.029 15H4a1 1 0 01-1-1V6a1 1 0 011-1h2.029l2.354-1.812a1 1 0 011.276-.188zM15.95 6.464a1 1 0 00-1.414 1.414 3 3 0 010 4.244 1 1 0 001.414 1.414 5 5 0 000-7.072z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Project Info - Mobile Overlay */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <h2 className="text-lg sm:text-xl font-bold text-teal-400">
                  {project.title}
                </h2>
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

            {/* Project Info - Desktop */}
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
