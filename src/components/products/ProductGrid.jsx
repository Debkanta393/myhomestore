import React, { useState } from "react";
import { HeartIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import LazyLoader from "../ui/LazyLoader";
import { useEffect } from "react";

// ##################### Animation ##################### //
const cardVariants = {
  hidden: (direction) => ({ opacity: 0, x: direction === "right" ? 80 : -80 }),
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const containerVariants = {
  hidden: (direction) => ({
    x: direction === "right" ? 300 : -300,
    opacity: 0,
  }),
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: "easeInOut",
    },
  },
  exit: (direction) => ({
    x: direction === "right" ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

export default function ProductGrid({
  sortedProducts,
  productData,
  page,
  navigateTo,
}) {
  // ##################### Hooks ##################### //
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(8);
  const [loadedImages, setLoadedImages] = useState({});


  // ##################### View more button handler ##################### //
  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  // ##################### Modify product name ##################### //
  const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-");
  return (
    <div>
      {sortedProducts?.length === 0 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            custom={navigateTo}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 relative mt-6 z-0"
          >
            {productData?.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item._id}
                variants={cardVariants}
                className="group relative bg-white overflow-hidden transition-all duration-300 ease-out
                  border border-gray-300 hover:-translate-y-1 cursor-pointer z-0"
                onClick={() => navigate(`/${slugify(item.range)}/${slugify(item.productName)}`)}
              >
                {/* Image */}
                <div className="relative">
                  {/* <LazyLoadImage
                    src={item.productImage[0].url}
                    alt={item.heading}     
                    effect="blur"
                    className="block h-[220px] lg:h-[250px] 2xl:h-[400px] w-full object-cover transition-transform duration-500"
                  /> */}
                  <LazyLoader image={item.productImage[0].url} alt={item.heading} style={"block h-[220px] lg:h-[250px] 2xl:h-[400px] w-full object-cover transition-transform duration-500"}/>
                  <div className="absolute top-0 h-[98%] inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Wishlist */}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-2 right-2 z-20 bg-[#998E8A] backdrop-blur-sm p-1.5 rounded-full shadow-sm
                      hover:bg-white/60 hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <HeartIcon className="w-5 h-5 text-white hover:text-red-500" />
                  </button>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex gap-3">
                    {item.isNew && (
                      <span className="inline-block px-4 py-1 text-md tracking-wide bg-white text-black font-semibold">
                        New
                      </span>
                    )}
                    {item.onSale && (
                      <span className="inline-block px-4 py-1 text-md font-semibold tracking-wide bg-white text-black">
                        Sale
                      </span>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="py-5 space-y-2">
                  <div className="flex flex-col items-start justify-between gap-1 px-5">
                    <p className="text-lg xl:text-2xl font-semibold text-gray-900 line-clamp-1">
                      {item.productName}
                    </p>
                    <div className="">
                      <p className="text-md xl:text-lg text-gray-500 line-clamp-1">
                        <span className="font-semibold">Type:</span>{" "}
                        {item.category}
                      </p>
                      <p className="text-md xl:text-lg text-gray-500 line-clamp-1">
                        <span className="font-semibold">Brand:</span>{" "}
                        {item.brand}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {visibleCount < productData?.length && (
        <button
          onClick={loadMore}
          className="bg-[#998E8A] px-10 py-3 text-white flex justify-center items-center mx-auto mt-10 text-lg cursor-pointer"
        >
          View More
        </button>
      )}
    </div>
  );
}
