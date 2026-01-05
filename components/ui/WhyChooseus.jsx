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

  return (
    <section className="mt-28 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why Homeowners & Builders Choose Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          Australia’s homes deserve surfaces that last. From residential
          renovations to large commercial projects, we deliver tiles that
          combine design, durability, and value.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-20">
        {whyChoose.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white mb-6 group-hover:scale-110 transition mx-auto">
                <Icon size={26} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-b from-transparent to-black/5" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
