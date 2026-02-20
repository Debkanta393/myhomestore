import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 text-stone-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h4 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              MyHomeStore
            </h4>
            <p className="text-stone-400 mb-6 leading-relaxed max-w-sm">
              Premium tiles, flooring & renovation materials. Transform your
              space with quality products and expert guidance.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mb-6">
              {[
                { Icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                { Icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { Icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { Icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
              ].map(({ Icon, href, color }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-stone-800/50 backdrop-blur-sm p-3 rounded-full ${color} transition-all duration-300 border border-stone-700 hover:border-transparent`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#8A6A5A]" />
                <a
                  href="mailto:hello@myhomestore.com"
                  className="hover:text-white transition-colors"
                >
                  hello@myhomestore.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#8A6A5A]" />
                <a
                  href="tel:1800123456"
                  className="hover:text-white transition-colors"
                >
                  1800 123 456
                </a>
              </div>
            </div>
          </motion.div>

          {/* Shop Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                "Tiles",
                "Flooring",
                "Cladding",
                "Decking",
                "Bathroom",
                "Kitchen",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-[#8A6A5A] rounded-full transition-all duration-300" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-5">Support</h4>
            <ul className="space-y-3">
              {[
                "Delivery & Freight",
                "Returns Policy",
                "Order Samples",
                "Installation Guide",
                "FAQs",
                "Warranty",
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: "#ffffff" }}
                    className="text-stone-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-1.5 bg-[#8A6A5A] rounded-full transition-all duration-300" />
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Showrooms Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-bold text-lg mb-5">Showrooms</h4>
            <div className="space-y-4">
              {[
                { city: "Melbourne", address: "123 Collins St, VIC 3000" },
                { city: "Sydney", address: "456 George St, NSW 2000" },
                { city: "Brisbane", address: "789 Queen St, QLD 4000" },
              ].map((location) => (
                <motion.div
                  key={location.city}
                  whileHover={{ x: 5 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#8A6A5A] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold group-hover:text-[#8A6A5A] transition-colors">
                        {location.city}
                      </p>
                      <p className="text-stone-500 text-sm">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-stone-500 text-sm">
              © 2026 MyHomeStore. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ color: "#ffffff" }}
                  className="text-stone-500 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
