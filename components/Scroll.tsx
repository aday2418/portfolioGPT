'use client'

import { useState, useEffect } from "react";

export default function Scroll() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      // Calculate the opacity based on the scroll position
      const maxScroll = window.innerHeight / 2;
      const currentScroll = window.scrollY;
      const opacity = 1 - currentScroll / maxScroll;
      
      // Update the scrollOpacity state
      setScrollOpacity(opacity);
    }

    // Add event listener to the scroll event on the window object
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
  }

  return (
    <div className="absolute w-full flex justify-center bottom-[20px]">
      <h1
        onClick={handleClick} className="w-fit text-lg text-white font-semibold tracking-wide smoothe cursor-pointer"
        style={{ opacity: scrollOpacity }}
      >
        ↓ Scroll For More
      </h1>
    </div>
  );
}
