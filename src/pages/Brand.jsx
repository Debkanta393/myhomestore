import React, { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Award,
  Shield,
  Truck,
  Clock,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Package,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColor, setSelectedColor] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Basin Mixers",
      image: "./images/category/indoor1.jpg",
      count: 45,
    },
    {
      id: 2,
      name: "Wall Mixers",
      image: "./images/category/indoor2.jpg",
      count: 32,
    },
    {
      id: 3,
      name: "Shower Sets",
      image: "./images/category/indoor3.jpg",
      count: 28,
    },
    {
      id: 4,
      name: "Bath Mixers",
      image: "./images/category/indoor4.jpg",
      count: 22,
    },
  ];

  // Collections data
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
  ];

  // Color options
  const colors = [
    { id: 1, name: "Chrome", hex: "#C0C0C0", code: "CH" },
    { id: 2, name: "Matte Black", hex: "#1a1a1a", code: "MB" },
    { id: 3, name: "Brushed Nickel", hex: "#8b7d6b", code: "BN" },
    { id: 4, name: "Gun Metal", hex: "#4a4a4a", code: "GM" },
    { id: 5, name: "Brushed Gold", hex: "#d4af37", code: "BG" },
    { id: 6, name: "Rose Gold", hex: "#b76e79", code: "RG" },
  ];

  // New arrivals products
  const newProducts = [
    {
      id: 1,
      sku: "FN-339101UU-LF",
      name: "Fienza Lillian Lever Basin Set with Ceramic Handle",
      image: "./images/luxury1.webp",
      price: 412.0,
      originalPrice: null,
      category: "Basin Mixers",
      collection: "Lillian",
      rating: 4.8,
      reviews: 24,
      colors: ["CH", "MB", "BN"],
      inStock: false,
      isNew: true,
      badges: ["Popular", "Premium"],
    },
    {
      id: 2,
      sku: "FN-228119",
      name: "Fienza Kaya Up Wall Basin/Bath Mixer with Spout",
      image: "./images/luxury2.webp",
      price: 281.0,
      originalPrice: null,
      category: "Wall Mixers",
      collection: "Kaya",
      rating: 4.9,
      reviews: 38,
      colors: ["CH", "MB", "BN", "GM"],
      inStock: false,
      isNew: true,
      badges: ["Best Seller"],
    },
    {
      id: 3,
      sku: "FN-231106GM",
      name: "Fienza Axle 160/200mm Wall Basin/Bath Mixer Set",
      image: "./images/luxury3.webp",
      price: 336.0,
      originalPrice: null,
      category: "Bath Mixers",
      collection: "Axle",
      rating: 4.7,
      reviews: 19,
      colors: ["CH", "BN", "GM", "BG"],
      inStock: false,
      isNew: true,
      badges: ["Featured"],
    },
    {
      id: 4,
      sku: "FN-228104",
      name: "Fienza Kaya 160/200mm Spout Basin/Bath Wall Mounted Mixer Set",
      image: "./images/luxury1.webp",
      price: 305.0,
      originalPrice: 339.0,
      category: "Wall Mixers",
      collection: "Kaya",
      rating: 4.6,
      reviews: 31,
      colors: ["CH", "MB"],
      inStock: false,
      isNew: false,
      badges: ["Sale"],
    },
    {
      id: 5,
      sku: "FN-228103UB",
      name: "Fienza Kaya Curved Basin Mixer",
      image: "./images/luxury2.webp",
      price: 162.0,
      originalPrice: null,
      category: "Basin Mixers",
      collection: "Kaya",
      rating: 4.5,
      reviews: 42,
      colors: ["CH", "MB", "BN"],
      inStock: false,
      isNew: true,
      badges: ["Budget Friendly"],
    },
    {
      id: 6,
      sku: "FN-202103CC",
      name: "Fienza Eleanor Shepherds Crook Basin Mixer",
      image: "./images/luxury3.webp",
      price: 254.0,
      originalPrice: null,
      category: "Basin Mixers",
      collection: "Eleanor",
      rating: 4.9,
      reviews: 27,
      colors: ["CH", "BN", "BG"],
      inStock: true,
      isNew: false,
      badges: ["In Stock", "Popular"],
    },
    {
      id: 7,
      sku: "FN-411109-C",
      name: "Fienza Empire Slim Stainless Steel Shower Ceiling Dropper Set",
      image: "./images/luxury1.webp",
      price: 264.0,
      originalPrice: null,
      category: "Shower Sets",
      collection: "Empire",
      rating: 4.8,
      reviews: 15,
      colors: ["CH", "MB", "BN", "GM"],
      inStock: false,
      isNew: true,
      badges: ["New Arrival"],
    },
    {
      id: 8,
      sku: "FN-411109-A",
      name: "Fienza Empire Slim Gooseneck Shower Arm Set",
      image: "./images/luxury2.webp",
      price: 310.0,
      originalPrice: null,
      category: "Shower Sets",
      collection: "Empire",
      rating: 4.7,
      reviews: 22,
      colors: ["CH", "MB", "GM", "BG"],
      inStock: false,
      isNew: true,
      badges: ["Premium"],
    },
  ];



  const products = [
    {
      id: 1,
      image: "./images/luxury1.webp",
      heading: "Premium Oak Flooring",
      desc: "Elegant waterproof flooring with natural wood texture",
      category: "Luxury",
      brand: "Elite Floors",
      price: 100,
      rating: 4.5,
      inStock: true,
      color: "Natural Oak",
      size: "M",
      material: "Hybrid Core",
      isNew: true,
      onSale: false,
      tags: ["Premium", "Best Seller"],
    },
    {
      id: 2,
      image: "./images/luxury2.webp",
      heading: "Walnut Heritage Series",
      desc: "Rich walnut tones with superior durability",
      category: "Premium",
      brand: "Heritage Co",
      price: 250,
      rating: 4.8,
      inStock: true,
      color: "Dark Walnut",
      size: "L",
      material: "Engineered Wood",
      isNew: false,
      onSale: true,
      tags: ["Featured"],
    },
    {
      id: 3,
      image: "./images/luxury3.webp",
      heading: "Coastal White Pine",
      desc: "Light and airy flooring for modern spaces",
      category: "Contemporary",
      brand: "Modern Living",
      price: 150,
      rating: 5.0,
      inStock: false,
      color: "White Wash",
      size: "XL",
      material: "Bamboo Composite",
      isNew: true,
      onSale: false,
      tags: ["Eco-Friendly"],
    },
    {
      id: 4,
      image: "./images/luxury1.webp",
      heading: "Industrial Concrete",
      desc: "Urban style with exceptional resistance",
      category: "Industrial",
      brand: "Urban Floor",
      price: 80,
      rating: 4.2,
      inStock: true,
      color: "Concrete Grey",
      size: "S",
      material: "SPC Core",
      isNew: false,
      onSale: true,
      tags: ["Budget Friendly"],
    },
  ];

  // Special offers
  const specialOffers = [
    {
      id: 1,
      title: "Summer Sale",
      discount: "20% OFF",
      description: "Selected Kaya Collection items",
      image: "./images/luxury1.webp",
      endDate: "Jan 31, 2026",
      code: "SUMMER20",
    },
    {
      id: 2,
      title: "Bundle Deal",
      discount: "Save $150",
      description: "Complete bathroom mixer set",
      image: "./images/luxury2.webp",
      endDate: "Feb 15, 2026",
      code: "BUNDLE150",
    },
    {
      id: 3,
      title: "New Customer",
      discount: "15% OFF",
      description: "First order discount",
      image: "./images/luxury3.webp",
      endDate: "Ongoing",
      code: "WELCOME15",
    },
  ];

  // Warranty features
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Extended Warranty",
      description: "Up to 15 years on selected products",
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Australian certified products",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders over $300",
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "Solid brass construction",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
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
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
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
        {/* Background pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}></div>
        </div> */}

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
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                Fienza
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
              <button className="bg-white text-[#8A6A5A] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
                Shop Collection
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
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

      {/* Brand Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Brand Story</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Fienza, we pride ourselves on supplying products of the
                highest standard. Our commitment to excellence has made us a
                trusted name in quality bathroom solutions across Australia and
                beyond.
              </p>
              <p>
                With an extensive range of contemporary and classic designs, we
                offer products that combine superior functionality with stunning
                aesthetics. Every piece is crafted with attention to detail and
                built to last, backed by our industry-leading warranty.
              </p>
              <p>
                Our dedicated After Sales Service and Warranty team ensures
                peace of mind for both retailers and end users, providing
                support when you need it most.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { number: "15+", label: "Years Warranty" },
              { number: "500+", label: "Products" },
              { number: "10K+", label: "Happy Customers" },
              { number: "100%", label: "Australian Certified" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center p-8 rounded-3xl backdrop-blur-sm bg-white/60 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-5xl font-bold text-[#8A6A5A] mb-3">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block border border-[#8A6A5A] w-fit py-1 px-4 rounded-4xl mx-auto">
              Explore
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Categories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our most sought-after product categories
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {category.count} Products
                    </p>
                    <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-all flex items-center gap-2 w-fit">
                      Explore <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Collections Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer `}
              >
                <div
                  className={`relative overflow-hidden h-80`}
                 >
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
                      <h3 className="text-4xl font-extrabold text-white mb-3">
                        {collection.name}
                      </h3>
                      <p className="text-white/90 text-lg mb-2">
                        {collection.description}
                      </p>
                      <p className="text-white/70 text-sm mb-6">
                        {collection.products} Products Available
                      </p>
                      <button className="bg-white text-[#8A6A5A] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
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

      {/* Popular Colors Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block border border-[#8A6A5A] w-fit py-1 px-4 rounded-4xl mx-auto">
              Finishes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Colours
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our premium range of finishes to match your style
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {colors.map((color) => (
              <motion.div
                key={color.id}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                onClick={() => setSelectedColor(color.name)}
                className={`cursor-pointer group ${
                  selectedColor === color.name
                    ? "ring-4 ring-[#8A6A5A] ring-offset-4"
                    : ""
                } rounded-3xl`}
              >
                <div className="backdrop-blur-sm bg-white/80 border border-gray-200/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all">
                  <div
                    className="w-full h-32 rounded-2xl mb-4 shadow-inner"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <h3 className="font-bold text-gray-900 text-center mb-1">
                    {color.name}
                  </h3>
                  <p className="text-gray-500 text-sm text-center font-mono">
                    {color.code}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center mb-12"
          >
            <div>
              <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block border border-[#8A6A5A] w-fit py-1 px-4 rounded-4xl">
                Latest Products
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                New Arrivals
              </h2>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-4 mt-6 md:mt-0">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-[#8A6A5A] focus:outline-none w-64"
                />
              </div>
              <button className="backdrop-blur-sm bg-white border-2 border-gray-300 p-3 rounded-full hover:bg-gray-50 transition-all">
                <Filter size={20} className="text-gray-700" />
              </button>
            </div>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-3 mb-12 overflow-x-auto pb-4"
          >
            {["All", ...categories.map((c) => c.name)].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#8A6A5A] to-[#735644] text-white shadow-lg"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-[#8A6A5A]"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto">
                      <AnimatePresence mode="wait">
            
                        <motion.div
                          variants={containerVariants}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                        >
                          {products.map((item) => (
                            <motion.div
                              key={item.id}
                              variants={cardVariants}
                              className="group relative rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-100"
                            >
                              {/* Compact Image Container */}
                              <div className="relative aspect-[4/4] overflow-hidden bg-gray-50">
                                <img
                                  src={item.image}
                                  alt={item.heading}
                                  loading="lazy"
                                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
                                {/* Compact Wishlist Button */}
                                <button
                                  aria-label="Add to wishlist"
                                  className="absolute top-2 right-2 z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white hover:scale-110 transition-all duration-300"
                                >
                                  <Heart className="w-4 h-4 text-gray-700 hover:text-red-500" />
                                </button>
            
                                {/* Badges */}
                                <div className="absolute top-2 left-2 z-20 flex flex-col gap-1">
                                  {item.isNew && (
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-[#998e8a] text-white rounded-md shadow-sm">
                                      New
                                    </span>
                                  )}
                                  {item.onSale && (
                                    <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-white text-black rounded-md shadow-sm">
                                      Sale
                                    </span>
                                  )}
                                </div>
            
                                {!item.inStock && (
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                                    <span className="bg-white text-gray-900 px-3 py-1 rounded-lg font-semibold text-xs">
                                      Out of Stock
                                    </span>
                                  </div>
                                )}
                              </div>
            
                              {/* Compact Product Info */}
                              <div className="p-3 space-y-2">
                                <div className="flex items-start justify-between gap-2">
                                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                                    {item.heading}
                                  </h3>
                                </div>
            
                                <p className="text-xs text-gray-500 line-clamp-1">
                                  {item.brand}
                                </p>
            
                                {/* Compact Rating */}
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-400 text-xs">★</span>
                                  <span className="text-xs font-medium text-gray-700">
                                    {item.rating}
                                  </span>
                                </div>
            
                                {/* Compact Price */}
                                <div className="flex items-baseline gap-2">
                                  <span className="text-lg font-bold text-gray-900">
                                    ${item.price}
                                  </span>
                                  <span className="text-xs text-gray-400 line-through">
                                    ${item.price * 2}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
          </AnimatePresence>
                    </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-[#8A6A5A] to-[#735644] text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
              Load More Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#8A6A5A] font-semibold text-sm uppercase tracking-widest mb-4 block border border-[#8A6A5A] w-fit py-1 px-4 rounded-4xl mx-auto">
              Limited Time
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Special Offers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Don't miss out on these exclusive deals for Fienza products
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {specialOffers.map((offer) => (
              <motion.div
                key={offer.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <div className="relative h-96">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="bg-[#8A6A5A] text-white px-6 py-1 rounded-full font-normal text-xl w-fit mb-4 shadow-2xl">
                      {offer.discount}
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-white/90 mb-4">{offer.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                      <Clock size={16} className="text-white/80" />
                      <span className="text-white/80 text-sm">
                        Ends: {offer.endDate}
                      </span>
                    </div>

                    {/* <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-4 mb-4">
                      <p className="text-white/80 text-xs mb-1">Promo Code:</p>
                      <p className="text-white font-bold text-xl font-mono">
                        {offer.code}
                      </p>
                    </div> */}

                    <button className="bg-white text-[#8A6A5A] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center gap-2 w-fit">
                      Shop Now <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-20 px-4 bg-[#f5efed]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-black/80 font-semibold text-sm uppercase tracking-widest mb-4 block border border-black w-fit py-1 px-4 rounded-4xl mx-auto">
              Peace of Mind
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Fienza Warrenty
            </h2>
            <p className="text-black/90 text-lg max-w-3xl mx-auto leading-relaxed">
              At Fienza we pride ourselves on supplying products of a high
              standard. Our warranty periods are extremely competitive and
              practically designed to give the end user peace of mind.
            </p>
          </motion.div>

          {/* Warranty Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {warrantyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-md bg-black/30 rounded-3xl p-8 text-center transition-all"
              >
                <feature.icon size={48} className="text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Product Warranty Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-black/30 rounded-3xl p-10 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-extrabold text-white mb-8 text-center">
              Product Warranty Coverage
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-white/90">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-green-300 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-bold mb-1">Tapware & Mixers</h4>
                    <p className="text-sm text-white/70">
                      Up to 15 years warranty on selected products
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-green-300 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-bold mb-1">Shower Systems</h4>
                    <p className="text-sm text-white/70">
                      Comprehensive 10-year coverage
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-green-300 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-bold mb-1">Bathroom Accessories</h4>
                    <p className="text-sm text-white/70">
                      5-year manufacturer guarantee
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-green-300 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="font-bold mb-1">Expert Support</h4>
                    <p className="text-sm text-white/70">
                      Dedicated After Sales Service team
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="bg-white text-[#8A6A5A] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105">
                Download Warranty Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/80 border border-gray-200/50 rounded-3xl p-12 shadow-2xl"
          >
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Explore our complete range of premium Fienza products and create
              the bathroom of your dreams with quality you can trust.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-gradient-to-r from-[#8A6A5A] to-[#735644] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all hover:scale-105">
                Browse All Products
              </button>
              <button className="bg-white border-2 border-gray-300 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
