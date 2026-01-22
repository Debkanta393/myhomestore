// Top nav
export const topNavItems = [
  { label: "Ideas & Advice", path: "/ideas-advice", key: "ideas" },
  { label: "About", path: "/about", key: "about" },
];

// Top nav sublist
export const topNavSubList = {
  ideas: ["Blog", "FAQ", "Floor Finder", "Comparison Guide"],
  about: [
    "Why Shop With Us",
    "Meet the Team",
    "Community",
    "Reviews",
    "Delivery & Returns",
  ],
};



// Main nav under tab
export const mainNav = [
  [
    { label: "Flooring", key: "flooring", hasSubmenu: false },
    { label: "Tiles", key: "tiles", hasSubmenu: false },
    { label: "Bathroom", key: "bathroom", hasSubmenu: false },
    {
      label: "Kitchen & Laundry",
      key: "kitchen & laundry",
      hasSubmenu: false,
    },
    { label: "Other", key: "other", hasSubmenu: false },
  ],
  [
    { label: "Hybrid", key: "hybrid", hasSubmenu: false },
    { label: "Engineered Oak", key: "engineered oak", hasSubmenu: false },
    {
      label: "Australian Timber",
      key: "australian timber",
      hasSubmenu: false,
    },
    { label: "European Timber", key: "european timber", hasSubmenu: false },
    { label: "Laminate", key: "laminate", hasSubmenu: false },
    { label: "Hydro Laminate", key: "hydro laminate", hasSubmenu: false },
    { label: "Vinyl", key: "vinyl", hasSubmenu: false },
    { label: "Bamboo", key: "bamboo", hasSubmenu: false },
    { label: "Hybrid Shield", key: "hybrid shield", hasSubmenu: false },
    { label: "Shop by Brands", key: "floorShopByBrands", hasSubmenu: true },
    { label: "Shop by Design", key: "shopByDesign", hasSubmenu: true },
  ],
  [
    { label: "Wall Tiles", key: "wall tiles", hasSubmenu: false },
    { label: "Floor Tiles", key: "floor tiles", hasSubmenu: false },
    { label: "Mosaic Tiles", key: "mosaic tiles", hasSubmenu: false },
    { label: "Feature Tiles", key: "feature tiles", hasSubmenu: false },
    { label: "Outdoor Tiles", key: "outdoor tiles", hasSubmenu: false },
    { label: "Pool Tiles", key: "pool tiles", hasSubmenu: false },
    {
      label: "Commercial Floor Tiles",
      key: "commercial floor tiles",
      hasSubmenu: false,
    },
    { label: "Porcelain Tiles", key: "porcelain tiles", hasSubmenu: false },
    { label: "Accessories", key: "accessories", hasSubmenu: false },
    { label: "Shop by Brands", key: "tilesShopByBrands", hasSubmenu: true },
  ],
  [
    { label: "Toilets", key: "toilets", hasSubmenu: false },
    { label: "Basins", key: "basins", hasSubmenu: false },
    { label: "Baths", key: "baths", hasSubmenu: false },
    { label: "Vanities", key: "vanities", hasSubmenu: false },
    { label: "Showers", key: "showers", hasSubmenu: false },
    { label: "Shower Screens", key: "shower Screens", hasSubmenu: false },
    { label: "Taps", key: "taps", hasSubmenu: false },
    { label: "Mirrors", key: "mirrors", hasSubmenu: false },
    { label: "Accessories", key: "accessories", hasSubmenu: false },
    { label: "Brands", key: "brands", hasSubmenu: true },
  ],
  [
    { label: "Kitchen Sinks", key: "kitchen sinks", hasSubmenu: false },
    { label: "Kitchen Tapware", key: "kitchen tapware", hasSubmenu: false },
    { label: "Stone Benches", key: "stone benches", hasSubmenu: false },
    { label: "Stone Benchtops", key: "stone benchtops", hasSubmenu: false },
    { label: "Splashbacks", key: "splashbacks", hasSubmenu: false },
    {
      label: "Kitchen Appliances",
      key: "kitchen appliances",
      hasSubmenu: false,
    },
    { label: "Laundry Sinks", key: "laundry sinks", hasSubmenu: false },
    { label: "Laundry Tapware", key: "laundry tapware", hasSubmenu: false },
    { label: "Accessories", key: "accessories", hasSubmenu: false },
    { label: "Brands", key: "brands", hasSubmenu: false },
  ],
  [
    { label: "Fencing", key: "fencing", hasSubmenu: false },
    { label: "Cladding", key: "cladding", hasSubmenu: false },
    { label: "Decking", key: "decking", hasSubmenu: false },
    { label: "Bamboo Benchtops", key: "bamboo benchtops", hasSubmenu: false },
    { label: "Skylight", key: "skylight", hasSubmenu: false },
    { label: "Blinds", key: "blinds", hasSubmenu: true },
    { label: "Curtains", key: "curtains", hasSubmenu: true },
    { label: "Shutters", key: "shutters", hasSubmenu: true },
    { label: "Outdoor", key: "outdoor", hasSubmenu: true },
  ],
];

// Main sub nav
export const mainNavSub = {
  floorShopByBrands: [
    "Clever Choice",
    "Preference Floors",
    "Herford Flooring",
    "Signature Flooring",
    "Terra Mater",
    "Create Floors",
  ],
  shopByDesign: ["Longboards", "Herringbone", "Chevron"],
  tilesShopByBrands: [
    "Elegance Collection",
    "Masa Imports",
    "DW Tiles",
    "Designer Stone & Tiles",
  ],
  brands: ["Fienza", "Bella Vista", "Evia Bathware", "Nero Bathware", "Kuroma"],
  blinds: [
    "Roller Blinds",
    "Vertical Blinds",
    "Roman Blinds",
    "Venetian Blinds",
    "Panel Slide Doors",
  ],
  curtains: ["Sheer Curtains", "Lockout Curtains"],
  shutters: ["Timber Shutters", "PVC Shutters", "Aluminium Shutters"],
  outdoor: ["Outdoor Blinds", "Outdoor Shutters", "Roller Shutters"],
};

// Collections in home page
export const collections = {
  "all categories": [
    {
      image: "./images/kitchen/kitchen1.jpg",
      title: "Toilets",
    },
    {
      image: "./images/bathroom/bathtubs.webp",
      title: "Bidets",
    },
    {
      image: "./images/kitchen/kitchen3.jpg",
      title: "Bathtubs",
    },
    {
      image: "./images/flooring/flooring6.jpg",
      title: "Vanities",
    },
    {
      image: "./images/bathroom/bidets.png",
      title: "Basins",
    },
    {
      image: "./images/tiles/tiles9.jpg",
      title: "Bathroom Mirrors",
    },
    {
      image: "./images/flooring/flooring3.jpg",
      title: "Bathroom Tapware",
    },
    {
      image: "./images/flooring/flooring2.webp",
      title: "Showers",
    },
    // {
    //   image: "./images/kitchen/kitchen9.jpg",
    //   title: "Kitchen Sinks",
    // },
    // {
    //   image: "./images/tiles/tiles3.jpg",
    //   title: "Shower Screens",
    // },
    // {
    //   image: "./images/bathroom/vanities.jpg",
    //   title: "Flooring",
    // },
    // {
    //   image: "./images/kitchen/kitchen12.jpg",
    //   title: "Disability & Aged Products",
    // },
  ],
  bathroom: [
    {
      image: "./images/collections/toilets.jpg",
      title: "Toilets",
    },
    // {
    //   image: "./images/bathroom/bidets.png",
    //   title: "Bidets",
    // },
    {
      image: "./images/bathroom/bathtubs.webp",
      title: "Bathtubs",
    },
    {
      image: "./images/bathroom/vanities.jpg",
      title: "Vanities",
    },
    {
      image: "./images/collections/basins.webp",
      title: "Basins",
    },
    {
      image: "./images/bathroom/bathroom_mirror.png",
      title: "Bathroom Mirrors",
    },
    {
      image: "./images/collections/bathroom_tapware.jpg",
      title: "Bathroom Tapware",
    },
    {
      image: "./images/bathroom/shower.png",
      title: "Showers",
    },
    {
      image: "./images/collections/shower_screen.webp",
      title: "Shower Screens",
    },
    // {
    //   image: "./images/collections/kitchen_sinks.webp",
    //   title: "Kitchen Sinks",
    // },
    // {
    //   image: "./images/collections/flooring.png",
    //   title: "Flooring",
    // },
    // {
    //   image: "./images/bathroom/disability_aged.jpg",
    //   title: "Disability & Aged Products",
    // },
  ],

  flooring: [
    {
      image: "./images/flooring/Hybrid.png",
      title: "Hybrid",
    },
    {
      image: "./images/flooring/Hydro-laminate.png",
      title: "Hydro Laminate",
    },
    {
      image: "./images/flooring/Herringbone.png",
      title: "Herringbone",
    },
    {
      image: "./images/flooring/Bamboo.png",
      title: "Bamboo",
    },
    {
      image: "./images/flooring/Vinyl.png",
      title: "Vinyl",
    },
    {
      image: "./images/flooring/Timber.png",
      title: "Timber",
    },
    {
      image: "./images/flooring/Laminate.png",
      title: "Laminate",
    },
    {
      image: "./images/flooring/Engineered-oak.png",
      title: "Engineered Oak",
    },
    // {
    //   image: "./images/flooring/flooring9.jpg",
    //   title: "Kitchen Sinks",
    // },
    // {
    //   image: "./images/flooring/flooring10.jpg",
    //   title: "Shower Screens",
    // },
    // {
    //   image: "./images/flooring/flooring11.webp",
    //   title: "Flooring",
    // },
    // {
    //   image: "./images/flooring/flooring12.jpg",
    //   title: "Disability & Aged Products",
    // },
  ],

  tiles: [
    {
      image: "./images/tiles/Commercial.jpg",
      title: "Commercial Floor Tiles",
    },
    {
      image: "./images/tiles/Feature.jpg",
      title: "Feature",
    },
    {
      image: "./images/tiles/Floor.jpg",
      title: "Floor",
    },
    {
      image: "./images/tiles/Mosaic.jpg",
      title: "Mosaic",
    },
    {
      image: "./images/tiles/Outdoor.jpg",
      title: "Outdoor",
    },
    {
      image: "./images/tiles/Pool.jpg",
      title: "Pool",
    },
    {
      image: "./images/tiles/Porcelain.jpg",
      title: "Porcelain",
    },
    {
      image: "./images/tiles/Wall.jpg",
      title: "Wall",
    },
    // {
    //   image: "./images/tiles/tiles9.jpg",
    //   title: "Kitchen Sinks",
    // },
    // {
    //   image: "./images/tiles/tiles10.jpg",
    //   title: "Shower Screens",
    // },
    // {
    //   image: "./images/tiles/tiles11.jpg",
    //   title: "Flooring",
    // },
    // {
    //   image: "./images/tiles/tiles12.jpg",
    //   title: "Disability & Aged Products",
    // },
  ],

  "kitchen & laundry": [
    {
      image: "./images/kitchen/kitchen1.jpg",
      title: "Toilets",
    },
    {
      image: "./images/kitchen/kitchen2.png",
      title: "Bidets",
    },
    {
      image: "./images/kitchen/kitchen3.jpg",
      title: "Bathtubs",
    },
    {
      image: "./images/kitchen/kitchen4.jpg",
      title: "Vanities",
    },
    {
      image: "./images/kitchen/kitchen5.jpg",
      title: "Basins",
    },
    {
      image: "./images/kitchen/kitchen6.jpg",
      title: "Bathroom Mirrors",
    },
    {
      image: "./images/kitchen/kitchen7.jpg",
      title: "Bathroom Tapware",
    },
    {
      image: "./images/kitchen/kitchen8.jpg",
      title: "Showers",
    },
    // {
    //   image: "./images/kitchen/kitchen9.jpg",
    //   title: "Kitchen Sinks",
    // },
    // {
    //   image: "./images/kitchen/kitchen10.jpg",
    //   title: "Shower Screens",
    // },
    // {
    //   image: "./images/kitchen/kitchen11.jpg",
    //   title: "Flooring",
    // },
    // {
    //   image: "./images/kitchen/kitchen12.jpg",
    //   title: "Disability & Aged Products",
    // },
  ],
};

// Filter category data
export const category = {
  flooring: [
    "Hybrid",
    "Engineered Oak",
    "Australian Timber",
    "European Timber",
    "Laminate",
    "Hydro Laminate",
    "Vinyl",
    "Bamboo",
    "Hybrid Shield",
  ],
  tiles: [
    "Wall Tiles",
    "Floor Tiles",
    "Mosaic Tiles",
    "Feature Tiles",
    "Outdoor Tiles",
    "Pool Tiles",
    "Commercial Floor Tiles",
    "Porcelain Tiles",
    "Accessories",
    "Shop by Brands",
  ],
  bathroom: [
    "Toilets",
    "Basins",
    "Baths",
    "Vanities",
    "Showers",
    "Shower Screens",
    "Taps",
    "Mirrors",
    "Accessories",
    "Brands",
  ],
  "kitchen & laundry": [
    "Kitchen Sinks",
    "Kitchen Tapware",
    "Stone Benches",
    "Stone Benchtops",
    "Splashbacks",
    "Kitchen Appliances",
    "Laundry Sinks",
    "Laundry Tapware",
    "Accessories",
    "Brands",
  ],
  "other home improvements": [
    "Fencing",
    "Cladding",
    "Decking",
    "Bamboo Benchtops",
    "Skylight",
    "Blinds",
    "Curtains",
    "Shutters",
    "Outdoor",
  ],
};

// Filter brand data
export const brand={
    flooring:[
        "Clever Choice",
        "Preference Floors",
        "Herford Flooring",
        "Signature Flooring",
        "Terra Mater",
        "Create Floors"
    ],
    tiles:[
        "Elegance Collection",
        "Masa Imports",
        "DW Tiles",
        "Designer Stone & Tiles"

    ],
    bathroom:[
        "Fienza",
        "Bella Vista",
        "Evia Bathware",
        "Nero Bathware",
        "Kuroma"

    ]
}


// Products data
export const products = [
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
];