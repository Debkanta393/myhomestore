import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const text = "Australia";
  const speed = 100;
  const dilay = 1000;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, dilay);
    }
    return () => clearTimeout(timeout);
  }, [displayText, speed, dilay, index]);

  const headerImage = [
    "./images/header1.png",
    "./images/header2.jpg",
    "./images/header3.jpg",
  ];

  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headerImage.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section
        className="min-h-[800px] rounded-[50px]  w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white overflow-hidden bg-[#998e8a]"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHeader}
            src={headerImage[currentHeader]}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Background Animation Circles */}
        <div className="absolute inset-0 overflow-hidden top-0 left-0 h-full w-full bg-black/30 rounded-[50px]">
        </div>

        <div className="relative z-10 max-w-7xl px-3 md:px-5">
          <motion.p
            className="text-xl md:text-2xl mb-10 opacity-95"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium Tiles & Stone Solutions in Australia
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Tiles & Surface Solutions <br /> Across
            <span className={`inline-block ml-4 text-[#D6CEC6]`}>
              {displayText}
              <span className="ml-1 animate-pulse">|</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-xl mb-10 opacity-95"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            High-quality tiles for residential and commercial spaces. Stylish,
            durable, and built for Australian conditions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Contact Us
              </span>

              <span
                className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </button>

            <button className="border-2 border-white text-white py-2 px-12 text-xl font-medium cursor-pointer">
              Get a quote
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>
      <motion.div className="rounded-t-[50px] py-20  relative -top-[120px] md:-top-[200px] -z-10 bg-[#998e8a] overflow-hidden flex justify-center items-center">
        <motion.img
          src="./images/abstract_image1.png"
          height={350}
          width={350}
          className="absolute -right-10 -bottom-10 opacity-35 rotate-6"
        />
        <motion.div className="flex md:flex-row flex-col gap-10 justify-between items-center w-10/12 mt-32 md:mt-40">
          <motion.h2 className="text-4xl text-white font-medium leading-tight">
            Timeless Tiles for Modern Australian Spaces
          </motion.h2>
          <motion.button className="border-2 border-white text-white text-xl py-3 px-10 cursor-pointer">
            Request a quote
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
