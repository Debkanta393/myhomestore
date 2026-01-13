import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, HeartIcon, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    image: "./images/luxury1.webp",
    heading: "Product1",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid",
    brand: "Sony",
    price: 100,
    rating: 4.5,
    inStock: true,
    color: "Black",
    size: "M",
    material: "Leather",
    isNew: true,
    onSale: false,
    tags: ["Premium", "Best Seller"],
  },
  {
    id: 2,
    image: "./images/luxury2.webp",
    heading: "Product2",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Engineered Oak",
    brand: "Nike",
    price: 250,
    rating: 4.0,
    inStock: true,
    color: "Blue",
    size: "L",
    material: "Cotton",
    isNew: false,
    onSale: true,
    tags: ["Featured"],
  },
  {
    id: 3,
    image: "./images/luxury3.webp",
    heading: "Product3",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Australian Timber",
    brand: "IKEA",
    price: 150,
    rating: 5.0,
    inStock: false,
    color: "White",
    size: "XL",
    material: "Wood",
    isNew: true,
    onSale: false,
    tags: ["Eco-Friendly"],
  },
  {
    id: 4,
    image: "./images/luxury1.webp",
    heading: "Product4",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "European Timber",
    brand: "Samsung",
    price: 80,
    rating: 3.5,
    inStock: true,
    color: "Silver",
    size: "S",
    material: "Metal",
    isNew: false,
    onSale: true,
    tags: ["Budget Friendly"],
  },
  {
    id: 5,
    image: "./images/luxury2.webp",
    heading: "Product5",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Laminate",
    brand: "Adidas",
    price: 300,
    rating: 4.8,
    inStock: true,
    color: "Red",
    size: "M",
    material: "Polyester",
    isNew: true,
    onSale: true,
    tags: ["Premium", "Limited Edition"],
  },
  {
    id: 6,
    image: "./images/luxury3.webp",
    heading: "Product6",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hydro Laminate",
    brand: "West Elm",
    price: 200,
    rating: 4.2,
    inStock: true,
    color: "Brown",
    size: "L",
    material: "Fabric",
    isNew: false,
    onSale: false,
    tags: ["Best Seller"],
  },
  {
    id: 7,
    image: "./images/luxury2.webp",
    heading: "Product7",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Vinyl",
    brand: "Puma",
    price: 120,
    rating: 4.6,
    inStock: false,
    color: "Green",
    size: "XL",
    material: "Synthetic",
    isNew: false,
    onSale: false,
    tags: ["Featured"],
  },
  {
    id: 8,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Bamboo",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
  {
    id: 9,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid Shield",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
];

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const ref = useRef(null);
  const imageAnimation = useInView(ref, { once: true, amount: 0.2 });
  const [page, setPage] = useState(0);
  const [navigateTo, setNavigateTo] = useState("right");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

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
    category: true,
    brand: true,
    price: true,
    rating: false,
    color: false,
    size: false,
    design: false,
    availability: true,
    special: true,
    tags: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Apply Filters
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(product.category);
    const brandMatch =
      filters.brands.length === 0 || filters.brands.includes(product.brand);
    const priceMatch =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const ratingMatch = product.rating >= filters.rating;
    const stockMatch = !filters.inStock || product.inStock;
    const colorMatch =
      filters.colors.length === 0 || filters.colors.includes(product.color);
    const sizeMatch =
      filters.sizes.length === 0 || filters.sizes.includes(product.size);
    const materialMatch =
      filters.materials.length === 0 || filters.materials.includes(product.material);
    const newMatch = !filters.isNew || product.isNew;
    const saleMatch = !filters.onSale || product.onSale;
    const tagsMatch =
      filters.tags.length === 0 || filters.tags.some((tag) => product.tags.includes(tag));

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

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const visibleProducts = sortedProducts.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
    setNavigateTo("right");
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
    setNavigateTo("left");
  };

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

  // Get unique values for filters
  const categories = [...new Set(products.map((p) => p.category))];
  const brands = [...new Set(products.map((p) => p.brand))];
  const colors = [...new Set(products.map((p) => p.color))];
  const sizes = [...new Set(products.map((p) => p.size))];
  const materials = [...new Set(products.map((p) => p.material))];
  const allTags = [...new Set(products.flatMap((p) => p.tags))];

  // Count active filters
  const activeFilterCount =
    filters.categories.length +
    filters.brands.length +
    filters.colors.length +
    filters.sizes.length +
    filters.materials.length +
    filters.tags.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.inStock ? 1 : 0) +
    (filters.isNew ? 1 : 0) +
    (filters.onSale ? 1 : 0);

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

  // Color mapping for visual color filter
  const colorStyles = {
    Black: "bg-black",
    Blue: "bg-blue-600",
    White: "bg-white border-2 border-gray-300",
    Silver: "bg-gray-300",
    Red: "bg-red-600",
    Brown: "bg-amber-700",
    Green: "bg-green-600",
  };

  // Filter Sidebar Component
  const FilterSidebar = ({ isMobile = false }) => (
    <div
      className={`bg-white rounded-2xl shadow-lg ${
        isMobile ? "h-full overflow-y-auto p-6" : "sticky top-24 h-fit max-h-[calc(100vh-180px)] overflow-y-auto p-6"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
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
      {activeFilterCount > 0 && (
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
      )}

      <div className="space-y-4">
        {/* Price Range */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Price Range
            </h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.price ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.price && (
            <div className="space-y-3 mt-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <label className="text-xs text-gray-500 mb-1 block">Min</label>
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
                  <label className="text-xs text-gray-500 mb-1 block">Max</label>
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
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("category")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Category
            </h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.category ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.category && (
            <div className="space-y-2 mt-3">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleArrayFilter("categories", category)}
                    className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">
                    {category}
                  </span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {products.filter((p) => p.category === category).length}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("brand")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Brand</h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.brand ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.brand && (
            <div className="space-y-2 mt-3">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand)}
                    onChange={() => toggleArrayFilter("brands", brand)}
                    className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{brand}</span>
                  <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                    {products.filter((p) => p.brand === brand).length}
                  </span>
                </label>
              ))}
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
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("size")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Size</h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.size ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.size && (
            <div className="flex flex-wrap gap-2 mt-3">
              {["6mm", "7mm", "8mm", "9mm", "10mm", "11mm", "12mm"].map((size) => (
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
              ))}
            </div>
          )}
        </div>

        {/* Design Filter */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("material")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Design
            </h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.material ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.material && (
            <div className="space-y-2 mt-3">
              {["Long boards", "Herringbone", "Chevron"].map((material) => (
                <label key={material} className="flex items-center gap-3 cursor-pointer group">
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
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("rating")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Rating
            </h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.rating ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.rating && (
            <div className="space-y-2 mt-3">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-3 cursor-pointer group">
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
            </div>
          )}
        </div>

        {/* Special Filters */}
        <div className="border-b border-gray-200 pb-4">
          <button
            onClick={() => toggleSection("special")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Special Offers
            </h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.special ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.special && (
            <div className="space-y-3 mt-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => {
                    setFilters((prev) => ({ ...prev, inStock: e.target.checked }));
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
                    setFilters((prev) => ({ ...prev, onSale: e.target.checked }));
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
                    setFilters((prev) => ({ ...prev, isNew: e.target.checked }));
                    setPage(0);
                  }}
                  className="w-4 h-4 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  New Arrivals
                </span>
              </label>
            </div>
          )}
        </div>

        {/* Tags Filter */}
        <div className="pb-2">
          <button
            onClick={() => toggleSection("tags")}
            className="flex items-center justify-between w-full text-left"
          >
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Tags</h4>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                expandedSections.tags ? "rotate-180" : ""
              }`}
            />
          </button>
          {expandedSections.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-28 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Featured Products</h2>

      <div className="max-w-7xl mx-auto">
        {/* Mobile Filter & Sort Bar */}
        <div className="lg:hidden mb-6 flex items-center justify-between gap-4">
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
        <div className="flex gap-8">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort & Results Count */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <span className="text-sm text-gray-600">
                {sortedProducts.length} product{sortedProducts.length !== 1 ? "s" : ""} found
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {sortedProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg mb-2">
                  No products found matching your filters.
                </p>
                <p className="text-gray-400 text-sm mb-4">Try adjusting or clearing your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={page}
                    custom={navigateTo}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                  >
                    {visibleProducts.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={cardVariants}
                        custom={navigateTo}
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
                            <HeartIcon className="w-4 h-4 text-gray-700 hover:text-red-500" />
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

                          <p className="text-xs text-gray-500 line-clamp-1">{item.brand}</p>

                          {/* Compact Rating */}
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-400 text-xs">★</span>
                            <span className="text-xs font-medium text-gray-700">{item.rating}</span>
                          </div>

                          {/* Compact Price */}
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-gray-900">${item.price}</span>
                            <span className="text-xs text-gray-400 line-through">
                              ${item.price * 2}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
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
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
