import React from "react";
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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setTabSelected } from "../../slice/slice";
import { useDispatch } from "react-redux";
import { mainNav, mainNavSub } from "../../data/data";

export default function MainNav() {
  const [mainHovered, setMainHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const [activeNav, setActiveNav] = useState(null);
  const [tabRect, setTabRect] = useState(null);
  const dispath = useDispatch();

  // Tabs in header
  const tabs = [
    { tab: "All Categories", icon: <LayoutDashboard />, hasMenu: true },
    { tab: "Flooring", icon: <Table2 />, hasMenu: true },
    { tab: "Tiles", icon: <TableCellsMerge />, hasMenu: true },
    { tab: "Bathroom", icon: <Bath />, hasMenu: true },
    { tab: "Kitchen & Laundry", icon: <Microwave />, hasMenu: true },
    { tab: "Other Home Improvements", icon: <House />, hasMenu: true },
  ];

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ${
  //           activeTab === index
  //             ? `
  //               bg-gradient-to-br from-[#998e8a] via-[#8A6A5A] to-[#8A6A5A]
  //               text-white
  //               shadow-[0_-4px_20px_rgba(138,106,90,0.3),0_-2px_10px_rgba(138,106,90,0.2)]
  //               border-2 border-[#8A6A5A]
  //               border-b-0
  //               translate-y-[2px]
  //             `
  //             : `
  //               bg-white/80
  //               text-[#8A6A5A]
  //               border-2 border-[#D6CEC6]/50
  //               border-b-0
  //               hover:bg-[#f5efed]/60
  //               hover:border-[#B8B0A7]/60
  //               shadow-[0_-2px_12px_rgba(138,106,90,0.1)]
  //               hover:shadow-[0_-4px_16px_rgba(138,106,90,0.2)]
  //             `
  //         }

  return (
    <div>
      {/* Main Header - Sticky */}
      <motion.div
        className="sticky top-0 z-30 bg-white transition-all duration-300"
        animate={{
          boxShadow: isScrolled
            ? "0 4px 20px rgba(138, 106, 90, 0.2)"
            : "0 0 0 rgba(138, 106, 90, 0)",
        }}
       >
        <div className="w-11/12 sm:max-w-10/12 mx-auto">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#8A6A5A] to-[#998e8a] bg-clip-text text-transparent"
              >
                MyHomeStore
              </motion.div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block flex-1 max-w-2xl mx-12">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border-2 border-[#D6CEC6] focus:border-[#8A6A5A] rounded-full py-3 pl-5 pr-12 outline-none transition-all duration-300 text-[#8A6A5A] placeholder:text-[#B8B0A7]"
                  placeholder="Search for products..."
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#998e8a] text-white p-2 rounded-full hover:bg-[#998e8a] transition-colors duration-300"
                >
                  <Search size={20} />
                </motion.button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Profile */}
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

              {/* Cart */}
              <Link
                to="/cart"
                className="flex items-center gap-2 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingBag size={22} />
                </motion.div>
                {/* Cart Count Badge */}
                <span className="absolute -top-2 -right-2 bg-[#8A6A5A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Get Quote Button - Desktop */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block relative overflow-hidden py-3 px-8 bg-[#998e8a] text-white font-semibold group border-2 border-[#998e8a] transition-all duration-300"
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
                className="lg:hidden text-[#8A6A5A] p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Tabs section */}
        {/* Tabs Section */}
        <div
          className="relative"
          onMouseLeave={() => {
            setActiveNav(null)
            setMainHovered(null);
            setTabRect(null);
          }}
        >
          {/* Tabs Section */}
          <div className="max-w-10/12 mx-auto my-1">
            <div className="flex justify-center xl:justify-evenly xl:items-center gap-2">
              {tabs.map((tab, index) => (
                <motion.li
                  key={index}
                  onMouseEnter={(e) => {
                    setActiveTab(index);
                    setActiveNav(index)
                    dispath(setTabSelected(tab.tab));
                    setTabRect(e.currentTarget.getBoundingClientRect());
                  }}
                  onClick={(e) => {
                    setActiveTab(index);
                    setActiveNav(index)
                    dispath(setTabSelected(tab.tab));
                    setTabRect(e.currentTarget.getBoundingClientRect());
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`hidden lg:flex justify-center items-center gap-2 py-3 rounded-t-2xl text-[12px] xl:text-sm font-bold uppercase tracking-wide
                     ${activeTab === index ? "text-[#8A6A5A]": "text-black"} cursor-pointer relative`}
                >
                  {activeTab === index && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8A6A5A] via-[#f5efed] to-[#998e8a] rounded-t-2xl"
                    />
                  )}

                  <span>{tab.icon}</span>
                  <span>{tab.tab}</span>

                  <motion.div
                    animate={{ rotate: activeTab === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.li>
              ))}
            </div>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:block border-t border-[#D6CEC6]/30 bg-[#f5efed]/30 backdrop-blur-sm">
            <div className="max-w-10/12 mx-auto px-6 relative">
              {activeNav !== null && tabRect && (
                <nav
                  style={{
                    left: tabRect.left + tabRect.width / 2,
                    transform: "translate(-120%, -15px)",
                  }}
                  className="absolute top-full mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] rounded-2xl p-6 min-w-[250px] border border-[#998e8a] flex flex-col gap-4 transition-all"
                >
                  {/* Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#D6CEC6]/30 rotate-45"></div>

                  {mainNav[activeNav]?.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setMainHovered(item.key)}
                      onMouseLeave={() => setMainHovered(null)}
                    >
                      <Link
                        to={`/${item.key}`}
                        className="flex items-center justify-between gap-2 text-[#8A6A5A] hover:text-[#998e8a] font-medium text-md whitespace-nowrap transition"
                      >
                        {item.label}

                        {item.hasSubmenu && (
                          <motion.div
                            animate={{
                              rotate: mainHovered === item.key ? 180 : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            onClick={(e)=> {e.preventDefault(); setMainHovered(item.key)}}
                          >
                            <ChevronDown size={14} />
                          </motion.div>
                        )}
                      </Link>

                      {/* SIDE SUB MENU */}
                      <AnimatePresence>
                        {mainHovered === item.key &&
                          item.hasSubmenu &&
                          mainNavSub[item.key] && (
                            <motion.div
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-full top-0 ml-6 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] rounded-2xl p-5 min-w-[260px] border border-[#998e8a]"
                            >
                              {mainNavSub[item.key].map((subItem, i) => (
                                <motion.div
                                  key={i}
                                  className="hover:bg-[#f5efed] rounded-lg px-4 py-2 text-[#8A6A5A] text-md font-medium cursor-pointer hover:translate-x-1 transition"
                                >
                                  <Link
                                    to={`/${item.key}/${subItem
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    {subItem}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[#D6CEC6]/30"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              {/* Mobile Search */}
              <div className="relative mb-6">
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

              {/* Mobile Navigation */}
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* TAB HEADER */}
                  <li
                    className="list-none flex justify-between items-center font-semibold text-lg text-[#8A6A5A] cursor-pointer border-b border-[#8A6A5A]/50 py-3"
                    onClick={() =>
                      setActiveTab(index == activeTab ? null : index)
                    }
                  >
                    {tab}
                    {activeTab === index ? <ChevronUp /> : <ChevronDown />}
                  </li>

                  {/* Showing only active tab */}
                  {activeTab === index && (
                    <nav className="flex flex-col gap-2 py-4 max-h-[70vh] overflow-y-auto">
                      {mainNav[index].map((item, mainIndex) => (
                        <div
                          key={mainIndex}
                          className="relative ml-6"
                          onClick={() =>
                            setMainHovered(
                              mainHovered === item.key ? null : item.key,
                            )
                          }
                        >
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex justify-between items-center"
                          >
                            <Link
                              to={`/${item.key}`}
                              className="text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 font-medium text-md"
                            >
                              {item.label}
                            </Link>

                            {item.hasSubmenu && (
                              <motion.div
                                animate={{
                                  rotate: mainHovered === item.key ? 180 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown size={25} color="#8A6A5A" />
                              </motion.div>
                            )}
                          </motion.div>

                          {/* Submenu */}
                          <AnimatePresence>
                            {mainHovered === item.key &&
                              item.hasSubmenu &&
                              mainNavSub[item.key] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="relative mt-3 ml-4"
                                >
                                  {mainNavSub[item.key].map(
                                    (subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        to={`/${item.key}/${subItem
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`}
                                        className="block px-4 py-2 text-[#8A6A5A] text-md hover:bg-[#f5efed] rounded-lg font-semibold"
                                      >
                                        {subItem}
                                      </Link>
                                    ),
                                  )}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </nav>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full py-3 px-6 bg-[#8A6A5A] text-white font-semibold rounded-lg mt-4"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
