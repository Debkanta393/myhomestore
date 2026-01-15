import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { collections } from "../../data/data";


const Features = () => {
  const selectedTab = useSelector((store) => store.activeTab.tabSelected).toLowerCase();


  return (
    <section className="relative py-28 bg-[#EDE6E1] mt-[500px] sm:mt-[380px] lg:mt-[300px]">
      <h2 className="max-w-[100%] md:max-w-[80%] text-3xl sm:text-4xl font-bold mx-auto text-center xl:text-left">
        Shop by categories
      </h2>
      <div className="max-w-10/12 mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {collections[selectedTab]?.map((collection, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center gap-5  hover:scale-105 transition duration-200 ease-in w-full"
            key={[index, selectedTab]}
          >
            <img
              src={collection.image}
              alt=""
              className="w-full h-[220px] md:h-[260px] rounded-2xl shadow-lg shadow-gray-300 border-4 border-white"
            />
            <p className="font-semibold text-center text-lg">{collection.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
