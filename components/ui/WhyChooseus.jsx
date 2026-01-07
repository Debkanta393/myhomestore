import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, LayoutGrid, Truck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const whyChoose = [
    {
      title: "Australian Standards Certified",
      desc: "All tiles meet strict Australian quality and safety standards.",
      icon: ShieldCheck,
    },
    {
      title: "Curated Premium Collections",
      desc: "Hand-selected tiles inspired by modern Australian living.",
      icon: LayoutGrid,
    },
    {
      title: "Reliable Nationwide Delivery",
      desc: "Fast and secure delivery across Australia.",
      icon: Truck,
    },
    {
      title: "Expert Guidance",
      desc: "Our specialists help you choose the right tile for every space.",
      icon: Users,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative mt-28 px-6 py-24 overflow-hidden">
      {/* Layered Background with Organic Shapes */}
      <div className="absolute inset-0 bg-[#f5efed] -z-10" />
      
      {/* Organic Decorative Blobs */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D6CEC6] rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B8B0A7] rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/4 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8A6A5A] rounded-full blur-[150px] opacity-10 -z-10" /> */}

      {/* Textured Overlay */}
      {/* <div className="absolute inset-0 opacity-[0.03] -z-10" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
           }} 
      /> */}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center relative"
      >
        {/* Badge with refined styling */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-medium tracking-wide text-[#8A6A5A] bg-white/60 backdrop-blur-sm border border-[#D6CEC6] rounded-full shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8A6A5A] animate-pulse" />
          WHY CHOOSE US
        </motion.span>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#8A6A5A] mb-6 leading-tight">
          Why Homeowners &<br className="hidden md:block" /> Builders Choose Us
        </h2>
        
        {/* Decorative underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-transparent via-[#8A6A5A] to-transparent mx-auto mb-8 rounded-full"
        />

        <p className="text-lg md:text-xl text-[#998e8a] mt-6 max-w-3xl mx-auto leading-relaxed font-light">
          Australia's homes deserve surfaces that last. From residential
          renovations to large commercial projects, we deliver tiles that
          combine design, durability, and value.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20"
      >
        {whyChoose.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative rounded-3xl bg-white/70 backdrop-blur-md p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-all duration-500 border border-[#D6CEC6]/30 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6CEC6]/0 via-[#B8B0A7]/0 to-[#8A6A5A]/0 group-hover:from-[#D6CEC6]/30 group-hover:via-[#B8B0A7]/20 group-hover:to-[#8A6A5A]/10 transition-all duration-700 rounded-3xl" />

              {/* Top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#8A6A5A] to-transparent origin-center"
              />

              {/* Icon with layered background */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                {/* Outer ring */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B8B0A7] to-[#D6CEC6] opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                />
                
                {/* Middle ring */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -90 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-2 rounded-xl bg-white/60 backdrop-blur-sm shadow-inner"
                />
                
                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
                  className="absolute inset-3 flex items-center justify-center rounded-xl bg-[#8A6A5A] text-white shadow-lg group-hover:bg-[#998e8a] transition-colors duration-500"
                >
                  <Icon size={26} strokeWidth={2.5} className="relative z-10" />
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#8A6A5A] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 text-[#8A6A5A] group-hover:text-[#998e8a] transition-colors duration-300 text-center leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#998e8a] leading-relaxed text-center text-[15px] font-light">
                  {item.desc}
                </p>
              </div>

              {/* Bottom accent - expanding line on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#8A6A5A] to-transparent transition-all duration-700 rounded-full"
              />

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#D6CEC6]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#D6CEC6]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden pointer-events-none">
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
