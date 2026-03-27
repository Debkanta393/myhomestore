import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  LayoutDashboard,
  Table2,
  TableCellsMerge,
  Bath,
  Microwave,
  House,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { topNavItems, topNavSubList } from "../../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectCartItems } from "../../features/cart/cart";
import CartSidebar from "../ui/CartSidebar";
import { setTabSelected } from "../../features/slice";
import MainNav from "../ui/MainNav";
import { navData } from "../../../data/data";
import * as Icons from "lucide-react";
import { searchProduct } from "../../features/product/product";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

// ✅ Moved outside component — no recreation on every render
const mobileNavSections = {
  0: ["By Room", "By Category", "Shop By Brands"],
  1: [
    "Resilient & Modern",
    "Accessories",
    "Brands",
    "Natural Timber",
    "By Species",
    "Eco - Friendly",
    "Need Help?",
  ],
  2: [
    "Decking",
    "Cladding & Screening",
    "Fencing & Benchtops",
    "Outdoor Benchtops",
  ],
  3: ["Bamboo Products", "Sustainable Timber", "Eco Brands"],
  4: ["Bathroom", "Kitchen", "Brands", "Services"],
  5: ["Indoor Tiles", "Outdoor & Commercial", "DW Tiles"],
  6: ["Installation", "Consultation"],
  7: ["Current Offers", "Trade & Volume"],
};

const tabs = [
  { tab: "All Categories", icon: <LayoutDashboard />, hasMenu: true },
  { tab: "Flooring", icon: <Table2 />, hasMenu: true },
  { tab: "Outdoor Living", icon: <Table2 />, hasMenu: true },
  { tab: "Bamboo & Eco", icon: <Table2 />, hasMenu: true },
  { tab: "Bathroom", icon: <Bath />, hasMenu: true },
  { tab: "Tiles", icon: <TableCellsMerge />, hasMenu: true },
  { tab: "Services", icon: <Microwave />, hasMenu: true },
  { tab: "Sale", icon: <House />, hasMenu: true },
];

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

export function Header() {
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mainHovered, setMainHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [searchResult, setSearchResult] = useState(false);

  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);
  const searchRef = useRef();
  const mobileSearchRef = useRef();
  const navigate = useNavigate();

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart sidebar body lock
  const [activeCartSection, setActiveCartSection] = useState(false);
  useEffect(() => {
    document.body.style.overflow = activeCartSection ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCartSection]);

  // ✅ Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const cartCount = useSelector(selectCartCount);

  const handleSearchProduct = (e) => {
    const name = e.target.value;
    setSearchQuery(name);
    setSearchResult(true);
    dispatch(searchProduct(name));
  };

  const searchResults = useSelector(
    (state) => state.product.list.searchResults,
  );

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResult(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setMobileSearchOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-white w-full sticky top-0 z-30">
      {/* ── Top Bar ── */}
      <div className="bg-[#f5efed] w-full border-b border-[#D6CEC6]/30 relative z-40">
        <div className="w-full lg:w-10/12 mx-auto px-4 lg:px-0">
          <nav className="flex justify-between items-center py-2 md:py-3">
            {/* Left nav links — hidden on mobile, visible md+ */}
            <div className="flex gap-2 lg:gap-8 items-center">
              {topNavItems.map((item) => (
                <div
                  key={item.key}
                  className="relative group z-10"
                  onMouseEnter={() => setHovered(item.key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="flex items-center gap-1.5 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-xs sm:text-base
                   font-medium whitespace-nowrap cursor-pointer"
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: hovered === item.key ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={15} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {hovered === item.key && topNavSubList[item.key] && (
                      <motion.ul
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 bg-white shadow-[0_8px_30px_rgba(138,106,90,0.15)] rounded-xl p-2 min-w-[180px] border border-[#D6CEC6]/30 z-50"
                      >
                        {topNavSubList[item.key].map((list, index) => (
                          <Link
                            to={`/${list.toLowerCase().replace(/\s+/g, "-")}`}
                            key={index}
                          >
                            <motion.li
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.04 }}
                              className="whitespace-nowrap hover:bg-[#f5efed] cursor-pointer text-[#8A6A5A] rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200"
                            >
                              {list}
                            </motion.li>
                          </Link>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/contact"
                className="text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-sm lg:text-base font-medium hidden sm:block"
              >
                Contact
              </Link>
            </div>

            {/* Mobile: just show brand tagline or nothing on left */}
            <div className="md:hidden" />

            {/* Right: phone */}
            <p className="text-[#8A6A5A] text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">
              Call:{" "}
              <Link
                to="tel:000000000"
                className="hover:text-[#998e8a] transition-colors duration-300 font-semibold"
              >
                000 000 000
              </Link>
            </p>
          </nav>
        </div>
      </div>

      {/* ── Announcement Banner ── */}
      <motion.div
        initial={{ height: "auto" }}
        animate={{ height: isScrolled ? 0 : "auto" }}
        transition={{ duration: 0.3 }}
        className="w-full bg-gradient-to-r from-[#998e8a] to-[#8A6A5A] overflow-hidden"
      >
        <div className="py-2.5 md:py-3 px-4">
          {/* Desktop: static text */}
          <p className="hidden lg:block text-center text-white text-sm md:text-base font-medium">
            🎄 Merry Christmas! We'll be taking a break on the 20th December and
            resuming on 8th January. Online orders and enquiries can still be
            made during this period.
          </p>
          {/* ✅ Mobile: marquee replaced with CSS scrolling for better browser support */}
          <div className="lg:hidden overflow-hidden">
            <motion.p
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="text-white text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              🎄 Merry Christmas! We'll be taking a break on the 20th December
              and resuming on 8th January. Online orders and enquiries can still
              be made during this period.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── Logo + Search + Actions ── */}
      <motion.div
        className="sticky top-0 z-30 bg-white transition-all duration-300"
        animate={{
          boxShadow: isScrolled
            ? "0 4px 20px rgba(138, 106, 90, 0.2)"
            : "0 0 0 rgba(138, 106, 90, 0)",
        }}
      >
        <div className="w-11/12 lg:w-10/12 mx-auto">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-5">
            {/* Logo */}
            <Link to="/" className="flex items-center group shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="text-lg sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#8A6A5A] to-[#998e8a] bg-clip-text text-transparent"
              >
                MyHomeStore
              </motion.div>
            </Link>

            {/* Desktop Search Bar */}
            <div
              className="hidden lg:block flex-1 max-w-xl mx-8 xl:mx-12"
              ref={searchRef}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchProduct}
                  className="w-full border-2 border-[#E7E9EB] focus:border-[#8A6A5A] py-2.5 xl:py-3 pl-5 pr-12 outline-none transition-all duration-300 text-[#8A6A5A] placeholder:text-[#B8B0A7] text-sm xl:text-base"
                  placeholder="Search for products..."
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#998e8a] text-white p-2 transition-colors duration-300"
                >
                  <Search size={18} />
                </motion.button>

                {/* Desktop search results */}
                {searchResults && searchResult && (
                  <div
                    className="absolute top-full left-0 bg-white border border-[#E7E9EB] shadow-lg p-3 z-50 w-full list-none space-y-1 rounded-b"
                    onClick={() => setSearchResult(false)}
                  >
                    {searchResults.length === 0 ? (
                      <p className="text-sm text-[#999] px-3 py-2">
                        No results found.
                      </p>
                    ) : (
                      searchResults.map((list, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -8, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.05 * index, duration: 0.3 }}
                          className="px-3 py-2 rounded hover:bg-[#f5efed] cursor-pointer text-sm font-medium text-[#666E7C]"
                          onClick={() =>
                            navigate(
                              `/${list.range.toLowerCase()}/${slugify(list.productName)}`,
                            )
                          }
                        >
                          {list.productName}
                        </motion.li>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
              {/* Profile — md+ only */}
              <Link
                to="/profile"
                className="hidden md:flex items-center text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={20} />
                </motion.div>
              </Link>

              {/* ✅ Mobile search toggle — separate from hamburger */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileSearchOpen((prev) => !prev);
                  setMobileMenuOpen(false);
                }}
                className="lg:hidden text-[#8A6A5A] hover:text-[#998e8a] transition-colors p-1"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Cart */}
              <div
                onClick={() => navigate("/cart")}
                className="flex items-center text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 relative cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag size={20} />
                </motion.div>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#8A6A5A] text-white text-[10px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Get Quote — desktop only */}
              {/* <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block relative overflow-hidden py-2.5 xl:py-3 px-5 xl:px-8 bg-[#998e8a] text-white font-semibold group border-2 border-[#998e8a] transition-all duration-300 text-sm xl:text-base"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8A6A5A]">
                  Get a Quote
                </span>
                <span className="absolute inset-0 bg-[#f5efed] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </motion.button> */}

              <Button variant="primary" size="lg">
                Get a Quote
              </Button>

              {/* Hamburger — mobile/tablet only */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => {
                  setMobileMenuOpen((prev) => !prev);
                  setMobileSearchOpen(false);
                }}
                className="lg:hidden text-[#8A6A5A] p-1"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Search Bar — slides down when search icon tapped */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              ref={mobileSearchRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden border-t border-[#E7E9EB] bg-white"
            >
              <div className="w-11/12 mx-auto py-3 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchProduct}
                  autoFocus
                  className="w-full border-2 border-[#D6CEC6] focus:border-[#8A6A5A] py-2.5 pl-4 pr-12 outline-none transition-all duration-300 text-[#8A6A5A] placeholder:text-[#B8B0A7] text-sm rounded"
                  placeholder="Search for products..."
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#8A6A5A] text-white p-2">
                  <Search size={16} />
                </button>

                {/* Mobile search results */}
                {searchResults && searchResult && (
                  <div
                    className="absolute top-full left-0 right-0 mx-auto w-11/12 bg-white border border-[#E7E9EB] shadow-lg rounded-b z-50 max-h-60 overflow-y-auto"
                    onClick={() => setSearchResult(false)}
                  >
                    {searchResults.length === 0 ? (
                      <p className="text-sm text-[#999] px-4 py-3">
                        No results found.
                      </p>
                    ) : (
                      searchResults.map((list, index) => (
                        <div
                          key={index}
                          className="px-4 py-2.5 hover:bg-[#f5efed] cursor-pointer text-sm font-medium text-[#666E7C] border-b border-[#f0ece8] last:border-0"
                          onClick={() =>
                            navigate(
                              `/${list.range.toLowerCase()}/${slugify(list.productName)}`,
                            )
                          }
                        >
                          {list.productName}
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Desktop Tab Nav ── */}
        <div
          className="relative hidden lg:block"
          onMouseLeave={() => {
            setActiveNav(null);
            setMainHovered(null);
          }}
        >
          <div className="w-10/12 mx-auto overflow-x-auto scrollbar-hide">
            <div className="flex justify-between xl:justify-evenly items-center min-w-max lg:min-w-0">
              {tabs.map((tab, index) => (
                <motion.li
                  key={index}
                  onClick={(e) => {
                    setActiveTab(activeTab === index ? null : index);
                    setActiveNav(activeTab === index ? null : index);
                    dispatch(setTabSelected(tab.tab));
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className={`list-none flex justify-center items-center gap-1 2xl:gap-2 px-2 xl:px-3 py-3 2xl:py-4 uppercase tracking-wide cursor-pointer relative select-none
                    ${activeTab === index ? "bg-[#F5F0ED] font-semibold" : "text-black hover:bg-[#faf8f7]"}
                    transition-colors duration-200`}
                >
                  {activeTab === index && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#8A6A5B]"
                    />
                  )}
                  <span className="whitespace-nowrap text-xs xl:text-sm 2xl:text-base">
                    {tab.tab}
                  </span>
                  <motion.div
                    animate={{ rotate: activeTab === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={13} />
                  </motion.div>
                </motion.li>
              ))}
            </div>
          </div>

          <MainNav activeTab={activeTab} activeNav={activeNav} />
        </div>
      </motion.div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[#D6CEC6]/30 max-h-[calc(100dvh-120px)] overflow-y-auto relative z-20"
          >
            <div className="w-11/12 mx-auto py-4 pb-24">
              {/* Mobile nav accordion */}
              {tabs.map((tab, tabIndex) => (
                <motion.div
                  key={tabIndex}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: tabIndex * 0.04 }}
                >
                  <button
                    className="w-full list-none flex justify-between items-center font-semibold text-sm sm:text-base text-[#8A6A5A] cursor-pointer border-b border-[#8A6A5A]/30 py-3.5 text-left"
                    onClick={() =>
                      setActiveTab(tabIndex === activeTab ? null : tabIndex)
                    }
                  >
                    {tab.tab}
                    <motion.div
                      animate={{ rotate: activeTab === tabIndex ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeTab === tabIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="py-2 flex flex-col gap-0.5">
                          {(mobileNavSections[tabIndex] ?? []).map(
                            (sectionKey) => (
                              <MobileNavSection
                                key={sectionKey}
                                sectionKey={sectionKey}
                                openSection={mainHovered}
                                setOpenSection={setMainHovered}
                              />
                            ),
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Mobile links */}
              <div className="mt-4 pt-4 border-t border-[#D6CEC6]/40 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="text-[#8A6A5A] text-sm font-medium py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/profile"
                  className="text-[#8A6A5A] text-sm font-medium py-1 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={16} /> My Account
                </Link>
              </div>

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full py-3 px-6 bg-[#8A6A5A] hover:bg-[#7a5f50] text-white font-semibold rounded-lg mt-5 transition-colors"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Cart Sidebar ── */}
      <AnimatePresence>
        {activeCartSection && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[9998]"
              onClick={() => setActiveCartSection(false)}
            />
            <CartSidebar
              onClose={() => setActiveCartSection(false)}
              isOpen={activeCartSection}
            />
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── MobileNavSection ──────────────────────────────────────────────────────────
function MobileNavSection({ sectionKey, openSection, setOpenSection }) {
  const isOpen = openSection === sectionKey;
  const items = navData[sectionKey];
  if (!items || items.length === 0) return null;

  return (
    <div className="border-b border-[#D6CEC6]/40 last:border-0">
      <button
        onClick={() => setOpenSection(isOpen ? null : sectionKey)}
        className="w-full flex justify-between items-center px-3 py-3 text-left"
      >
        <span className="text-sm font-semibold text-[#8A6A5A]">
          {sectionKey}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={15} color="#8A6A5A" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-3 flex flex-col gap-0.5">
              {items.map((item, index) => {
                const Icon = Icons[item.icon];
                return (
                  <Link
                    key={index}
                    to={`/${item.heading}`}
                    className="flex items-start gap-2 px-3 py-2 hover:bg-[#f5efed] rounded-lg transition-colors"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        className="text-[#B2873C] shrink-0 mt-0.5"
                      />
                    )}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[14px] sm:text-[15px] text-[#666E7C] font-medium truncate">
                        {item.heading}
                      </span>
                      {item.subHeading && (
                        <span className="text-xs text-[#999] truncate hidden sm:block">
                          {item.subHeading}
                        </span>
                      )}
                    </div>
                    {item.soon && (
                      <span className="bg-[#EFE8DA] text-[11px] text-[#B2873C] px-2 py-0.5 shrink-0 rounded">
                        Soon
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
