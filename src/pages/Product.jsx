import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Heart,
  Share2,
  ZoomIn,
  Package,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState("./images/luxury1.webp");
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  const otherImages = [
    "./images/luxury1.webp",
    "./images/category/indoor1.jpg",
    "./images/category/indoor4.jpg",
    "./images/category/indoor5.jpg",
  ];

  const tabs = [
    "Description",
    "Specification",
    "Additional Information",
    "Reviews",
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

  const currentIndex = otherImages.indexOf(selectedImage);

  const handlePrevImage = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : otherImages.length - 1;
    setSelectedImage(otherImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex =
      currentIndex < otherImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(otherImages[newIndex]);
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full mt-16 mb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Breadcrumb with glassmorphism */}
      <div className="w-[88%] mx-auto mb-10 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-sm bg-white/60 border border-white/20 rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-sm"
        >
          <span className="text-sm text-gray-600 hover:text-[#8A6A5A] cursor-pointer transition">
            Home
          </span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600 hover:text-[#8A6A5A] cursor-pointer transition">
            Products
          </span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-sm text-[#8A6A5A] font-medium">
            Luxury Flooring
          </span>
        </motion.div>
      </div>

      {/* Main Product Section */}
      <div className="w-[88%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Image Gallery with enhanced interactions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl overflow-hidden group shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={selectedImage}
                alt="Product"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full h-[700px] object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Navigation buttons with glassmorphism */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevImage}
              className="absolute top-1/2 -translate-y-1/2 left-5 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-20 p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/50"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextImage}
              className="absolute top-1/2 -translate-y-1/2 right-5 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-20 p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/50"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </motion.button>

            {/* Quick action buttons */}
            <div className="absolute top-5 right-5 flex flex-col gap-3 z-20">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="backdrop-blur-md bg-white/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-white/50"
                onClick={() => setShowZoom(!showZoom)}
              >
                <ZoomIn size={20} className="text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="backdrop-blur-md bg-white/80 p-3 rounded-full shadow-lg hover:shadow-xl transition-all border border-white/50"
              >
                <Share2 size={20} className="text-gray-700" />
              </motion.button>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {otherImages.length}
              </span>
            </div>
          </div>

          {/* Enhanced Thumbnail Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-4 gap-4 mt-6"
          >
            {otherImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedImage(image)}
                className={`cursor-pointer rounded-2xl overflow-hidden border-3 transition-all shadow-md hover:shadow-xl ${
                  selectedImage === image
                    ? "border-[#8A6A5A] ring-4 ring-[#8A6A5A]/20"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-28 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Product Details with modern styling */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6"
        >
          {/* Badges with glassmorphism */}
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="py-2.5 px-6 rounded-full backdrop-blur-sm bg-gray-100/80 border border-gray-300/50 text-sm font-bold text-gray-700 shadow-sm"
            >
              Sold Out
            </motion.span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="py-2.5 px-6 rounded-full bg-gradient-to-r from-[#8A6A5A] to-[#735644] text-sm font-bold text-white shadow-lg"
            >
              New Arrival
            </motion.span>
          </div>

          {/* Title with gradient */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 leading-tight"
            >
              Premium Luxury Flooring
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg font-medium"
            >
              by Elite Floors Collection
            </motion.p>
          </div>

          {/* Enhanced Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 backdrop-blur-sm bg-yellow-50/50 border border-yellow-200/50 rounded-2xl px-5 py-3 w-fit"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                >
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">
              4.9{" "}
              <span className="font-normal text-gray-600">(127 reviews)</span>
            </span>
          </motion.div>

          {/* Price section with modern design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 flex-wrap">
              <span className="bg-[#998e8a] text-white py-2.5 px-6 rounded-full text-sm font-bold shadow-md">
                Save 20%
              </span>
              <span className="text-[#D6CEC6] line-through text-2xl font-medium">
                $55.00
              </span>
              <span className="text-[#8A6A5A] text-3xl font-bold">$40.00</span>
              <span className="text-gray-600 text-sm ml-auto">
                Per sq meter
              </span>
            </div>
          </motion.div>

          {/* Tabs Section with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="backdrop-blur-sm bg-white/60 border border-gray-200/50 rounded-3xl p-6 shadow-lg"
          >
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {tabs.map((tab, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-semibold rounded-full transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#8A6A5A] to-[#735644] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Tab Content with animations */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-[180px]"
              >
                {activeTab === "Description" && (
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">
                      Product Description
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      {[
                        "Stylish waterproof flooring",
                        "Perfect for apartments and family friendly residential",
                        "Pet Proof & Durable",
                        "Easy DIY Installation with Clicking System",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <span className="text-[#8A6A5A] mt-1 text-xl group-hover:scale-125 transition-transform">
                            ✓
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Specification" && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold mb-5 text-gray-900">
                      Technical Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Size", value: "1820mm x 225mm" },
                        { label: "Type", value: "Rigid Core" },
                        { label: "Thickness", value: "7mm" },
                        { label: "Installation", value: "Click System" },
                      ].map((spec, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="backdrop-blur-sm bg-gray-50/50 border border-gray-200/50 rounded-2xl p-4 hover:shadow-md transition-all"
                        >
                          <p className="text-sm text-gray-500 mb-1">
                            {spec.label}
                          </p>
                          <p className="font-bold text-gray-900">
                            {spec.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Additional Information" && (
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      {[
                        { label: "SKU", value: "FTCPFCS5013" },
                        { label: "Category", value: "Chevron" },
                        { label: "Tag", value: "15mm" },
                        { label: "Brand", value: "Preference Floors" },
                      ].map((info, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <span className="font-semibold text-gray-800">
                            {info.label}:
                          </span>
                          <span>{info.value}</span>
                        </motion.p>
                      ))}
                    </motion.div>
                  </div>
                )}

                {activeTab === "Reviews" && (
                  <div className="text-center py-8">
                    <Star className="w-16 h-16 mx-auto text-gray-300 mb-3" />
                    <p className="text-gray-600">No reviews yet</p>
                    <button className="mt-4 text-[#8A6A5A] font-semibold hover:underline">
                      Be the first to review
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Quantity & CTA with modern design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center backdrop-blur-sm bg-white/80 border-2 border-gray-300 rounded-2xl shadow-lg overflow-hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-5 py-2 text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                −
              </motion.button>
              <span className="px-6 py-3 text-lg font-bold border-x-2 border-gray-300 min-w-[80px] text-center">
                {quantity}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setQuantity(quantity + 1)}
                className="px-5 py-2 text-xl font-bold hover:bg-gray-100 transition-colors"
              >
                +
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gradient-to-r from-[#8A6A5A] to-[#735644] hover:from-[#735644] hover:to-[#5d453a] text-white font-bold py-4 rounded-2xl transition-all shadow-xl hover:shadow-2xl"
            >
              Add to Cart
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-5 rounded-2xl border-2 transition-all shadow-lg ${
                isWishlisted
                  ? "border-white"
                  : "bg-white border-gray-300 hover:border-red-300"
              }`}
            >
              <Heart
                size={24}
                className={`${
                  isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                } transition-colors`}
              />
            </motion.button>
          </motion.div>

          {/* Enhanced Features with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "Orders over $100",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Warranty",
                desc: "2 years coverage",
                color: "green",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                desc: "30 days guarantee",
                color: "purple",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-sm bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 rounded-2xl p-5 text-center shadow-lg hover:shadow-xl transition-all group"
              >
                <feature.icon
                  size={36}
                  className="text-[#8A6A5A] mx-auto mb-3 group-hover:scale-110 transition-transform"
                />
                <p className="text-md font-bold text-gray-900 mb-1">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200/50"
          >
            {[Package, Award].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-gray-600"
              >
                <Icon size={20} />
                <span className="text-sm font-medium">
                  {i === 0 ? "Quality Guaranteed" : "Certified Product"}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* You may also like section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full mt-32 px-4 md:px-8"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold  mb-4"
          >
            You May Also Like
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Discover more premium flooring options
          </motion.p>
        </div>

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
      </motion.div>
    </div>
  );
}
