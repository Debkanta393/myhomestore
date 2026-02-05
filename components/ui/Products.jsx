import React, { useState, useRef, useEffect, useMemo } from "react";
import { HeartIcon, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { category, brand, products } from "../../data/data";
import { getAllProducts } from "../../slice/product-slice";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const ref = useRef(null);
  const sidebarRef = useRef(null);
  const filterRef = useRef(null);
  const imageAnimation = useInView(ref, { once: true, amount: 0.2 });
  const [page, setPage] = useState(0);
  const [navigateTo, setNavigateTo] = useState("right");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const navigate = useNavigate();
  const selectedTab = useSelector(
    (state) => state.activeTab.tabSelected,
  ).toLowerCase();
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [allProducts, setAllProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  // Filter data
  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    thickness: [],
    brands: [],
    patterns: [],
    colors: [],
    scratchresistant: [],
    waterresistant: [],
    petfriendly: [],
    priceRange: [0, 500],
  });

  // Checked filter
  const [checkedFilter, setCheckedFilter] = useState({
    category: [],
    thickness: [],
    brand: [],
    pattern: [],
    color: [],
    scratchresistant: [],
    waterresistant: [],
    petfriendly: [],
    priceRange: [0, 500],
  });

  // Fetch product from database
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await dispatch(getAllProducts());
      setAllProducts(response.payload.data.products);
      setProductData(response.payload.data.products);
    };
    fetchProduct();
  }, [dispatch]);
  console.log(productData);

  // Set filter data according to type
  useEffect(() => {
    if (!allProducts?.length) return;
    setFilterOptions((prev) => ({
      ...prev,
      categories: [...new Set(allProducts.map((item) => item.category))],
      thickness: [...new Set(allProducts.map((item) => item.thickness))],
      brands: [...new Set(allProducts.map((item) => item.brand))],
      patterns: [...new Set(allProducts.map((item) => item.pattern))],
      colors: [...new Set(allProducts.flatMap((item) => item.color || []))],
      scratchresistant: [
        ...new Set(allProducts.map((item) => item.scratchresistant)),
      ],
      waterresistant: [
        ...new Set(allProducts.map((item) => item.waterresistant)),
      ],
      petfriendly: [...new Set(allProducts.map((item) => item.petfriendly))],
    }));
  }, [allProducts]);

  console.log(filterOptions.colors);

  // Window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Expandable sections state
  const [expandedSections, setExpandedSections] = useState({
    category: false,
    thickness: false,
    brand: false,
    pattern: false,
    color: false,
    additional: false,
    scratchresistant: false,
    waterresistant: false,
    petfriendly: false,
    price: false,
  });

  const innerSections = ["scratchresistant", "waterresistant", "petfriendly"];

  const toggleSection = (section) => {
    console.log(section);
    const isInner = innerSections.includes(section);
    console.log(isInner);

    setExpandedSections((prev) => ({
      additional: isInner ? true : false,
      [section]: !prev[section],
    }));
  };

  // Apply Filters on product
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const categoryMatch =
        filterOptions.categories.length === 0 ||
        filterOptions.categories.includes(product.category);

      const brandMatch =
        filterOptions.brands.length === 0 ||
        filterOptions.brands.includes(product.brand);

      const thicknessMatch =
        filterOptions.thickness.length === 0 ||
        filterOptions.thickness.includes(product.thickness);

      const patternMatch =
        filterOptions.patterns.length === 0 ||
        filterOptions.patterns.includes(product.pattern);

      const shadeMatch =
        filterOptions.colors.length === 0 ||
        filterOptions.colors.includes(product.shade);

      const scratchresistantMatch =
        filterOptions.colors.length === 0 ||
        filterOptions.colors.includes(product.shade);

      const waterresistantMatch =
        filterOptions.colors.length === 0 ||
        filterOptions.colors.includes(product.shade);

      const petfriendlyMatch =
        filterOptions.colors.length === 0 ||
        filterOptions.colors.includes(product.shade);

      const priceMatch =
        product.price >= filterOptions.priceRange[0] &&
        product.price <= filterOptions.priceRange[1];

      return (
        categoryMatch &&
        brandMatch &&
        thicknessMatch &&
        patternMatch &&
        shadeMatch &&
        scratchresistantMatch &&
        waterresistantMatch &&
        petfriendlyMatch &&
        priceMatch
      );
    });
  }, [productData, filterOptions]);

  // Sorting logic
  const sortedProducts =
    filteredProducts &&
    [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.isNew - a.isNew;
        default:
          return 0;
      }
    });

  // const totalPages = Math.ceil(sortedProducts?.length / itemsPerPage);

  // const visibleProducts = sortedProducts?.slice(
  //   page * itemsPerPage,
  //   page * itemsPerPage + itemsPerPage,
  // );

  // const next = () => {
  //   if (page < totalPages - 1) setPage(page + 1);
  //   setNavigateTo("right");
  // };

  // const prev = () => {
  //   if (page > 0) setPage(page - 1);
  //   setNavigateTo("left");
  // };

  // Handle filterOptions
  const toggleArrayFilter = (filterKey, value) => {
    console.log(filterKey);
    console.log(value);
    setCheckedFilter((prev) => {
      const currentArray = prev[filterKey] ?? [];
      return {
        ...prev,
        [filterKey]: currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });

    // Filter the filteredArray
    const filteredArray = productData?.filter(
      (product) => product[filterKey] == value,
    );
    console.log(filteredArray);
    setProductData(filteredArray);
    setPage(0);
  };

  // Filter product data
  //   useEffect(() => {
  //   if (!allProducts.length) return;

  //   let filtered = [...allProducts];

  //   Object.entries(checkedFilter).forEach(([key, values]) => {
  //     if (Array.isArray(values) && values.length > 0) {
  //       filtered = filtered.filter((product) =>
  //         values.includes(product[key])
  //       );
  //     }
  //   });

  //   setProductData(filtered);
  // }, [checkedFilter, allProducts]);
  // console.log("Product data after filter", productData)

  const handlePriceChange = (index, value) => {
    const newRange = [...filterOptions.priceRange];
    newRange[index] = Number(value);
    setFilterOptions((prev) => ({ ...prev, priceRange: newRange }));
    setPage(0);
  };

  const clearFilters = () => {
    setCheckedFilter({
      category: [],
      thickness: [],
      brand: [],
      pattern: [],
      color: [],
      scratchresistant: [],
      waterresistant: [],
      petfriendly: [],
      priceRange: [0, 500],
    });

    setProductData(allProducts);
    setPage(0);
  };

  // hide filter data on clicking any where in the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setExpandedSections({
          category: false,
          thickness: false,
          brand: false,
          pattern: false,
          color: false,
          additional: false,
          price: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Count active filterData
  const activeFilterCount =
    filterOptions.categories.length +
    filterOptions.brands.length +
    filterOptions.thickness.length +
    filterOptions.patterns.length +
    filterOptions.colors.length;

  // Animation styling
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "right" ? 80 : -80,
    }),
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: "easeInOut",
      },
    },
    exit: (direction) => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  // Filter Sidebar Component
  const FilterSidebar = ({ isMobile = false }) => (
    <div
      ref={sidebarRef}
      className={`bg-white rounded-2xl mb-3 z-[1] ${
        isMobile ? "h-full overflow-y-auto" : "sticky top-70"
      }`}
    >
      {/* Header */}
      <div className="xl:hidden flex items-center justify-between mb-6 pb-4 border-b pt-4 border-gray-200 px-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-gray-700" />
          <h3 className="text-xl font-bold text-gray-900">Filters</h3>
        </div>
        {isMobile && (
          <button
            onClick={() => setMobileFilterOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Active Filters */}
      {/* {activeFilterCount > 0 && (
        <div className="mb-4 flex items-center justify-between bg-blue-50 p-3 rounded-lg">
          <span className="text-sm font-medium text-blue-900">
            {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""} active
          </span>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 font-semibold underline"
          >
            Clear all
          </button>
        </div>
      )} */}

      <div className="flex xl:flex-row flex-col xl:items-center justify-between px-6 xl:px-0">
        <p className="text-md text-[#666666]">Filter by:</p>

        {/* Category Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("category")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 
              ${expandedSections.category && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Category
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.category ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.category && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">
                Categories
              </h3>
              {filterOptions.categories?.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkedFilter.category &&
                      checkedFilter.category.includes(category)
                    }
                    onChange={() => toggleArrayFilter("category", category)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
                    {category}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {allProducts?.filter((p) => p.category == category).length}
                  </span>
                </div>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer" onClick={()=> setCheckedFilter((prev)=>
              ({
                ...prev,

              }))}>
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Thickness Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("thickness")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 
              ${expandedSections.thickness && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Thickness
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.thickness ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.thickness && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">
                Thickness
              </h3>
              {filterOptions.thickness?.map((thickness, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkedFilter.thickness &&
                      checkedFilter.thickness.includes(thickness)
                    }
                    onChange={() => toggleArrayFilter("thickness", thickness)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
                    {thickness}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {
                      allProducts?.filter((p) => p.thickness === thickness)
                        .length
                    }
                  </span>
                </div>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("brand")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 ${expandedSections.brand && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Brand
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.brand ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.brand && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">Brand</h3>
              {filterOptions.brands?.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkedFilter.brand && checkedFilter.brand.includes(brand)
                    }
                    onChange={() => toggleArrayFilter("brand", brand)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
                    {brand}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {allProducts?.filter((p) => p.brand === brand).length}
                  </span>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Pattern Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("pattern")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 
              ${expandedSections.pattern && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Pattern
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.pattern ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.pattern && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-wrap xl:flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">Pattern</h3>
              {filterOptions.patterns?.map((pattern) => (
                <label
                  key={pattern}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkedFilter.pattern &&
                      checkedFilter.pattern.includes(pattern)
                    }
                    onChange={() => toggleArrayFilter("pattern", pattern)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
                    {pattern}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {allProducts?.filter((p) => p.pattern === pattern).length}
                  </span>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Shade Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("color")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 
              ${expandedSections.color && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Shade
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.color ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.color && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] rounded-2xl p-6 xl:mt-2 min-w-[280px]
             xl:border border-[#998e8a] flex flex-wrap xl:flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">Shade</h3>
              {filterOptions.colors?.map((shade) => (
                <label
                  key={shade}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={
                      checkedFilter.color && checkedFilter.color.includes(shade)
                    }
                    onChange={() => toggleArrayFilter("color", shade)}
                    className="w-4 h-4 accent-[#8A6A5B] rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
                    {shade}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {allProducts?.filter((p) => p.color == shade).length}
                  </span>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("price")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 ${expandedSections.price && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Price
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.price ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.price && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl px-6 pb-6 xl:pt-6 xl:mt-2 min-w-[250px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Min
                  </label>
                  <input
                    type="number"
                    value={filterOptions.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                    min="0"
                    max={filterOptions.priceRange[1]}
                  />
                </div>
                <span className="text-gray-400 mt-5">-</span>
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Max
                  </label>
                  <input
                    type="number"
                    value={filterOptions.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                    min={filterOptions.priceRange[0]}
                    max="500"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={filterOptions.priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          )}
        </div>

        {/* Rating Filter */}
        {/* <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("rating")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 ${expandedSections.rating && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
          >
            Rating
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.rating ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.rating && (
            <div
              className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
            >
              <h3 className="text-lg font-semibold hidden xl:block">Rating</h3>
              {[4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.rating === rating}
                    onChange={() => {
                      setFilterOptions((prev) => ({ ...prev, rating }));
                      setPage(0);
                    }}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(rating)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-md xl:text-lg"
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-md xl:text-lg text-gray-600 ml-1">
                      & up
                    </span>
                  </div>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div> */}

        {/* Clear filter */}
        <button
          className="flex items-center xl:justify-between text-left cursor-pointer gap-2 font-bold py-3"
          onClick={clearFilters}
        >
          <X />
          Clear All
        </button>
      </div>

      {/* Additional filter */}
      <div className="relative w-full mx-auto">
        <button
          onClick={() => toggleSection("additional")}
          className={`flex items-center mx-auto gap-3 text-left border border-[#998e8a] px-8 py-3 mt-6 cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 
              ${expandedSections.additional ? "hidden" : "block"}`}
        >
          Additional Filters{" "}
          <ChevronDown className={`w-4 h-4 transition-transform `} />
        </button>

        {/* Additional filter tabs */}
        {expandedSections.additional && (
          <div>
            <div
              className="w-full backdrop-blur-md py-6 xl:mt-2 grid grid-cols-3 justify-center items-center gap-4 transition-all z-[1]"
            >
              <div
                className={`relative p-3 cursor-pointer flex justify-center items-center 
                ${expandedSections.scratchresistant && "bg-[#8A6A5B] text-black xl:text-white"}`}
                onClick={() => toggleSection("scratchresistant")}
              >
                <div className="flex items-center justify-center text-lg gap-5">
                  <p>Scratch Resistant</p>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.scratchresistant ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedSections.scratchresistant && (
                  <div className="absolute top-14 bg-white z-[1] rounded-lg p-6 min-w-[280px] mx-auto">
                    <div className="grid grid-cols-3 gap-5 my-3">
                      {filterOptions?.scratchresistant?.map((value, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all cursor-pointer ${
                            checkedFilter.scratchresistant &&
                            checkedFilter.scratchresistant.includes(value)
                              ? "bg-[#998E8A] text-white border-[#998E8A]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#998E8A]"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArrayFilter("scratchresistant", value);
                          }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                    <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                      Clear Filter
                    </p>
                  </div>
                )}
              </div>

              <div
                className={`relative p-3 cursor-pointer flex justify-center items-center 
                ${expandedSections.waterresistant && "bg-[#8A6A5B] text-black xl:text-white"}`}
                onClick={() => toggleSection("waterresistant")}
              >
                <div className="flex items-center justify-center text-lg gap-5">
                  <p>Water Resistant</p>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.waterresistant ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {expandedSections.waterresistant && (
                  <div className="absolute top-14 bg-white z-[1] rounded-lg p-6 min-w-[280px] mx-auto">
                    <div className="grid grid-cols-3 gap-5 my-3">
                      {filterOptions?.waterresistant?.map((value, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all cursor-pointer ${
                            checkedFilter.waterresistant &&
                            checkedFilter.waterresistant.includes(value)
                              ? "bg-[#998E8A] text-white border-[#998E8A]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#998E8A]"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArrayFilter("waterresistant", value);
                          }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                    <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                      Clear Filter
                    </p>
                  </div>
                )}
              </div>
              <div
                className={`relative p-3 cursor-pointer flex justify-center items-center 
                ${expandedSections.petfriendly && "bg-[#8A6A5B] text-black xl:text-white"}`}
                onClick={() => toggleSection("petfriendly")}
              >
                <div className="flex items-center justify-center text-lg gap-5">
                  <p>Pet Friendly</p>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedSections.petfriendly ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expandedSections.petfriendly && (
                  <div className="absolute top-14 bg-white z-[1] rounded-lg p-6 min-w-[280px] mx-auto">
                    <div className="grid grid-cols-3 gap-5 my-3">
                      {filterOptions?.petfriendly?.map((value, index) => (
                        <div
                          key={index}
                          className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all cursor-pointer ${
                            checkedFilter.petfriendly &&
                            checkedFilter.petfriendly.includes(value)
                              ? "bg-[#998E8A] text-white border-[#998E8A]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#998E8A]"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArrayFilter("petfriendly", value);
                          }}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                    <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                      Clear Filter
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() =>
                setExpandedSections((prev) => ({
                  ...prev,
                  additional: false,
                }))
              }
              className="flex items-center gap-3 text-left border border-[#998e8a] px-8 py-3 mt-6 cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 mx-auto"
            >
              Close Filters
              <X />
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="w-full mt-28" ref={filterRef}>
      <h2 className="text-3xl md:text-5xl mb-16 text-center">
        Featured Products
      </h2>

      <div className="max-w-10/12 mx-auto">
        {/* Mobile Filter & Sort Bar */}
        <div className="xl:hidden mb-6 flex items-center justify-between gap-4">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex-1"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm flex-1"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Mobile Filter Overlay */}
        <AnimatePresence>
          {mobileFilterOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileFilterOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              />
              <motion.div
                initial={{ x: -320 }}
                animate={{ x: 0 }}
                exit={{ x: -320 }}
                transition={{ type: "spring", damping: 30 }}
                className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden"
              >
                <FilterSidebar isMobile={true} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Layout */}
        <div className="">
          {/* Desktop Filter Sidebar */}
          <div className="hidden xl:block">
            <FilterSidebar />
          </div>

          {/* Desktop Sort & Results Count */}
          {sortedProducts?.length === 0 && (
            // ? (
            //   <div className="text-center py-20">
            //     <p className="text-gray-500 text-lg mb-2">
            //       No products found matching your filters.
            //     </p>
            //     <p className="text-gray-400 text-sm mb-4">
            //       Try adjusting or clearing your filters
            //     </p>
            //     <button
            //       onClick={clearFilters}
            //       className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            //     >
            //       Clear All Filters
            //     </button>
            //   </div>
            // ) :
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={page}
                  custom={navigateTo}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 relative mt-6 z-0"
                >
                  {productData?.slice(0, 8).map((item) => (
                    <motion.div
                      key={item._id}
                      variants={cardVariants}
                      className="group relative bg-white overflow-hidden transition-all duration-300 ease-out 
                      hover:-translate-y-1 border border-gray-100 cursor-pointer bg-amber-700 z-0"
                      onClick={() =>
                        navigate(`/${item.type}/${item.productName}`)
                      }
                    >
                      <div className="relative bg-gray-50">
                        <img
                          src={item.image}
                          alt={item.heading}
                          loading="lazy"
                          className="block h-[220px] lg:h-[250px] 2xl:h-[400px] w-full object-cover transition-transform duration-500"
                        />

                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <button
                          aria-label="Add to wishlist"
                          className="absolute top-2 right-2 z-20 bg-[#998E8A] backdrop-blur-sm p-1.5 rounded-full shadow-sm 
                          hover:bg-white/60 hover:scale-110 transition-all duration-300 cursor-pointer"
                        >
                          <HeartIcon className="w-5 h-5 text-white hover:text-red-500" />
                        </button>

                        <div className="absolute top-2 left-2 flex gap-3">
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
                        {/* Rating section */}
                        {/* <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">
                              ★
                            </span>
                          ))}
                          <span className="text-lg font-medium text-gray-700">
                            (200)
                          </span>
                        </div> */}

                        <div className="flex flex-col items-start justify-between gap-1">
                          <p className="text-lg xl:text-2xl font-semibold text-gray-900 line-clamp-1">
                            {item.productName}
                          </p>
                          <div className="flex items-center gap-20">
                            <p className="text-md xl:text-lg text-gray-500 line-clamp-1">
                              <span className="font-semibold">Type:</span>{" "}
                              {item.category}
                            </p>
                            <p className="text-md xl:text-lg text-gray-500 line-clamp-1">
                              <span className="font-semibold">Brand:</span>{" "}
                              {item.category}
                            </p>
                          </div>
                        </div>

                        {/* Product price section */}
                        {/* <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            ${item.price}
                          </span>
                          <span className="text-red-600 font-bold text-base">
                            50%
                          </span>
                          <span className="text-base text-gray-400 line-through">
                            ${item.price * 2}
                          </span>
                        </div> */}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Pagination */}
              {/* {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-10">
                    <button
                      onClick={prev}
                      disabled={page === 0}
                      aria-label="Previous page"
                      className="bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-3 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 disabled:hover:bg-white disabled:hover:text-gray-900"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-sm font-medium text-gray-600">
                      Page {page + 1} of {totalPages}
                    </span>

                    <button
                      onClick={next}
                      disabled={page === totalPages - 1}
                      aria-label="Next page"
                      className="bg-white hover:bg-gray-900 text-gray-900 hover:text-white p-3 rounded-full shadow-md disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 disabled:hover:bg-white disabled:hover:text-gray-900"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )} */}
              <button className="bg-[#998E8A] px-10 py-3 text-white flex justify-center items-center mx-auto mt-10 text-lg">
                View All
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
