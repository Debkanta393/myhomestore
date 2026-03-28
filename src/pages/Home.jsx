import React, { useState, useEffect } from "react";
import Services from "../components/ui/Services";
import Testimonials from "../components/ui/Testimonials";
import Products from "../components/products/Products";
import Gallery from "../components/ui/Gallery";
import WhyChooseus from "../components/ui/WhyChooseus";
import { motion, AnimatePresence } from "framer-motion";
import { collections } from "../../data/data";
import { useSelector } from "react-redux";
import { MapPin, ShieldCheck, Leaf, DollarSign } from "lucide-react";
import { Button } from "../components/ui/Button";

// ✅ FIX #1: constants moved outside — prevents stale closure & unnecessary re-renders
const TYPING_TEXT = "Australia";
const TYPING_SPEED = 100;
const TYPING_DELAY = 1000;

const headerImages = [
  "./images/header1.png",
  "./images/header2.jpg",
  "./images/header3.jpg",
];

const brandLogos = [
  "./images/brand/1.png",
  "./images/brand/2.png",
  "./images/brand/3.webp",
  "./images/brand/4.png",
  "./images/brand/5.svg",
];

const stats = [
  { number: "15+", label: "Years" },
  { number: "500+", label: "Projects" },
  { number: "98%", label: "Satisfaction" },
];

const trustPoints = [
  { icon: ShieldCheck, text: "Suitable for Australian climates" },
  { icon: MapPin, text: "Slip-resistant options available" },
  { icon: Leaf, text: "Sustainable & eco-friendly ranges" },
  { icon: DollarSign, text: "Competitive pricing without compromise" },
];

function Home() {
  const [currentHeader, setCurrentHeader] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // ✅ FIX #1: stable deps — charIndex only, no constants in array
  useEffect(() => {
    let timeout;
    if (charIndex < TYPING_TEXT.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + TYPING_TEXT[charIndex]);
        setCharIndex((i) => i + 1);
      }, TYPING_SPEED);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
      }, TYPING_DELAY);
    }
    return () => clearTimeout(timeout);
  }, [charIndex]);

  // Hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ FIX #2: selectedTab safely lowercased with fallback
  const selectedTab = useSelector(
    (store) => store.activeTab?.tabSelected ?? "",
  ).toLowerCase();
  console.log(selectedTab)

  const logoVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <div className="overflow-x-hidden">
      {/******************* Hero Section *******************/}
      <section className="relative mt-5">
        <div className="min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] rounded-2xl sm:rounded-3xl w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white overflow-hidden bg-[#998e8a]">
          {/* Sliding background images */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeader}
              src={headerImages[currentHeader]}
              alt="Hero background"
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35 rounded-2xl sm:rounded-3xl" />

          {/* Hero content */}
          <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-10">
            <motion.p
              className="text-sm sm:text-lg md:text-2xl mb-3 sm:mb-5 lg:mb-8 opacity-90 tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium Tiles & Stone Solutions in Australia
            </motion.p>

            {/* ✅ FIX #3: valid font via style prop, responsive <br> */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Premium Tiles & Surface Solutions
              <br className="hidden md:block" /> Across{" "}
              <span className="text-[#D6CEC6]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              High-quality tiles for residential and commercial spaces. Stylish,
              durable, and built for Australian conditions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="secondary" size="xl">
                Get a Quote
              </Button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-10 text-3xl sm:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>

        {/* ✅ FIX #4: replaced hardcoded negative bottom offsets with a proper
            section that flows naturally below the hero using negative margin overlap */}
        <div className="w-full bg-[#998e8a] relative -mt-8 pt-16 pb-16 sm:pb-20 rounded-t-[2rem] sm:rounded-t-[5rem]">
          <motion.img
            src="./images/abstract_image1.png"
            className="absolute right-4 sm:right-10 bottom-0 w-40 sm:w-56 md:w-72 opacity-30 rotate-6 pointer-events-none"
            alt=""
          />
          <div className="flex flex-col md:flex-row gap-8 sm:gap-10 justify-between items-center w-10/12 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-center md:text-left"
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-tight"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Timeless Tiles for Modern Australian Spaces
              </h2>
              <p className="text-white text-base sm:text-lg mt-4">
                We provide high-quality tiles and professional installation
                services for homes and commercial spaces. Trusted for
                durability, modern designs, and flawless craftsmanship that
                transforms your space.
              </p>
            </motion.div>
            {/* <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-[#8A6A5A] text-base sm:text-xl py-3 px-8 sm:px-10 whitespace-nowrap z-10 cursor-pointer
               flex-shrink-0 hover:bg-[#f5f0ed] transition-colors"
            >
              Request a quote
            </motion.button> */}
            <Button variant="secondary" size="xl">
              Request a quote
            </Button>
          </div>
        </div>
      </section>

      {/******************* Why Choose Us *******************/}
      {/* ✅ FIX #5: removed magic number mt-[500px] — WhyChooseus flows naturally */}
      <div className="mt-16 sm:mt-20">
        <WhyChooseus />
      </div>

      {/******************* Shop by Categories *******************/}
      <section className="relative py-16 sm:py-20">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-light mx-auto text-center px-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Shop by categories
        </h2>

        {/* ✅ FIX #6: valid container classes, image object-cover, overflow-hidden on card */}
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20">
          {collections[selectedTab]?.map((collection, index) => (
            <motion.div
              key={`${index}-${selectedTab}`}
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1, ease: "easeIn" }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center items-center cursor-pointer overflow-hidden hover:scale-105 transition duration-200 ease-in w-full"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-[200px] sm:h-[240px] lg:h-[280px] 2xl:h-[380px] object-cover"
              />
              <p className="font-normal text-center text-lg sm:text-xl md:text-2xl absolute bottom-4 sm:bottom-5 text-white z-20 px-2">
                {collection.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/******************* Products Section *******************/}
      <Products />

      {/******************* Services Section *******************/}
      <Services />

      {/******************* Trusted Section *******************/}
      <section className="relative mt-16 sm:mt-20 px-4 sm:px-6">
        <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-gray-700 mb-3">
              <MapPin size={16} /> Australia Wide Supply
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Trusted by Australian Homes & Businesses
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed max-w-xl">
              We proudly supply tiles to homeowners, builders, designers, and
              contractors across Australia. Our commitment to quality,
              consistency, and service has made us a trusted tile supplier
              nationwide.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map(({ icon, text }, i) => (
                <TrustItem key={i} icon={icon} text={text} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full rounded-3xl bg-black/10" />
            <img
              src="./images/flooring.webp"
              alt="Australian tile projects"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[250px] sm:h-[320px] md:h-[420px]"
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg">
              Australia Wide Delivery
            </div>
          </div>
        </div>
      </section>

      {/******************* Gallery Section *******************/}
      <Gallery />

      {/******************* Testimonials Section *******************/}
      <Testimonials />

      {/******************* Brand Section *******************/}
      <section className="relative w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24 mt-10 sm:mt-16 overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F6] via-[#f5efed] to-[#D6CEC6] -z-10" />
        <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-[#B8B0A7] rounded-full blur-[130px] opacity-20 -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-[#8A6A5A] rounded-full blur-[140px] opacity-15 translate-y-1/3 -translate-x-1/4 -z-10" />

        {/* ✅ FIX #7: valid max-w-7xl instead of max-w-10/12 */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-10 sm:gap-12 lg:gap-16">
            {/* Text + stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight mb-4 text-center"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Built on Trust. Driven by Quality.
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-center max-w-3xl mx-auto px-2">
                We believe great brands are built with integrity, craftsmanship,
                and consistency. Every project we deliver reflects our
                commitment to quality, reliability, and long-lasting value.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 md:mt-12 max-w-xs sm:max-w-sm md:max-w-lg mx-auto"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#8A6A5A] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-[#998e8a] font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Brand logos */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/5 to-[#B8B0A7]/10 rounded-3xl blur-3xl" />
              <div className="relative flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
                {brandLogos.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={logoVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative transition-all duration-500"
                  >
                    <img
                      src={image}
                      alt={`Brand partner ${index + 1}`}
                      className="relative z-10 object-contain h-12 w-24 sm:h-16 sm:w-32 md:h-20 md:w-36 lg:h-24 lg:w-44 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 border-2 border-[#D6CEC6]/20 rounded-full -z-10"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-6 -left-6 w-24 sm:w-36 md:w-48 h-24 sm:h-36 md:h-48 border-2 border-[#B8B0A7]/20 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/******************* Newsletter / Contact Form *******************/}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-b border-stone-800 px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 w-full"
      >
        <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* Left text */}
          <div className="w-full lg:w-1/2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-white leading-snug"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Let's bring your vision to life without the stress.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80">
              Explore finishes, fixtures, and curated inspiration with guidance
              from our team.
            </p>

            {/* Trust bullets */}
            <ul className="mt-8 space-y-3">
              {[
                "Free consultation with our design team",
                "Australia-wide delivery available",
                "No obligation quote within 24 hours",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-white/80 text-sm sm:text-base"
                >
                  <span className="w-5 h-5 rounded-full bg-[#998E8A] flex items-center justify-center shrink-0 text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ FIX #8: defaultValue on select, rows on textarea, proper responsive form */}
          <form
            className="flex flex-col gap-3 bg-white p-6 sm:p-8 md:p-10 w-full lg:w-1/2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              required
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 placeholder:text-gray-400 text-black focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 placeholder:text-gray-400 text-black focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 placeholder:text-gray-400 text-black focus:outline-none transition-colors text-sm sm:text-base"
            />
            <input
              type="text"
              name="postcode"
              placeholder="Post Code*"
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 placeholder:text-gray-400 text-black focus:outline-none transition-colors text-sm sm:text-base"
            />
            {/* ✅ FIX #8: defaultValue instead of selected attribute */}
            <select
              name="tiles"
              defaultValue=""
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 text-gray-400 focus:outline-none transition-colors text-sm sm:text-base"
            >
              <option value="" disabled>
                I am interested in
              </option>
              <option value="hybrid">Hybrid</option>
              <option value="engineered oak">Engineered Oak</option>
              <option value="australian timber">Australian Timber</option>
              <option value="laminate">Laminate</option>
            </select>
            {/* ✅ FIX #9: rows added so textarea has visible height */}
            <textarea
              name="message"
              rows={4}
              placeholder="Type your message here..."
              className="border border-[#E7E9EB] focus:border-[#8A6A5A] p-3 pl-5 placeholder:text-gray-400 text-black focus:outline-none transition-colors resize-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-[#998E8A] hover:bg-[#7a6e6a] text-white p-3 mt-3 cursor-pointer transition-colors font-medium text-sm sm:text-base"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

// ─── TrustItem Component ──────────────────────────────────────────────────────
function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-sm">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-black text-white shrink-0">
        <Icon size={18} />
      </div>
      <p className="text-gray-800 font-medium text-sm sm:text-base">{text}</p>
    </div>
  );
}
