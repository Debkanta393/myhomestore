import { motion } from "framer-motion";
import Products from "../../components/ui/Products";
import WhyChooseUs from "../../components/ui/WhyChooseus";
import {
  PhoneCall,
  Mail,
  Van,
  CircleUser,
  BrickWall,
  Award,
} from "lucide-react";
import FAQ from "../../components/ui/FAQ";
import { Link } from "react-router";

const Benchtops = () => {
  const productRanges = [
    {
      title: "Discover how minor upgrades can deliver major resale value when fli",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
      image: "./images/flooring/Engineered-oak.png",
      date: "24 Nov 2026",
    },
    {
      title: "Discover how minor upgrades can deliver major resale value when fl",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
      image: "./images/flooring/Herringbone.png",
      date: "24 Nov 2026",
    },
    {
      title: "Discover how minor upgrades can deliver major resale value when f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
      image: "./images/flooring/Laminate.png",
      date: "24 Nov 2026",
    },
  ];

  const statData = [
    { value: "20+", label: "Years of Experience", icon: <CircleUser /> },
    { value: "100+", label: "Flooring Options", icon: <BrickWall /> },
    { value: "Nationwide", label: "Supply Network", icon: <Van /> },
    { value: "Trusted", label: "By Builders & Homeowners", icon: <Award /> },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[500px] sm:min-h-[600px] rounded-2xl sm:rounded-3xl w-11/12 sm:w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white overflow-hidden bg-[#998e8a]"
        style={{
          backgroundImage: "url(./images/header3.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex items-center justify-center text-center px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              {/* Responsive hero heading */}
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Bamboo Flooring
              </h1>
              <div className="w-24 sm:w-32 h-1 bg-white/60 mx-auto mb-8" />
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-light"
            >
              Quality Bathroom Solutions for Modern Living
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our premium collection of bathroom fixtures, tapware, and
              accessories designed to elevate your space with Australian quality
              and style.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="relative overflow-hidden w-full sm:w-auto py-3 px-10 bg-[#f5efed] text-black text-lg sm:text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Shop Collection
                </span>
                <span className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-3 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* ── About / Why Choose ── */}
      <section className="relative bg-[#F5F0ED] py-16 sm:py-20 lg:py-24 overflow-hidden my-20">
        <div className="relative w-11/12 sm:w-10/12 mx-auto">
          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About Bamboo Flooring
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Since 2003, Clever Choice has been delivering premium flooring
                solutions across Australia. From engineered timber and hybrid
                flooring to laminate and bamboo, our products are designed to
                combine beauty, durability, and long-term value.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-5">
                Flooring You Can Trust
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
                We work closely with manufacturers and suppliers to ensure every
                Clever Choice product meets strict Australian standards. Whether
                for residential or commercial spaces, our flooring is engineered
                for performance, style, and everyday living.
              </p>
              <ul className="space-y-4">
                {[
                  "Carefully selected raw materials and finishes",
                  "Water-resistant and scratch-resistant technologies",
                  "Designed for Australian climate conditions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base sm:text-lg">
                    <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right images — stack on small screens, side by side on md+ */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-6 sm:gap-4 h-[100%]">
              <img
                src="./images/claverchoice2.png"
                alt="Clever Choice product 2"
                className="w-full sm:w-1/2 max-w-xs object-cover h-[400px] xl:h-[100%]"
              />
              <img
                src="./images/claverchoice1.png"
                alt="Clever Choice product 1"
                className="w-full sm:w-1/2 max-w-xs object-cover h-[300px] xl:h-[80%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
          <div className="w-11/12 sm:w-10/12 mx-auto mt-16 sm:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {statData.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-4 shadow w-full flex items-center gap-3"
                >
                  <div className="bg-[#998e8a] p-3 rounded-full text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#8A6A5A]">
                      {item.value}
                    </div>
                    <div className="mt-1 text-sm sm:text-base text-gray-600 text-nowrap">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

      {/* ── Products ── */}
      <div className="mb-16 sm:mb-28">
        <Products />
      </div>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Insights ── */}
      <section id="products" className="w-11/12 sm:w-10/12 mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
          Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-16 gap-8 sm:gap-10 lg:gap-14">
          {productRanges.map((prod) => (
            <motion.div
              key={prod.title}
              className="group relative rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 md:h-80 w-full overflow-hidden">
                <motion.img
                  src={prod.image}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  variants={{ hover: { opacity: 0 } }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              {/* Content */}
              <div className="py-5 px-4 relative z-20">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
                  {prod.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{prod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="bg-[#998e8a] text-white px-8 py-4 mt-14 sm:mt-20 block mx-auto text-base sm:text-lg hover:bg-[#8A6A5A] transition">
          Explore All Articles
        </button>
      </section>

      {/* ── Why Choose Us ── */}
      <div className="mt-12 sm:mt-20">
        <WhyChooseUs />
      </div>

      
    </div>
  );
};

export default Benchtops;
