import React, {useRef} from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, LayoutGrid, Truck, Users, Gem, Package, Milestone, Award } from "lucide-react";

export default function WhyChooseUs() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: ShieldCheck,
      text: "Australian-standard quality",
      desc: "All tiles meet strict Australian quality and safety standards.",
    },
    {
      icon: Gem,
      text: "Competitive pricing",
      desc: "Hand-selected tiles inspired by modern Australian living.",
    },
    {
      icon: Package,
      text: "Reliable supply & fast delivery",
      desc: "Fast and secure delivery across Australia.",
    },
    {
      icon: Award,
      text: "Expert guidance at every step",
      desc: "Our specialists help you choose the right tile for every space.",
    },
  ];


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
    <section className="relative py-20 overflow-hidden mt-[500px] sm:mt-[380px] lg:mt-[250px]">
      {/* Layered Background with Organic Shapes */}
      <div className="absolute inset-0 bg-[#f5efed] -z-10" />

      {/* Header */}
      {/* <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Australia’s Trusted Tiles Supplier
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl text-gray-700 max-w-4xl mx-auto"
        >
          With years of experience in the Australian tiles industry, we proudly
          serve homeowners, builders, architects, and designers nationwide —
          delivering quality, value, and confidence in every tile.
        </motion.p>
      </div> */}

      {/* Feature Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        //className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20"
       className="max-w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8 lg:gap-5 gap-y-8" ref={ref}>
        {problems.map((problem, index) => {
          const Icon = problem.icon;

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group text-center relative flex flex-col justify-start"
            >
              {/* Icon */}
              <div
                className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full text-[#8A6A5A] group-hover:scale-110 transition-transform"
              >
                <Icon size={38} strokeWidth={1.2} />
              </div>

              {/* Text */}
              <p className="text-2xl font-medium text-black mb-2">
                {problem.text}
              </p>
              <p className="text-[#666E7C] lading-relaxed text-center text-[18px] font-light">{problem.desc}</p>

              {/* Bottom accent - expanding line on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#8A6A5A] to-transparent transition-all duration-700 rounded-full"
              />

              {/* Corner decorations */}
              {/* <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#D6CEC6]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#D6CEC6]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

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
