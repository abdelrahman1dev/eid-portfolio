"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  desc: string;
  video: string; // mux playbackId
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

function WorkSec() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

      <div className="w-full flex flex-col items-center text-center justify-center md:justify-between py-20 px-4 md:px-20">
        {/* Section Title */}
        <motion.h1
          className="text-4xl relative sm:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          my work gallery
          <div className="absolute top-2 right-0 w-40 -z-10 rounded-full h-10 bg-teal-400 pointer-events-none"></div>
        </motion.h1>

        {/* Project Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl hover:scale-105 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-green-400/50 transition-all duration-300 group"
            >
              <Dialog
                onOpenChange={(open) =>
                  setActiveVideo(open ? project.video : null)
                }
              >
                <DialogTrigger asChild>
                  <div className="relative aspect-video cursor-pointer w-full group">
                    {/* Optimized Thumbnail */}
                    <Image
                      src={`https://image.mux.com/${project.video}/thumbnail.jpg`}
                      alt={project.title}
                      width={800}
                      height={450}
                      priority={index === 0} // first one preloaded
                      className="w-full h-full object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      <div
                        aria-label={`Play ${project.title}`}
                        className="p-4 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors shadow-lg backdrop-blur-sm"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="max-w-4xl bg-gray-900/95 backdrop-blur-md border border-gray-700">
                  <DialogHeader>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <DialogTitle className="text-2xl font-bold text-white">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {project.desc}
                      </DialogDescription>
                    </motion.div>
                  </DialogHeader>

                  {/* Load player only when dialog is open */}
                  {activeVideo === project.video && (
                    <MuxPlayer
                      streamType="on-demand"
                      playbackId={project.video}
                      className="w-full h-64 rounded-lg"
                      autoPlay={false}
                    />
                  )}

                  {/* Tags */}
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400 border border-green-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSec;
