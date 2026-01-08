import { Button } from "./ui/Button";
import { Link } from "react-router";
import {
  ChevronDown,
  ChevronUp,
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const topNavItems = [
    { label: "Ideas & Advice", path: "/ideas-advice", key: "ideas" },
    { label: "About", path: "/about", key: "about" },
  ];

  const topNavSubList = {
    ideas: ["Blog", "FAQ", "Floor Finder", "Comparison Guide"],
    about: [
      "Why Shop With Us",
      "Meet the Team",
      "Community",
      "Reviews",
      "Delivery & Returns",
    ],
  };

  const mainNav = [
    { label: "Shop By", key: "shopBy", hasSubmenu: true },
    { label: "Hybrid", key: "hybrid", hasSubmenu: true },
    { label: "Vinyl", key: "vinyl", hasSubmenu: false },
    { label: "Timber", key: "timber", hasSubmenu: true },
    { label: "Laminate", key: "laminate", hasSubmenu: true },
    { label: "Bamboo", key: "bamboo", hasSubmenu: true },
    { label: "Carpet Tiles", key: "carpetTiles", hasSubmenu: true },
    { label: "Tiles", key: "tiles", hasSubmenu: true },
    { label: "Artificial Grass", key: "grass", hasSubmenu: true },
    { label: "Rugs", key: "rugs", hasSubmenu: true },
    { label: "Underfloor Heating", key: "heating", hasSubmenu: false },
  ];

  const mainNavSub = {
    shopBy: ["On Sale", "Material", "Area", "Attribute", "Brands", "Locations"],
    hybrid: [
      "Eclipse Online Flooring Store",
      "Online Flooring Solutions",
      "All Type Flooring",
      "Australian Select Timbers",
      "Claver Choice",
      "Complete Floors",
      "Decoline",
      "Eco Flooring System",
      "HTT",
      "Inspire XL",
      "Premium Floors",
      "Signature Floors",
      "Topdeck Flooring",
      "Terra Mater Floors",
      "Sunstar",
    ],
    vinyl: [
      "Eclipse by Online Flooring Store",
      "Artifloor",
      "Australian Select Timbers",
      "Clever Choice",
      "Decoline",
      "Desire",
      "Eco Flooring Systems",
      "Hurford Heritage",
      "Interface",
      "NFD",
      "Premium Floors",
      "Terra Mater Floors",
    ],
    timber: ["Engineered Timber Flooring", "Solid Timber Flooring"],
    laminate: [
      "Eclipse by Online Flooring Store",
      "All Type Flooring Vortex Eco Core",
      "Australian Select Timbers",
      "Clever Choice",
      "Eco Flooring Systems",
      "HTT",
      "Premium Floors",
      "Sunstar",
      "Topdeack Flooring",
      "Terra Mater Floors",
    ],
    bamboo: [
      "Clever Choice Ultimate Bamboo",
      "Eco Flooring Systems",
      "Premium Flooring ARC",
    ],
    carpetTiles: ["Airlay", "NFD"],
    tiles: [
      "Floor Tiles",
      "Outdoor Tiles",
      "Wall Tiles",
      "Antique Tides",
      "Brickart",
      "Crayons",
      "Fragment Brick",
      "Laser Line",
      "Limestone",
      "Penny Rounds",
      "Pitture",
      "Soho",
      "Stario",
      "Stonalix",
      "Tech Legno",
      "Tundra",
    ],
    grass: ["SYNLawn Cool Plus", "SYNLawn Pet Turf System", "Exquisite Turf"],
    rugs: ["Bayliss"],
  };

  const [hovered, setHovered] = useState(null);
  const [mainHovered, setMainHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white w-full relative z-50">
      {/* Top Navigation Bar */}
      <div className="bg-[#f5efed] w-full border-b border-[#D6CEC6]/30">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center py-3">
            {/* Left Navigation */}
            <div className="flex gap-8 items-center">
              {topNavItems.map((item) => (
                <div
                  key={item.key}
                  className="relative group"
                  onMouseEnter={() => setHovered(item.key)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-sm font-medium"
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: hovered === item.key ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {hovered === item.key && topNavSubList[item.key] && (
                      <motion.ul
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 bg-white backdrop-blur-md shadow-[0_8px_30px_rgba(138,106,90,0.15)] rounded-xl p-2 min-w-[200px] border border-[#D6CEC6]/30 z-50"
                      >
                        {topNavSubList[item.key].map((list, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="whitespace-nowrap hover:bg-[#f5efed] cursor-pointer text-[#8A6A5A] rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200"
                          >
                            <Link
                              to={`/${list.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              {list}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link
                to="/contact"
                className="text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 text-sm font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Right - Phone Number */}
            <p className="text-[#8A6A5A] text-sm font-medium hidden md:block">
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
        <div className="py-4 px-6">
          <p className="text-center text-white text-base md:text-lg font-medium">
            🎄 Merry Christmas! We'll be taking a break on the 20th December and
            resuming on 8th January. Online orders and enquiries can still be
            made during this period.
          </p>
        </div>
      </motion.div>

      {/* Main Header - Sticky */}
      <motion.div
        className="sticky top-0 bg-white z-50 transition-all duration-300"
        animate={{
          boxShadow: isScrolled
            ? "0 4px 20px rgba(138, 106, 90, 0.1)"
            : "0 0 0 rgba(138, 106, 90, 0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
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
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#8A6A5A] text-white p-2 rounded-full hover:bg-[#998e8a] transition-colors duration-300"
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
                <span className="font-medium text-sm">Profile</span>
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
                <span className="hidden md:block font-medium text-sm">
                  Cart
                </span>
                {/* Cart Count Badge */}
                <span className="absolute -top-2 -right-2 bg-[#8A6A5A] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Get Quote Button - Desktop */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden lg:block relative overflow-hidden py-3 px-8 bg-[#8A6A5A] text-white font-semibold group border-2 border-[#8A6A5A] rounded-lg transition-all duration-300"
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

        {/* Main Navigation - Desktop */}
        <div className="hidden lg:block border-t border-[#D6CEC6]/30 bg-[#f5efed]/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center justify-center gap-8 py-4">
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setMainHovered(item.key)}
                  onMouseLeave={() => setMainHovered(null)}
                >
                  <Link
                    to={`/${item.key}`}
                    className="flex items-center gap-1 text-[#8A6A5A] hover:text-[#998e8a] transition-colors duration-300 font-medium text-sm whitespace-nowrap"
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <motion.div
                        animate={{
                          rotate: mainHovered === item.key ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} />
                      </motion.div>
                    )}
                  </Link>

                  {/* Bottom indicator line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8A6A5A] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {mainHovered === item.key &&
                      item.hasSubmenu &&
                      mainNavSub[item.key] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full  mt-4 bg-white backdrop-blur-md shadow-[0_12px_40px_rgba(138,106,90,0.2)] rounded-2xl p-6 min-w-[300px] border border-[#D6CEC6]/30"
                        >
                          {/* Arrow indicator */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[#D6CEC6]/30 rotate-45"></div>

                          <div className="gap-3 relative z-10">
                            {mainNavSub[item.key].map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: subIndex * 0.03 }}
                                className="hover:bg-[#f5efed] cursor-pointer text-[#8A6A5A] rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:translate-x-1"
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
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
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
            className="lg:hidden bg-white border-t border-[#D6CEC6]/30 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
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
              {mainNav.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/${item.key}`}
                    className="block py-3 px-4 text-[#8A6A5A] hover:bg-[#f5efed] rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
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
    </header>
  );
}
