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

const EngineeredOak = () => {
  const productRanges = [
    {
      title:
        "Discover how minor upgrades can deliver major resale value when fli",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
      image: "./images/flooring/Engineered-oak.png",
      date: "24 Nov 2026",
    },
    {
      title:
        "Discover how minor upgrades can deliver major resale value when fl",
      description:
        "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
      image: "./images/flooring/Herringbone.png",
      date: "24 Nov 2026",
    },
    {
      title:
        "Discover how minor upgrades can deliver major resale value when f",
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
    <div>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[600px] rounded-3xl w-11/12 sm:w-10/12 mx-auto relative text-center flex flex-col items-center justify-center text-white 
        overflow-hidden bg-[#998e8a]"
        style={{
          backgroundImage: "url(./images/header3.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        {/* Background overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
                Benchtops
              </h1>
              <div className="w-32 h-1 bg-white/60 mx-auto mb-8"></div>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl text-white/90 mb-8 font-light"
            >
              Quality Bathroom Solutions for Modern Living
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Discover our premium collection of bathroom fixtures, tapware, and
              accessories designed to elevate your space with Australian quality
              and style.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Shop Collection
                </span>

                <span
                  className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                               transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* About / Why Choose */}
      <section className="relative bg-gray-100 py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0" />

        <div className="relative max-w-10/12 mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">About Benchtops</h2>
              <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
                Since 2003, Clever Choice has been delivering premium flooring
                solutions across Australia. From engineered timber and hybrid
                flooring to laminate and bamboo, our products are designed to
                combine beauty, durability, and long-term value.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-5">
                Flooring You Can Trust
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                We work closely with manufacturers and suppliers to ensure every
                Clever Choice product meets strict Australian standards. Whether
                for residential or commercial spaces, our flooring is engineered
                for performance, style, and everyday living.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>Carefully selected raw materials and finishes</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>
                    Water-resistant and scratch-resistant technologies
                  </span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <span className="mt-1 text-[#8A6A5A] font-bold">✓</span>
                  <span>Designed for Australian climate conditions</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-around">
              <img src="./images/claverchoice2.png" alt="" />
              <img src="./images/claverchoice1.png" alt="" />
            </div>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-10">
              {statData.map((item, index) => (
                <div className="bg-white rounded-2xl p-5 text-center shadow w-full flex items-center gap-5">
                  <div className="bg-[#998e8a] p-4 rounded-full text-white w-14">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#8A6A5A]">
                      {item.value}
                    </div>
                    <div className="mt-2 text-gray-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <div className="mb-28">
        <Products />
      </div>

      {/* FAQ section */}
      <FAQ />
      <section id="products" className="w-10/12 mx-auto px-6 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8">
          Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-14">
          {productRanges.map((prod) => (
            <motion.div
              key={prod.title}
              className="group relative rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              {/* Image wrapper */}
              <div className="relative h-80 w-full overflow-hidden">
                {/* Default image */}
                <motion.img
                  src={prod.image}
                  alt={prod.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 1 }}
                  variants={{
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="py-6 relative z-20">
                <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
                <p className="text-gray-600">{prod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="bg-[#998e8a] text-white p-5 mt-20 block mx-auto">
          Explore All Articles
        </button>
      </section>

      {/* Why choose us */}
      <div className="mt-20">
        <WhyChooseUs />
      </div>

      <section className="relative py-28 lg:py-36 bg-[#f5efed] overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
          {/* Image block */}
          <div className="relative">
            <img
              src="./images/outdoor.jpg"
              alt="Outdoor flooring"
              className="h-[520px] w-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 leading-tight font-bold">
              Let’s Talk About Your Flooring Project
            </h2>

            <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
              Get expert advice, fast quotes, and product guidance from flooring
              specialists who understand quality, durability, and design.
            </p>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
              {/* Phone */}
              <Link
                to={"tel:0755267399"}
                className="group flex items-center gap-4 rounded-2xl bg-white px-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                  <PhoneCall />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Call Us</div>
                  <div className="text-xl font-bold text-gray-900 group-hover:text-[#8A6A5A] transition">
                    07 5526 7399
                  </div>
                </div>
              </Link>

              {/* Email */}
              <Link
                to="mailto:sales@cleverchoice.com.au"
                className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email Us</div>
                  <div className="text-lg font-bold text-gray-900 break-all group-hover:text-[#8A6A5A] transition whitespace-no">
                    sales@cleverchoice.com.au
                  </div>
                </div>
              </Link>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="relative overflow-hidden py-3 px-14 bg-white text-black text-xl font-medium group cursor-pointer">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Call now
                </span>

                <span
                  className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                         transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </button>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center border-2 border-gray-900 px-10 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngineeredOak;
