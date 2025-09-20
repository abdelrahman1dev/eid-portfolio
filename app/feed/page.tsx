"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

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
    video: "/videos/project1.mp4",
    tags: ["Motion Design", "Branding"],
  },
  {
    id: 2,
    title: "Infographic Explainer",
    desc: "Animated infographic simplifying complex data.",
    video: "/videos/project2.mp4",
    tags: ["Infographic", "Animation"],
  },
  {
    id: 3,
    title: "Product Launch Video",
    desc: "High-energy video for a product campaign.",
    video: "/videos/project3.mp4",
    tags: ["Product Video", "3D"],
  },
  {
    id: 4,
    title: "Brand Motion Reel",
    desc: "A showcase of motion graphics for international clients.",
    video: "/videos/project1.mp4",
    tags: ["Motion Design", "Branding"],
  },
  {
    id: 5,
    title: "Infographic Explainer",
    desc: "Animated infographic simplifying complex data.",
    video: "/videos/project2.mp4",
    tags: ["Infographic", "Animation"],
  },
  {
    id: 6,
    title: "Product Launch Video",
    desc: "High-energy video for a product campaign.",
    video: "/videos/project3.mp4",
    tags: ["Product Video", "3D"],
  },
];

function FeedPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [autoplayBlocked, setAutoplayBlocked] = useState<boolean>(false);
  const [videosLoaded, setVideosLoaded] = useState<Set<number>>(new Set());
  
  console.log("Active Index:", activeIndex);

  // Handle video loaded state
  const handleVideoLoad = useCallback((index: number) => {
    setVideosLoaded(prev => new Set([...prev, index]));
  }, []);

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

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      // Debounce scroll events to prevent excessive updates
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
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

  // Keyboard navigation - improved
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Prevent default scroll behavior for arrow keys
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
      }
      
      if (e.key === "ArrowDown" && activeIndex < projects.length - 1) {
        setActiveIndex((i) => i + 1);
      }
      if (e.key === "ArrowUp" && activeIndex > 0) {
        setActiveIndex((i) => i - 1);
      }
    };
    
    // Add event listener to document for better capture
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // Scroll when activeIndex changes programmatically
  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex, scrollToIndex]);

  // Enhanced autoplay control - fixed glitches
  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement, index: number): Promise<boolean> => {
      if (!video || !videosLoaded.has(index)) return false;
      
      try {
        // Reset video state first
        video.currentTime = 0;
        video.muted = true;
        
        // Ensure video is ready
        if (video.readyState < 3) {
          await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Video load timeout')), 5000);
            const onCanPlay = () => {
              video.removeEventListener('canplaythrough', onCanPlay);
              clearTimeout(timeout);
              resolve();
            };
            video.addEventListener('canplaythrough', onCanPlay);
          });
        }
        
        const playPromise = video.play();
        if (playPromise) {
          await playPromise;
          console.debug(`Successfully playing video ${index}`);
          return true;
        }
      } catch (error) {
        console.warn(`Autoplay failed for video ${index}:`, error);
        setAutoplayBlocked(true);
        return false;
      }
      return false;
    };

    const pauseVideo = (video: HTMLVideoElement | null) => {
      if (!video) return;
      try {
        if (!video.paused) {
          video.pause();
        }
        video.currentTime = 0;
      } catch (error) {
        console.warn("Error pausing video:", error);
      }
    };

    // Use a slight delay to prevent glitches during transitions
    const timeoutId = setTimeout(() => {
      videoRefs.current.forEach(async (video, index) => {
        if (!video) return;
        
        if (index === activeIndex) {
          const success = await playVideo(video, index);
          if (!success && videosLoaded.has(index)) {
            setAutoplayBlocked(true);
          }
        } else {
          pauseVideo(video);
        }
      });
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [activeIndex, videosLoaded]);

  // Touch/swipe navigation
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && activeIndex < projects.length - 1) {
      setActiveIndex(i => i + 1);
    }
    if (isDownSwipe && activeIndex > 0) {
      setActiveIndex(i => i - 1);
    }
  };

  const handleUserPlayClick = () => {
    const video = videoRefs.current[activeIndex];
    if (video) {
      video.muted = false;
      video.play().then(() => {
        setAutoplayBlocked(false);
      }).catch((error) => {
        console.warn("Manual play failed:", error);
      });
    }
  };

  return (
    <main
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black text-white"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {projects.map((project, index) => (
        <section
          key={project.id}
          className="snap-start h-screen flex flex-col justify-center items-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="relative w-full h-[70vh] bg-gray-900">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={project.video}
                className="w-full lg:h-full object-cover"
                playsInline
                muted
                loop
                preload="metadata"
                onLoadedData={() => handleVideoLoad(index)}
                onError={(e) => console.error(`Video ${index} error:`, e)}
                crossOrigin="anonymous"
              />

              {/* Autoplay blocked overlay */}
              {autoplayBlocked && index === activeIndex && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <button
                    className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    onClick={handleUserPlayClick}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Enable Sound & Play
                  </button>
                </div>
              )}

              {/* Loading indicator */}
              {!videosLoaded.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400"></div>
                </div>
              )}

              {/* Project Info - Mobile Overlay */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="space-y-2">
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
            </div>

            {/* Project Info - Desktop Below Video */}
            <div className="hidden lg:block p-6 space-y-3 bg-black/80 backdrop-blur-md">
              <h2 className="text-2xl font-bold text-teal-400">
                {project.title}
              </h2>
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
          </motion.div>
        </section>
      ))}
    </main>
  );
}

export default FeedPage;