import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Category() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const innerCategory = [
    "./images/category/indoor1.jpg",
    "./images/category/indoor2.avif",
    "./images/category/indoor3.webp",
    "./images/category/indoor4.jpg",
    "./images/category/indoor5.jpg",
    "./images/category/indoor6.jpg",
    "./images/category/indoor7.jpeg",
    // "./images/category/indoor8.jpg",
    // "./images/category/indoor9.webp",
    // "./images/category/indoor10.png",
  ];

  const outerCategory = [
    "./images/category/outdoor1.jpg",
    "./images/category/outdoor2.jpg",
    "./images/category/outdoor3.jpg",
    "./images/category/outdoor4.jpg",
    "./images/category/outdoor5.webp",
    "./images/category/outdoor6.webp",
    "./images/category/outdoor7.jpg",
  ];
  const [categoryType, setCategoryType] = useState("inner");
  return (
    <div
      className="w-full mt-32 py-32"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #00000050, #00000090),  url(./images/bg2.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h2 className="text-center text-5xl text-white font-bold">
          Image Gallary
        </h2>
        <div className="flex text-white items-center gap-20 justify-center mt-20">
          <button
            onClick={() => setCategoryType("inner")}
            className="relative py-3 cursor-pointer px-20 rounded bg-black text-xl font-medium text-white overflow-hidden group"
          >
            Indoor
            {/* TOP line */}
            <span className="absolute top-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
            {/* LEFT line */}
            <span className="absolute top-0 left-0 w-[2px] h-0 bg-white transition-all duration-300 ease-out group-hover:h-full" />
            {/* BOTTOM line */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all duration-300 delay-300 ease-out group-hover:w-full" />
            {/* RIGHT line */}
            <span className="absolute bottom-0 right-0 w-[2px] h-0 bg-white transition-all duration-300 delay-300 ease-out group-hover:h-full" />
          </button>

          <button
            onClick={() => setCategoryType("outer")}
            className="relative py-3 cursor-pointer px-20 rounded bg-black text-xl font-medium text-white overflow-hidden group"
          >
            Outdoor
            {/* TOP line */}
            <span className="absolute top-0 left-0 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
            {/* LEFT line */}
            <span className="absolute top-0 left-0 w-[2px] h-0 bg-white transition-all duration-300 ease-out group-hover:h-full" />
            {/* BOTTOM line */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-white transition-all duration-300 delay-300 ease-out group-hover:w-full" />
            {/* RIGHT line */}
            <span className="absolute bottom-0 right-0 w-[2px] h-0 bg-white transition-all duration-300 delay-300 ease-out group-hover:h-full" />
          </button>
        </div>
        <div className="flex items-center w-full mt-20">
          <div className="overflow-hidden w-5/12 h-[500px] ">
            <motion.img
              key={categoryType}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src={
                categoryType == "inner" ? innerCategory[0] : outerCategory[0]
              }
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          <div className="grid grid-cols-3 w-7/12 overflow-hidden">
            {(categoryType == "inner" ? innerCategory : outerCategory)
              .filter((item, i) => i != 0)
              .map((image, j) => (
                <div className="overflow-hidden" key={[categoryType, j]}>
                  <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: j * 0.2 }}
                    src={image}
                    alt=""
                    className=" rounded h-[250px] w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
