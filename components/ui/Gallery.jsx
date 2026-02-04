import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Category() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const innerCategory = [
    "./images/category/indoor1.jpg",
    "./images/category/indoor2.avif",
    "./images/category/indoor3.webp",
    "./images/category/indoor4.jpg",
    "./images/category/indoor5.jpg",
    // "./images/category/indoor6.jpg",
    // "./images/category/indoor7.jpeg",
  ];

  const outerCategory = [
    "./images/category/outdoor1.jpg",
    "./images/category/outdoor2.jpg",
    "./images/category/outdoor3.jpg",
    "./images/category/outdoor4.jpg",
    "./images/category/outdoor5.webp",
    // "./images/category/outdoor6.webp",
    // "./images/category/outdoor7.jpg",
  ];

  const [categoryType, setCategoryType] = useState("inner");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative w-full mt-32 py-24 overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(./images/bg2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/85 via-[#998e8a]/80 to-[#8A6A5A]/90 -z-10" />
      
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#D6CEC6] rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#B8B0A7] rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
         >
          {/* Badge */}
          {/* <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 text-sm font-medium tracking-wider text-[#f5efed] bg-white/10 backdrop-blur-md border border-[#f5efed]/20 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5efed] animate-pulse" />
            SHOWCASE
          </motion.span> */}

          <h2 className="text-4xl md:text-6xl lg:text-7xl text-[#f5efed] font-bold mb-2 tracking-tight">
            Image Gallery
          </h2>

          {/* Decorative underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-[#f5efed] to-transparent mx-auto rounded-full"
          />
        </motion.div>

        {/* Enhanced Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 md:gap-6 justify-center mb-12"
        >
          {["inner", "outer"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setCategoryType(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`relative py-4 px-10 md:px-16 rounded-2xl text-base md:text-lg font-semibold tracking-wide overflow-hidden transition-all duration-500 ${
                categoryType === type
                  ? "bg-[#f5efed] text-[#8A6A5A] shadow-[0_8px_30px_rgba(245,239,237,0.3)]"
                  : "bg-white/5 text-[#f5efed] backdrop-blur-sm border border-[#f5efed]/20 hover:bg-white/10"
              }`}
            >
              {/* Active indicator */}
              {categoryType === type && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#f5efed] rounded-2xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Shimmer effect on inactive */}
              {categoryType !== type && (
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              )}

              <span className="relative z-10">
                {type === "inner" ? "Indoor" : "Outdoor"}
              </span>

              {/* Bottom accent line */}
              {categoryType === type && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#8A6A5A] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Layout - Bento Style */}
        <motion.div
          key={categoryType}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
        >
          {/* Hero Image - Takes left side */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 group relative overflow-hidden rounded-3xl shadow-2xl h-[350px] md:h-[650px]"
          >
            <motion.img
              key={`hero-${categoryType}`}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              src={categoryType === "inner" ? innerCategory[0] : outerCategory[0]}
              alt="Featured tile"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#8A6A5A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#f5efed] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#f5efed] opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>

          {/* Grid of smaller images - Right side */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {(categoryType === "inner" ? innerCategory : outerCategory)
              .filter((item, i) => i !== 0)
              .map((image, j) => (
                <motion.div
                  key={`${categoryType}-${j}`}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                    j === 0 || j === 3 ? "md:col-span-2" : ""
                  } ${j === 0 || j === 3 ? "h-[250px] md:h-[320px]" : "h-[250px] md:h-[315px]"}`}
                >
                  <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: j * 0.1 }}
                    src={image}
                    alt={`Gallery image ${j + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/0 to-[#998e8a]/0 group-hover:from-[#8A6A5A]/40 group-hover:to-[#998e8a]/40 transition-all duration-500" />
                  
                  {/* Plus icon on hover */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f5efed] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#8A6A5A]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Frame effect */}
                  <div className="absolute inset-0 border-2 border-[#f5efed]/0 group-hover:border-[#f5efed]/30 rounded-2xl transition-all duration-500" />
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
