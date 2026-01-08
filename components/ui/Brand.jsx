import React from "react";
import { motion } from "framer-motion";

export default function Brand() {
  const brand = [
    "./images/brand/1.png",
    "./images/brand/2.png",
    "./images/brand/3.webp",
    "./images/brand/4.png",
    "./images/brand/5.svg",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative w-full px-6 md:px-10 py-24 md:py-32 mt-20 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F6] via-[#f5efed] to-[#D6CEC6] -z-10" />

      {/* Organic Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B8B0A7] rounded-full blur-[130px] opacity-20 -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8A6A5A] rounded-full blur-[140px] opacity-15 translate-y-1/3 -translate-x-1/4 -z-10" />

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-[#8A6A5A] bg-white/60 backdrop-blur-sm border border-[#D6CEC6] rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A6A5A] animate-pulse" />
              OUR COMMITMENT
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Built on Trust.
              <br />
              <span >Driven by Quality.</span>
            </h2>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[#8A6A5A] to-transparent rounded-full mb-8"
            />

            <p className="text-lg md:text-xl leading-relaxed font-light">
              We believe great brands are built with integrity, craftsmanship,
              and consistency. Every project we deliver reflects our commitment
              to quality, reliability, and long-lasting value.
            </p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { number: "15+", label: "Years" },
                { number: "500+", label: "Projects" },
                { number: "98%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#8A6A5A] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#998e8a] font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* LOGO GRID SECTION */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/5 to-[#B8B0A7]/10 rounded-3xl blur-3xl" />

            <div className="relative grid grid-cols-3 gap-5 md:gap-6 items-center">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-5 md:gap-6">
                {brand.slice(0, 2).map((logo, index) => (
                  <motion.div
                    key={index}
                    variants={logoVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative aspect-square bg-white/80 backdrop-blur-sm p-6 md:p-7 rounded-2xl shadow-[0_8px_30px_rgba(138,106,90,0.08)] hover:shadow-[0_20px_50px_rgba(138,106,90,0.15)] transition-all duration-500 border border-[#D6CEC6]/30 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D6CEC6]/0 to-[#B8B0A7]/0 group-hover:from-[#D6CEC6]/20 group-hover:to-[#B8B0A7]/10 transition-all duration-500" />

                    <img
                      src={logo}
                      alt={`Brand partner ${index + 1}`}
                      className="relative z-10 object-contain h-full w-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Corner Accent */}
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#8A6A5A]/0 group-hover:border-[#8A6A5A]/30 rounded-tr-xl transition-all duration-500" />
                  </motion.div>
                ))}
              </div>

              {/* CENTER COLUMN (Featured) */}
              <motion.div
                variants={logoVariants}
                whileHover={{
                  y: -10,
                  scale: 1.06,
                  transition: { duration: 0.3 },
                }}
                className="group relative aspect-square bg-gradient-to-br from-[#8A6A5A] to-[#998e8a] p-8 md:p-9 rounded-3xl shadow-[0_12px_40px_rgba(138,106,90,0.2)] hover:shadow-[0_25px_60px_rgba(138,106,90,0.3)] transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/20"
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  />
                </div>

                <img
                  src={brand[2]}
                  alt="Featured brand partner"
                  className="relative z-10 object-contain h-full w-full brightness-0 invert"
                />

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              </motion.div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-5 md:gap-6">
                {brand.slice(3, 5).map((logo, index) => (
                  <motion.div
                    key={index}
                    variants={logoVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative aspect-square bg-white/80 backdrop-blur-sm p-6 md:p-7 rounded-2xl shadow-[0_8px_30px_rgba(138,106,90,0.08)] hover:shadow-[0_20px_50px_rgba(138,106,90,0.15)] transition-all duration-500 border border-[#D6CEC6]/30 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D6CEC6]/0 to-[#B8B0A7]/0 group-hover:from-[#D6CEC6]/20 group-hover:to-[#B8B0A7]/10 transition-all duration-500" />

                    <img
                      src={logo}
                      alt={`Brand partner ${index + 4}`}
                      className="relative z-10 object-contain h-full w-full filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Corner Accent */}
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#8A6A5A]/0 group-hover:border-[#8A6A5A]/30 rounded-bl-xl transition-all duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#D6CEC6]/20 rounded-full -z-10"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-[#B8B0A7]/20 rounded-full -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
