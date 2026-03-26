import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    text: "I've built investment homes before, but this was by far the easiest experience. The finishes were spot on.",
    author: "Chloe & Sam",
    project: "New Home Build for Investment",
    location: "Truganina VIC",
  },
  {
    text: "Complete home renovation including kitchen, bathroom, flooring, and alfresco extension. The team made what felt impossible look effortless.",
    author: "Amanda Kaur",
    project: "Full Home Renovation",
    location: "Bentleigh VIC",
  },
  {
    text: "Tight-turnaround renovation on a property for sale. Knew exactly where to invest and what to avoid — sold above asking with zero stress.",
    author: "David L.",
    project: "Flip Renovation",
    location: "Doncaster East VIC",
  },
  {
    text: "Guided us through every step of building a granny flat. The result? A beautiful unit that now earns steady rental income.",
    author: "Ruchi Shah",
    project: "Granny Flat Addition",
    location: "Werribee VIC",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="w-full py-14 sm:py-20 px-4 sm:px-6">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 sm:mb-16"
      >
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#998e8a] font-semibold mb-2">
          Client Stories
        </p>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          What Our Clients Say
        </h2>
      </motion.div>

      {/* Outer wrapper — gives space for absolute nav buttons on md+ */}
      <div className="max-w-4xl mx-auto relative px-0 md:px-20">
        {/* Desktop prev button */}
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center text-2xl lg:text-3xl text-black shadow-lg hover:scale-110 hover:bg-[#f5f0ed] transition-all duration-300 z-10"
        >
          ‹
        </button>

        {/* Desktop next button */}
        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white rounded-full items-center justify-center text-2xl lg:text-3xl text-black shadow-lg hover:scale-110 hover:bg-[#f5f0ed] transition-all duration-300 z-10"
        >
          ›
        </button>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            className="bg-gradient-to-br from-[#998e8a]/80 to-[#998e8a]/30 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl
             flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >

            {/* Quote text */}
            <p className="text-base sm:text-xl md:text-2xl italic leading-relaxed text-center text-black px-2 sm:px-4">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-black/20 mx-auto" />

            {/* Author info */}
            <div className="space-y-1 text-center text-black pb-2">
              <p className="text-base sm:text-lg md:text-xl font-bold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm sm:text-base md:text-lg opacity-80">
                {testimonials[currentIndex].project}
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-70 flex items-center justify-center gap-1">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile nav buttons */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-md hover:bg-[#f5f0ed] transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-md hover:bg-[#f5f0ed] transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 sm:w-10 bg-[#998e8a]"
                  : "w-2.5 sm:w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Counter badge */}
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-xs sm:text-sm text-gray-400 mt-4"
      >
        {currentIndex + 1} / {testimonials.length}
      </motion.p>
    </section>
  );
};

export default Testimonials;
