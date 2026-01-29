import React from "react";
import {motion} from "framer-motion"
import { ArrowRight } from "lucide-react";

export default function PopularCollections() {
  const collections = [
    {
      id: 1,
      name: "Kaya Collection",
      image: "./images/luxury1.webp",
      description: "Modern minimalist design",
      products: 18,
    },
    {
      id: 2,
      name: "Eleanor Collection",
      image: "./images/luxury2.webp",
      description: "Classic elegance",
      products: 15,
    },
    {
      id: 3,
      name: "Axle Collection",
      image: "./images/luxury3.webp",
      description: "Contemporary style",
      products: 12,
    },
    {
      id: 4,
      name: "Empire Collection",
      image: "./images/luxury1.webp",
      description: "Luxury finishes",
      products: 20,
    },
    {
      id: 5,
      name: "Empire Collection",
      image: "./images/luxury1.webp",
      description: "Luxury finishes",
      products: 20,
    },
    {
      id: 6,
      name: "Empire Collection",
      image: "./images/luxury1.webp",
      description: "Luxury finishes",
      products: 20,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-10/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block border border-[#8A6A5A] w-fit py-1 px-4 rounded-4xl mx-auto">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Curated collections for every style and preference
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative shadow-2xl group cursor-pointer `}
            >
              <div className={`relative overflow-hidden h-80`}>
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl xl:text-4xl font-extrabold text-white mb-3">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 text-lg mb-2">
                      {collection.description}
                    </p>
                    <p className="text-white/70 text-sm mb-6">
                      {collection.products} Products Available
                    </p>
                    <button className="bg-white text-[#8A6A5A] px-5 xl:px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                      View Collection <ArrowRight size={18} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
