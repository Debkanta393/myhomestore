import React from "react";

export default function SeoFooterContent() {
  return (
    <section className="relative mt-32 bg-[#F5EFED]">
      {/* Decorative divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left: Heading */}
        <div>
          <span className="uppercase tracking-widest text-sm text-gray-500">
            Shop Tiles Online
          </span>
          <h3 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            Buy Tiles Online <br /> in Australia
          </h3>
        </div>

        {/* Right: Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Looking to buy tiles online in Australia? We make it simple to
            explore premium tiles for bathrooms, kitchens, living areas, and
            outdoor spaces — all from the comfort of your home.
          </p>

          <p>
            Our collections focus on quality, durability, and contemporary
            design, making them ideal for both residential and commercial
            projects across Australia.
          </p>

          <p className="font-medium text-gray-800">
            From modern porcelain tiles to elegant natural stone, we help
            Australians create spaces that are functional, stylish, and built
            to last.
          </p>
        </div>
      </div>
    </section>
  );
}
