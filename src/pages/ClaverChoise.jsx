import React, { useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router";
import { PhoneCall, Mail } from "lucide-react";

export default function ClaverChoise() {

    const productRanges = [
        {
            title: "Engineered Oak",
            description: "Premium hardwoods in classic and modern finishes. European & Australian species available.",
            image: "./images/flooring/Engineered-oak.png",
            hoveredImage: "./images/flooring/flooring5.webp"
        },
        {
            title: "Herringbone",
            description: "100% waterproof SPC hybrid boards, ideal for busy homes.",
            image: "./images/flooring/Herringbone.png",
            hoveredImage: "./images/flooring/flooring10.jpg"
        },
        {
            title: "Laminate",
            description: "Durable laminate and hydro laminate solutions for cost-effective designs.",
            image: "./images/flooring/Laminate.png",
            hoveredImage: "./images/flooring/flooring2.webp"
        },
        {
            title: "Timber",
            description: "Durable laminate and hydro laminate solutions for cost-effective designs.",
            image: "./images/flooring/Timber.png",
            hoveredImage: "./images/flooring/flooring9.jpg"
        },
        {
            title: "Bamboo",
            description: "Premium hardwoods in classic and modern finishes. European & Australian species available.",
            image: "./images/flooring/Bamboo.png",
            hoveredImage: "./images/flooring/flooring12.jpg"
        },
        {
            title: "Vinyl",
            description: "100% waterproof SPC hybrid boards, ideal for busy homes.",
            image: "./images/flooring/Vinyl.png",
            hoveredImage: "./images/flooring/flooring11.webp"
        },
        {
            title: "Hydro Laminate",
            description: "Durable laminate and hydro laminate solutions for cost-effective designs.",
            image: "./images/flooring/Hydro-laminate.png",
            hoveredImage: "./images/flooring/flooring3.jpg"
        },
        {
            title: "Hybrid",
            description: "Durable laminate and hydro laminate solutions for cost-effective designs.",
            image: "./images/flooring/Hybrid.png",
            hoveredImage: "./images/flooring/flooring6.jpg"
        },
    ];


    const warrantyPoints = [
        {
            title: "Residential Warranty",
            description: "Long-term residential wear warranties for everyday living.",
        },
        {
            title: "Commercial Coverage",
            description: "Designed to perform in high-traffic commercial environments.",
        },
        {
            title: "Water Resistant",
            description: "Engineered protection against moisture and spills.",
        },
        {
            title: "Australian Standards",
            description: "Tested and certified to meet Australian quality benchmarks.",
        },
    ];


    const products = [
  {
    id: 1,
    image: "./images/luxury1.webp",
    heading: "Product1",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid",
    brand: "Sony",
    price: 100,
    rating: 4.5,
    inStock: true,
    color: "Black",
    size: "M",
    material: "Leather",
    isNew: true,
    onSale: false,
    tags: ["Premium", "Best Seller"],
  },
  {
    id: 2,
    image: "./images/luxury2.webp",
    heading: "Product2",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Engineered Oak",
    brand: "Nike",
    price: 250,
    rating: 4.0,
    inStock: true,
    color: "Blue",
    size: "L",
    material: "Cotton",
    isNew: false,
    onSale: true,
    tags: ["Featured"],
  },
  {
    id: 3,
    image: "./images/luxury3.webp",
    heading: "Product3",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Australian Timber",
    brand: "IKEA",
    price: 150,
    rating: 5.0,
    inStock: false,
    color: "White",
    size: "XL",
    material: "Wood",
    isNew: true,
    onSale: false,
    tags: ["Eco-Friendly"],
  },
  {
    id: 4,
    image: "./images/luxury1.webp",
    heading: "Product4",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "European Timber",
    brand: "Samsung",
    price: 80,
    rating: 3.5,
    inStock: true,
    color: "Silver",
    size: "S",
    material: "Metal",
    isNew: false,
    onSale: true,
    tags: ["Budget Friendly"],
  },
  {
    id: 5,
    image: "./images/luxury2.webp",
    heading: "Product5",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Laminate",
    brand: "Adidas",
    price: 300,
    rating: 4.8,
    inStock: true,
    color: "Red",
    size: "M",
    material: "Polyester",
    isNew: true,
    onSale: true,
    tags: ["Premium", "Limited Edition"],
  },
  {
    id: 6,
    image: "./images/luxury3.webp",
    heading: "Product6",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hydro Laminate",
    brand: "West Elm",
    price: 200,
    rating: 4.2,
    inStock: true,
    color: "Brown",
    size: "L",
    material: "Fabric",
    isNew: false,
    onSale: false,
    tags: ["Best Seller"],
  },
  {
    id: 7,
    image: "./images/luxury2.webp",
    heading: "Product7",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Vinyl",
    brand: "Puma",
    price: 120,
    rating: 4.6,
    inStock: false,
    color: "Green",
    size: "XL",
    material: "Synthetic",
    isNew: false,
    onSale: false,
    tags: ["Featured"],
  },
  {
    id: 8,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Bamboo",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
  {
    id: 9,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid Shield",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
  {
    id: 10,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid Shield",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
  {
    id: 11,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid Shield",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
  {
    id: 12,
    image: "./images/luxury3.webp",
    heading: "Product8",
    desc: "Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text",
    category: "Hybrid Shield",
    brand: "Nike",
    price: 90,
    rating: 3.8,
    inStock: true,
    color: "Black",
    size: "S",
    material: "Nylon",
    isNew: true,
    onSale: true,
    tags: ["New Arrival"],
  },
];


    const [cardHovered, setCardHovered] = useState(null)
    return (
        <div className="font-sans text-gray-900">

            {/* Hero */}
            <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('./images/tiles.jpg')" }}>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative container mx-auto px-6 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Clever Choice Flooring — Premium Quality for Every Space
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl">
                        Trusted Australian flooring solutions from timber, hybrid, laminate & bamboo.
                    </p>
                    <button className="relative overflow-hidden py-3 px-12 bg-[#f5efed] text-black text-xl font-medium group cursor-pointer mt-10">
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                            Explore Flooring
                        </span>

                        <span
                            className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
                        ></span>
                    </button>
                </div>
            </section>

            {/* About / Why Choose */}
            <section className="relative bg-gray-100 py-24 overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0" />

                <div className="relative max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            About <span >Clever Choice</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
                            Since 2003, Clever Choice has been delivering premium flooring solutions across Australia.
                            From engineered timber and hybrid flooring to laminate and bamboo, our products are designed
                            to combine beauty, durability, and long-term value.
                        </p>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left content */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">
                                Flooring You Can Trust
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We work closely with manufacturers and suppliers to ensure every Clever Choice product
                                meets strict Australian standards. Whether for residential or commercial spaces, our
                                flooring is engineered for performance, style, and everyday living.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[#8A6A5A]">✔</span>
                                    <span>Carefully selected raw materials and finishes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[#8A6A5A]">✔</span>
                                    <span>Water-resistant and scratch-resistant technologies</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-[#8A6A5A]">✔</span>
                                    <span>Designed for Australian climate conditions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right stats / highlights */}
                        <div className="grid grid-cols-2 gap-6">
                            <StatCard value="20+" label="Years of Experience" />
                            <StatCard value="100+" label="Flooring Options" />
                            <StatCard value="Nationwide" label="Supply Network" />
                            <StatCard value="Trusted" label="By Builders & Homeowners" />
                        </div>
                    </div>

                    {/* Feature cards */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Premium Materials"
                            description="High-quality timber, hybrid, and laminate flooring built to last."
                        />
                        <FeatureCard
                            title="Certified & Durable"
                            description="Products tested and certified to meet Australian standards."
                        />
                        <FeatureCard
                            title="Australia-Wide Supply"
                            description="Reliable distribution network supporting projects nationwide."
                        />
                    </div>
                </div>
            </section>


            {/* Products */}
            <section id="products" className="container mx-auto px-6 py-16">
                <h2 className="text-5xl font-bold text-center mb-8">Explore Our Flooring Ranges</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16">
                    {productRanges.map((prod) => (
                        <motion.div
                            key={prod.title}
                            className="group relative rounded-lg shadow-md hover:shadow-xl transition bg-white overflow-hidden"
                            whileHover="hover"
                        >
                            {/* Image wrapper */}
                            <div className="relative h-60 w-full overflow-hidden">
                                {/* Default image */}
                                <motion.img
                                    src={prod.image}
                                    alt={prod.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ opacity: 1 }}
                                    variants={{
                                        hover: { opacity: 0 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Hover image */}
                                <motion.img
                                    src={prod.hoveredImage}
                                    alt={prod.title}
                                    className="absolute inset-0 w-full h-full object-cover z-10"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    variants={{
                                        hover: { opacity: 1, scale: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative z-20">
                                <h3 className="text-xl font-semibold mb-2">{prod.title}</h3>
                                <p className="text-gray-600">{prod.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* Projects Gallery */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-navy-900 mb-6">Our Projects</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Exceptional installations across residential and commercial spaces.[file:21]</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
                        {products.map((image, i) => (
                            <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-gray-200">
                                <img
                                    src={image.image}
                                    alt={`Project ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-navy-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">View Details</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <a href="#more-projects" className="inline-block px-12 py-4 bg-navy-900 text-white rounded-xl font-semibold hover:bg-navy-800 transition-all">Load More Projects</a>
                    </div>
                </div>
            </section>


            {/* Contact / CTA */}
            <section className="relative py-28 lg:py-36 bg-[#f5efed] overflow-hidden">
                {/* Soft background accents */}
                {/* <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald-200/40 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-amber-200/40 blur-3xl" /> */}

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">
                    {/* Image block */}
                    <div className="relative">
                        <img
                            src="./images/outdoor.jpg"
                            alt="Outdoor flooring"
                            className="h-[520px] w-full object-cover rounded-3xl shadow-2xl"
                        />
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
                    </div>

                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Let’s Talk About Your Flooring Project
                        </h2>

                        <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
                            Get expert advice, fast quotes, and product guidance from flooring specialists
                            who understand quality, durability, and design.
                        </p>

                        {/* Contact cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
                            {/* Phone */}
                            <Link
                                to={"tel:0755267399"}
                                className="group flex items-center gap-4 rounded-2xl bg-white px-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                                    <PhoneCall />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Call Us</div>
                                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#8A6A5A] transition">
                                        07 5526 7399
                                    </div>
                                </div>
                            </Link>

                            {/* Email */}
                            <Link
                                to="mailto:sales@cleverchoice.com.au"
                                className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-1"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#998e8a]/30 text-[#8A6A5A] text-2xl">
                                   <Mail />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                                    <div className="text-lg font-bold text-gray-900 break-all group-hover:text-[#8A6A5A] transition">
                                        sales@cleverchoice.com.au
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <button className="relative overflow-hidden py-3 px-14 bg-white text-black text-xl font-medium group cursor-pointer">
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                    Call now
                                </span>

                                <span
                                    className="absolute inset-0 bg-black transform scale-x-0 origin-left 
                   transition-transform duration-300 group-hover:scale-x-100"
                                ></span>
                            </button>
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center border-2 border-gray-900 px-10 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition"
                            >
                                Request a Quote
                            </a>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold mb-3">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function StatCard({ value, label }) {
    return (
        <div className="bg-white rounded-2xl p-6 text-center shadow">
            <div className="text-3xl font-bold text-[#8A6A5A]">{value}</div>
            <div className="mt-2 text-gray-600">{label}</div>
        </div>
    );
}


