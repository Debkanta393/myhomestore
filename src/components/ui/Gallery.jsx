import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import LazyLoader from "./LazyLoader";

const innerCategory = [
  "./images/category/indoor1.jpg",
  "./images/category/indoor2.avif",
  "./images/category/indoor3.webp",
  "./images/category/indoor4.jpg",
  "./images/category/indoor5.jpg",
];

const outerCategory = [
  "./images/category/outdoor1.jpg",
  "./images/category/outdoor2.jpg",
  "./images/category/outdoor3.jpg",
  "./images/category/outdoor4.jpg",
  "./images/category/outdoor5.webp",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Category() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [categoryType, setCategoryType] = useState("inner");

  const images =
    categoryType === "inner" ? innerCategory : outerCategory;
  const heroImage = images[0];
  const gridImages = images.slice(1);

  return (
    <section className="relative w-full mt-16 sm:mt-24 lg:mt-32 py-16 sm:py-20 md:py-24 overflow-hidden px-0">
      {/* Background */}
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
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs — smaller on mobile */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-[#D6CEC6] rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-56 sm:w-80 md:w-[500px] h-56 sm:h-80 md:h-[500px] bg-[#B8B0A7] rounded-full blur-[100px] sm:blur-[140px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-[#f5efed] font-bold mb-3 tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Image Gallery
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-transparent via-[#f5efed] to-transparent mx-auto rounded-full"
          />
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-center mb-8 sm:mb-10 md:mb-12"
        >
          {["inner", "outer"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setCategoryType(type)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative py-3 sm:py-4 px-8 sm:px-10 md:px-14 rounded-2xl text-sm sm:text-base md:text-lg font-semibold tracking-wide overflow-hidden transition-all duration-500 ${
                categoryType === type
                  ? "bg-[#f5efed] text-[#8A6A5A] shadow-[0_8px_30px_rgba(245,239,237,0.3)]"
                  : "bg-white/5 text-[#f5efed] backdrop-blur-sm border border-[#f5efed]/20 hover:bg-white/10"
              }`}
            >
              {/* Active background */}
              {categoryType === type && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#f5efed] rounded-2xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Shimmer on inactive */}
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

              {categoryType === type && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[3px] bg-[#8A6A5A] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Gallery Layout ── */}
        <motion.div
          key={categoryType}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── MOBILE: stacked single column ── */}
          <div className="flex flex-col gap-4 md:hidden">
            {/* Hero image */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-2xl h-[260px] sm:h-[340px]"
            >
              <img
                key={`hero-mobile-${categoryType}`}
                src={heroImage}
                alt="Featured tile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8A6A5A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Grid of remaining images — 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gridImages.map((image, j) => (
                <motion.div
                  key={`${categoryType}-mob-${j}`}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl shadow-lg h-[150px] sm:h-[200px]"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${j + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/0 to-[#998e8a]/0 group-hover:from-[#8A6A5A]/40 group-hover:to-[#998e8a]/40 transition-all duration-500" />
                  <div className="absolute inset-0 border-2 border-[#f5efed]/0 group-hover:border-[#f5efed]/30 rounded-xl transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP: bento layout ── */}
          <div className="hidden md:grid md:grid-cols-12 gap-4 lg:gap-5">
            {/* Hero — left side */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-5 group relative overflow-hidden rounded-3xl shadow-2xl h-[480px] lg:h-[580px] xl:h-[650px]"
            >
              <motion.img
                key={`hero-desktop-${categoryType}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                src={heroImage}
                alt="Featured tile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8A6A5A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-10 h-10 lg:w-12 lg:h-12 border-t-2 border-l-2 border-[#f5efed] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-10 h-10 lg:w-12 lg:h-12 border-b-2 border-r-2 border-[#f5efed] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.div>

            {/* Right grid */}
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
              {gridImages.map((image, j) => (
                <motion.div
                  key={`${categoryType}-desk-${j}`}
                  variants={itemVariants}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                    j === 0 || j === 3 ? "md:col-span-2" : ""
                  } ${
                    j === 0 || j === 3
                      ? "h-[240px] lg:h-[290px] xl:h-[320px]"
                      : "h-[235px] lg:h-[285px] xl:h-[315px]"
                  }`}
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

                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#f5efed] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl scale-75 group-hover:scale-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 lg:h-6 lg:w-6 text-[#8A6A5A]"
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
                  </div>

                  {/* Frame */}
                  <div className="absolute inset-0 border-2 border-[#f5efed]/0 group-hover:border-[#f5efed]/30 rounded-2xl transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
