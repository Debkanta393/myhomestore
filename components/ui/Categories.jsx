import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { collections } from "../../data/data";

const Categories = () => {
  const selectedTab = useSelector(
    (store) => store.activeTab.tabSelected,
  ).toLowerCase();

  // bg-[#EDE6E1] 
  return (
    <section className="relative py-16 ">
      <h2 className="max-w-11/12 text-4xl sm:text-5xl font-medium mx-auto text-center" style={{fontFamily: "Playfair Display, serif"}}>
        Shop by categories
      </h2>
      <div className="max-w-10/12 mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-20">
        {collections[selectedTab]?.map((collection, index) => (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.3, ease: "easeIn" }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center items-center gap-5  hover:scale-105 transition duration-200 ease-in w-full"
            key={[index, selectedTab]}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>

            <img
              src={collection.image}
              alt=""
              className="w-full h-[220px] lg:h-[280px] 2xl:h-[400px]"
            />
            <p className="font-normal text-center text-2xl absolute bottom-5 text-white z-20">
              {collection.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
