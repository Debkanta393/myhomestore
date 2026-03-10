import React, { useEffect, useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Heart,
  Share2,
  ZoomIn,
  HeartIcon,
  CircleCheckBig,
  Dot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reviews from "../components/ui/Reviews";
import WhyChooseus from "../components/ui/WhyChooseus";
import { useParams } from "react-router";
import { getProductByRange } from "../features/product/product";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems } from "../features/cart/cart";

// ##################### Other products ##################### //
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

const willWork = [
  {
    heading: "Concrete Slab",
    subHeading:
      "Use 15mm plywood subfloor. Slab moisture must be under 5.5%. Apply flexible polyurethane adhesive and secret nail fix. Finished height: 26mm.",
    btnText: "✓ SUITABLE",
    btnType: "success",
  },
  {
    heading: "Timber Joists",
    subHeading:
      "Install 15mm ply or 19mm particleboard. Fix sheeting to joists with screws and adhesive. Use 14mm Blackbutt perpendicular to joists. Recommended: full trowel adhesive + secret nail.",
    btnText: "✓ SUITABLE",
    btnType: "success",
  },
  {
    heading: "Underfloor Heating",
    subHeading:
      "Solid timber works with underfloor heating but needs care. Max temp 27°C. Heat slowly. Contact us; engineered Blackbutt may suit heated slabs better.",
    btnText: "⚠ CHECK FIRST",
    btnType: "warning",
  },
  {
    heading: "Apartments",
    subHeading:
      "Solid Blackbutt 14mm is great for concrete slabs. Check strata requirements for acoustic ratings — an underlay or direct-stick may be needed. We can advise on compliant solutions.",
    btnText: "✓ SUITABLE",
    btnType: "success",
  },
  {
    heading: "Pets & Kids",
    subHeading:
      "Janka 9 kN makes Blackbutt resistant to claws and foot traffic. The 14mm construction can be re-sanded when scratches accumulate.",
    btnText: "✓ SUITABLE",
    btnType: "success",
  },
  {
    heading: "Wet Areas",
    subHeading:
      "Solid timber isn't suitable for wet areas. For adjacent spaces, maintain expansion gaps and treat with penetrating oil. Consider Supacore Hybrid.",
    btnText: "⚠ NOT RECOMMENDED",
    btnType: "warning",
  },
];

export default function Product() {
  // ##################### Get Range and product name from URI ##################### //
  const params = useParams();
  const { range, productName } = params;

  // ##################### State hooks ##################### //
  const [selectedImage, setSelectedImage] = useState(0);
  const [calculatorData, setCalculatorData] = useState({
    totalNeeded: 0,
    wastage: 10,
  });
  const [sizeData, setSizeData] = useState({
    cartons: "",
    area: "",
  });
  const [priceData, setPriceData] = useState({
    subTotal: "0",
    gst: "10",
    total: "0",
  });
  const dispatch = useDispatch();
  const [packSize, setPackSize] = useState();
  const [priceTag, setPriceTag] = useState(0);
  const [rangeProducts, setRangeProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const tabs = [
    "Description",
    "Specifications",
    "Dimensions",
    "Installation",
    "Warranty",
    "Delivery",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { loading } = useSelector((state) => state.cart);
  console.log(loading);

  // Check if user is authenticated from your auth slice
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  // ##################### Fetch all products in the same range ##################### //
  useEffect(() => {
    const getRangeProduct = async () => {
      const response = await dispatch(getProductByRange(range));

      if (response.payload.success) {
        // Set app products in this range
        setRangeProducts(response.payload.product);

        // Set selected product
        const selectedproduct = response.payload.product.find(
          (item) => item.productName == productName,
        );
        setSelectedProduct(selectedproduct);

        // Set pack size
        let packsize = parseFloat(selectedproduct.packSize.split("-")[0]);
        setPackSize(packsize);
      }
    };
    getRangeProduct();
  }, [dispatch]);

  console.log(rangeProducts);

  // ##################### Previous image handler ##################### //
  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev > 0 ? prev - 1 : selectedProduct?.productImage?.length - 1,
    );
  };

  // ##################### Next image handler ##################### //
  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev < selectedProduct?.productImage?.length - 1 ? prev + 1 : 0,
    );
  };

  // ##################### Framer motion animations ##################### //
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

  // ##################### Change product in the same range ##################### //
  const selectedProductHandler = (productName) => {
    const product = rangeProducts?.find(
      (item) => item.productName === productName,
    );
    setSelectedProduct(product);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 0);
  };

  // ##################### Calculation handler ##################### //
  const calculatorDataHandler = (e) => {
    console.log(e.target.name);
    setCalculatorData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (!calculatorData.totalNeeded) {
      return;
    }
    console.log(calculatorData.totalNeeded * (calculatorData.wastage / 100));
    const calculatorHandler = () => {
      let totalCartons =
        calculatorData.wastage != 0
          ? (calculatorData.totalNeeded * (calculatorData.wastage / 100)) /
            packSize
          : calculatorData.totalNeeded / packSize;
      let areaSupplied = totalCartons * packSize;
      // setCartonsNeeded(Math.ceil(totalCartons));
      setSizeData((prev) => ({
        ...prev,
        cartons: Math.ceil(totalCartons),
        area: areaSupplied,
      }));

      // Set price data
      let subtotal =
        activeTab && rangeProducts == 0
          ? areaSupplied *
            parseInt(
              selectedProduct.supplyPrice ? selectedProduct.supplyPrice : 0,
            )
          : areaSupplied *
            parseInt(
              selectedProduct?.supplyInstallPrice
                ? selectedProduct?.supplyInstallPrice
                : 0,
            );

      console.log(subtotal);
      //  Total Gst calculation
      let totalGst = subtotal * (10 / 100);
      console.log(totalGst);

      setPriceData((prev) => ({
        ...prev,
        subTotal: subtotal,
        gst: totalGst,
        total: subtotal + totalGst,
      }));
    };
    calculatorHandler();
  }, [calculatorData.totalNeeded, calculatorData.wastage]);

  // ##################### Set background fixed when modal is open ##################### //
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  // ##################### Add to cart selected product ##################### //
  const handleAddToCart = () => {
    let productId = selectedProduct?._id;
    dispatch(addCartItems({ productId, isAuthenticated }));
  };
  console.log(selectedProduct._id);

  return (
    <div className="w-full mb-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Breadcrumb with glassmorphism */}
      <div className="w-11/12 sm:w-10/12 mx-auto mb-10 pt-6">
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
            {range}
          </span>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-sm text-[#8A6A5A] font-medium text-nowrap">
            {selectedProduct?.productName}
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
                src={selectedProduct?.productImage?.[selectedImage]?.url}
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
              {[...Array(selectedProduct?.productImage?.length)].map(
                (_, index) => (
                  <span
                    className={`w-10 h-10 ${selectedImage == index ? "text-white" : "text-gray-400"}`}
                    key={index}
                  >
                    <Dot size={50} />
                  </span>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mt-16 mb-5">
              Color Options in this range
            </h3>
            <div className="flex flex-wrap gap-x-1 xl:gap-x-3 gap-y-2 text-center">
              {rangeProducts?.map((product, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.5 }}
                  key={index}
                  className="border border-white hover:border-[#E7E9EB] p-1 cursor-pointer w-32 h-fit"
                  onClick={() => selectedProductHandler(product.productName)}
                >
                  <img
                    src={product.productImage[0].url}
                    alt=""
                    className="w-full h-8/12"
                  />
                  <p className="text-sm md:text-lg">{product.productName}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product highlights section */}
          <motion.div className=" mt-20 w-full bg-[#FCF8F5] p-5 md:p-10 border-l-3 border-[#8A6A5B]">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-nowrap">Product Highlights</h3>
              <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row xl:items-center justify-between gap-y-10 lg:mx-auto">
                <div className="space-y-3">
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Thickness: 8mm
                  </p>
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Board Size: 1215 x 196mm
                  </p>
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Pack Coverage: 1.7404m²
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Water Rating: Waterproof
                  </p>
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Warranty: 20 Years
                  </p>
                  <p className="text-md md:text-lg flex items-center gap-2 text-nowrap">
                    <CircleCheckBig color="#8A6A5B" width={20} height={20} />{" "}
                    Wear Layer: AC4
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            {/* {selectedProduct?.thickness?.length > 1 && (
              <> */}
            <h3 className="text-2xl font-semibold mt-10 mb-5">
              Other Tickeness Options
            </h3>
            <div className="flex flex-wrap gap-5 text-center">
              {selectedProduct?.thickness?.map((size, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.5 }}
                  key={index}
                  className="p-2 w-36 border border-[#998E8A] bg-[#FCF8F5] hover:bg-[#E7E9EB] cursor-pointer"
                >
                  <p>{size}</p>
                </motion.div>
              ))}
            </div>
            {/* </>
            )} */}
          </div>

          {/* Grade sections */}
          <div>
            <h3 className="text-2xl font-semibold mt-10 mb-5">Grade</h3>
            <div className="flex flex-wrap gap-5 text-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 border border-[#998E8A] bg-[#FCF8F5] hover:bg-[#E7E9EB] cursor-pointer text-nowrap"
              >
                <p className="text-lg">Select</p>
                <p className="text-[#666E7C] text-sm">Clean · contemporary</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 w-36 border border-[#998E8A] hover:bg-[#E7E9EB] cursor-pointer text-nowrap"
              >
                <p className="text-lg">Standard</p>
                <p className="text-[#666E7C] text-sm">Most Popular</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2 w-36 border border-[#998E8A] hover:bg-[#E7E9EB] cursor-pointer text-nowrap"
              >
                <p className="text-lg">Feature</p>
                <p className="text-[#666E7C] text-sm">Maximum Character</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Details (right section)*/}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full space-y-6"
        >
          {/* Badges with glassmorphism */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-md text-black p-2 flex flex-wrap items-center gap-2"
          >
            <div className="bg-[#F5F0ED] p-3 text-sm font-medium text-nowrap">
              SKU: SF-BB-130x14-SEL
            </div>
            <div className="bg-[#F5F0ED] p-3 text-sm font-medium text-nowrap">
              🔥 BAL 29
            </div>
            <div className="bg-[#F5F0ED] p-3 text-sm font-medium text-nowrap">✓ PEFC</div>
            <div className="bg-[#F5F0ED] p-3 text-sm font-medium text-nowrap">
              Solid Hardwood
            </div>
          </motion.div>

          {/* Title with gradient */}
          <div className="mt-5">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-3 leading-tight"
            >
              {selectedProduct?.productName}
            </motion.h1>

            {/* Enhanced Rating */}
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
              {selectedProduct?.description}
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div className="bg-[#D7CEC5] p-5 flex flex-col xl:flex-row items-center gap-10">
            <p className="text-lg text-black">
              Ordering 100m² or more? Call us — we'll beat any written quote and
              offer you a trade price most retailers can't match.
            </p>
            <button className="text-nowrap text-black bg-white px-8 py-3">
              Call Now
            </button>
          </motion.div>

          {/* Price section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row-dense gap-3 items-center justify-evenly my-10 bg-[#FCF8F5] p-1">
            <div
              className={`text-center space-y-3 ${priceTag == 0 ? "bg-white" : "bg-[#FCF8F5]"} p-4`}
              onClick={() => setPriceTag(0)}
            >
              <h3 className="text-[#8A6A5B] text-xl font-semibold">
                Supply + Install
              </h3>
              <p className="text-2xl font-extrabold ">
                {`$ ${selectedProduct?.supplyInstallPrice}`}
                <span className="text-lg font-normal">
                  /m <sup>2</sup>
                </span>
              </p>
            </div>
            <div
              className={`text-center space-y-3 ${priceTag == 1 ? "bg-white" : "bg-[#FCF8F5]"} p-4`}
              onClick={() => setPriceTag(1)}
            >
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
            <div
              className={`text-center space-y-3 ${priceTag == 2 ? "bg-white" : "bg-[#FCF8F5]"} p-4 col-span-1 lg:col-span-2 xl:col-span-1`}
              onClick={() => setPriceTag(2)}
            >
              <h3 className="text-[#8A6A5B] text-xl font-semibold">
                Request Quote
              </h3>
              <p className="text-2xl font-extrabold ">POA</p>
            </div>
          </motion.div>

          {/* Selected price */}
          <div className="space-y-2">
            <p>
              <span className="text-3xl font-extrabold ">$28 </span>
              <span className="text-md font-normal text-[#666E7C]">
                /m <sup>2</sup> + GST
              </span>
            </p>
            <p className="text-[#666E7C] text-lg">
              Supply + Install pricing includes professional installation by our
              licensed Melbourne team.
            </p>
          </div>

          {/* Qualtiny calculator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="mt-10 border border-[#E7E9EB] p-5"
          >
            <h2 className="text-xl font-semibold">Coverage Calculator</h2>
            <form action="" className="">
              <div className="space-y-3 mt-5">
                <div>
                  <label htmlFor="" className="text-xl text-[#666E7C]">
                    Total square meters needed
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter m²"
                    className="w-full border border-[#E7E9EB] p-3 mt-2 active:border-[#E7E9EB] focus:border-[#E7E9EB]"
                    name="totalNeeded"
                    onChange={(e) => calculatorDataHandler(e)}
                  />
                </div>
                <div>
                  <label htmlFor="wastage" className="text-lg text-[#666E7C]">
                    Wastage
                  </label>
                  <div className="flex gap-5 mt-3 items-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="wastage"
                        id="0%"
                        value={0}
                        onChange={(e) => calculatorDataHandler(e)}
                        className="accent-[#8A6A5B] cursor-pointer w-4 h-4"
                      />
                      <label htmlFor="wastage">0%</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="wastage"
                        id="10%"
                        value={10}
                        onChange={(e) => calculatorDataHandler(e)}
                        className="accent-[#8A6A5B] cursor-pointer w-4 h-4"
                        checked={calculatorData.wastage === 10}
                      />
                      <label htmlFor="">10%</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="wastage"
                        id="15%"
                        value={15}
                        onChange={(e) => calculatorDataHandler(e)}
                        className="accent-[#8A6A5B] cursor-pointer w-4 h-4"
                      />
                      <label htmlFor="">15%</label>
                    </div>
                  </div>
                </div>
                <p className="text-lg mt-5 text-black font-medium bg-[#FCF8F5] p-3 w-fit">
                  Pack size:{" "}
                  <b>
                    {packSize} m<sup>2</sup> per carton
                  </b>
                </p>
              </div>
              <div className="mt-5 space-y-2">
                <p className="flex justify-between items-center font-semibold text-xl">
                  <span className="text-lg font-normal text-[#666E7C]">
                    Cartons Required:
                  </span>{" "}
                  {sizeData.cartons}
                </p>
                <p className="flex justify-between items-center font-semibold text-xl">
                  <span className="text-lg font-normal text-[#666E7C]">
                    Area Supplied:
                  </span>
                  {sizeData.area && `${sizeData.area} m²`}
                </p>
              </div>
            </form>
          </motion.div>

          {/* Price summery section */}
          <motion.div className="space-y-4 mt-10 bg-[#F5F0ED] p-6">
            <h3 className="text-2xl font-semibold">Price Summary</h3>
            <div className="space-y-2">
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                Subtotal (Supply + Install):{" "}
                <span className="text-xl font-semibold text-black">
                  {`$ ${priceData.subTotal}`}
                </span>
              </p>
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                GST (10%):{" "}
                <span className="text-xl font-semibold text-black">{`$ ${calculatorData.totalNeeded ? priceData.gst : 0}`}</span>
              </p>
              <div className="h-[1px] w-full bg-[#E7E9EB]"></div>
              <p className="text-lg text-[#666E7C] flex justify-between items-center">
                TOTAL{" "}
                <span className="text-xl font-semibold text-black">
                  {`$ ${priceData.total}`}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Buttons section */}
          <motion.div className="w-full flex flex-col md:flex-row items-center gap-y-5 gap-x-10 mt-20">
            <button
              className="border border-[#998E8A] text-[#998E8A] py-3 text-lg xl:text-xl w-full md:w-6/12 cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              View in showroom
            </button>
            <button
              onClick={handleAddToCart}
              disabled={loading}
              className="bg-[#998E8A] py-3 text-white text-lg xl:text-xl w-full md:w-6/12 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </motion.div>

          <p className="text-lg font-semibold text-center text-[#998E8A] flex items-center justify-center gap-2 mt-10">
            <HeartIcon />
            Save to wishlist
          </p>
        </motion.div>
      </div>

      {/* Model section */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white w-[90%] md:w-[600px] p-8 rounded-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-2">Book Showroom Visit</h3>
            <p className="mb-6 text-gray-600">
              View Premium Luxury Flooring in our showroom
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Product"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
              />
              <input
                type="text"
                placeholder="Name*"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
              />
              <input
                type="text"
                placeholder="Phone*"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
              />
              <input
                type="email"
                placeholder="Email*"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
              />
              <input
                type="date"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
                placeholder="Preferred Date*"
              />
              <input
                type="time"
                className="border p-4 border-[#E7E9EB] focus:border-[#E7E9EB] focus:outline-none placeholder:absolute focus:placeholder:top-1 focus:placeholder:text-sm"
                placeholder="Preferred Time*"
              />

              <button className="bg-[#998E8A] text-white py-3 cursor-pointer">
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      )}

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
          <div className="flex border-b border-gray-200 mt-5 overflow-x-scroll">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-3 lg:px-6 py-3 text-md lg:text-lg xl:text-2xl font-normal transition relative
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
                <p className="text-lg">{selectedProduct?.description}</p>
              </div>
            )}

            {activeTab === "Specifications" && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-5">
                  {Object.entries(
                    selectedProduct.specifications instanceof Map
                      ? Object.fromEntries(selectedProduct.specifications)
                      : selectedProduct.specifications,
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
                  <AdditionalInformation
                    label="SKU"
                    value={selectedProduct.sku}
                  />
                  <AdditionalInformation
                    label="Thikness"
                    value={selectedProduct.thickness}
                  />
                  <AdditionalInformation
                    label="Category"
                    value={selectedProduct.category}
                  />
                  <AdditionalInformation
                    label="Range"
                    value={selectedProduct.range}
                  />
                  <AdditionalInformation
                    label="Brand"
                    value={selectedProduct.brand}
                  />
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div className="bg-[#FCF8F5] w-full p-10 py-20 md:p-24 mt-20">
        <div className="w-full md:w-11/12 mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Will this work in your home?</h2>
        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {willWork.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.5 }}
              key={index}
              className="p-10 bg-white border-t-2 border-[#8A6A5B] space-y-4"
            >
              <CircleCheckBig color="#8A6A5B"/>
              <p className="text-xl">{item.heading}</p>
              <span className={`p-2 text-xs ${item.btnType == "success" ? "bg-[#E3E4DD] text-[#4C6647]":"bg-[#EFE8DA] text-[#B2873C]"}`}>{item.btnText}</span>
              <p className="text-lg mt-5">{item.subHeading}</p>
            </motion.div>
          ))}
          </div>
        </AnimatePresence>
        </div>
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
