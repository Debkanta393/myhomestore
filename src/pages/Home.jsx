import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { CheckCircle, Truck, Ruler, Layers } from "lucide-react";

export default function HomePage() {
  const category = [
    { title: "Tiles", image: "./images/tiles.jpg" },
    { title: "Flooring", image: "./images/flooring.webp" },
    { title: "Cladding", image: "./images/cladding.jpeg" },
    { title: "Decking", image: "./images/decking.jpg" },
  ];

  return (
    <div className="w-full bg-[#F5EFED] text-[#3D3330]">
      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/images/header.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#3D3330]/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Premium Tiles & Flooring <br /> For Modern Australian Homes
          </h1>

          <p className="mt-6 text-lg text-[#E8E1DD]">
            Shop tiles, flooring, cladding & renovation materials with expert
            guidance, transparent pricing and nationwide delivery.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button
              size="lg"
              className="rounded-2xl bg-[#998E8A] hover:bg-[#857A76] text-white shadow-md"
            >
              Shop Tiles
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl border-[#E8E1DD] text-white hover:bg-white/10"
            >
              Order Samples
            </Button>
          </div>
        </motion.div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-[#E8E1DD] py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          {[
            "Australian Owned",
            "Premium Suppliers",
            "Nationwide Delivery",
            "Trade Friendly",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 font-medium text-[#3D3330]"
            >
              <CheckCircle className="h-5 w-5 text-[#6F8576]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop By Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.map((cat, i) => (
              <motion.div
                whileHover={{ y: -8 }}
                key={i}
                className="rounded-2xl h-64 flex items-end p-6 text-white shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(
                    to top,
                    rgba(61,51,48,0.8),
                    rgba(61,51,48,0.2)
                  ), url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-2xl font-semibold">{cat.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-[#998E8A] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[Layers, Ruler, Truck].map((Icon, i) => (
            <Card
              key={i}
              className="bg-white border border-[#D4CBC6] rounded-2xl shadow-md"
            >
              <CardContent className="p-8">
                <Icon className="h-8 w-8 mb-4 text-[#998E8A]" />
                <h3 className="text-xl font-semibold mb-2">
                  {i === 0 && "Curated Collections"}
                  {i === 1 && "Built-in Measurement Calculator"}
                  {i === 2 && "Flexible Delivery & Pickup"}
                </h3>
                <p className="text-[#6A5F5B]">
                  {i === 0 &&
                    "Carefully selected tiles and flooring from trusted local and international manufacturers."}
                  {i === 1 &&
                    "Instantly calculate square metres, boxes required and wastage before adding to cart."}
                  {i === 2 &&
                    "Pickup available in major cities or reliable freight delivery Australia-wide."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-4xl font-bold">Featured Collections</h2>
            <Button
              variant="ghost"
              className="text-[#998E8A] hover:text-[#857A76]"
            >
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-[#D4CBC6]"
              >
                <img src={`./images/luxury${i}.webp`} alt="" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Luxury Stone Look Tiles
                  </h3>
                  <p className="text-sm text-[#6A5F5B] mb-4">
                    Timeless stone aesthetics with modern durability.
                  </p>
                  <Button
                    size="sm"
                    className="bg-[#998E8A] hover:bg-[#857A76] text-white"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#998E8A] to-[#B9A89F] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Visit Our Showroom or Order Samples
        </h2>
        <p className="text-[#F5EFED] mb-8">
          Experience quality firsthand or get samples delivered to your door.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="rounded-2xl bg-white text-[#998E8A]">
            Book Showroom Visit
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-2xl border-white text-white"
          >
            Order Samples
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3D3330] text-[#F5EFED] py-10 text-center">
        © {new Date().getFullYear()} My Home Store / Reno Studio. All rights reserved.
      </footer>
    </div>
  );
}
