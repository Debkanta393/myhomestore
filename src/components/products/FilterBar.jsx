import React from "react";
import { X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable single filter section (dropdown with checkboxes)
const FilterSection = ({
  label,
  sectionKey,
  options,
  checkedValues,
  clearOneFilter,
  expandedSections,
  allProducts,
  productKey,
  toggleSection,
  toggleArrayFilter,
}) => (
  <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
    <button
      onClick={() => toggleSection(sectionKey)}
      className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2
        ${expandedSections[sectionKey] && "xl:bg-[#8A6A5B] text-black xl:text-white"}`}
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          expandedSections[sectionKey] ? "rotate-180" : ""
        }`}
      />
    </button>

    {expandedSections[sectionKey] && (
      <div
        className="xl:absolute top-full bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)]
        rounded-2xl p-6 xl:mt-2 min-w-[280px] xl:border border-[#998e8a] flex flex-col gap-4 transition-all z-[1]"
      >
        <h3 className="text-lg font-semibold hidden xl:block">{label}</h3>
        {options?.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={checkedValues && checkedValues.includes(option)}
              onChange={() => toggleArrayFilter(sectionKey, option)}
              className="w-4 h-4 accent-[#8A6A5B] rounded border-2 border-[#8A6A5B] cursor-pointer"
            />
            <span className="text-md xl:text-lg text-gray-700 group-hover:text-gray-900">
              {option}
            </span>
            <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {allProducts?.filter((p) => p[productKey] == option).length}
            </span>
          </label>
        ))}
        <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer" onClick={()=> clearOneFilter(sectionKey)}>
          Clear Filter
        </p>
      </div>
    )}
  </div>
);

// The actual filter panel (used in both desktop and mobile)
const FilterPanel = ({
  isMobile = false,
  filterOptions,
  checkedFilter,
  expandedSections,
  allProducts,
  toggleSection,
  toggleArrayFilter,
  handlePriceChange,
  clearOneFilter,
  clearFilters,
  setMobileFilterOpen,
  setExpandedSections,
}) => {
  const filterSections = [
    { label: "Category", sectionKey: "category", options: filterOptions.categories, productKey: "category" },
    { label: "Thickness", sectionKey: "thickness", options: filterOptions.thickness, productKey: "thickness" },
    { label: "Brand", sectionKey: "brand", options: filterOptions.brands, productKey: "brand" },
    { label: "Pattern", sectionKey: "pattern", options: filterOptions.patterns, productKey: "pattern" },
    { label: "Shade", sectionKey: "color", options: filterOptions.colors, productKey: "color" },
  ];

  const additionalFilters = [
    { label: "Scratch Resistant", sectionKey: "scratchresistant", options: filterOptions.scratchresistant },
    { label: "Water Resistant", sectionKey: "waterresistant", options: filterOptions.waterresistant },
    { label: "Pet Friendly", sectionKey: "petfriendly", options: filterOptions.petfriendly },
  ];

  return (
    <div
      className={`bg-white rounded-2xl mb-3 z-[1] ${
        isMobile ? "h-full overflow-y-auto" : "sticky top-70"
      }`}
    >
      {/* Mobile header with close button */}
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

      <div className="flex xl:flex-row flex-col xl:items-center justify-between px-6 xl:px-0">
        <p className="text-md text-[#666666]">Filter by:</p>

        {/* Render each filter section */}
        {filterSections.map(({ label, sectionKey, options, productKey }) => (
          <FilterSection
            key={sectionKey}
            label={label}
            sectionKey={sectionKey}
            clearOneFilter={clearOneFilter}
            options={options}
            checkedValues={checkedFilter[sectionKey === "color" ? "color" : sectionKey]}
            expandedSections={expandedSections}
            allProducts={allProducts}
            productKey={productKey}
            toggleSection={toggleSection}
            toggleArrayFilter={toggleArrayFilter}
          />
        ))}

        {/* Price Filter */}
        <div className="relative border-b xl:border-none border-gray-200 pb-2 xl:pb-0">
          <button
            onClick={() => toggleSection("price")}
            className={`flex items-center gap-3 text-left cursor-pointer text-lg xl:px-4 2xl:px-8 py-2 ${
              expandedSections.price && "xl:bg-[#8A6A5B] text-black xl:text-white"
            }`}
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
                  <label className="text-xs text-gray-500 mb-1 block">Min</label>
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
                  <label className="text-xs text-gray-500 mb-1 block">Max</label>
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

        {/* Clear All */}
        <button
          className="flex items-center xl:justify-between text-left cursor-pointer gap-2 font-bold py-3"
          onClick={clearFilters}
        >
          <X />
          Clear All
        </button>
      </div>

      {/* Additional Filters (Scratch, Water, Pet) */}
      <div className="relative w-full mx-auto">
        <button
          onClick={() => toggleSection("additional")}
          className={`flex items-center mx-auto gap-3 text-left border border-[#998e8a] px-8 py-3 mt-6 cursor-pointer text-lg
            ${expandedSections.additional ? "hidden" : "block"}`}
        >
          Additional Filters <ChevronDown className="w-4 h-4" />
        </button>

        {expandedSections.additional && (
          <div>
            <div className="w-full backdrop-blur-md py-6 xl:mt-2 grid grid-cols-3 justify-center items-center gap-4 transition-all z-[1]">
              {additionalFilters.map(({ label, sectionKey, options }) => (
                <div
                  key={sectionKey}
                  className={`relative p-3 cursor-pointer flex justify-center items-center
                    ${expandedSections[sectionKey] && "bg-[#8A6A5B] text-black xl:text-white"}`}
                  onClick={() => toggleSection(sectionKey)}
                >
                  <div className="flex items-center justify-center text-lg gap-5">
                    <p>{label}</p>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedSections[sectionKey] ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {expandedSections[sectionKey] && (
                    <div className="absolute top-14 bg-white z-[1] rounded-lg p-6 min-w-[280px] mx-auto">
                      <div className="grid grid-cols-3 gap-5 my-3">
                        {options?.map((value, index) => (
                          <div
                            key={index}
                            className={`px-4 py-2 text-sm font-medium rounded-lg border-2 transition-all cursor-pointer ${
                              checkedFilter[sectionKey]?.includes(value)
                                ? "bg-[#998E8A] text-white border-[#998E8A]"
                                : "bg-white text-gray-700 border-gray-300 hover:border-[#998E8A]"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleArrayFilter(sectionKey, value);
                            }}
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                      <p className="text-[#8A6A5B] text-lg font-semibold cursor-pointer" onClick={()=> clearOneFilter(sectionKey)}>
                        Clear Filter
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={() =>
                setExpandedSections((prev) => ({ ...prev, additional: false }))
              }
              className="flex items-center gap-3 text-left border border-[#998e8a] px-8 py-3 mt-6 cursor-pointer text-lg mx-auto"
            >
              Close Filters <X />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main FilterBar export — handles mobile trigger button + overlay + desktop panel
export default function FilterBar({
  filterOptions, checkedFilter, expandedSections, allProducts,
  activeFilterCount, mobileFilterOpen, sortBy,
  toggleSection, toggleArrayFilter, handlePriceChange,
  clearFilters, clearOneFilter, setMobileFilterOpen, setSortBy, setExpandedSections,
}) {
  const sharedProps = {
    filterOptions, checkedFilter, expandedSections, allProducts,
    toggleSection, toggleArrayFilter, handlePriceChange, clearOneFilter,
    clearFilters, setMobileFilterOpen, setExpandedSections,
  };

  return (
    <>
      {/* Mobile: Filter trigger button + sort select */}
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

      {/* Mobile: Slide-in sidebar overlay */}
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
              <FilterPanel isMobile={true} {...sharedProps} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop: Inline filter navbar */}
      <div className="hidden xl:block">
        <FilterPanel isMobile={false} {...sharedProps} />
      </div>
    </>
  );
}
