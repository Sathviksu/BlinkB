"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FlipImage2 = () => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(prev => !prev);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toggleFlip();
    }, 6000); // Change the interval time as needed (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex justify-center items-center h-screen pt-[150px] bg-[#35A29F]">
      <motion.div
        className="w-[500px] h-[600px] cursor-pointer z-0" // Ensure image container stays below navbar
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={toggleFlip}
        style={{
          transformStyle: "preserve-3d", // Ensures smooth 3D effect
        }}
      >
        {/* Front Image */}
        <motion.div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }} // Hides back when front is visible
        >
          <Image
            src="/image4.png" // Replace with actual image path
            alt="Front"
            width={500}
            height={500}
            className="rounded-lg floating"
          />
        </motion.div>

        {/* Back Image (Flipped) */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <Image
            src="/image3.png" // Replace with actual image path
            alt="Back"
            width={500}
            height={500}
            className="rounded-lg floating"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FlipImage2;
