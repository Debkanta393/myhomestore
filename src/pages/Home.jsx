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

function Home() {
  // ##################### State hooks ##################### //
  const [currentHeader, setCurrentHeader] = useState(0);

  // ####################### Hero section #################### //
  const text = "Australia";
  const speed = 100;
  const dilay = 1000;
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setIndex(0);
      }, dilay);
    }
    return () => clearTimeout(timeout);
  }, [displayText, speed, dilay, index]);

  // Hero section sliding images
  const headerImage = [
    "./images/header1.png",
    "./images/header2.jpg",
    "./images/header3.jpg",
  ];

  // ####################### Categories section #################### //
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((prev) => (prev + 1) % headerImage.length);
    }, 3000); // change every 3s

    return () => clearInterval(interval);
  }, []);

  // ####################### Brand section #################### //
  const brand = [
    "./images/brand/1.png",
    "./images/brand/2.png",
    "./images/brand/3.webp",
    "./images/brand/4.png",
    "./images/brand/5.svg",
  ];

  // ####################### Framer motion animation #################### //
  const logoVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const selectedTab = useSelector(
    (store) => store.activeTab.tabSelected,
  ).toLowerCase();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {/******************* Hero section *******************/}
      <section className="relative mt-5">
        <div
          className="min-h-[600px] rounded-3xl w-11/12 sm:w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white overflow-hidden
       bg-[#998e8a]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentHeader}
              src={headerImage[currentHeader]}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Background Animation Circles */}
          <div className="absolute inset-0 overflow-hidden top-0 left-0 h-full w-full bg-black/30 rounded-3xl"></div>

          <div className="relative z-10 max-w-7xl px-3 md:px-5">
            <motion.p
              className="text-xl md:text-2xl mb-5 lg:mb-10 opacity-95"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium Tiles & Stone Solutions in Australia
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl 2xl:text-7xl font-bold mb-6 leading-tight font-(family-name: Playfair Display, serif)"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Premium Tiles & Surface Solutions <br /> Across
              <span className={`inline-block ml-4 text-[#D6CEC6]`}>
                {displayText}
                <span className="ml-1 animate-pulse">|</span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl mb-10 opacity-95"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              High-quality tiles for residential and commercial spaces. Stylish,
              durable, and built for Australian conditions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-white text-[#8A6A5A] py-4 px-12 text-xl font-medium cursor-pointer">
                Get a quote
              </button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 text-4xl"
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

        <motion.div className="rounded-t-4xl py-20  absolute -bottom-[500px] sm:-bottom-[380px] lg:-bottom-[290px] xl:-bottom-[250px] -z-10 bg-[#998e8a] flex justify-center items-center w-full">
          <motion.img
            src="./images/abstract_image1.png"
            height={350}
            width={350}
            className="absolute right-10 -bottom-10 opacity-35 rotate-6"
          />
          <motion.div className="flex md:flex-row flex-col gap-10 justify-between items-center w-10/12 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-4xl"
            >
              <h2 className="text-3xl  sm:text-4xl text-white font-medium leading-tight">
                Timeless Tiles for Modern Australian Spaces
              </h2>
              <p className="text-white text-lg mt-5">
                We provide high-quality tiles and professional installation
                services for homes and commercial spaces. Trusted for
                durability, modern designs, and flawless craftsmanship that
                transforms your space.
              </p>
            </motion.div>
            <motion.button className="bg-white text-[#8A6A5A] text-xl py-3 px-10 text-nowrap z-10 cursor-pointer">
              Request a quote
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/******************* Why choose us section *******************/}
      <div className="overflow-hidden mt-[500px] sm:mt-[380px] lg:mt-[250px]">
        <WhyChooseus />
      </div>

      {/******************* Shop by categories section *******************/}
      <section className="relative py-20">
        <h2
          className="max-w-11/12 text-4xl sm:text-5xl font-light mx-auto text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Shop by categories
        </h2>
        <div className="max-w-10/12 mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
          {collections[selectedTab]?.map((collection, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.3,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
              className="relative flex flex-col justify-center items-center gap-5  hover:scale-105 transition duration-200 ease-in w-full"
              key={[index, selectedTab]}
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

              <img
                src={collection.image}
                alt=""
                className="w-full h-[220px] lg:h-[280px] 2xl:h-[400px]"
              />
              <p className="font-normal text-center text-2xl absolute bottom-5 text-white z-10">
                {collection.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/******************* Products section *******************/}
      <Products />

      {/******************* Service section *******************/}
      <Services />

      {/******************* Trusted section *******************/}
      <section className="relative mt-20 px-6">
        {/* Background */}
        <div className="absolute inset-0 rounded-[3rem]" />

        <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-700 mb-3">
              <MapPin size={16} /> Australia Wide Supply
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Trusted by Australian Homes & Businesses
            </h2>

            <p className="text-lg text-gray-700 mt-3 leading-relaxed max-w-xl">
              We proudly supply tiles to homeowners, builders, designers, and
              contractors across Australia. Our commitment to quality,
              consistency, and service has made us a trusted tile supplier
              nationwide.
            </p>

            {/* Trust Points */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TrustItem
                icon={ShieldCheck}
                text="Suitable for Australian climates"
              />
              <TrustItem
                icon={MapPin}
                text="Slip-resistant options available"
              />
              <TrustItem icon={Leaf} text="Sustainable & eco-friendly ranges" />
              <TrustItem
                icon={DollarSign}
                text="Competitive pricing without compromise"
              />
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-black/10" />
            <img
              src="./images/flooring.webp"
              alt="Australian tile projects"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-[300px] md:h-[420px]"
            />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              Australia Wide Delivery
            </div>
          </div>
        </div>
      </section>

      {/******************* Gallery section *******************/}
      <Gallery />

      {/******************* Testimonials section *******************/}
      <Testimonials />

      {/******************* Brand section *******************/}
      <section className="relative w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-28 lg:py-32 mt-12 md:mt-20 overflow-hidden">
  {/* Layered Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F6] via-[#f5efed] to-[#D6CEC6] -z-10" />

  {/* Organic Decorative Elements */}
  <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#B8B0A7] rounded-full blur-[130px] opacity-20 -translate-y-1/2 translate-x-1/3 -z-10" />
  <div className="absolute bottom-0 left-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#8A6A5A] rounded-full blur-[140px] opacity-15 translate-y-1/3 -translate-x-1/4 -z-10" />

  {/* Subtle Pattern Overlay */}
  <div
    className="absolute inset-0 opacity-[0.02] -z-10"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
    }}
  />

  <div className="w-full max-w-10/12 mx-auto px-0">
    <div className="flex flex-col gap-12 lg:gap-16">

      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="order-2 lg:order-1"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 md:mb-6 text-center">
          Built on Trust. Driven by Quality.
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-center max-w-3xl mx-auto px-2">
          We believe great brands are built with integrity, craftsmanship,
          and consistency. Every project we deliver reflects our
          commitment to quality, reliability, and long-lasting value.
        </p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-12 max-w-md sm:max-w-lg mx-auto"
        >
          {[
            { number: "15+", label: "Years" },
            { number: "500+", label: "Projects" },
            { number: "98%", label: "Satisfaction" },
          ].map((stat, index) => (
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

      {/* LOGO GRID SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="order-1 lg:order-2 relative"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A6A5A]/5 to-[#B8B0A7]/10 rounded-3xl blur-3xl" />

        {/* Brand Logos — wrapping flex on mobile, single row on large */}
        <div className="relative flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-2 mt-4 lg:mt-8">
          {brand?.map((image, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative  transition-all duration-500 h-fit"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6CEC6]/0 to-[#B8B0A7]/0 transition-all duration-500 h-auto" />

              <img
                src={image}
                alt={`Brand partner ${index + 1}`}
                className="relative z-10 object-contain h-16 w-28 sm:h-20 sm:w-36 md:h-24 md:w-40 lg:h-32 lg:w-32 xl:h-32 xl:w-48 2xl:h-32 2xl:w-60 filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Corner Accent */}
              <div className="absolute top-2 -right-5 w-8 h-8 border-t-2 border-r-2 border-[#8A6A5A]/0 group-hover:border-[#8A6A5A]/30 rounded-tr-xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Rotating Rings */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 border-2 border-[#D6CEC6]/20 rounded-full -z-10"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 -left-6 md:bottom-14 md:-left-10 w-32 h-32 md:w-48 md:h-48 border-2 border-[#B8B0A7]/20 rounded-full -z-10"
        />
      </motion.div>

    </div>
  </div>
</section>


      {/******************* Newsletter Section *******************/}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-b border-stone-800  px-6 py-16 gap-20 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 w-full"
      >
        <div className="w-10/12 lg:w-8/12 mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl text-white">
              Let’s bring your vision to life without the stress.
            </h2>
            <p className="mt-5 text-lg text-white">
              Explore finishes, fixtures, and curated inspiration with guidance
              from our team.
            </p>
          </div>
          <form action="" className="flex flex-col gap-3 bg-white p-10 w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
            />
            <input
              type="text"
              name="postcode"
              placeholder="Post Code*"
              className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
            />
            <select
              name="tiles"
              id="tiles"
              className="border border-[#8A6A5A] p-3 pl-5 placeholder:text-black text-black"
            >
              <option value="I am interested in" selected disabled>
                I am interested in
              </option>
              <option value="hybrid">Hybrid</option>
              <option value="engineered oak">Engineered Oak</option>
              <option value="australian timber">Australian Timber</option>
              <option value="laminate">Laminate</option>
            </select>
            <textarea
              name="message"
              id=""
              placeholder="Type your message here..."
              className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
            ></textarea>
            <button className="bg-[#998E8A] text-white p-3 mt-5 cursor-pointer">
              Get a Quote
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
        <Icon size={22} />
      </div>
      <p className="text-gray-800 font-medium">{text}</p>
    </div>
  );
}
