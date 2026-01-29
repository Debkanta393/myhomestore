import React, { useEffect, useState } from "react";
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
  Check,
  ChevronDown,
  HeartIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "../../components/ui/Reviews";
import WhyChooseus from "../../components/ui/WhyChooseus";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState("./images/luxury1.webp");
  const [activeTab, setActiveTab] = useState("Description");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    totalNeeded: 0,
    wastage: null,
  });
  const [cartonsNeeded, setCartonsNeeded] = useState(null);
  const [price, setPrice] = useState(null);
  const [packSize, setPackSize] = useState(1.1098);
  const [openAccordion, setOpenAccordion] = useState("Description");

  const otherImages = [
    "./images/luxury1.webp",
    "./images/category/indoor1.jpg",
    "./images/category/indoor4.jpg",
    "./images/category/indoor5.jpg",
  ];

  const tabs = ["Description", "Specification", "Additional Information"];

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

  const calculatorDataHandler = (e) => {
    console.log(e.target.name);
    setCalculatorData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(calculatorData.totalNeeded);
  console.log(calculatorData.wastage);

  useEffect(() => {
    if (!calculatorData.totalNeeded && calculatorData.wastage == null) {
      return;
    }
    const calculatorHandler = () => {
      let totalCartons =
        calculatorData.wastage != 0
          ? (calculatorData.totalNeeded * (calculatorData.wastage / 100)) /
            packSize
          : calculatorData.totalNeeded / packSize;
      setCartonsNeeded(totalCartons);
    };
    calculatorHandler();
  }, [calculatorData.totalNeeded, calculatorData.wastage]);

  return (
    <div className="w-full mb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Breadcrumb with glassmorphism */}
      <div className="w-10/12 mx-auto mb-10 pt-6">
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
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        {/* Image Gallery with enhanced interactions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 group shadow-xl">
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
                className="w-full h-[500px] object-cover"
              />
            </AnimatePresence>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Navigation buttons with glassmorphism */}
            {/* <motion.button
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
            </motion.button> */}

            {/* Quick action buttons */}
            {/* <div className="absolute top-5 right-5 flex flex-col gap-3 z-20">
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
            </div> */}

            {/* Image counter */}
            {/* <div className="absolute bottom-5 left-1/2 -translate-x-1/2 backdrop-blur-md bg-black/40 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {otherImages.length}
              </span>
            </div> */}
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
                className={`cursor-pointer border-3 transition-all shadow-md hover:shadow-xl ${
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
              className="w-full h-[500px] object-cover mt-10"
            />
          </AnimatePresence>
        </motion.div>

        {/* Product Details with modern styling */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6 sticky top-10"
        >
          {/* Badges with glassmorphism */}
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-md font-bold text-black"
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

            {/* Enhanced Rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 backdrop-blur-sm bg-yellow-50/50 w-fit mt-5"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                  >
                    <Star
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm font-bold text-gray-800">
                <span className="text-md text-gray-600">(200 reviews)</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg font-medium mt-5"
            >
              Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit
              massa aenean. Nisl ornare pharetra quis non aliquet.
            </motion.p>
          </div>

          {/* Price section with modern design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xl font-bold text-black">
                $300{" "}
                <span className="font-normal text-[#666E7C]">/sq meter</span>
              </span>
              <span className="text-red-600 font-bold text-lg">- 20%</span>
              <span className="line-through text-xl font-medium text-[#666E7C]">
                $500
              </span>
            </div>
          </motion.div>

          <motion.div className="w-full flex items-center gap-10">
            <button className="bg-[#998E8A] py-3 text-white text-xl w-6/12 cursor-pointer">
              Add to cart
            </button>
            <button className="border border-[#998E8A] text-[#998E8A] py-3 text-xl flex items-center w-6/12 justify-center gap-5 cursor-pointer">
              <Heart size={24} className="text-[#998E8A] transition-colors" />
              Wishlist
            </button>
          </motion.div>

          {/* Qualtiny calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="mt-10"
          >
            <h2 className="text-3xl font-semibold">Quantity Calculator</h2>
            <p className="text-xl mt-5 text-black font-bold">
              Pack size: 1.1098 m² per carton
            </p>
            <form action="" className="mt-3">
              <div className="flex xl:flex-row flex-col xl:items-start gap-x-10 gap-y-2 mt-10">
                <div>
                  <label htmlFor="" className="text-xl text-[#666E7C]">
                    Total square meters needed
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter m²"
                    className="w-72 border border-[#E7E9EB] p-2 mt-2 active:border-[#E7E9EB] focus:border-[#E7E9EB]"
                    name="totalNeeded"
                    onChange={(e) => calculatorDataHandler(e)}
                  />
                </div>
                <div>
                  <label htmlFor="wastage" className="text-lg text-[#666E7C]">
                    Wastage
                  </label>
                  <div className="flex gap-3 mt-3">
                    <input
                      type="radio"
                      name="wastage"
                      id="0%"
                      value={0}
                      onChange={(e) => calculatorDataHandler(e)}
                      className="text-[#8A6A5B]"
                    />
                    <label htmlFor="wastage">0%</label>
                    <input
                      type="radio"
                      name="wastage"
                      id="10%"
                      value={10}
                      onChange={(e) => calculatorDataHandler(e)}
                    />
                    <label htmlFor="">10%</label>
                    <input
                      type="radio"
                      name="wastage"
                      id="20%"
                      value={20}
                      onChange={(e) => calculatorDataHandler(e)}
                    />
                    <label htmlFor="">20%</label>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-lg">
                  <span className="font-semibold text-[#666E7C]">
                    Cartons Needed:
                  </span>{" "}
                  {cartonsNeeded}
                </p>
                <p className="text-lg mt-1 text-[#666E7C]">
                  <span className="font-semibold">Total Amount:</span>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Accordian section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {tabs.map((tab, index) => {
              const isOpen = openAccordion === tab;

              return (
                <div key={index} className="overflow-hidden">
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : tab)}
                    className="w-full flex justify-between items-center py-4 text-left hover:bg-gray-50 transition"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">{tab}</h3>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-gray-500"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={tab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="min-h-[180px] px-6 pb-6"
                      >
                        {tab === "Description" && (
                          <div className="space-y-3">
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
                                  <span className="leading-relaxed">
                                    {item}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {tab === "Specification" && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              {[
                                { label: "Size", value: "1820mm x 225mm" },
                                { label: "Type", value: "Rigid Core" },
                                { label: "Thickness", value: "7mm" },
                                {
                                  label: "Installation",
                                  value: "Click System",
                                },
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

                        {tab === "Additional Information" && (
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
                className="backdrop-blur-sm bg-gradient-to-br from-white to-gray-50/50 text-center transition-all group flex flex-col items-center"
              >
                <div className="p-3 w-fit rounded-full border border-[#8A6A5A]">
                  <feature.icon
                    size={36}
                    className="text-[#8A6A5A] mx-auto group-hover:scale-110 transition-transform font-normal"
                  />
                </div>
                <p className="text-md font-bold text-gray-900 mb-1">
                  {feature.title}
                </p>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <Reviews />

      <div className="mt-20">
        <WhyChooseus />
      </div>

      {/* You may also like section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full mt-20 px-4 md:px-8"
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

        <div className="max-w-10/12 mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 relative z-10"
            >
              {products.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="group relative bg-white overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative bg-gray-50">
                    <img
                      src={item.image}
                      alt={item.heading}
                      loading="lazy"
                      className="block h-[220px] lg:h-[280px] 2xl:h-[400px] w-full object-cover transition-transform duration-500"
                    />

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <button
                      aria-label="Add to wishlist"
                      className="absolute top-2 right-2 z-20 bg-[#998E8A] backdrop-blur-sm p-1.5 rounded-full shadow-sm hover:bg-white hover:scale-110 transition-all duration-300"
                    >
                      <HeartIcon className="w-5 h-5 text-white hover:text-red-500" />
                    </button>

                    <div className="absolute top-2 left-2 z-20 flex gap-3">
                      {item.isNew && (
                        <span className="inline-block px-4 py-1 text-md tracking-wide bg-white text-black font-semibold">
                          New
                        </span>
                      )}
                      {item.onSale && (
                        <span className="inline-block px-4 py-1 text-md font-semibold tracking-wide bg-white text-black">
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

                  <div className="py-5 space-y-2">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                      <span className="text-lg font-medium text-gray-700">
                        (200)
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <p className="text-2xl font-bold text-gray-900 line-clamp-1">
                        Hydro Laminate Tiles
                      </p>
                    </div>

                    <p className="text-lg text-gray-500 line-clamp-1">
                      by Elite Floors Collection
                    </p>

                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${item.price}
                      </span>
                      <span className="text-red-600 font-bold text-base">
                        50%
                      </span>
                      <span className="text-base text-gray-400 line-through">
                        ${item.price * 2}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="bg-[#998E8A] px-10 py-3 text-white flex justify-center items-center mx-auto mt-10 text-lg">
          View All
        </button>
      </motion.div>
    </div>
  );
}
