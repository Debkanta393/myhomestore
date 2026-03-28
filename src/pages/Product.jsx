import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Share2,
  ZoomIn,
  HeartIcon,
  CircleCheckBig,
  Dot,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "../components/ui/Reviews";
import WhyChooseus from "../components/ui/WhyChooseus";
import { useParams } from "react-router";
import { getProductByRange } from "../features/product/product";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../features/cart/cart";
import LazyLoader from "../components/ui/LazyLoader";
import { v4 as uuidv4 } from "uuid";
import ProductSkeleton from "../components/skeleton/ProductSkeleton";

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
    isNew: false,
    onSale: true,
    tags: ["Budget Friendly"],
  },
];

export default function Product() {
  const params = useParams();
  const { range, productName } = params;

  const [selectedImage, setSelectedImage] = useState(0);
  const [calculatorData, setCalculatorData] = useState({
    totalNeeded: null,
    wastage: 10,
  });
  const [sizeData, setSizeData] = useState({ cartons: "", area: "" });
  const [priceData, setPriceData] = useState({
    subTotal: "0",
    gst: "10",
    total: "0",
  });
  const dispatch = useDispatch();
  const [packSize, setPackSize] = useState();
  const [showZoom, setShowZoom] = useState(false);
  const [priceTab, setPriceTab] = useState([
    { id: 1, heading: "Supply + Install", desc: "", active: true },
    { id: 2, heading: "Supply Only", desc: "", active: false },
    { id: 3, heading: "Request Quote", desc: "POA", active: false },
  ]);
  const [rangeProducts, setRangeProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const tabs = [
    "Description",
    "Specifications",
    "Installation",
    "Warranty",
    "Delivery",
  ];
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const { loading } = useSelector((state) => state.cart);
  const [message, setMessage] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [productLoading, setProductLoading] = useState(true);

  const deslugify = (slug) =>
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  // ✅ FIX #9: added range and productName to deps
  useEffect(() => {
    const getRangeProduct = async () => {
      setProductLoading(true);
      const deslugifyRange = deslugify(range);
      const deslugifyName = deslugify(productName);
      const response = await dispatch(getProductByRange(deslugifyRange));
      if (response.payload?.success) {
        setRangeProducts(response.payload.product);
        const found = response.payload.product.find(
          (item) =>
            item.productName?.toLowerCase().trim() ===
            deslugifyName.toLowerCase().trim(),
        );
        setSelectedProduct(found ?? null);
        if (found?.packSize) {
          setPackSize(parseFloat(found.packSize.split("-")[0]));
        }
      }
      setProductLoading(false);
    };
    getRangeProduct();
  }, [dispatch, range, productName]);

  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev > 0 ? prev - 1 : (selectedProduct?.productImage?.length ?? 1) - 1,
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev < (selectedProduct?.productImage?.length ?? 1) - 1 ? prev + 1 : 0,
    );
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const selectedProductHandler = (name) => {
    const product = rangeProducts?.find((item) => item.productName === name);
    setSelectedProduct(product ?? null);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  const calculatorDataHandler = (e) => {
    setCalculatorData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ FIX #3: corrected wastage formula
  useEffect(() => {
    if (!calculatorData.totalNeeded) return;

    const format2 = (num) => parseFloat(Number(num || 0).toFixed(2));
    let totalNeeded = Number(calculatorData.totalNeeded) || 0;
    let wastage = Number(calculatorData.wastage) || 0;
    let pack = Number(packSize) || 1;

    // Correct: total area including wastage percentage
    let result = totalNeeded * (1 + wastage / 100);
    const twoDigitValue = format2(result);

    setSizeData({
      cartons: Math.ceil(twoDigitValue / pack),
      area: twoDigitValue,
    });

    let price = priceTab[0].active
      ? Number(selectedProduct?.supplyInstallPrice) || 0
      : Number(selectedProduct?.supplyPrice) || 28;

    let subtotal = format2(twoDigitValue * price);
    let totalGst = format2(subtotal * 0.1);

    setPriceData({
      subTotal: subtotal,
      gst: totalGst,
      total: format2(subtotal + totalGst),
    });
  }, [calculatorData.totalNeeded, calculatorData.wastage, priceTab]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleAddToCart = () => {
    if (!calculatorData.totalNeeded) {
      setMessage("Total size can't be empty");
      setTimeout(() => window.scrollTo({ top: 500, behavior: "smooth" }), 0);
      return;
    }

    dispatch(
      addCartItems({
        productId: selectedProduct?._id,
        id: uuidv4(),
        isAuthenticated,
        totalMeterSquare: calculatorData.totalNeeded,
        wastage: calculatorData.wastage,
        totalPrice: priceData.total,
        cartonsRequired: sizeData.cartons,
        areaSupplied: sizeData.area,
        selectedService: priceTab.find((item) => item.active)?.heading,
      }),
    );

    setCalculatorData({ totalNeeded: null, wastage: 10 });
  };

  const priceTabHandler = (id) => {
    setPriceTab((prev) => prev.map((p) => ({ ...p, active: p.id === id })));
  };

  return (
    <div className="w-full mb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Breadcrumb */}
      <div className="w-10/12 mx-auto mb-10 pt-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-sm bg-white/60 border border-white/20 rounded-full px-4 py-3 inline-flex items-center gap-2 shadow-sm max-w-full overflow-hidden"
        >
          <span className="text-sm text-gray-600 hover:text-[#8A6A5A] cursor-pointer transition shrink-0">
            Home
          </span>
          <ChevronRight size={14} className="text-gray-400 shrink-0" />
          <span className="text-sm text-gray-600 hover:text-[#8A6A5A] cursor-pointer transition shrink-0">
            {range}
          </span>
          <ChevronRight size={14} className="text-gray-400 shrink-0" />
          <span className="text-sm text-[#8A6A5A] font-medium truncate">
            {selectedProduct?.productName}
          </span>
        </motion.div>
      </div>

      {productLoading ? (
        <ProductSkeleton />
      ) : (
        <>
          {/* Main Product Section */}
          <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 relative">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative group shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
                  >
                    <LazyLoader
                      image={
                        selectedProduct?.productImage?.[selectedImage]?.url
                      }
                      alt="Product image"
                      style="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="h-full absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevImage}
                  className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-20 p-2 sm:p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/50"
                >
                  <ChevronLeft size={20} className="text-gray-800" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextImage}
                  className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 backdrop-blur-md bg-white/80 hover:bg-white shadow-2xl z-20 p-2 sm:p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 border border-white/50"
                >
                  <ChevronRight size={20} className="text-gray-800" />
                </motion.button>

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

                {/* Image counter dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center">
                  {[...Array(selectedProduct?.productImage?.length ?? 0)].map(
                    (_, index) => (
                      <span
                        key={index}
                        className={`w-10 h-10 ${selectedImage === index ? "text-white" : "text-gray-400"}`}
                      >
                        <Dot size={50} />
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* ✅ FIX #6: overflow-x-auto for thumbnails on mobile */}
              <motion.div className="mt-10">
                <div className="flex items-center gap-3 mt-5 overflow-x-auto pb-2">
                  {selectedProduct?.productImage?.map((image, index) => (
                    // ✅ FIX #2: key prop added
                    <motion.div
                      key={index}
                      className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded shrink-0 cursor-pointer border-2 border-transparent hover:border-[#8A6A5B] transition-colors"
                      onClick={() => setSelectedImage(index)}
                    >
                      <LazyLoader
                        image={image.url}
                        alt={`image ${index}`}
                        style="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Color Options */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-5">
                  Color Options in this range
                </h3>
                <div className="flex flex-wrap gap-x-2 gap-y-3 text-center">
                  {rangeProducts?.map((product, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      // ✅ FIX #7: responsive sizing
                      className="border border-white hover:border-[#E7E9EB] p-1 cursor-pointer w-32 xl:w-40 h-40 xl:h-48 flex flex-col"
                      onClick={() =>
                        selectedProductHandler(product.productName)
                      }
                    >
                      <div className="overflow-hidden flex-1">
                        <LazyLoader
                          image={product && product.productImage[0].url}
                          alt={product.productName}
                          style="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <p className="text-sm sm:text-lg mt-1 truncate px-1">
                        {product.productName}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Thickness Options */}
              {selectedProduct?.thickness?.length > 1 && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-5">
                    Other Thickness Options
                  </h3>
                  {/* ✅ FIX #1: corrected broken ?? operator precedence */}
                  <div className="flex flex-wrap gap-5 text-center">
                    {(selectedProduct?.thickness ?? []).map((size, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        key={index}
                        className="p-2 w-36 border border-[#998E8A] bg-[#FCF8F5] hover:bg-[#E7E9EB] cursor-pointer"
                      >
                        <p>{size}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grade */}
              {selectedProduct?.grade && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mt-10 mb-5">
                    Grade
                  </h3>
                  <div className="flex flex-wrap gap-5 text-center w-full">
                    {[
                      { label: "Select", sub: "Clean · contemporary" },
                      { label: "Standard", sub: "Most Popular" },
                      { label: "Feature", sub: "Maximum Character" },
                    ].map(({ label, sub }) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 w-36 border border-[#998E8A] bg-[#FCF8F5] hover:bg-[#E7E9EB] cursor-pointer"
                      >
                        <p className="text-lg">{label}</p>
                        <p className="text-[#666E7C] text-sm">{sub}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Product Details — Right Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full space-y-6"
            >
              {/* Badges */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-md text-black p-2 flex flex-wrap items-center gap-2 m-0"
              >
                <div className="bg-[#F5F0ED] p-2 sm:p-3 text-xs sm:text-sm font-medium">
                  SKU: {selectedProduct?.sku}
                </div>
                <div className="bg-[#F5F0ED] p-2 sm:p-3 text-xs sm:text-sm font-medium">
                  {selectedProduct?.bal
                    ? `🔥 BAL ${selectedProduct?.bal}`
                    : selectedProduct?.jankaRating
                      ? selectedProduct?.jankaRating
                      : selectedProduct?.fireTested}
                </div>
                <div className="bg-[#F5F0ED] p-2 sm:p-3 text-xs sm:text-sm font-medium">
                  ✓ {selectedProduct?.certification}
                </div>
                <div className="bg-[#F5F0ED] p-2 sm:p-3 text-xs sm:text-sm font-medium">
                  {selectedProduct?.productTypeLabel}
                </div>
              </motion.div>

              {/* Title & Rating */}
              <div className="mt-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl sm:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
                >
                  {selectedProduct?.productName}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-600 text-base sm:text-lg font-medium mt-3"
                >
                  {selectedProduct?.brand} {selectedProduct?.range}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 backdrop-blur-sm w-fit mt-5"
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
                  <span className="text-md text-gray-600">(200 reviews)</span>
                </motion.div>
              </div>

              {/* Specs Grid */}
              <motion.div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#E7E9EB] border border-[#E7E9EB] justify-between items-center">
                {[
                  {
                    value: selectedProduct?.thickness?.[0],
                    label: "Thickness",
                  },
                  {
                    value: selectedProduct?.dimensions?.split("x")[0],
                    label: "Width",
                  },
                  { value: selectedProduct?.jankaRating, label: "Janka" },
                  {
                    value: selectedProduct?.wearLayerThickness,
                    label: "Wear Layer",
                  },
                ].map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    className={`text-center p-3 sm:p-5 ${i >= 2 ? "border-t border-[#E7E9EB] sm:border-t-0" : ""}`}
                  >
                    <p className="text-base sm:text-xl text-black font-medium">
                      {value}
                    </p>
                    <p className="text-sm sm:text-lg text-[#666E7C]">{label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Price Tabs */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center justify-evenly border border-[#866053] p-1">
                {priceTab.map((price, index) => (
                  <div
                    key={index}
                    className={`text-center space-y-3 h-full ${price.active ? "bg-[#866053] text-white" : "bg-white"} p-4 flex flex-col items-center justify-center cursor-pointer`}
                    onClick={() => priceTabHandler(price.id)}
                  >
                    <h3
                      className={`${price.active ? "text-white" : "text-[#8A6A5B]"} text-lg sm:text-xl font-semibold`}
                    >
                      {price.heading}
                    </h3>
                    <p className="text-xl sm:text-2xl font-extrabold text-center">
                      {price.id === 1
                        ? selectedProduct?.supplyInstallPrice && (
                            <>
                              {selectedProduct?.supplyInstallPrice}
                              <span className="text-base sm:text-lg font-normal">
                                /m <sup>2</sup>
                              </span>
                            </>
                          )
                        : price.id === 2
                          ? selectedProduct?.supplyPrice && (
                              <>
                                {selectedProduct?.supplyPrice}
                                <span className="text-base sm:text-lg font-normal">
                                  /m <sup>2</sup>
                                </span>
                              </>
                            )
                          : "POA"}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Calculator */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="border border-[#E7E9EB] p-4 sm:p-5"
              >
                {priceTab[0].active && (
                  <>
                    {selectedProduct?.supplyInstallPrice ? (
                      <CalculatorSection
                        price={selectedProduct.supplyInstallPrice}
                        label="Supply + Install pricing includes professional installation by our licensed Melbourne team."
                        priceTab={priceTab}
                        calculatorData={calculatorData}
                        calculatorDataHandler={calculatorDataHandler}
                        message={message}
                        packSize={packSize}
                        sizeData={sizeData}
                        priceData={priceData}
                        subtotalLabel="Subtotal (Supply + Install)"
                      />
                    ) : (
                      <NoOnlinePricing
                        title="Supply + Install pricing is available in-store and over the phone only."
                        description="Due to brand partner agreements, online pricing for supply + install orders on this product is not available here. Our team can offer you competitive pricing directly."
                        btnText="Call to Get Supply + Install Price"
                      />
                    )}
                  </>
                )}

                {priceTab[1].active && (
                  <>
                    {selectedProduct?.supplyPrice ? (
                      <CalculatorSection
                        price={selectedProduct.supplyPrice}
                        label="Supply Only pricing — product will be delivered to your door."
                        priceTab={priceTab}
                        calculatorData={calculatorData}
                        calculatorDataHandler={calculatorDataHandler}
                        message={message}
                        packSize={packSize}
                        sizeData={sizeData}
                        priceData={priceData}
                        subtotalLabel="Subtotal (Supply Only)"
                      />
                    ) : (
                      <NoOnlinePricing
                        title="Supply Only pricing is available in-store and over the phone only."
                        description="Due to brand partner agreements, online pricing for supply-only orders on this product is not available here. Our team can offer you competitive supply-only pricing directly."
                        btnText="Call to Get Supply Only Price"
                      />
                    )}
                  </>
                )}

                {priceTab[2].active && (
                  <div className="bg-[#F9F6F4] border border-[#E7E9EB] rounded-2xl p-6 mt-2 space-y-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Request a Custom Quote
                    </h3>
                    <p className="text-[#666E7C] text-sm sm:text-base leading-relaxed">
                      Get a personalised quote tailored to your project size and
                      requirements. Our team will get back to you within 1
                      business day.
                    </p>
                    <div className="bg-white border border-[#E7E9EB] rounded-xl p-4 space-y-2">
                      <p className="text-base sm:text-lg font-medium text-black flex items-center gap-2 flex-wrap">
                        <Phone /> Call us on{" "}
                        <a
                          href="tel:YOUR_PHONE_NUMBER"
                          className="text-[#8A6A5B] font-semibold"
                        >
                          YOUR_PHONE_NUMBER
                        </a>
                      </p>
                      <p className="text-sm text-[#666E7C]">
                        Mon–Fri 8am–8pm · Sat 9am–5pm
                      </p>
                    </div>
                    <div className="space-y-3">
                      <button className="w-full bg-[#8A6A5B] hover:bg-[#755645] text-white py-3 rounded-xl font-semibold transition">
                        Request a Quote
                      </button>
                      <p className="text-sm text-center">
                        <a
                          href="#"
                          className="text-[#8A6A5B] hover:underline font-medium"
                        >
                          Or request a callback and we'll call you →
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* CTA Banner */}
              {calculatorData.totalNeeded > 100 && (
                <motion.div className="bg-[#D7CEC5] p-5 flex flex-col xl:flex-row items-center gap-5 sm:gap-10">
                  <p className="text-base sm:text-lg text-black text-center sm:text-left">
                    Ordering 100m² or more? Call us — we'll beat any written
                    quote and offer you a trade price most retailers can't
                    match.
                  </p>
                  <button className="whitespace-nowrap text-black bg-white px-8 py-3 shrink-0">
                    Call Now
                  </button>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-x-10">
                <button
                  className="border border-[#998E8A] text-[#998E8A] py-3 text-base sm:text-lg xl:text-xl w-full cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  View in showroom
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className="bg-[#998E8A] py-3 text-white text-base sm:text-lg xl:text-xl w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Adding..." : "Add to Cart"}
                </button>
              </motion.div>

              <p className="text-lg font-semibold text-center text-[#998E8A] flex items-center justify-center gap-2 mt-6">
                <HeartIcon />
                Save to wishlist
              </p>
            </motion.div>
          </div>

          {/* Showroom Modal */}
          {showModal && (
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-white w-full max-w-[600px] p-6 sm:p-8 rounded-xl relative max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-xl"
                >
                  ✕
                </button>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  Book Showroom Visit
                </h3>
                <p className="mb-6 text-gray-600">
                  View Premium Luxury Flooring in our showroom
                </p>
                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Product"
                    className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Name*"
                    className="border p-4 border-[#E7E9EB] focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Phone*"
                    className="border p-4 border-[#E7E9EB] focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="border p-4 border-[#E7E9EB] focus:outline-none"
                  />
                  <input
                    type="date"
                    className="border p-4 border-[#E7E9EB] focus:outline-none"
                  />
                  <input
                    type="time"
                    className="border p-4 border-[#E7E9EB] focus:outline-none"
                  />
                  <button className="bg-[#998E8A] text-white py-3 cursor-pointer">
                    Submit
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Product Highlights */}
          <motion.div className="mt-20 w-full bg-[#FCF8F5] p-5 md:p-10">
            {/* ✅ FIX #5: responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-10/12 mx-auto">
              <h3 className="text-3xl xl:text-4xl font-bold">
                Product Highlights
              </h3>
              <div className="space-y-3">
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} />
                  Thickness: {selectedProduct?.thickness?.[0]}
                </p>
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                  Board Size: {selectedProduct?.dimensions}
                </p>
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Pack
                  Coverage: {selectedProduct?.packSize?.split("-")[0]}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                  Water Rating: {selectedProduct?.waterresistant}
                </p>
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} />
                  Warranty: {selectedProduct?.Warrenty}
                </p>
                <p className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                  <CircleCheckBig color="#8A6A5B" width={20} height={20} /> Wear
                  Layer: {selectedProduct?.coating}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Specs & Details */}
          <motion.div className="w-10/12 mx-auto mt-20">
            <h3 className="text-2xl sm:text-4xl font-bold">
              Specifications & Details
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex border-b border-gray-200 mt-5 overflow-x-auto scrollbar-hide">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 lg:px-6 py-3 text-sm sm:text-md lg:text-lg xl:text-2xl font-normal transition relative whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#8A6A5B] font-semibold"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#8A6A5B]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-[180px] px-2 sm:px-6 py-6"
              >
                {activeTab === "Description" && (
                  <p className="text-base sm:text-lg">
                    {selectedProduct?.description}
                    <br />
                    <br />
                    {selectedProduct?.details?.dimensions}
                  </p>
                )}
                {activeTab === "Specifications" && (
                  <div className="space-y-4 h-[280px] overflow-y-scroll">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                      {selectedProduct?.specifications &&
                        Object.entries(
                          selectedProduct.specifications instanceof Map
                            ? Object.fromEntries(selectedProduct.specifications)
                            : selectedProduct.specifications,
                        ).map(([key, value]) => (
                          <Specification key={key} label={key} value={value} />
                        ))}
                    </div>
                  </div>
                )}
                {/* {activeTab === "Dimensions" && (
                  <p className="text-base sm:text-lg">
                    {selectedProduct?.details?.dimensions}
                  </p>
                )} */}
                {activeTab === "Installation" && (
                  <p className="text-base sm:text-lg">
                    {selectedProduct?.details?.installation}
                  </p>
                )}
                {activeTab === "Warranty" && (
                  <p className="text-base sm:text-lg">
                    {selectedProduct?.details?.warranty}
                  </p>
                )}
                {activeTab === "Delivery" && (
                  <p className="text-base sm:text-lg">
                    {selectedProduct?.details?.delivery}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Will This Work Section */}
          <motion.div className="bg-[#FCF8F5] w-full p-6 py-16 md:p-24 mt-10">
            <div className="w-full md:w-11/12 mx-auto">
              <h2 className="text-2xl sm:text-4xl font-semibold mb-10">
                Will this work in your home?
              </h2>
              <AnimatePresence mode="wait">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {selectedProduct?.features?.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="p-6 sm:p-10 bg-white border-t-2 border-[#8A6A5B] space-y-4"
                    >
                      <CircleCheckBig color="#8A6A5B" />
                      <p className="text-xl sm:text-2xl">{item.title}</p>
                      <span
                        className={`p-2 text-xs ${item.tag === "Suitable" ? "bg-[#E3E4DD] text-[#4C6647]" : "bg-[#EFE8DA] text-[#B2873C]"}`}
                      >
                        {item.tag}
                      </span>
                      <p className="text-base sm:text-lg mt-5">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </motion.div>

          <Reviews />
          <div className="mt-20">
            <WhyChooseus />
          </div>

          {/* You May Also Like */}
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
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              >
                You May Also Like
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-base sm:text-lg"
              >
                Discover more premium flooring options
              </motion.p>
            </div>

            <div className="max-w-[90%] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 relative z-10"
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
                            <span className="inline-block px-4 py-1 text-sm tracking-wide bg-white text-black font-semibold">
                              New
                            </span>
                          )}
                          {item.onSale && (
                            <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wide bg-white text-black">
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
                      <div className="py-5 px-3 space-y-2">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">
                              ★
                            </span>
                          ))}
                          <span className="text-base sm:text-lg font-medium text-gray-700">
                            (200)
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xl sm:text-2xl font-bold text-gray-900 line-clamp-1">
                            {item.heading}
                          </p>
                        </div>
                        <p className="text-base sm:text-lg text-gray-500 line-clamp-1">
                          by {item.brand}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-bold text-gray-900">
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
            <button className="bg-[#998E8A] px-10 py-3 text-white flex justify-center items-center mx-auto mt-10 text-base sm:text-lg">
              View All
            </button>
          </motion.div>
        </>
      )}
    </div>
  );
}

// ─── Specification Card ───────────────────────────────────────────────────────
function Specification({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-sm bg-gray-50/50 border border-gray-200/50 rounded-2xl p-4 hover:shadow-md transition-all"
    >
      <p className="text-sm sm:text-md text-gray-600 mb-1 text-nowrap">
        {label}:
      </p>
      <p className="font-bold text-gray-900">{value}</p>
    </motion.div>
  );
}

// ─── Calculator Section ───────────────────────────────────────────────────────
function CalculatorSection({
  price,
  label,
  calculatorData,
  calculatorDataHandler,
  message,
  packSize,
  sizeData,
  priceData,
  subtotalLabel,
}) {
  return (
    <div>
      <div className="space-y-2 mb-8">
        <p>
          <span className="text-2xl sm:text-3xl font-extrabold">{price}</span>
          <span className="text-sm sm:text-md font-normal text-[#666E7C]">
            /m <sup>2</sup> + GST
          </span>
        </p>
        <p className="text-[#666E7C] text-base sm:text-lg">{label}</p>
      </div>

      <h2 className="text-lg sm:text-xl font-semibold">Coverage Calculator</h2>
      <form>
        <div className="space-y-3 mt-5">
          <div>
            <label
              htmlFor="totalNeeded"
              className="text-base sm:text-xl text-[#666E7C]"
            >
              Total square meters needed
            </label>
            <br />
            <input
              type="number"
              id="totalNeeded"
              placeholder="Enter m²"
              value={calculatorData.totalNeeded ?? ""}
              className="w-full border border-[#E7E9EB] p-3 mt-2 focus:outline-none focus:border-[#998E8A]"
              name="totalNeeded"
              onChange={calculatorDataHandler}
              min="0"
            />
            {/* ✅ FIX #4: corrected validation condition */}
            {message && !calculatorData.totalNeeded && (
              <p className="text-lg font-medium text-red-600 mt-2">{message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="wastage"
              className="text-base sm:text-lg text-[#666E7C]"
            >
              Wastage
            </label>
            <div className="flex flex-wrap gap-4 sm:gap-5 mt-3 items-center">
              {[0, 10, 15].map((val) => (
                <div key={val} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="wastage"
                    id={`wastage-${val}`}
                    value={val}
                    checked={Number(calculatorData.wastage) === val}
                    onChange={calculatorDataHandler}
                    className="accent-[#8A6A5B] cursor-pointer w-4 h-4"
                  />
                  <label htmlFor={`wastage-${val}`}>{val}%</label>
                </div>
              ))}
            </div>
          </div>

          <p className="text-base sm:text-lg mt-5 text-black font-medium bg-[#FCF8F5] p-3 w-fit">
            Pack size:{" "}
            <b>
              {packSize} m<sup>2</sup> per carton
            </b>
          </p>
        </div>

        <div className="mt-5 space-y-2">
          <p className="flex justify-between items-center font-semibold text-lg sm:text-xl">
            <span className="text-base sm:text-lg font-normal text-[#666E7C]">
              Cartons Required:
            </span>
            {sizeData.cartons}
          </p>
          <p className="flex justify-between items-center font-semibold text-lg sm:text-xl">
            <span className="text-base sm:text-lg font-normal text-[#666E7C]">
              Area Supplied:
            </span>
            {sizeData.area && `${sizeData.area} m²`}
          </p>
        </div>
      </form>

      <motion.div className="space-y-4 mt-10 bg-[#F5F0ED] p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-semibold">Price Summary</h3>
        <div className="space-y-2">
          <p className="text-sm sm:text-lg text-[#666E7C] flex justify-between items-center gap-4 flex-wrap">
            <span>{subtotalLabel}:</span>
            <span className="text-lg sm:text-xl font-semibold text-black">
              {`$ ${priceData.subTotal}`}
            </span>
          </p>
          <p className="text-sm sm:text-lg text-[#666E7C] flex justify-between items-center">
            GST (10%):{" "}
            <span className="text-lg sm:text-xl font-semibold text-black">
              {`$ ${calculatorData.totalNeeded ? priceData.gst : 0}`}
            </span>
          </p>
          <div className="h-[1px] w-full bg-[#E7E9EB]" />
          <p className="text-sm sm:text-lg text-[#666E7C] flex justify-between items-center">
            TOTAL{" "}
            <span className="text-lg sm:text-xl font-semibold text-black">
              {`$ ${priceData.total}`}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

// ─── No Online Pricing ────────────────────────────────────────────────────────
function NoOnlinePricing({ title, description, btnText }) {
  return (
    <div className="bg-[#F9F6F4] border border-[#E7E9EB] rounded-2xl p-6 mt-2 space-y-5">
      <h3 className="text-lg sm:text-xl font-semibold text-black">{title}</h3>
      <p className="text-[#666E7C] text-sm sm:text-base leading-relaxed">
        {description}
      </p>
      <div className="bg-white border border-[#E7E9EB] rounded-xl p-4 space-y-2">
        <p className="text-base sm:text-lg font-medium text-black flex items-center gap-2 flex-wrap">
          <Phone /> Call us on{" "}
          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="text-[#8A6A5B] font-semibold"
          >
            YOUR_PHONE_NUMBER
          </a>
        </p>
        <p className="text-sm text-[#666E7C]">Mon–Fri 8am–8pm · Sat 9am–5pm</p>
      </div>
      <div className="space-y-3">
        <button className="w-full bg-[#8A6A5B] hover:bg-[#755645] text-white py-3 rounded-xl font-semibold transition">
          {btnText}
        </button>
        <p className="text-sm text-center">
          <a href="#" className="text-[#8A6A5B] hover:underline font-medium">
            Or request a callback and we'll call you →
          </a>
        </p>
      </div>
    </div>
  );
}
