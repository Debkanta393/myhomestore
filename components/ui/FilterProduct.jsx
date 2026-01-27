import React, { useState, useRef, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useSelector } from "react-redux";
import { category, brand, products } from "../../data/data";

export default function Products() {
  const ref = useRef(null);
  const sidebarRef = useRef(null);
  const filterRef = useRef(null);
  const imageAnimation = useInView(ref, { once: true, amount: 0.2 });
  const [page, setPage] = useState(0);
  const [navigateTo, setNavigateTo] = useState("right");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const selectedTab = useSelector(
    (state) => state.activeTab.tabSelected,
  ).toLowerCase();
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Window width
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 1200) {
      setItemsPerPage(8);
    } else if (width > 1000 && width < 1200) {
      setItemsPerPage(6);
    }
  }, [width]);

  console.log("Window width", width);

  // Expanded Filter States
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 500],
    rating: 0,
    inStock: false,
    colors: [],
    sizes: [],
    materials: [],
    isNew: false,
    onSale: false,
    tags: [],
  });

  // Expandable sections state
  const [expandedSections, setExpandedSections] = useState({
    category: false,
    brand: false,
    price: false,
    rating: false,
    color: false,
    size: false,
    design: false,
    availability: false,
    special: false,
    tags: false,
  });

  const toggleSection = (section) => {
    if (!section) return;
    setExpandedSections((prev) => ({
      [section]: !prev[section],
    }));
  };

  // Apply Filters
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);
    const brandMatch =
      filters.brands.length === 0 || filters.brands.includes(product.brand);
    const priceMatch =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    const ratingMatch = product.rating >= filters.rating;
    const stockMatch = !filters.inStock || product.inStock;
    const colorMatch =
      filters.colors.length === 0 || filters.colors.includes(product.color);
    const sizeMatch =
      filters.sizes.length === 0 || filters.sizes.includes(product.size);
    const materialMatch =
      filters.materials.length === 0 ||
      filters.materials.includes(product.material);
    const newMatch = !filters.isNew || product.isNew;
    const saleMatch = !filters.onSale || product.onSale;
    const tagsMatch =
      filters.tags.length === 0 ||
      filters.tags.some((tag) => product.tags.includes(tag));

    return (
      categoryMatch &&
      brandMatch &&
      priceMatch &&
      ratingMatch &&
      stockMatch &&
      colorMatch &&
      sizeMatch &&
      materialMatch &&
      newMatch &&
      saleMatch &&
      tagsMatch
    );
  });

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  // Handle filters
  const toggleArrayFilter = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey].includes(value)
        ? prev[filterKey].filter((item) => item !== value)
        : [...prev[filterKey], value],
    }));
    setPage(0);
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...filters.priceRange];
    newRange[index] = Number(value);
    setFilters((prev) => ({ ...prev, priceRange: newRange }));
    setPage(0);
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      priceRange: [0, 500],
      rating: 0,
      inStock: false,
      colors: [],
      sizes: [],
      materials: [],
      isNew: false,
      onSale: false,
      tags: [],
    });
    setPage(0);
  };

  // hide filter data on clicking any where in the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setExpandedSections({
          category: false,
          brand: false,
          price: false,
          rating: false,
          color: false,
          size: false,
          design: false,
          availability: false,
          special: false,
          tags: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get unique values for filters
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
  const colors = [...new Set(products.map((p) => p.color))];
  const sizes = [...new Set(products.map((p) => p.size))];
  const materials = [...new Set(products.map((p) => p.material))];
  const allTags = [...new Set(products.flatMap((p) => p.tags))];

  return (
    <div
      ref={sidebarRef}
      className={`bg-white rounded-2xl mb-3 ${
        isMobile ? "h-full overflow-y-auto" : "sticky top-70"
      }`}
    >
      <div className="flex xl:flex-row flex-col items-center justify-between">
        <p className="text-md text-[#666666]">Filter by:</p>
        {/* Price Range */}
        <div className="relative">
          <button
            onClick={() => toggleSection("price")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.price && "bg-[#8A6A5B] text-white"}`}
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
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[250px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Min
                  </label>
                  <input
                    type="number"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                    min="0"
                    max={filters.priceRange[1]}
                  />
                </div>
                <span className="text-gray-400 mt-5">-</span>
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">
                    Max
                  </label>
                  <input
                    type="number"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                    min={filters.priceRange[0]}
                    max="500"
                  />
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          )}
        </div>

        {/* Category Filter */}
        <div className="relative">
          <button
            onClick={() => toggleSection("category")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.category && "bg-[#8A6A5B] text-white"}`}
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
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Categories</h3>
              {category[selectedTab]?.map((category, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleArrayFilter("categories", category)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-lg text-gray-700 group-hover:text-gray-900">
                    {category}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {products.filter((p) => p.category === category).length}
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
        <div className="relative">
          <button
            onClick={() => toggleSection("brand")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.brand && "bg-[#8A6A5B] text-white"}`}
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
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Brand</h3>
              {brand[selectedTab]?.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => toggleArrayFilter("brands", brand)}
                    className="w-4 h-4 rounded border-2 border-[#8A6A5B] text-[#8A6A5B] focus:ring-2 focus:ring-[#8A6A5B] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {brand}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {products.filter((p) => p.brand === brand).length}
                  </span>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Color Filter */}
        {/* <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("color")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Color</h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.color ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.color && (
            <div className="flex flex-wrap gap-2 mt-3">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleArrayFilter("colors", color)}
                  className={`w-10 h-10 rounded-full ${colorStyles[color]} ${
                    filters.colors.includes(color)
                      ? "ring-2 ring-blue-600 ring-offset-2"
                      : "ring-1 ring-gray-300"
                  } hover:scale-110 transition-all`}
                  title={color}
                />
              ))}
            </div>
          )}
        </div> */}

        {/* Size Filter */}
        <div className="relative">
          <button
            onClick={() => toggleSection("size")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.size && "bg-[#8A6A5B] text-white"}`}
          >
            Size
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.size ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.size && (
            <div
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Size</h3>
              {["6mm", "7mm", "8mm", "9mm", "10mm", "11mm", "12mm"].map(
                (size) => (
                  <button
                    key={size}
                    onClick={() => toggleArrayFilter("sizes", size)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all ${
                      filters.sizes.includes(size)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
                    }`}
                  >
                    {size}
                  </button>
                ),
              )}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Design Filter */}
        <div className="relative">
          <button
            onClick={() => toggleSection("material")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.material && "bg-[#8A6A5B] text-white"}`}
          >
            Design
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.material ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.material && (
            <div
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Design</h3>
              {["Long boards", "Herringbone", "Chevron"].map((material) => (
                <label
                  key={material}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.materials.includes(material)}
                    onChange={() => toggleArrayFilter("materials", material)}
                    className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {material}
                  </span>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="relative">
          <button
            onClick={() => toggleSection("rating")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.rating && "bg-[#8A6A5B] text-white"}`}
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
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Rating</h3>
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
                      setFilters((prev) => ({ ...prev, rating }));
                      setPage(0);
                    }}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-600 ml-1">& up</span>
                  </div>
                </label>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Special Filters */}
        <div className="relative">
          <button
            onClick={() => toggleSection("special")}
            className={`flex items-center gap-3 text-left cursor-pointer text-md xl:text-lg px-4 2xl:px-8 py-2 ${expandedSections.special && "bg-[#8A6A5B] text-white"}`}
          >
            Special Offers
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.special ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.special && (
            <div
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Special Offer</h3>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      inStock: e.target.checked,
                    }));
                    setPage(0);
                  }}
                  className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  In Stock Only
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.onSale}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      onSale: e.target.checked,
                    }));
                    setPage(0);
                  }}
                  className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  On Sale
                </span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.isNew}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      isNew: e.target.checked,
                    }));
                    setPage(0);
                  }}
                  className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  New Arrivals
                </span>
              </label>
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Tags Filter */}
        <div className="relative">
          <button
            onClick={() => toggleSection("tags")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg px-4 2xl:px-8 py-2 ${expandedSections.tags && "bg-[#8A6A5B] text-white"}`}
          >
            Tags
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.tags ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.tags && (
            <div
              className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
          rounded-2xl p-6 min-w-[280px] border border-[#998e8a] flex flex-col gap-4 transition-all z-50"
            >
              <h3 className="text-lg font-semibold">Tags</h3>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleArrayFilter("tags", tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    filters.tags.includes(tag)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
              <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer">
                Clear Filter
              </p>
            </div>
          )}
        </div>

        {/* Clear filter */}
        <button
          className="flex items-center justify-between text-left cursor-pointer gap-2 font-bold"
          onClick={clearFilters}
        >
          <X />
          Clear All
        </button>
      </div>
    </div>
  );
}
