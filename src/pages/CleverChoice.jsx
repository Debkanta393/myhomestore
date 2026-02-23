import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  PhoneCall,
  Mail,
  Van,
  CircleUser,
  BrickWall,
  Award,
} from "lucide-react";
import Products from "../../components/ui/Products";
import PopularCollections from "../../components/ui/PopularCollections";
import Whychooseus from "../../components/ui/WhyChooseus";

export default function ClaverChoise() {
  const productRanges = [
    {
      title: "Engineered Oak",
      description:
        "Premium hardwoods in classic and modern finishes. European & Australian species available.",
      image: "./images/flooring/Engineered-oak.png",
      hoveredImage: "./images/flooring/flooring5.webp",
    },
    {
      title: "Herringbone",
      description: "100% waterproof SPC hybrid boards, ideal for busy homes.",
      image: "./images/flooring/Herringbone.png",
      hoveredImage: "./images/flooring/flooring10.jpg",
    },
    {
      title: "Laminate",
      description:
        "Durable laminate and hydro laminate solutions for cost-effective designs.",
      image: "./images/flooring/Laminate.png",
      hoveredImage: "./images/flooring/flooring2.webp",
    },
    {
      title: "Timber",
      description:
        "Durable laminate and hydro laminate solutions for cost-effective designs.",
      image: "./images/flooring/Timber.png",
      hoveredImage: "./images/flooring/flooring9.jpg",
    },
    {
      title: "Bamboo",
      description:
        "Premium hardwoods in classic and modern finishes. European & Australian species available.",
      image: "./images/flooring/Bamboo.png",
      hoveredImage: "./images/flooring/flooring12.jpg",
    },
    {
      title: "Vinyl",
      description: "100% waterproof SPC hybrid boards, ideal for busy homes.",
      image: "./images/flooring/Vinyl.png",
      hoveredImage: "./images/flooring/flooring11.webp",
    },
    {
      title: "Hydro Laminate",
      description:
        "Durable laminate and hydro laminate solutions for cost-effective designs.",
      image: "./images/flooring/Hydro-laminate.png",
      hoveredImage: "./images/flooring/flooring3.jpg",
    },
    {
      title: "Hybrid",
      description:
        "Durable laminate and hydro laminate solutions for cost-effective designs.",
      image: "./images/flooring/Hybrid.png",
      hoveredImage: "./images/flooring/flooring6.jpg",
    },
  ];

  const statData = [
    { value: "20+", label: "Years of Experience", icon: <CircleUser /> },
    { value: "100+", label: "Flooring Options", icon: <BrickWall /> },
    { value: "Nationwide", label: "Supply Network", icon: <Van /> },
    { value: "Trusted", label: "By Builders & Homeowners", icon: <Award /> },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[600px] rounded-3xl w-11/12 sm:w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white overflow-hidden bg-[#998e8a]"
        style={{
          backgroundImage: "url(./images/header3.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Clever Choice
              </h1>
              <div className="w-32 h-1 bg-white/60 mx-auto mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-white/90 mb-8 font-light"
            >
              Quality Bathroom Solutions for Modern Living
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our premium collection of bathroom fixtures, tapware, and
              accessories designed to elevate your space with Australian quality
              and style.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-[#8A6A5A] text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Shop Collection
                </span>

                <span
                  className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                               transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div> */}
      </motion.section>

      {/* ── About / Why Choose ── */}
      <section className="relative bg-[#F5F0ED] py-16 sm:py-20 lg:py-24 overflow-hidden my-20">
        <div className="relative w-11/12 sm:w-10/12 mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About Bamboo Flooring
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Since 2003, Clever Choice has been delivering premium flooring
                solutions across Australia. From engineered timber and hybrid
                flooring to laminate and bamboo, our products are designed to
                combine beauty, durability, and long-term value.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-5">
                Flooring You Can Trust
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                We work closely with manufacturers and suppliers to ensure every
                Clever Choice product meets strict Australian standards. Whether
                for residential or commercial spaces, our flooring is engineered
                for performance, style, and everyday living.
              </p>
              <ul className="space-y-4">
                {[
                  "Carefully selected raw materials and finishes",
                  "Water-resistant and scratch-resistant technologies",
                  "Designed for Australian climate conditions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base sm:text-lg"
                  >
                    <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right images — stack on small screens, side by side on md+ */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-4 h-[100%]">
              <img
                src="./images/claverchoice2.png"
                alt="Clever Choice product 2"
                className="w-full sm:w-1/2 max-w-xs object-cover h-[400px] xl:h-[100%]"
              />
              <img
                src="./images/claverchoice1.png"
                alt="Clever Choice product 1"
                className="w-full sm:w-1/2 max-w-xs object-cover h-[300px] xl:h-[80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="w-11/12 sm:w-10/12 mx-auto mt-16 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statData.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-4 shadow w-full flex items-center gap-3"
            >
              <div className="bg-[#998e8a] p-3 rounded-full text-white flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#8A6A5A]">
                  {item.value}
                </div>
                <div className="mt-1 text-sm sm:text-base text-gray-600 text-nowrap">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flooring ranges */}
      <section id="products" className="w-10/12 mx-auto px-6 py-16 my-20">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Explore Our Flooring Ranges
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
          {productRanges.map((prod) => (
            <motion.div
              key={prod.title}
              className="group relative rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden"
              whileHover="hover"
            >
              {/* Image wrapper */}
              <div className="relative h-60 w-full overflow-hidden">
                {/* Default image */}
                <motion.img
                  src={prod.image}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  variants={{
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover image */}
                <motion.img
                  src={prod.hoveredImage}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  variants={{
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
                <p className="text-gray-600">{prod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <Whychooseus />

      {/* Popular collections */}
      <PopularCollections />

      {/* Products */}
      <div className="mb-32">
        <Products />
      </div>

      {/* ── Contact ── */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-[#f5efed] overflow-hidden md:px-10">
        <div className="relative w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-6">
          {/* Image block */}
          <div className="relative">
            <img
              src="./images/outdoor.jpg"
              alt="Outdoor flooring"
              className="h-64 sm:h-96 lg:h-[520px] w-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-black/10" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center lg:text-left mb-6 leading-tight font-bold">
              Let's Talk About Your Flooring Project
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Get expert advice, fast quotes, and product guidance from flooring
              specialists who understand quality, durability, and design.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-3 gap-x-3 lg:gap-x-1 xl:gap-5 mb-10 xl:mb-14">
              {/* Phone */}
              <Link
                to="tel:0755267399"
                className="group flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A]">
                  <PhoneCall />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">
                    Call Us
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#8A6A5A] transition">
                    07 5526 7399
                  </div>
                </div>
              </Link>

              {/* Email */}
              <Link
                to="mailto:sales@cleverchoice.com.au"
                className="group flex items-center gap-2 rounded-2xl bg-white px-2 py-4 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A]">
                  <Mail />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 mb-1">
                    Email Us
                  </div>
                  <div className="text-base font-bold text-gray-900 group-hover:text-[#8A6A5A] transition break-all text-nowrap">
                    sales@cleverchoice.com.au
                  </div>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-5 justify-center lg:justify-start">
              <button className="relative overflow-hidden w-full sm:w-auto py-3 px-10 sm:px-14 bg-white text-black text-lg xl:text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-nowrap">
                  Call now
                </span>
                <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center w-full sm:w-auto border-2 border-gray-900 px-8 xl:px-10 py-3 sm:py-4 text-base xl:text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition text-nowrap"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, logo, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <div>{logo}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow">
      <div className="text-3xl font-bold text-[#8A6A5A]">{value}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  );
}
