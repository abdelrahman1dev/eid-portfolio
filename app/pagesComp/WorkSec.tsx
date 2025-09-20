"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

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

function WorkSec() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="-z-10 relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className='w-full flex flex-col  items-center  text-center justify-center md:justify-between py-20 px-4 md:px-20'>
      <h1
          className='text-4xl sm:text-5xl font-bold mb-12   '
        >
          my work gallery
        </h1>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-green-400/50 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Video Container */}
              <div className="relative aspect-video overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  muted
                  loop
                  autoPlay
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button

                        className="flex flex-col items-center gap-3 text-white"
                      >
                        <div className="p-2 top-2 right-2 absolute z-10  rounded-full bg-green-400/20 border border-green-400/50 backdrop-blur-sm">
                          <Play className="w-5 h-5 text-green-400" fill="currentColor" />
                        </div>
                      
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-gray-800">
                      <div className="relative aspect-video">
                        <video
                          src={project.video}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <DialogHeader>
                          <DialogTitle className="text-white text-xl font-semibold">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-gray-300">
                            {project.desc}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs bg-green-400/20 text-green-400 rounded-full border border-green-400/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Preview Icon */}
                <div className={`absolute top-4 right-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="p-2 rounded-full bg-black/50 backdrop-blur-sm">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content Overlay - Only visible on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-green-400/20 text-green-400 rounded-full border border-green-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSec
