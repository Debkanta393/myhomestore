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
  const dispatch = useDispatch();

  const selectedTab = useSelector(
    (state) => state.activeTab.tabSelected,
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
      const product = await dispatch(getAllProducts());
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
      thickness: [
        ...new Set(allProducts.flatMap((item) => item.thickness || [])),
      ],
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

  // Close dropdowns on outside click
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
    setPage(0);
  };

  const handlePriceChange = (index, value) => {
    const newRange = [...checkedFilter.priceRange];
    newRange[index] = Number(value);
    setCheckedFilter((prev) => ({ ...prev, priceRange: newRange }));
    setPage(0);
  };

  const clearOneFilter = (sectionKey) => {
    setCheckedFilter((prev)=> ({
      ...prev,
      [sectionKey]: []
    }))
    setProductData(allProducts);
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

  // Filtered + sorted products
  const filteredProducts = useMemo(() => {
    return allProducts?.filter((product) => {
      const categoryMatch =
        checkedFilter.category.length === 0 ||
        checkedFilter.category.includes(product.category);

      const brandMatch =
        checkedFilter.brand.length === 0 ||
        checkedFilter.brand.includes(product.brand);

      const thicknessMatch =
        checkedFilter.thickness.length === 0 ||
        checkedFilter.thickness.some((t) =>
          Array.isArray(product.thickness)
            ? product.thickness.includes(t)
            : product.thickness === t,
        );

      const patternMatch =
        checkedFilter.pattern.length === 0 ||
        checkedFilter.pattern.includes(product.pattern);

      const colorMatch =
        checkedFilter.color.length === 0 ||
        checkedFilter.color.some((c) =>
          Array.isArray(product.color)
            ? product.color.includes(c)
            : product.color === c,
        );

      const scratchMatch =
        checkedFilter.scratchresistant.length === 0 ||
        checkedFilter.scratchresistant.includes(product.scratchresistant);

      const waterMatch =
        checkedFilter.waterresistant.length === 0 ||
        checkedFilter.waterresistant.includes(product.waterresistant);

      const petMatch =
        checkedFilter.petfriendly.length === 0 ||
        checkedFilter.petfriendly.includes(product.petfriendly);

      const priceMatch =
        product.price >= checkedFilter.priceRange[0] &&
        product.price <= checkedFilter.priceRange[1];

      return (
        categoryMatch &&
        brandMatch &&
        thicknessMatch &&
        patternMatch &&
        colorMatch &&
        scratchMatch &&
        waterMatch &&
        petMatch &&
        priceMatch
      );
    });
  }, [allProducts, checkedFilter]);

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

  const activeFilterCount =
    checkedFilter.category.length +
    checkedFilter.brand.length +
    checkedFilter.thickness.length +
    checkedFilter.pattern.length +
    checkedFilter.color.length +
    checkedFilter.scratchresistant.length +
    checkedFilter.waterresistant.length +
    checkedFilter.petfriendly.length;

    console.log("All products", allProducts)
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
          allProducts={sortedProducts}
          activeFilterCount={activeFilterCount}
          mobileFilterOpen={mobileFilterOpen}
          sortBy={sortBy}
          toggleSection={toggleSection}
          toggleArrayFilter={toggleArrayFilter}
          handlePriceChange={handlePriceChange}
          clearOneFilter={clearOneFilter}
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
