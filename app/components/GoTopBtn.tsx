"use client";
import { ChevronUp } from 'lucide-react'
import React, { useState , useEffect } from 'react'

function GoTopBtn() {

    const handleClick = () => {
             window.scrollTo({top: 0, behavior: 'smooth'})
    }
      const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
     
  return (
    <div>
      <button onClick={
        handleClick
      } className={`border-2 border-teal-400 cursor-pointer translate-x-1 p-2 rounded-full fixed lg:bottom-10 bottom-20 left-5 lg:left-10 hover:bg-teal-400 transition-transform 
      ${hidden ? 'translate-x-[-300%]' : ''}
      `}>
        <ChevronUp  className='w-6'/>
      </button>
    </div>
  )
}

export default GoTopBtn
