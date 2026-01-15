import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft
} from "lucide-react"

const Services = () => {
  const [activeTab, setActiveTab] = useState("homeowner");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = {
    homeowner: [
      {
        image: "./images/cladding.jpeg",
        title: "New Home Builds",
        description: "Design your forever home with full-service support",
      },
      {
        image: "./images/decking.jpg",
        title: "Full Home Renovations",
        description: "Upgrade your entire home with end-to-end delivery",
      },
      {
        image: "./images/flooring.webp",
        title: "Home Extensions",
        description: "More space, better flow. Expand without moving",
      },
      {
        image: "./images/luxury1.webp",
        title: "Bathroom Renovations",
        description: "More space, better flow. Expand without moving",
      },
      //   {
      //     images: "./images/luxury2.webp",
      //     title: "Kitchen Renovations",
      //     description: "The heart of your home — reimagined",
      //   },
      //   {
      //     images: "./images/luxury3.webp",
      //     title: "Granny Flats",
      //     description: "Self-contained living for family or guests",
      //   },
      //   {
      //     images: "./images/tiles.jpg",
      //     title: "Outdoor Living",
      //     description: "Decks, pergolas, alfresco zones",
      //   },
      //   {
      //     title: "Storage Solutions",
      //     description: "Everyday spaces designed with efficiency",
      //   },
    ],
    investor: [
      {
        image: "./images/cladding.jpeg",
        title: "Investment Properties",
        description: "Turnkey homes for strong rental yield",
      },
      {
        image: "./images/decking.jpg",
        title: "Renovation for Resale",
        description: "Maximize value with smart upgrades",
      },
      {
        image: "./images/flooring.webp",
        title: "Multi-Unit Developments",
        description: "Two or more dwellings for serious returns",
      },
      {
        image: "./images/luxury1.webp",
        title: "Commercial Upgrades",
        description: "Increase tenant value and retention",
      },
      //   {
      //     images: "./images/luxury2.webp",
      //     title: "Secondary Dwellings",
      //     description: "Add passive income opportunities",
      //   },
      //   {
      //     images: "./images/luxury3.webp",
      //     title: "Land Subdivision",
      //     description: "Unlock equity by splitting land",
      //   },
      //   {
      //     images: "./images/tiles.jpg",
      //     title: "Co-Living Builds",
      //     description: "Purpose-designed for room-by-room rental",
      //   },
      //   {
      //     title: "Development Advisory",
      //     description: "Strategic support from feasibility to completion",
      //   },
    ],
  };

  const scrollByAmount = 350;
  const scrollRef = useRef()

  const handlePrevButton = () => {
    scrollRef.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });

    setIndex((prev) => {
      const newIndex =
        prev > 0 ? prev - 1 : services[activeTab].length - 1;
      setSelectedCard(services[activeTab][newIndex]);
      return newIndex;
    });
  };

  const handleNextButton = () => {
    scrollRef.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });

    setIndex((prev) => {
      const newIndex =
        prev < services[activeTab].length - 1 ? prev + 1 : 0;
      setSelectedCard(services[activeTab][newIndex]);
      return newIndex;
    });
  };


  return (
    <section ref={ref} className=" bg-[#998E8A] w-full py-32 mt-32 relative" style={{
      backgroundImage: "url(./images/abstract_image2.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      {/* <div className="absolute inset-0 overflow-hidden top-0 left-0 h-full w-full bg-black/30"></div> */}
      <div className="w-11/12 md:w-10/12 mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl text-center  text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Start Your Home Transformation Journey
        </motion.h2>

        <div className="flex md:flex-row flex-col justify-center md:justify-baseline gap-20">
          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto flex flex-col justify-center"
          >
            <button
              className={`w-60 px-10 py-5 sm:py-8 font-semibold text-lg transition-all duration-300 mb-5 relative group overflow-hidden ${activeTab === "homeowner"
                ? "bg-gray-200 text-black shadow-lg"
                : "border-2 border-white text-white"
                }`}
              onClick={() => setActiveTab("homeowner")}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                For Homeowners
              </span>
              <span
                className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </button>
            <button
              className={`w-60 px-10 py-5 sm:py-8 font-semibold text-lg transition-all duration-300 mb-5 relative group overflow-hidden ${activeTab === "investor"
                ? "bg-gray-200 text-black shadow-lg"
                : "border-2 border-white text-white"
                }`}
              onClick={() => setActiveTab("investor")}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                For Investors
              </span>
              <span
                className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </button>
          </motion.div>

          {/* Services Grid for desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {services[activeTab].map((service, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex lg:flex-row-reverse flex-col items-center rounded-2xl overflow-hidden cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src={service.image}
                    alt=""
                    className="lg:w-1/2 w-full h-full rounded-r-2xl rounded-bl-2xl lg:rounded-bl-none"
                  />
                  <div className="lg:w-1/2 w-full p-10">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Services Grid for mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="relative md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* SCROLLABLE CONTAINER */}
              <div
                ref={scrollRef}
                className="flex items-center gap-6 overflow-x-auto scroll-smooth"
              >
                {services[activeTab].map((service, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[320px] md:min-w-[500px] bg-gradient-to-br from-gray-100 to-gray-200 flex md:flex-row-reverse flex-col items-center rounded-2xl overflow-hidden cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    }}
                  >
                    <img
                      src={service.image}
                      alt=""
                      className="md:w-1/2 w-full h-full rounded-r-2xl"
                    />

                    <div className="md:w-1/2 w-full p-10">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* LEFT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevButton}
                className="absolute left-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-30 p-3 rounded-full transition-all border border-white/50"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </motion.button>

              {/* RIGHT BUTTON */}
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextButton}
                className="absolute right-5 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-30 p-3 rounded-full transition-all border border-white/50"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </motion.button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Services;
