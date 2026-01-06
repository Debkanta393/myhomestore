import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// const cards = [
//   { id: 1, title: "Design Your Dream", gradient: "from-violet-600 to-indigo-600", desc: "Custom homes tailored to your vision" },
//   { id: 2, title: "Build With Confidence", gradient: "from-fuchsia-600 to-pink-600", desc: "Expert craftsmanship, guaranteed quality" },
//   { id: 3, title: "Transform Your Space", gradient: "from-cyan-600 to-blue-600", desc: "Complete renovations made simple" },
//   { id: 4, title: "Invest Smartly", gradient: "from-amber-600 to-orange-600", desc: "Maximize returns on your property" },
// ];

const cards = [
  {
    title: "Residential Tiles",
    description:
      "Enhance your home with elegant and durable tiles designed for:",
    image: "./images/residencial.jpg",
    list: [
      "Living rooms",
      "Bedrooms",
      "Kitchens",
      "Bathrooms",
      "Outdoor patios",
    ],
    // 🔥 darker neutral → warm mid tone
    gradient: "from-[#8A6A5A] to-[#998e8a]",
  },
  {
    title: "Commercial Tiles",
    description: "We supply heavy-duty commercial tiles ideal for:",
    image: "./images/commercial.jpg",
    list: [
      "Offices",
      "Retail stores",
      "Restaurants & cafés",
      "Hotels",
      "Shopping centres",
    ],
    gradient: "from-[#8A6A5A] to-[#B8B0A7]",
  },
  {
    title: "Bathroom & Kitchen Tiles",
    description: "Create stunning bathrooms and kitchens with:",
    image: "./images/bathroom.webp",
    list: [
      "Waterproof bathroom tiles",
      "Heat-resistant kitchen tiles",
      "Wall & floor tile combinations",
      "Easy-to-clean surfaces",
    ],
    // 🔥 deep greige → soft contrast
    gradient: "from-[#998e8a] to-[#D6CEC6]",
  },
  {
    title: "Outdoor & Paving Tiles",
    description:
      "Perfect for Australia’s climate, our outdoor tile range includes:",
    image: "./images/outdoor.jpg",
    list: [
      "Outdoor paving tiles",
      "Poolside tiles",
      "Anti-slip exterior tiles",
      "Weather-resistant finishes",
    ],
    gradient: "from-[#8A6A5A] to-[#998e8a]",
  },
];

export default function OverlapScrolling() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      {cards.map((card, index) => (
        <StickyCard
          key={card.id}
          card={card}
          index={index}
          total={cards.length}
        />
      ))}
    </div>
  );
}

function StickyCard({ card, index, total }) {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["120vh", "0vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  const isLast = index === total - 1;

  return (
    <div
      ref={cardRef}
      className={`h-screen ${!isLast ? "sticky top-0" : "relative"} mt-20 md:mt-0 my-auto flex justify-center items-center`}
      style={{ zIndex: index }}
    >
      <motion.div
        style={{
          y: index === 0 ? 0 : y,
          scale: index === 0 ? 1 : scale,
        }}
        className="h-[90%] md:h-full flex items-center justify-center px-10"
      >
        <div
          className={`relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 p-5 md:p-16 rounded-[32px]
          bg-gradient-to-br ${card.gradient} text-white
          overflow-hidden`}
        >
          {/* Noise overlay */}
          {/* <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.04] pointer-events-none" /> */}

          {/* Floating image */}
          {/* <motion.div style={{ y: imageY }} className="relative">
            <img
              src={card.image}
              className="w-[500px] h-[520px] object-cover rounded-3xl"
              alt=""
            />

            <div className="absolute top-0 -left-6 bg-black/70 backdrop-blur px-6 py-3 rounded-full text-sm tracking-widest uppercase">
              Premium Range
            </div>
          </motion.div> */}

          <motion.div className="relative bg-image bg-white/30 rounded-3xl">
            <img
              src={card.image}
              className="w-[96%] md:w-[550px] h-[250px] md:h-[500px] object-cover rounded-3xl relative top-5 left-5"
              alt=""
            />
            <div className="absolute top-10 left-10 bg-black/70 backdrop-blur px-2 md:px-6 py-3 rounded-full text-sm tracking-widest uppercase">
              Premium Range
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold leading-tight mb-3"
            >
              {card.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 max-w-xl mb-5"
            >
              {card.description}
            </motion.p>

            {/* Features */}
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="space-y-3 mb-6"
            >
              {card.list.map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="text-lg flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-fit px-5 md:px-14 py-4 text-md md:text-lg font-medium rounded-full
              bg-white text-black overflow-hidden group shadow-xl"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">
                Explore Collection
              </span>

              <span
                className="absolute inset-0 bg-black scale-x-0 origin-left
                transition-transform duration-300 group-hover:scale-x-100"
              />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
