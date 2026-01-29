import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { PhoneCall, Mail, Gem, ShieldCheck, Van, ArrowRight, } from "lucide-react";
import Products from "../../components/ui/Products";
import PopularCollections from "../../components/ui/PopularCollections";

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


  
  return (
    <div className="font-sans text-gray-900">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] bg-gradient-to-br from-[#8A6A5A] via-[#735644] to-[#5d453a] overflow-hidden"
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
              <h1 className="text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
                Claver Choice
              </h1>
              <div className="w-32 h-1 bg-white/60 mx-auto mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl text-white/90 mb-8 font-light"
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
              <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer">
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
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* About / Why Choose */}
      <section className="relative bg-gray-100 py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0" />

        <div className="relative max-w-10/12 mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span>Clever Choice</span>
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
              Since 2003, Clever Choice has been delivering premium flooring
              solutions across Australia. From engineered timber and hybrid
              flooring to laminate and bamboo, our products are designed to
              combine beauty, durability, and long-term value.
            </p>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Flooring You Can Trust
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We work closely with manufacturers and suppliers to ensure every
                Clever Choice product meets strict Australian standards. Whether
                for residential or commercial spaces, our flooring is engineered
                for performance, style, and everyday living.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>Carefully selected raw materials and finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>
                    Water-resistant and scratch-resistant technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>Designed for Australian climate conditions</span>
                </li>
              </ul>
            </div>

            {/* Right stats / highlights */}
            <div className="grid grid-cols-2 gap-6">
              <StatCard value="20+" label="Years of Experience" />
              <StatCard value="100+" label="Flooring Options" />
              <StatCard value="Nationwide" label="Supply Network" />
              <StatCard value="Trusted" label="By Builders & Homeowners" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-2">
                <div className="bg-[#998e8a] p-3 rounded-full text-white">
                  <Gem />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Premium Materials
                </h4>
              </div>
              <p className="text-gray-600">
                High-quality timber, hybrid, and laminate flooring built to
                last.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-2">
                <div className="bg-[#998e8a] p-3 rounded-full text-white">
                  <ShieldCheck />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Certified & Durable
                </h4>
              </div>
              <p className="text-gray-600">
                Products tested and certified to meet Australian standards.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-2">
                <div className="bg-[#998e8a] p-3 rounded-full text-white">
                  <Van />
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  Australia-Wide Supply
                </h4>
              </div>
              <p className="text-gray-600">
                Reliable distribution network supporting projects nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring ranges */}
      <section id="products" className="w-10/12 mx-auto px-6 py-16">
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

      {/* Popular collections */}
      <PopularCollections />

      <div className="mb-32">
        <Products />
      </div>

      {/* Contact / CTA */}
      <section className="relative py-28 lg:py-36 bg-[#f5efed] overflow-hidden">
        {/* Soft background accents */}
        {/* <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald-200/40 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-200/40 blur-3xl" /> */}

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          {/* Image block */}
          <div className="relative">
            <img
              src="./images/outdoor.jpg"
              alt="Outdoor flooring"
              className="h-[520px] w-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl  lg:text-5xl text-center mb-6 leading-tight">
              Let’s Talk About Your Flooring Project
            </h2>

            <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Get expert advice, fast quotes, and product guidance from flooring
              specialists who understand quality, durability, and design.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
              {/* Phone */}
              <Link
                to={"tel:0755267399"}
                className="group flex items-center gap-4 rounded-2xl bg-white px-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                  <PhoneCall />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Call Us</div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-[#8A6A5A] transition">
                    07 5526 7399
                  </div>
                </div>
              </Link>

              {/* Email */}
              <Link
                to="mailto:sales@cleverchoice.com.au"
                className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-gray-900 break-all group-hover:text-[#8A6A5A] transition whitespace-no">
                    sales@cleverchoice.com.au
                  </div>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="relative overflow-hidden py-3 px-14 bg-white text-black text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Call now
                </span>

                <span
                  className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </button>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center border-2 border-gray-900 px-10 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
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
