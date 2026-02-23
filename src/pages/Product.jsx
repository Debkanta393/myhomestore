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
  CircleCheckBig,
  Dot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "../../components/ui/Reviews";
import WhyChooseus from "../../components/ui/WhyChooseus";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductByTypeName } from "../../service/product";
import { addCartItems } from "../../service/cart";

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);

  // const [activeTab, setActiveTab] = useState("Description");
  // const [quantity, setQuantity] = useState(1);
  // const [isWishlisted, setIsWishlisted] = useState(false);
  // const [showZoom, setShowZoom] = useState(false);
  const [calculatorData, setCalculatorData] = useState({
    totalNeeded: 0,
    wastage: null,
  });
  const [cartonsNeeded, setCartonsNeeded] = useState(null);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState();
  const [productImages, setProductImages] = useState([]);
  const [packSize, setPackSize] = useState(1.1098);
  const [openAccordion, setOpenAccordion] = useState("Description");
  const params = useParams();
  const { pathname } = useLocation();

  const tabs = [
    "Description",
    "Specifications",
    "Dimensions",
    "Installation",
    "Warranty",
    "Delivery",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

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

  const { id } = params;
  const { type, productName } = params;

  useEffect(() => {
    const getProducts = async () => {
      const response = await dispatch(
        getProductByTypeName({ type, productName }),
      );
      if (response.payload.data.success) {
        setProductData(response.payload.data.data[0]);
        setProductImages(response.payload.data.data[0].productImage);
      }
    };
    getProducts();
  }, [dispatch]);

  console.log(productData);

  const handlePrevImage = () => {
    // const newIndex =
    //   currentIndex > 0 ? currentIndex - 1 : otherImages.length - 1;
    // setSelectedImage(otherImages[newIndex]);
    setSelectedImage((prev) =>
      prev > 0 ? prev - 1 : productImages.length - 1,
    );
  };

  const handleNextImage = () => {
    // const newIndex =
    //   currentIndex < otherImages.length - 1 ? currentIndex + 1 : 0;
    // setSelectedImage(otherImages[newIndex]);
    setSelectedImage((prev) => (productImages.length - 1 ? prev + 1 : 0));
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
      setCartonsNeeded(Math.ceil(totalCartons));
    };
    calculatorHandler();
  }, [calculatorData.totalNeeded, calculatorData.wastage]);

  console.log(activeTab);
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
          className="w-full sticky top-32"
        >
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 group shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={productImages[selectedImage]?.url}
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
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center">
              {[...Array(productData?.productImage?.length)].map((_, index) => (
                <span className="text-white text-sm font-medium">
                  <Dot size={30} />
                </span>
              ))}
            </div>
          </div>

          {/* Enhanced Thumbnail Gallery */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-4 gap-4 mt-6"
           >
            {productData?.productImage?.map((image, index) => (
              <>
                {image.url != selectedImage && (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(image.url)}
                    className={`cursor-pointer border-3 transition-all shadow-md hover:shadow-xl ${
                      selectedImage === image
                        ? "border-[#8A6A5A] ring-4 ring-[#8A6A5A]/20"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-28 object-cover"
                    />
                  </motion.div>
                )}
              </>
            ))}
          </motion.div> */}

          <AnimatePresence mode="wait">
            {/* <motion.img
              key={selectedImage}
              src={selectedImage}
              alt="Product"
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="w-full h-[500px] object-cover mt-10"
            /> */}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <h3 className="text-2xl font-semibold mt-16 mb-5">Color Options in this range</h3>
            <div className="flex flex-wrap gap-5 text-center">
              {[
                "Biscayne",
                "Rainier",
                "Caramel",
                "Jasper",
                "Island Mist",
                "Hatteras",
                "Salt Flat",
              ].map((color, index) => (
                <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.3, delay: index * 0.5}}
                 key={index}>
                  <div className="w-28 h-16 bg-[#CB9677] mb-2"></div>
                  <span className="text-lg">{color}</span>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </motion.div>

        {/* Product Details (right section)*/}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6 sticky top-0"
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
              {productData?.productName}
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
              {productData?.description}
            </motion.p>
          </div>

          {/* Price section with modern design */}
          {/* <motion.div
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
          </motion.div> */}

          {/* Price section */}
          <motion.div className="flex gap-10 items-center justify-evenly my-10">
            <div className="text-center space-y-3">
              <h3 className="text-[#8A6A5B] text-xl font-semibold">
                Supply + Install
              </h3>
              <p className="text-2xl font-extrabold ">
                $38{" "}
                <span className="text-lg font-normal">
                  /m <sup>2</sup>
                </span>
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-[#8A6A5B] text-xl font-semibold">
                Supply Only
              </h3>
              <p className="text-2xl font-extrabold ">
                $28{" "}
                <span className="text-lg font-normal">
                  /m <sup>2</sup>
                </span>
              </p>
            </div>
          </motion.div>

          {/* Qualtiny calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="mt-10"
          >
            <h2 className="text-3xl font-semibold">Quantity Calculator</h2>
            <form action="" className="mt-3">
              <div className="space-y-3 mt-10">
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
                      id="15%"
                      value={15}
                      onChange={(e) => calculatorDataHandler(e)}
                    />
                    <label htmlFor="">15%</label>
                  </div>
                </div>
                <p className="text-lg mt-5 text-black font-medium">
                  Pack size: 1.1098 m² per carton
                </p>
              </div>
              <div className="mt-10 space-y-2">
                <p className="flex justify-between items-center font-semibold text-xl">
                  <span className="text-lg font-normal text-[#666E7C]">
                    Cartons Required:
                  </span>{" "}
                  6 cartons
                </p>
                <p className="flex justify-between items-center font-semibold text-xl">
                  <span className="text-lg font-normal text-[#666E7C]">
                    Area Supplied:
                  </span>
                  10.44 m²
                </p>
              </div>
            </form>
          </motion.div>

          {/* Price summery section */}
          <motion.div className="space-y-4 mt-10">
            <h3 className="text-2xl font-semibold">Price Summary</h3>
            <div className="space-y-2">
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                Subtotal (Supply + Install):{" "}
                <span className="text-xl font-semibold text-black">
                  $396.81
                </span>
              </p>
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                GST (10%):{" "}
                <span className="text-xl font-semibold text-black">$39.68</span>
              </p>
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                TOTAL{" "}
                <span className="text-xl font-semibold text-black">
                  $436.49
                </span>
              </p>
            </div>
          </motion.div>

          {/* Buttons section */}
          <motion.div className="w-full flex items-center gap-10 mt-20">
            <button
              className="border border-[#998E8A] text-[#998E8A] py-3 text-xl w-6/12 cursor-pointer"
              onClick={() => dispatch(addCartItems(productData._id))}
            >
              View in showroom
            </button>
            <button className="bg-[#998E8A] py-3 text-white text-xl w-6/12 cursor-pointer">
              Add to Cart
            </button>
          </motion.div>

          <p className="text-lg font-semibold text-center">
            Call Us on 0467 747 837 for bulk pricing
          </p>

          {/* Feature images */}
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="flex items-center gap-5"
           >
            {productData?.functionsImage?.map((image, index) => (
              <img src={image.url} className="w-24 h-24" />
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Product highlights section */}
      <motion.div className="flex justify-between gap-10 mt-20 w-10/12 mx-auto">
        <h3 className="text-4xl font-bold">Product Highlights</h3>
        <div className="flex items-center gap-32 mr-28">
          <div className="space-y-2">
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
              Thickness: 8mm
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Board
              Size: 1215 x 196mm
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Pack
              Coverage: 1.7404m²
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Water
              Rating: Waterproof
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
              Warranty: 20 Years
            </p>
            <p className="text-xl font-semibold flex items-center gap-2">
              <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Wear
              Layer: AC4
            </p>
          </div>
        </div>
      </motion.div>

      {/* Specification and Details section */}
      <motion.div className="w-10/12 mx-auto mt-20">
        <h3 className="text-4xl font-bold">Specifications & Details</h3>

        {/* Tab section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {/* TAB HEADERS */}
          <div className="flex border-b border-gray-200 mt-5">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-2xl font-normal transition relative
            ${
              activeTab === tab
                ? "text-[#8A6A5B] font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
              >
                {tab}

                {/* Active underline */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#8A6A5B]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[180px] px-6 py-6"
          >
            {activeTab === "Description" && (
              <div className="space-y-4">
                <p>{productData?.description}</p>
              </div>
            )}

            {activeTab === "Specifications" && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-5">
                  {Object.entries(
                    productData.specifications instanceof Map
                      ? Object.fromEntries(productData.specifications)
                      : productData.specifications,
                  ).map(([key, value]) => (
                    <Specification key={key} label={key} value={value} />
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
                  <AdditionalInformation label="SKU" value={productData.sku} />
                  <AdditionalInformation
                    label="Thikness"
                    value={productData.thickness}
                  />
                  <AdditionalInformation
                    label="Category"
                    value={productData.category}
                  />
                  <AdditionalInformation
                    label="Range"
                    value={productData.range}
                  />
                  <AdditionalInformation
                    label="Brand"
                    value={productData.brand}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Reviews */}
      <Reviews />

      {/* Why choose us */}
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

function Specification({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-sm bg-gray-50/50 flex items-center gap-5 border border-gray-200/50 rounded-2xl p-4 hover:shadow-md transition-all"
    >
      <p className="text-md text-gray-600 mb-1">{label}:</p>
      <p className="font-bold text-gray-900">{value}</p>
    </motion.div>
  );
}

function AdditionalInformation({ label, value }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      // transition={{ delay: i * 0.1 }}
      className="text-sm text-gray-600 flex items-center gap-2"
    >
      <span className="font-semibold text-gray-800">{label}:</span>
      <span>{value}</span>
    </motion.p>
  );
}
