import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section ref={ref} className="section">
      <motion.h2
        className="text-4xl md:text-5xl text-center font-bold text-black"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Our customers value us for the hassle-free outcomes we provide
      </motion.h2>

      {/* Testimonial Container */}
      <div
        className="max-w-4xl mx-auto relative mt-20"
        // style={{
        //   backgroundImage: "url(./images/australia_map.png)",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="hidden md:flex absolute left-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center text-3xl text-black shadow-lg hover:scale-110 transition-transform duration-300 z-10"
        >
          ‹
        </button>

        <button
          onClick={nextTestimonial}
          className="hidden md:flex absolute right-[-80px] top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full items-center justify-center text-3xl text-black shadow-lg hover:scale-110 transition-transform duration-300 z-10"
        >
          ›
        </button>

        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="bg-gradient-to-br from-[#998e8a]/80 to-[#998e8a]/30 text-white rounded-3xl p-10 md:p-12 shadow-2xl min-h-[350px] flex flex-col justify-between"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl md:text-3xl italic leading-relaxed mb-8 text-center text-black">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="space-y-1 text-center text-black">
              <p className="text-xl font-bold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-lg opacity-90">
                {testimonials[currentIndex].project}
              </p>
              <p className="text-base opacity-80">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl text-black shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-10 bg-black/50"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
