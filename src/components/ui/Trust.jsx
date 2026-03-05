import React from "react";
import { MapPin, ShieldCheck, Leaf, DollarSign } from "lucide-react";

export default function Trust() {
  return (
    <section className="relative mt-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 rounded-[3rem]" />

      <div className="relative max-w-7xl mx-auto py-20 px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gray-700 mb-3">
            <MapPin size={16} /> Australia Wide Supply
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Trusted by Australian Homes & Businesses
          </h2>

          <p className="text-lg text-gray-700 mt-3 leading-relaxed max-w-xl">
            We proudly supply tiles to homeowners, builders, designers, and
            contractors across Australia. Our commitment to quality,
            consistency, and service has made us a trusted tile supplier
            nationwide.
          </p>

          {/* Trust Points */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TrustItem
              icon={ShieldCheck}
              text="Suitable for Australian climates"
            />
            <TrustItem
              icon={MapPin}
              text="Slip-resistant options available"
            />
            <TrustItem
              icon={Leaf}
              text="Sustainable & eco-friendly ranges"
            />
            <TrustItem
              icon={DollarSign}
              text="Competitive pricing without compromise"
            />
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-black/10" />
          <img
            src="./images/flooring.webp"
            alt="Australian tile projects"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[300px] md:h-[420px]"
          />

          {/* Badge */}
          <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            Australia Wide Delivery
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-sm">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white">
        <Icon size={22} />
      </div>
      <p className="text-gray-800 font-medium">{text}</p>
    </div>
  );
}
