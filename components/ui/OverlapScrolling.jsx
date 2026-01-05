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

  // Slide up from bottom (100vh) to top (0vh)
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

  // Optional: Scale effect for previous cards
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  // Determine if this is the last card
  const isLast = index === total - 1;

  return (
    <div
      ref={cardRef}
      className={`h-screen ${!isLast ? "sticky top-0" : "relative"}`}
      style={{ zIndex: index }}
    >
      <motion.div
        style={{
          y: index === 0 ? 0 : y,
          scale: index === 0 ? 1 : scale,
        }}
        className={`h-full flex items-center justify-center`}
      >
        <div
          className={`relative text-white p-10 w-[80%] flex items-center justify-center bg-gradient-to-br ${card.gradient} rounded-2xl gap-20`}
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-6"
          >
            <span className="text-white/30 text-9xl font-bold">0{card.id}</span>
          </motion.div> */}

          <motion.img
            src={card.image}
            className="w-[600px] h-[500px] rounded-2xl"
          />

          <motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              {card.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-10"
            >
              {card.description}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="list-disc list-inside text-white text-xl"
            >
              {card.list.map((item, index) => (
                <motion.li
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  key={index}
                  className="mt-1"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer mt-20"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get Started
              </span>

              <span
                className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
