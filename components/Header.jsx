import { Button } from "./ui/Button";
import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainNav from "./ui/MainNav";
import {topNavItems, topNavSubList} from "../data/data"

export function Header() {
  

  const [hovered, setHovered] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white w-full sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div>
        <div className="bg-[#f5efed] w-full border-b border-[#D6CEC6]/30 relative z-40 overflow-visible">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex justify-between items-center py-3">
              {/* Left Navigation */}
              <div className="flex gap-8 items-center">
                {topNavItems.map((item) => (
                  <div
                    key={item.key}
                    className="relative group z-10"
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
                          className="absolute top-full left-0 mt-1 bg-white backdrop-blur-md shadow-[0_8px_30px_rgba(138,106,90,0.15)] rounded-xl p-2 min-w-[200px] border border-[#D6CEC6]/30 z-50"
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
                                to={`/${list
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
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
            <p className="text-center text-white text-base md:text-lg font-medium hidden lg:block">
              🎄 Merry Christmas! We'll be taking a break on the 20th December
              and resuming on 8th January. Online orders and enquiries can still
              be made during this period.
            </p>
            <marquee behavior="smooth" direction="rtl" className="block lg:hidden text-white text-base md:text-lg font-medium">🎄 Merry Christmas! We'll be taking a break on the 20th December
              and resuming on 8th January. Online orders and enquiries can still
              be made during this period.</marquee>
          </div>
        </motion.div>
      </div>

      <MainNav />
    </header>
  );
}
