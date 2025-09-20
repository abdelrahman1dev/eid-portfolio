"use client";
import React from 'react'
import { motion } from "framer-motion"


const experiences = [
  {
    year: "2009–2023",
    subtitle: "Motion Graphics Artist & Supervisor @ elsalam asc",
    desc: "Exclusive operator of exhibitions & museums. Led motion graphics production, supervised creative teams, and delivered large-scale visual projects across Egypt and Saudi Arabia.",
  },
  {
    year: "2012–2023",
    subtitle: "Motion Graphics Artist & Supervisor @ Octopus Animation Studio",
    desc: "Created and supervised high-quality motion graphics for advertising campaigns, branding projects, and broadcast media in a part-time capacity.",
  },
  {
    year: "2005–2023",
    subtitle: "Freelance Motion Graphics Artist",
    desc: "Worked independently with clients worldwide, delivering 2D animation, post-production, and motion graphics across diverse industries.",
  },
];

function StoryComp() {
  return (
    <section className="relative flex flex-col gap-32 pl-20">

      {/* Vertical timeline line */}
      <motion.div
        className="absolute left-8 top-0 w-2 bg-gradient-to-b from-teal-400 via-teal-500/80 to-transparent rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col gap-6 p-16 rounded-3xl 
            bg-gray-950/60 backdrop-blur-lg
            border border-white/10
            shadow-2xl shadow-black/70
            ring-1 ring-white/10
            overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
        >
          {/* Dot indicator */}
          <span className="absolute -left-10 top-12 w-8 h-8 rounded-full bg-teal-400 shadow-[0_0_30px_10px] shadow-teal-500/40" />

          {/* Year */}
          <h3 className="text-4xl font-mono font-bold text-teal-400">
            {exp.year}
          </h3>

          {/* Subtitle */}
          <h4 className="text-2xl w-lg font-semibold text-gray-100">
            {exp.subtitle}
          </h4>

          {/* Description */}
          <p className="text-md w-lg text-gray-400 leading-relaxed">
            {exp.desc}
          </p>
        </motion.div>
      ))}
    </section>
  );
}






function StoryTellingSec() {


  return (
    <div className='w-full flex flex-col items-center md:items-start justify-center md:justify-between  py-20 px-20'>
      <div>
        <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
            Storytelling through Motion
        </h1>
        <p className='text-lg text-gray-400 max-w-xl'>
            I believe in the power of motion to tell compelling stories. With over a decade of experience, I specialize in creating engaging motion graphics and infographics that captivate audiences and convey complex information with clarity and creativity.
        </p>
        </div>
        <div className='text-center flex flex-col w-full items-center mt-20 justify-center'>
            <h2 className='text-2xl font-semibold mt-8 mb-4'>
                My Journey
                </h2>

            <StoryComp />


      </div>
    </div>
  )
}

export default StoryTellingSec
