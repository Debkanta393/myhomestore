import React from "react";
import Hero from "../../components/ui/Hero";
import Categories from "../../components/ui/Categories";
import Services from "../../components/ui/Services";
import Process from "../../components/ui/Process";
import Testimonials from "../../components/ui/Testimonials";
import Products from "../../components/ui/Products";
// import CTA from '../../components/ui/Cta';
import Gallery from "../../components/ui/Gallery";
import OverlapScrolling from "../../components/ui/OverlapScrolling";
import WhyChooseus from "../../components/ui/WhyChooseus";
import Trust from "../../components/ui/Trust";
import SeoFooterContent from "../../components/ui/Footer";
import Brand from "../../components/ui/Brand";
import {motion} from "framer-motion"

function Home() {

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
    <div>
      <div className="overflow-x-hidden">
        <Hero />
        <div className="overflow-hidden mt-[500px] sm:mt-[380px] lg:mt-[250px]">
          <WhyChooseus />
        </div>
        <Categories />
        <Products />
        <Services />
      </div>

      {/* OverlapScrolling without overflow wrapper */}
      {/* <OverlapScrolling /> */}

      <div className="overflow-x-hidden">
        <Trust />
        <Gallery />
        <Testimonials />
        <Brand />
        {/* <SeoFooterContent /> */}
      </div>
      {/* Newsletter Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-b border-stone-800  px-6 py-16 gap-20 bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 w-full"
      >
        <div className="w-8/12 mx-auto flex items-start justify-between gap-20">
        <div className="w-1/2">
          <h2 className="text-4xl text-white">
            Let’s bring your vision to life without the stress.
          </h2>
          <p className="mt-5 text-lg text-white">
            Explore finishes, fixtures, and curated inspiration with guidance
            from our team.
          </p>
        </div>
        <form action="" className="flex flex-col gap-3 bg-white p-10 w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number*"
            className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
          />
          <input
            type="text"
            name="postcode"
            placeholder="Post Code*"
            className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
          />
          <select
            name="tiles"
            id="tiles"
            className="border border-[#8A6A5A] p-3 pl-5 placeholder:text-black text-black"
          >
            <option value="I am interested in" selected disabled>
              I am interested in
            </option>
            <option value="hybrid">Hybrid</option>
            <option value="engineered oak">Engineered Oak</option>
            <option value="australian timber">Australian Timber</option>
            <option value="laminate">Laminate</option>
          </select>
          <textarea
            name="message"
            id=""
            placeholder="Type your message here..."
            className="border border-[#8A6A5A] p-2 pl-5 placeholder:text-black text-black"
          ></textarea>
          <button className="bg-[#998E8A] text-white p-3 mt-5 cursor-pointer">
            Get a Quote
          </button>
        </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
