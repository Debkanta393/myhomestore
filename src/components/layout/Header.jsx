import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";
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
  Trash2,
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

{
  /* ─── Put this map ABOVE the mobile menu, inside your component ─── */
}
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

export function Header() {
  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mainHovered, setMainHovered] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [tabRect, setTabRect] = useState(null);
  const dispatch = useDispatch();
  const mobileMenuRef = useRef(null);
  const [menuScrolled, setMenuScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ################ Tabs content ################### //
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

  // ========== Cart section ==============
  const [activeCartSection, setActiveCartSection] = useState(false);
  useEffect(() => {
    if (activeCartSection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCartSection]);

  // Get cart item from localstorage
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  // Scrollbar in Nav section on mobile
  const handleMenuScroll = () => {
    if (mobileMenuRef.current) {
      setMenuScrolled(mobileMenuRef.current.scrollTop > 100);
    }
  };

  return (
    <header className="bg-white w-full sticky top-0 z-30">
      {/* Top Navigation Bar */}
      <div>
        <div className="bg-[#f5efed] w-full border-b border-[#D6CEC6]/30 relative z-40 overflow-visible">
          <div className="w-full lg:w-10/12 mx-auto px-4 lg:px-0">
            <nav className="flex justify-between items-center py-2 md:py-3">
              {/* Left Navigation — hidden on mobile, shown from md up */}
              <div className="flex gap-2 md:gap-6 lg:gap-8 items-center">
                {topNavItems.map((item) => (
                  <div
                    key={item.key}
                    className="relative group z-10"
                    onMouseEnter={() => setHovered(item.key)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setHovered(item.key)}
                  >
                    <div className="flex items-center gap-1.5 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-sm md:text-base lg:text-lg font-medium text-nowrap">
                      {item.label}
                      <motion.div
                        animate={{ rotate: hovered === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {hovered === item.key && topNavSubList[item.key] && (
                        <motion.ul
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 bg-white backdrop-blur-md shadow-[0_8px_30px_rgba(138,106,90,0.15)] rounded-xl p-2 min-w-[180px] border border-[#D6CEC6]/30 z-50"
                        >
                          {topNavSubList[item.key].map((list, index) => (
                            <Link
                              to={`/${list.toLowerCase().replace(/\s+/g, "-")}`}
                              key={index}
                            >
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
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
                  className="text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-sm md:text-base lg:text-lg font-medium"
                >
                  Contact
                </Link>
              </div>
              {/* Right - Phone Number (desktop) */}
              <p className="text-[#8A6A5A] text-base lg:text-lg font-medium block">
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

        {/* Announcement Banner */}
        <motion.div
          initial={{ height: "auto" }}
          animate={{ height: isScrolled ? 0 : "auto" }}
          transition={{ duration: 0.3 }}
          className="w-full bg-gradient-to-r from-[#998e8a] to-[#8A6A5A] overflow-hidden"
        >
          <div className="py-3 md:py-4 px-4 md:px-6">
            <p className="text-center text-white text-sm md:text-base lg:text-lg font-medium hidden lg:block">
              🎄 Merry Christmas! We'll be taking a break on the 20th December
              and resuming on 8th January. Online orders and enquiries can still
              be made during this period.
            </p>
            <marquee
              behavior="smooth"
              direction="rtl"
              className="block lg:hidden text-white text-sm md:text-base font-medium"
            >
              🎄 Merry Christmas! We'll be taking a break on the 20th December
              and resuming on 8th January. Online orders and enquiries can still
              be made during this period.
            </marquee>
          </div>
        </motion.div>
      </div>

      {/* ############ Tabs section ############### */}
      <div>
        <motion.div
          className="sticky top-0 z-30 bg-white transition-all duration-300"
          animate={{
            boxShadow: isScrolled
              ? "0 4px 20px rgba(138, 106, 90, 0.2)"
              : "0 0 0 rgba(138, 106, 90, 0)",
          }}
        >
          <div className="w-10/12 mx-auto">
            <div className="flex justify-between items-center py-3 md:py-4 lg:py-6">
              {/* Logo */}
              <Link to="/" className="flex items-center group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#8A6A5A] to-[#998e8a] bg-clip-text text-transparent"
                >
                  MyHomeStore
                </motion.div>
              </Link>

              {/* Search Bar - Desktop only */}
              <div className="hidden lg:block flex-1 max-w-2xl mx-8 xl:mx-12">
                <div className="relative group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-2 border-[#E7E9EB] focus:border-[#8A6A5A] py-3 pl-5 pr-12 outline-none transition-all duration-300
                     text-[#8A6A5A] placeholder:text-[#B8B0A7]"
                    placeholder="Search for products..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#998e8a] text-white p-2 hover:bg-[#998e8a] transition-colors duration-300"
                  >
                    <Search size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
                {/* Profile - hidden on mobile */}
                <Link
                  to="/profile"
                  className="hidden md:flex items-center gap-2 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User size={22} />
                  </motion.div>
                </Link>

                {/* Search icon - mobile only */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-[#8A6A5A] hover:text-[#998e8a] transition-colors"
                >
                  <Search size={20} />
                </button>

                {/* Cart */}
                <div
                  onClick={() => setActiveCartSection(true)}
                  className="flex items-center gap-2 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 relative group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBag size={22} />
                  </motion.div>
                  <span className="absolute -top-2 -right-2 bg-[#8A6A5A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                </div>

                {/* Get Quote Button - Desktop only */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hidden lg:block relative overflow-hidden py-2.5 xl:py-3 px-6 xl:px-8 bg-[#998e8a] text-white font-semibold group border-2 border-[#998e8a] transition-all duration-300"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-[#8A6A5A]">
                    Get a Quote
                  </span>
                  <span className="absolute inset-0 bg-[#f5efed] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </motion.button>

                {/* Mobile Menu Toggle */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden text-[#8A6A5A] p-1"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div
            className="relative"
            onMouseLeave={() => {
              setActiveNav(null);
              setMainHovered(null);
              setTabRect(null);
            }}
          >
            <div className="w-10/12 mx-auto overflow-x-auto scrollbar-hide">
              <div className="flex justify-between xl:justify-evenly items-center min-w-max lg:min-w-0">
                {tabs.map((tab, index) => (
                  <motion.li
                    key={index}
                    onMouseEnter={(e) => {
                      setActiveTab(index);
                      setActiveNav(index);
                      dispatch(setTabSelected(tab.tab));
                      setTabRect(e.currentTarget.getBoundingClientRect());
                    }}
                    onClick={(e) => {
                      setActiveTab(index);
                      setActiveNav(index);
                      dispatch(setTabSelected(tab.tab));
                      setTabRect(e.currentTarget.getBoundingClientRect());
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className={`hidden lg:flex justify-center items-center gap-1 2xl:gap-2 p-1 py-3 2xl:p-3 uppercase tracking-wide w-auto xl:w-[12%]
                  ${activeTab === index ? "bg-[#F5F0ED] font-semibold" : "text-black"} cursor-pointer relative`}
                  >
                    {activeTab === index && (
                      <motion.span
                        layoutId="activeTabIndicator"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#8A6A5B]"
                      />
                    )}
                    <span className="text-nowrap text-sm 2xl:text-lg">
                      {tab.tab}
                    </span>
                    <motion.div
                      animate={{ rotate: activeTab === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  </motion.li>
                ))}
              </div>
            </div>

            {/* Main Navigation */}
            <MainNav activeTab={activeTab} activeNav={activeNav} />
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              onScroll={handleMenuScroll}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-[#D6CEC6]/30 max-h-[calc(100vh-60px)] overflow-y-scroll relative nav-scroll"
            >
              <div className="w-11/12 mx-auto py-5">
                {/* Mobile Search */}
                <div className="relative mb-5">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-2 border-[#D6CEC6] focus:border-[#8A6A5A] rounded-full py-3 pl-5 pr-12 outline-none transition-all duration-300 text-[#8A6A5A] placeholder:text-[#B8B0A7]"
                    placeholder="Search..."
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8A6A5A] text-white p-2 rounded-full">
                    <Search size={18} />
                  </button>
                </div>

                {/* Mobile Navigation — Tab accordion → Section accordion → Items */}
                {tabs.map((tab, tabIndex) => (
                  <motion.div
                    key={tabIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: tabIndex * 0.05 }}
                  >
                    {/* ── Tab Header ── */}
                    <li
                      className="list-none flex justify-between items-center font-semibold text-base md:text-lg text-[#8A6A5A] cursor-pointer border-b border-[#8A6A5A]/50 py-3"
                      onClick={() =>
                        setActiveTab(tabIndex === activeTab ? null : tabIndex)
                      }
                    >
                      {tab.tab}
                      {activeTab === tabIndex ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </li>

                    {/* ── Tab Content: NavData Sections ── */}
                    <AnimatePresence>
                      {activeTab === tabIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="py-3 flex flex-col gap-1">
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

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-full py-3 px-6 bg-[#8A6A5A] text-white font-semibold rounded-lg mt-4 mb-16"
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart section */}
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
      </div>
    </header>
  );
}

function MobileNavSection({ sectionKey, openSection, setOpenSection }) {
  const isOpen = openSection === sectionKey;
  const items = navData[sectionKey];
  if (!items || items.length === 0) return null;

  return (
    <div className="border-b border-[#D6CEC6]/40 last:border-0">
      {/* Section Header */}
      <button
        onClick={() => setOpenSection(isOpen ? null : sectionKey)}
        className="w-full flex justify-between items-center px-3 py-2.5 text-left"
      >
        <span className="text-sm font-semibold text-[#8A6A5A]">
          {sectionKey}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={16} color="#8A6A5A" />
        </motion.div>
      </button>

      {/* Section Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-3 flex flex-col gap-0.5">
              {items.map((item, index) => {
                const Icon = Icons[item.icon];
                return (
                  <Link
                    key={index}
                    to={`/${item.heading}`}
                    className="flex items-start gap-2 px-3 py-2 hover:bg-[#f5efed] rounded-lg"
                  >
                    {Icon && (
                      <Icon size={18} className="text-[#B2873C] shrink-0" />
                    )}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[15px] text-[#666E7C] truncate m-0 font-medium">
                        {item.heading}
                      </span>
                      {item.subHeading && (
                        <span className="text-[13px] text-[#999] truncate hidden sm:inline m-0">
                          {item.subHeading}
                        </span>
                      )}
                    </div>
                    {item.soon && (
                      <span className="bg-[#EFE8DA] text-xs text-[#B2873C] px-2 py-0.5 shrink-0">
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
