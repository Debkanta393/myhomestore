import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Gem, Package, Milestone} from "lucide-react"

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
        icon: <ShieldCheck />,
    text: "Australian-standard quality",
    },
    {
        icon: <Gem />,
        text: "Competitive pricing"
    },
    {
        icon: <Package />,
    text: "Reliable supply & fast delivery",
    },
    {
        icon: <Milestone />,
    text: "Expert guidance at every step",
    } 
  ];

  const collections = [
    {
      title: "Residential Tiles",
      description:
        "Enhance your home with elegant and durable tiles designed for:",
      list: [
        "Living rooms",
        "Bedrooms",
        "Kitchens",
        "Bathrooms",
        "Outdoor patios",
      ],
    },
    {
      title: "Commercial Tiles",
      description: "We supply heavy-duty commercial tiles ideal for:",
      list: [
        "Offices",
        "Retail stores",
        "Restaurants & cafés",
        "Hotels",
        "Shopping centres",
      ],
    },
    {
      title: "Bathroom & Kitchen Tiles",
      description: "Create stunning bathrooms and kitchens with:",
      list: [
        "Waterproof bathroom tiles",
        "Heat-resistant kitchen tiles",
        "Wall & floor tile combinations",
        "Easy-to-clean surfaces",
      ],
    },
    {
      title: "Outdoor & Paving Tiles",
      description:
        "Perfect for Australia’s climate, our outdoor tile range includes:",
      list: [
        "Outdoor paving tiles",
        "Poolside tiles",
        "Anti-slip exterior tiles",
        "Weather-resistant finishes",
      ],
    },
  ];

  return (
    <section ref={ref} className="section bg-gray-50 p-0">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Australia’s Trusted Tiles Supplier
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-xl text-center"
      >
        With years of experience in the Australian tiles industry, we proudly
        serve homeowners, builders, architects, and interior designers across
        Australia. Our commitment to quality, affordability, and expert support
        makes us the preferred choice for tile solutions nationwide.
      </motion.p>

      {/* Problems Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 mt-5">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl text-center font-semibold shadow-md py-8 hover:bg-gray-200 group"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center items-center group-hover:bg-gray-300 w-fit p-4 rounded-full mx-auto">{problem.icon}</div>
            <p className="mt-3">{problem.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((feature, index) => (
          <motion.div
            key={index}
            className="card card-hover text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#8a6a5b]">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            <ul className="list-disc text-left text-gray-600 mt-5 ml-5">
              {feature.list.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
