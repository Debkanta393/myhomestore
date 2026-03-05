import React, { useState, useRef, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import FilterBar from "./FilterBar";
import ProductGrid from "./ProductGrid";
import { getAllProducts } from "../../features/product/product";

export default function Products() {
  const filterRef = useRef(null);
  const [page, setPage] = useState(0);
  const [navigateTo, setNavigateTo] = useState("right");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const dispatch=useDispatch()

  const selectedTab = useSelector(
    (state) => state.activeTab.tabSelected
  ).toLowerCase();

  const [allProducts, setAllProducts] = useState([]);
  const [productData, setProductData] = useState([]);

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

  // Fetch products
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await dispatch(getAllProducts())
      setProductData(product?.payload?.data?.products);
      setAllProducts(product?.payload?.data?.products);
    };
    fetchProduct();
  }, [dispatch]);

  // Build filter options from all products
  useEffect(() => {
    if (!allProducts?.length) return;
    setFilterOptions((prev) => ({
      ...prev,
      categories: [...new Set(allProducts.map((item) => item.category))],
      thickness: [...new Set(allProducts.flatMap((item) => item.thickness || []))],
      brands: [...new Set(allProducts.map((item) => item.brand))],
      patterns: [...new Set(allProducts.map((item) => item.pattern))],
      colors: [...new Set(allProducts.flatMap((item) => item.color || []))],
      scratchresistant: [...new Set(allProducts.map((item) => item.scratchresistant))],
      waterresistant: [...new Set(allProducts.map((item) => item.waterresistant))],
      petfriendly: [...new Set(allProducts.map((item) => item.petfriendly))],
    }));
  }, [allProducts]);


  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setExpandedSections({
          category: false, thickness: false, brand: false,
          pattern: false, color: false, additional: false, price: false,
        });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const innerSections = ["scratchresistant", "waterresistant", "petfriendly"];

  const toggleSection = (section) => {
    const isInner = innerSections.includes(section);
    setExpandedSections((prev) => ({
      additional: isInner ? true : false,
      [section]: !prev[section],
    }));
  };

  const toggleArrayFilter = (filterKey, value) => {
    setCheckedFilter((prev) => {
      const currentArray = prev[filterKey] ?? [];
      return {
        ...prev,
        [filterKey]: currentArray.includes(value)
          ? currentArray.filter((item) => item !== value)
          : [...currentArray, value],
      };
    });
    const filteredArray = productData?.filter(
      (product) => product[filterKey] == value
    );
    setProductData(filteredArray);
    setPage(0);
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...filterOptions.priceRange];
    newRange[index] = Number(value);
    setFilterOptions((prev) => ({ ...prev, priceRange: newRange }));
    setPage(0);
  };

  const clearFilters = () => {
    setCheckedFilter({
      category: [], thickness: [], brand: [], pattern: [],
      color: [], scratchresistant: [], waterresistant: [],
      petfriendly: [], priceRange: [0, 500],
    });
    setProductData(allProducts);
    setPage(0);
  };

  // Filtered + sorted products
  const filteredProducts = useMemo(() => {
    return allProducts?.filter((product) => {
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
      const priceMatch =
        product.price >= filterOptions.priceRange[0] &&
        product.price <= filterOptions.priceRange[1];
      return (
        categoryMatch && brandMatch && thicknessMatch &&
        patternMatch && shadeMatch && priceMatch
      );
    });
  }, [productData, filterOptions]);

  const sortedProducts = filteredProducts &&
    [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        case "newest": return b.isNew - a.isNew;
        default: return 0;
      }
    });

  const activeFilterCount =
    filterOptions.categories.length +
    filterOptions.brands.length +
    filterOptions.thickness.length +
    filterOptions.patterns.length +
    filterOptions.colors.length;

  return (
    <div className="w-full mt-28" ref={filterRef}>
      <h2 className="text-3xl md:text-5xl mb-16 text-center">
        Featured Products
      </h2>

      <div className="max-w-10/12 mx-auto">
        {/* Filter Bar (handles both desktop navbar + mobile sidebar) */}
        <FilterBar
          filterOptions={filterOptions}
          checkedFilter={checkedFilter}
          expandedSections={expandedSections}
          allProducts={allProducts}
          activeFilterCount={activeFilterCount}
          mobileFilterOpen={mobileFilterOpen}
          sortBy={sortBy}
          toggleSection={toggleSection}
          toggleArrayFilter={toggleArrayFilter}
          handlePriceChange={handlePriceChange}
          clearFilters={clearFilters}
          setMobileFilterOpen={setMobileFilterOpen}
          setSortBy={setSortBy}
          setExpandedSections={setExpandedSections}
        />

        {/* Product Grid */}
        <ProductGrid
          sortedProducts={sortedProducts}
          productData={productData}
          page={page}
          navigateTo={navigateTo}
        />
      </div>
    </div>
  );
}
