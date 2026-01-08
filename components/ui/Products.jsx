import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, HeartIcon } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    image: "./images/luxury1.webp",
    heading: "Product1",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 2,
    image: "./images/luxury2.webp",
    heading: "Product2",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 3,
    image: "./images/luxury3.webp",
    heading: "Product3",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 4,
    image: "./images/luxury1.webp",
    heading: "Product4",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 5,
    image: "./images/luxury2.webp",
    heading: "Product5",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 6,
    image: "./images/luxury3.webp",
    heading: "Product6",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 7,
    image: "./images/luxury2.webp",
    heading: "Product5",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
  {
    id: 8,
    image: "./images/luxury3.webp",
    heading: "Product6",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
  },
];

const ITEMS_PER_PAGE = 4;

export default function Products() {
  const ref = useRef(null);
  const imageAnimation = useInView(ref, { once: true, amount: 0.2 });
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const [navigateTo, setNavigateTo] = useState("right");

  const visibleProducts = products.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
    setNavigateTo("right");
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
    setNavigateTo("left");
  };

  // const containerVariants = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.18, // one-by-one
  //       delayChildren: 0.15,
  //     },
  //   },
  // };

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "right" ? 80 : -80,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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
        staggerChildren: 0.18, // one-by-one
        delayChildren: 0.15,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  console.log("Navigate to", navigateTo);

  // Selected product
  const [productSelected, setProductSelected] = useState(1);
  const productHandler = () => {};

  return (
    <div className="w-full mt-40 flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-16">Features Products</h2>
      {/* Viewport */}
      <div className="flex flex-col justify-center items-center w-full px-4 md:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            custom={navigateTo}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-x-8 w-full max-w-7xl gap-y-10"
          >
            {products.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                custom={navigateTo}
                className="group relative rounded-3xl bg-white overflow-hidden shadow-2xl hover:shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
                  <img
                    src={item.image}
                    alt={item.heading}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay - lighter for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Wishlist Button - improved accessibility */}
                  <button
                    aria-label="Add to wishlist"
                    className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <HeartIcon className="w-5 h-5 text-gray-700 hover:text-red-500 transition-colors" />
                  </button>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wide bg-white/95 backdrop-blur-sm text-gray-900 rounded-full shadow-sm">
                      {item.category || "New Arrival"}
                    </span>
                  </div>

                  {/* Quick View Button - appears on hover */}
                  <button className="absolute inset-x-4 bottom-4 z-20 bg-white text-gray-900 font-semibold py-3 rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-50">
                    Quick View
                  </button>
                </div>

                {/* Product Info Section */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-semibold text-gray-900 line-clamp-2 transition-colors">
                      {item.heading}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-2xl font-bold text-gray-900">
                      $100
                    </span>
                    <span className="text-base text-gray-400 line-through font-medium">
                      $200
                    </span>
                    <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                      50% OFF
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md active:scale-95">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Controls - enhanced design */}
        {/* <div className="flex items-center gap-6 mt-12">
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous page"
            className="group bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-4 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg disabled:hover:bg-white disabled:hover:text-gray-900"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm font-medium text-gray-600">
            Page {page + 1} of {totalPages}
          </span>

          <button
            onClick={next}
            disabled={page === totalPages - 1}
            aria-label="Next page"
            className="group bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-4 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg disabled:hover:bg-white disabled:hover:text-gray-900"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
