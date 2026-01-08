import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Gem, Package, Milestone } from "lucide-react";

const Features = () => {
  

  const collections = [
    {
      image: "./images/collections/toilets.jpg",
      title: "Toilets",
    },
    {
      image: "./images/collections/bidets.jpg",
      title: "Bidets",
    },
    {
      image: "./images/collections/bathtubs.png",
      title: "Bathtubs",
    },
    {
      image: "./images/collections/vanities.png",
      title: "Vanities",
    },
    {
      image: "./images/collections/basins.webp",
      title: "Basins",
    },
    {
      image: "./images/collections/mirror.webp",
      title: "Bathroom Mirrors",
    },
    {
      image: "./images/collections/bathroom_tapware.jpg",
      title: "Bathroom Tapware",
    },
    {
      image: "./images/collections/showers.jpg",
      title: "Showers",
    },
    {
      image: "./images/collections/kitchen_sinks.webp",
      title: "Kitchen Sinks",
    },
    {
      image: "./images/collections/shower_screen.webp",
      title: "Shower Screens",
    },
    {
      image: "./images/collections/flooring.png",
      title: "Flooring",
    },
    {
      image: "./images/collections/disability_products.jpg",
      title: "Disability & Aged Products",
    },
  ];

  return (
    <section
      className="relative pb-28 bg-gradient-to-b from-[#FBF8F6] to-[#EDE6E1]"
    >
      <div className="max-w-[80%] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {collections.map((collection, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-5  hover:scale-105 transition duration-200 ease-in"
            key={index}
          >
            <img
              src={collection.image}
              alt=""
              className="w-full h-[200px] rounded-2xl shadow-lg shadow-gray-300 border-4 border-white"
            />
            <p className="font-semibold">{collection.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
