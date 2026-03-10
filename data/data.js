// Top nav
export const topNavItems = [
  { label: "Ideas & Advice", key: "ideas" },
  { label: "About", key: "about" },
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
export const brand = {
  flooring: [
    "Clever Choice",
    "Preference Floors",
    "Herford Flooring",
    "Signature Flooring",
    "Terra Mater",
    "Create Floors",
  ],
  tiles: [
    "Elegance Collection",
    "Masa Imports",
    "DW Tiles",
    "Designer Stone & Tiles",
  ],
  bathroom: [
    "Fienza",
    "Bella Vista",
    "Evia Bathware",
    "Nero Bathware",
    "Kuroma",
  ],
};

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

// export const navData = [
//   [
//     {
//       "By Room": [
//         {
//           icon: "Sofa",
//           heading: "Living Room",
//           subHeading: "Flooring, rugs, feature walls",
//           soon: false,
//         },
//         {
//           icon: "CookingPot",
//           heading: "Kitchen",
//           subHeading: "Benchtops, splashbacks, flooring",
//           soon: false,
//         },
//         {
//           icon: "Bath",
//           heading: "Bathroom",
//           subHeading: "Tiles, vanities, tapware",
//           soon: false,
//         },
//         {
//           icon: "Fence",
//           heading: "Outdoor Living",
//           subHeading: "Decking, cladding, screening",
//           soon: false,
//         },
//         {
//           icon: "TowelRack",
//           heading: "",
//           subHeading: "Laundry",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "By Category": [
//         {
//           icon: "BrickWall",
//           heading: "Flooring",
//           subHeading: "Hybrid, engineered, solid, bamboo",
//           soon: false,
//         },
//         {
//           icon: "Fence",
//           heading: "Outdoor Living",
//           subHeading: "Decking, cladding, fencing",
//           soon: false,
//         },
//         {
//           icon: "Sprout",
//           heading: "Bamboo & Eco",
//           subHeading: "Benchtops, screening, flooring",
//           soon: false,
//         },
//         {
//           icon: "ShowerHead",
//           heading: "Bathroom",
//           subHeading: "Vanities, tapware, baths",
//           soon: false,
//         },
//         {
//           icon: "InspectionPanel",
//           heading: "",
//           subHeading: "Tiles",
//           soon: true,
//         },
//         {
//           icon: "CookingPot",
//           heading: "",
//           subHeading: "Kitchen",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Shop By Brands": [
//         {
//           icon: "Sparkle",
//           heading: "Clever Choice",
//           subHeading: "Hybrid, engineered, laminate",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "Preference Floors",
//           subHeading: "Hybrid, vinyl, laminate",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "Hurford Wholesale",
//           subHeading: "Solid timber & engineered oak",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "Fienza",
//           subHeading: "Premium bathware",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "AVAI Bathware",
//           subHeading: "Vanities, baths, tapware",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "DW Tiles",
//           subHeading: "Designer tiles",
//           soon: true,
//         },
//         {
//           icon: "Sparkle",
//           heading: "RS Brand",
//           subHeading: "Our own range",
//           soon: true,
//         },
//       ],
//     },
//   ],
//   [
//     {
//       "Resilient & Modern": [
//         {
//           icon: "Diamond",
//           heading: "Hybrid / SPC Flooring",
//           subHeading: "Waterproof · click install · #1 seller",
//           soon: false,
//         },
//         {
//           icon: "Droplet",
//           heading: "Hydro Laminate",
//           subHeading: "Water resistant laminate",
//           soon: false,
//         },
//         {
//           icon: "Book",
//           heading: "Vinyl Plank (LVP)",
//           subHeading: "Flexible, durable, easy install",
//           soon: false,
//         },
//         {
//           icon: "StickyNote",
//           heading: "Laminate Flooring",
//           subHeading: "Affordable timber-look",
//           soon: false,
//         },
//       ],
//     },
//     {
//       "Natural Timber": [
//         {
//           icon: "TreeDeciduous",
//           heading: "Solid Hardwood Flooring",
//           subHeading: "Ultra10 | Fourteen | Traditional",
//           soon: false,
//         },
//         {
//           icon: "Pickaxe",
//           heading: "Engineered Oak Flooring",
//           subHeading: "Stable | Direct Stick | Wide Board",
//           soon: false,
//         },
//         {
//           icon: "SquaresExclude",
//           heading: "Timber Parquetry",
//           subHeading: "XL & Classic Patterns",
//           soon: false,
//         },
//         {
//           icon: "Recycle",
//           heading: "",
//           subHeading: "Recycled Timber",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Eco - Friendly": [
//         {
//           icon: "Sprout",
//           heading: "Bamboo Flooring",
//           subHeading: "Natural | Durable | Sustainable",
//           soon: false,
//         },
//         {
//           icon: "Stone",
//           heading: "",
//           subHeading: "Cork Flooring",
//           soon: true,
//         },
//         {
//           icon: "Volleyball",
//           heading: "",
//           subHeading: "Wool Carpet",
//           soon: true,
//         },
//       ],
//     },
//     {
//       Accessories: [
//         {
//           icon: "Package",
//           heading: "Underlay",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "Wrench",
//           heading: "Trims & Scotia",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "BottleWine",
//           heading: "Care Products",
//           subHeading: "",
//           soon: false,
//         },
//       ],
//     },
//     {
//       Brands: [
//         {
//           icon: "CircleDot",
//           heading: "Clever Choice",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "CircleDot",
//           heading: "Preference Floors",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "CircleDot",
//           heading: "Hurford Wholesale",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "CircleDot",
//           heading: "RS Brands",
//           subHeading: "",
//           soon: false,
//         },
//       ],
//     },
//     {
//       "By Species": [
//         {
//           icon: "Leaf",
//           heading: "Blackbutt",
//           subHeading: "Janka 9kN · BAL 29",
//           soon: false,
//         },
//         {
//           icon: "Leaf",
//           heading: "Spotted Gum",
//           subHeading: "Janka 11kN · dramatic grain",
//           soon: false,
//         },
//         {
//           icon: "Leaf",
//           heading: "European Oak",
//           subHeading: "20+ stain colours",
//           soon: false,
//         },
//         {
//           icon: "Leaf",
//           heading: "Grey Ironbark",
//           subHeading: "Janka 14kN · premium",
//           soon: false,
//         },
//       ],
//     },
//     {
//       "Need Help?": [
//         {
//           icon: "Sparkle",
//           heading: "Floor Finder Quiz",
//           subHeading: "5 Questions → Perfect Match",
//           soon: false,
//         },
//         {
//           icon: "Flower",
//           heading: "Species Guide",
//           subHeading: "Compare Hardness, Colour, Durability",
//           soon: false,
//         },
//         {
//           icon: "TriangleRight",
//           heading: "How to Measure Up",
//           subHeading: "Calculator + video guide",
//           soon: false,
//         },
//         {
//           icon: "BookOpen",
//           heading: "Installation Guides",
//           subHeading: "DIY step-by-step resources",
//           soon: false,
//         },
//         {
//           icon: "Sparkle",
//           heading: "Care & Maintenance",
//           subHeading: "",
//           soon: false,
//         },
//         {
//           icon: "MessageCircleQuestionMark",
//           heading: "Ask a Specialist",
//           subHeading: "",
//           soon: false,
//         },
//       ],
//     },
//   ],
//   [
//     {
//       Decking: [
//         {
//           icon: "Trees",
//           heading: "Hardwood Timber Decking",
//           subHeading: "Blackbutt · Merbau · Class 1",
//           soon: false,
//         },
//         {
//           icon: "Sprout",
//           heading: "Bamboo Decking",
//           subHeading: "Eco-friendly · durable",
//           soon: false,
//         },
//         {
//           icon: "Recycle",
//           heading: "",
//           subHeading: "Composite Decking",
//           soon: true,
//         },
//         {
//           icon: "SquareDot",
//           heading: "",
//           subHeading: "Deck Tiles",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Cladding & Screening": [
//         {
//           icon: "BrickWallShield",
//           heading: "Hardwood Timber Cladding",
//           subHeading: "Blackbutt · exterior · BAL 29",
//           soon: false,
//         },
//         {
//           icon: "ChevronsLeftRightEllipsis",
//           heading: "Bamboo Cladding",
//           subHeading: "Interior & exterior panels",
//           soon: false,
//         },
//         {
//           icon: "SquareSquare",
//           heading: "Interior Timber Lining",
//           subHeading: "Feature walls · ceilings",
//           soon: false,
//         },
//         {
//           icon: "SquareSquare",
//           heading: "Bamboo Screening",
//           subHeading: "Privacy screens & panels",
//           soon: false,
//         },
//         {
//           icon: "BrickWall",
//           heading: "",
//           subHeading: "Composite Cladding",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Fencing & Benchtops": [
//         {
//           icon: "DoorOpen",
//           heading: "Bamboo Fencing & Gates",
//           subHeading: "Natural privacy solutions",
//           soon: false,
//         },
//         {
//           icon: "Fence",
//           heading: "",
//           subHeading: "Timber Fencing",
//           soon: true,
//         },
//         {
//           icon: "Weight",
//           heading: "",
//           subHeading: "Industrial Metal Fencing",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Outdoor Benchtops": [
//         {
//           icon: "Armchair",
//           heading: "Bamboo Benchtops",
//           subHeading: "Kitchen & outdoor · popular!",
//           soon: false,
//         },
//         {
//           icon: "Cuboid",
//           heading: "",
//           subHeading: "Stone & Porcelain",
//           soon: true,
//         },
//       ],
//     },
//   ],
//   [
//     {
//       "Bamboo Products": [
//         {
//           icon: "Cuboid",
//           heading: "Bamboo Flooring",
//           subHeading: "Natural hardness · eco certified",
//           soon: true,
//         },
//         {
//           icon: "Cuboid",
//           heading: "Bamboo Decking",
//           subHeading: "Outdoor · durable",
//           soon: true,
//         },
//         {
//           icon: "Cuboid",
//           heading: "Bamboo Cladding",
//           subHeading: "Interior & exterior",
//           soon: true,
//         },
//         {
//           icon: "Cuboid",
//           heading: "Bamboo Benchtops",
//           subHeading: "Kitchen & outdoor · popular!",
//           soon: true,
//         },
//         {
//           icon: "Cuboid",
//           heading: "Bamboo Screening & Fencing",
//           subHeading: "Privacy panels & gates",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Sustainable Timber": [
//         {
//           icon: "Shield",
//           heading: "PEFC Certified Flooring",
//           subHeading: "Hurford — sustainably sourced",
//         },
//         {
//           icon: "Layers",
//           heading: "Solid Timber Flooring",
//           subHeading: "Plantation & certified hardwoods",
//         },
//         {
//           icon: "Tools",
//           heading: "Engineered Oak",
//           subHeading: "Less timber · same beauty",
//         },
//         {
//           icon: "Recycle",
//           heading: "Recycled Timber",
//           soon: true,
//         },
//         {
//           icon: "Leaf",
//           heading: "Our Sustainability Story",
//         },
//         {
//           icon: "Medal",
//           heading: "PEFC Certification Guide",
//         },
//       ],
//     },
//     {
//       "Eco Brands": [
//         {
//           icon: "Sparkle",
//           heading: "Hurfords Wholesale",
//           subHeading: "PEFC certified Australian hardwood",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       Bathroom: [
//         {
//           icon: "Sink",
//           heading: "Basins",
//           subHeading: "Counter top, wall hung, under counter",
//         },
//         {
//           icon: "Cabinet",
//           heading: "Vanities & Storage",
//           subHeading: "Freestanding & wall mounted",
//         },
//         {
//           icon: "Bath",
//           heading: "Baths & Freestanding",
//           subHeading: "Soaker, clawfoot & built-in",
//         },
//         {
//           icon: "Shower",
//           heading: "Shower Screens",
//           subHeading: "Frameless, semi, framed",
//         },
//         {
//           icon: "Tap",
//           heading: "Tapware",
//           subHeading: "Mixers, shower sets, bath fillers",
//         },
//         {
//           icon: "Toilet",
//           heading: "Toilets & Suites",
//         },
//         {
//           icon: "Mirror",
//           heading: "Mirrors & Cabinets",
//         },
//         {
//           icon: "Package",
//           heading: "Accessories",
//         },
//       ],
//     },
//     {
//       Kitchen: [
//         {
//           icon: "Counter",
//           heading: "Bamboo Benchtops",
//           subHeading: "Available now · popular!",
//         },
//         {
//           icon: "Cube",
//           heading: "Stone Benchtops",
//           soon: true,
//         },
//         {
//           icon: "Sink",
//           heading: "Kitchen Sinks",
//           soon: true,
//         },
//         {
//           icon: "Droplet",
//           heading: "Kitchen Tapware",
//           soon: true,
//         },
//         {
//           icon: "Waves",
//           heading: "Splashbacks",
//           soon: true,
//         },
//         {
//           icon: "Fridge",
//           heading: "Appliances",
//           soon: true,
//         },
//       ],
//     },
//     {
//       Brands: [
//         {
//           icon: "Sparkle",
//           heading: "Pfienza",
//           subHeading: "Hybrid, engineered, laminate",
//         },
//         {
//           icon: "Sparkle",
//           heading: "AVIA Bathware",
//           subHeading: "Hybrid, engineered, laminate",
//         },
//       ],
//     },
//     {
//       Services: [
//         {
//           icon: "Wrench",
//           heading: "Bathroom Renovation",
//           subHeading: "Full supply + install packages",
//         },
//         {
//           icon: "Measure",
//           heading: "Free Measure & Quote",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       "Indoor Tiles": [
//         {
//           icon: "Square",
//           heading: "Floor Tiles",
//           subHeading: "Porcelain, ceramic, stone look",
//           soon: true,
//         },
//         {
//           icon: "SquareOutline",
//           heading: "Wall Tiles",
//           subHeading: "Bathroom, kitchen, feature walls",
//           soon: true,
//         },
//         {
//           icon: "Layers",
//           heading: "Feature Tiles",
//           subHeading: "Encaustic, patterned, textured",
//           soon: true,
//         },
//         {
//           icon: "DotSquare",
//           heading: "Mosaic Tiles",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "Outdoor & Commercial": [
//         {
//           icon: "ExternalLink",
//           heading: "Outdoor Tiles",
//           soon: true,
//         },
//         {
//           icon: "Pool",
//           heading: "Pool Tiles",
//           soon: true,
//         },
//         {
//           icon: "Grid",
//           heading: "Commercial Tiles",
//           soon: true,
//         },
//         {
//           icon: "SquareGrid",
//           heading: "Porcelain Pavers",
//           soon: true,
//         },
//       ],
//     },
//     {
//       "DW Tiles": [
//         {
//           icon: "GridPlus",
//           heading: "DW Tiles",
//           subHeading: "Flooring, rugs, feature walls",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       Installation: [
//         {
//           icon: "Download",
//           heading: "Flooring Installation",
//           subHeading: "All floor types · licensed · Melbourne",
//         },
//         {
//           icon: "Home",
//           heading: "Cladding Installation",
//           subHeading: "External & internal · supply + install",
//         },
//         {
//           icon: "Deck",
//           heading: "Decking Installation",
//           subHeading: "Timber & composite · measure & quote",
//         },
//         {
//           icon: "Bathtub",
//           heading: "Bathroom Renovation",
//           subHeading: "Full project management",
//         },
//         {
//           icon: "Kitchen",
//           heading: "Kitchen Renovation",
//           soon: true,
//         },
//       ],
//     },
//     {
//       Consultation: [
//         {
//           icon: "Location",
//           heading: "Visit Display Centre",
//           subHeading: "Laverton VIC · Mon–Sat 9am–5pm",
//         },
//         {
//           icon: "HomeSearch",
//           heading: "In-Home Consultation",
//           subHeading: "Free for Melbourne metro",
//         },
//         {
//           icon: "Tag",
//           heading: "Free Measure & Quote",
//           subHeading: "Obligation free · 48hr turnaround",
//         },
//         {
//           icon: "Video",
//           heading: "Video Consultation",
//           subHeading: "Zoom call with our specialists",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       "Current Offers": [
//         {
//           icon: "Grid",
//           heading: "Flooring Sale",
//           subHeading: "Up to 20% off selected hybrid & timber",
//         },
//         {
//           icon: "DollarCircle",
//           heading: "Outdoor Clearance",
//           subHeading: "Decking & cladding end-of-line",
//         },
//         {
//           icon: "Tap",
//           heading: "Bathware Specials",
//           subHeading: "Selected Pfienza & AVIA",
//         },
//         {
//           icon: "Box",
//           heading: "Free Sample Packs",
//           subHeading: "Timber samples delivered free",
//         },
//       ],
//     },
//     {
//       "Trade & Volume": [
//         {
//           icon: "Ruler",
//           heading: "100m²+ Trade Pricing",
//           subHeading: "Call us — we beat any written quote",
//         },
//         {
//           icon: "Document",
//           heading: "Builder & Trade Account",
//           subHeading: "Apply for ongoing trade rates",
//         },
//         {
//           icon: "Palette",
//           heading: "Designer Program",
//           subHeading: "Interior designers — contact us",
//         },
//       ],
//     },
//   ],
// ];



export const navData=
{
  "By Room": [
        {
          icon: "Sofa",
          heading: "Living Room",
          subHeading: "Flooring, rugs, feature walls",
          soon: false,
        },
        {
          icon: "CookingPot",
          heading: "Kitchen",
          subHeading: "Benchtops, splashbacks, flooring",
          soon: false,
        },
        {
          icon: "Bath",
          heading: "Bathroom",
          subHeading: "Tiles, vanities, tapware",
          soon: false,
        },
        {
          icon: "Fence",
          heading: "Outdoor Living",
          subHeading: "Decking, cladding, screening",
          soon: false,
        },
        {
          icon: "TowelRack",
          heading: "",
          subHeading: "Laundry",
          soon: true,
        },
      ],

      "By Category": [
        {
          icon: "BrickWall",
          heading: "Flooring",
          subHeading: "Hybrid, engineered, solid, bamboo",
          soon: false,
        },
        {
          icon: "Fence",
          heading: "Outdoor Living",
          subHeading: "Decking, cladding, fencing",
          soon: false,
        },
        {
          icon: "Sprout",
          heading: "Bamboo & Eco",
          subHeading: "Benchtops, screening, flooring",
          soon: false,
        },
        {
          icon: "ShowerHead",
          heading: "Bathroom",
          subHeading: "Vanities, tapware, baths",
          soon: false,
        },
        {
          icon: "InspectionPanel",
          heading: "",
          subHeading: "Tiles",
          soon: true,
        },
        {
          icon: "CookingPot",
          heading: "",
          subHeading: "Kitchen",
          soon: true,
        },
      ],
      "Shop By Brands": [
        {
          icon: "Sparkle",
          heading: "Clever Choice",
          subHeading: "Hybrid, engineered, laminate",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "Preference Floors",
          subHeading: "Hybrid, vinyl, laminate",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "Hurford Wholesale",
          subHeading: "Solid timber & engineered oak",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "Fienza",
          subHeading: "Premium bathware",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "AVAI Bathware",
          subHeading: "Vanities, baths, tapware",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "DW Tiles",
          subHeading: "Designer tiles",
          soon: true,
        },
        {
          icon: "Sparkle",
          heading: "RS Brand",
          subHeading: "Our own range",
          soon: true,
        },
      ],
      "Resilient & Modern": [
        {
          icon: "Diamond",
          heading: "Hybrid / SPC Flooring",
          subHeading: "Waterproof · click install · #1 seller",
          soon: false,
        },
        {
          icon: "Droplet",
          heading: "Hydro Laminate",
          subHeading: "Water resistant laminate",
          soon: false,
        },
        {
          icon: "Book",
          heading: "Vinyl Plank (LVP)",
          subHeading: "Flexible, durable, easy install",
          soon: false,
        },
        {
          icon: "StickyNote",
          heading: "Laminate Flooring",
          subHeading: "Affordable timber-look",
          soon: false,
        },
      ],
      "Natural Timber": [
        {
          icon: "TreeDeciduous",
          heading: "Solid Hardwood Flooring",
          subHeading: "Ultra10 | Fourteen | Traditional",
          soon: false,
        },
        {
          icon: "Pickaxe",
          heading: "Engineered Oak Flooring",
          subHeading: "Stable | Direct Stick | Wide Board",
          soon: false,
        },
        {
          icon: "SquaresExclude",
          heading: "Timber Parquetry",
          subHeading: "XL & Classic Patterns",
          soon: false,
        },
        {
          icon: "Recycle",
          heading: "",
          subHeading: "Recycled Timber",
          soon: true,
        },
      ],
      "Eco - Friendly": [
        {
          icon: "Sprout",
          heading: "Bamboo Flooring",
          subHeading: "Natural | Durable | Sustainable",
          soon: false,
        },
        {
          icon: "Stone",
          heading: "",
          subHeading: "Cork Flooring",
          soon: true,
        },
        {
          icon: "Volleyball",
          heading: "",
          subHeading: "Wool Carpet",
          soon: true,
        },
      ],
      Accessories: [
        {
          icon: "Package",
          heading: "Underlay",
          subHeading: "",
          soon: false,
        },
        {
          icon: "Wrench",
          heading: "Trims & Scotia",
          subHeading: "",
          soon: false,
        },
        {
          icon: "BottleWine",
          heading: "Care Products",
          subHeading: "",
          soon: false,
        },
      ],
      Brands: [
        {
          icon: "CircleDot",
          heading: "Clever Choice",
          subHeading: "",
          soon: false,
        },
        {
          icon: "CircleDot",
          heading: "Preference Floors",
          subHeading: "",
          soon: false,
        },
        {
          icon: "CircleDot",
          heading: "Hurford Wholesale",
          subHeading: "",
          soon: false,
        },
        {
          icon: "CircleDot",
          heading: "RS Brands",
          subHeading: "",
          soon: false,
        },
      ],
      "By Species": [
        {
          icon: "Leaf",
          heading: "Blackbutt",
          subHeading: "Janka 9kN · BAL 29",
          soon: false,
        },
        {
          icon: "Leaf",
          heading: "Spotted Gum",
          subHeading: "Janka 11kN · dramatic grain",
          soon: false,
        },
        {
          icon: "Leaf",
          heading: "European Oak",
          subHeading: "20+ stain colours",
          soon: false,
        },
        {
          icon: "Leaf",
          heading: "Grey Ironbark",
          subHeading: "Janka 14kN · premium",
          soon: false,
        },
      ],
      "Need Help?": [
        {
          icon: "Sparkle",
          heading: "Floor Finder Quiz",
          subHeading: "5 Questions → Perfect Match",
          soon: false,
        },
        {
          icon: "Flower",
          heading: "Species Guide",
          subHeading: "Compare Hardness, Colour, Durability",
          soon: false,
        },
        {
          icon: "TriangleRight",
          heading: "How to Measure Up",
          subHeading: "Calculator + video guide",
          soon: false,
        },
        {
          icon: "BookOpen",
          heading: "Installation Guides",
          subHeading: "DIY step-by-step resources",
          soon: false,
        },
        {
          icon: "Sparkle",
          heading: "Care & Maintenance",
          subHeading: "",
          soon: false,
        },
        {
          icon: "MessageCircleQuestionMark",
          heading: "Ask a Specialist",
          subHeading: "",
          soon: false,
        },
      ],
      Decking: [
        {
          icon: "Trees",
          heading: "Hardwood Timber Decking",
          subHeading: "Blackbutt · Merbau · Class 1",
          soon: false,
        },
        {
          icon: "Sprout",
          heading: "Bamboo Decking",
          subHeading: "Eco-friendly · durable",
          soon: false,
        },
        {
          icon: "Recycle",
          heading: "",
          subHeading: "Composite Decking",
          soon: true,
        },
        {
          icon: "SquareDot",
          heading: "",
          subHeading: "Deck Tiles",
          soon: true,
        },
      ],
      "Cladding & Screening": [
        {
          icon: "BrickWallShield",
          heading: "Hardwood Timber Cladding",
          subHeading: "Blackbutt · exterior · BAL 29",
          soon: false,
        },
        {
          icon: "ChevronsLeftRightEllipsis",
          heading: "Bamboo Cladding",
          subHeading: "Interior & exterior panels",
          soon: false,
        },
        {
          icon: "SquareSquare",
          heading: "Interior Timber Lining",
          subHeading: "Feature walls · ceilings",
          soon: false,
        },
        {
          icon: "SquareSquare",
          heading: "Bamboo Screening",
          subHeading: "Privacy screens & panels",
          soon: false,
        },
        {
          icon: "BrickWall",
          heading: "",
          subHeading: "Composite Cladding",
          soon: true,
        },
      ],
      "Fencing & Benchtops": [
        {
          icon: "DoorOpen",
          heading: "Bamboo Fencing & Gates",
          subHeading: "Natural privacy solutions",
          soon: false,
        },
        {
          icon: "Fence",
          heading: "",
          subHeading: "Timber Fencing",
          soon: true,
        },
        {
          icon: "Weight",
          heading: "",
          subHeading: "Industrial Metal Fencing",
          soon: true,
        },
      ],
      "Outdoor Benchtops": [
        {
          icon: "Armchair",
          heading: "Bamboo Benchtops",
          subHeading: "Kitchen & outdoor · popular!",
          soon: false,
        },
        {
          icon: "Cuboid",
          heading: "",
          subHeading: "Stone & Porcelain",
          soon: true,
        },
      ],
      "Bamboo Products": [
        {
          icon: "SquaresUnite",
          heading: "Bamboo Flooring",
          subHeading: "Natural hardness · eco certified",
          soon: true,
        },
        {
          icon: "SquareArrowOutUpRight",
          heading: "Bamboo Decking",
          subHeading: "Outdoor · durable",
          soon: true,
        },
        {
          icon: "ChevronsLeftRightEllipsis",
          heading: "Bamboo Cladding",
          subHeading: "Interior & exterior",
          soon: true,
        },
        {
          icon: "Armchair",
          heading: "Bamboo Benchtops",
          subHeading: "Kitchen & outdoor · popular!",
          soon: true,
        },
        {
          icon: "DoorOpen",
          heading: "Bamboo Screening & Fencing",
          subHeading: "Privacy panels & gates",
          soon: true,
        },
      ],
      "Sustainable Timber": [
        {
          icon: "ShieldCheck",
          heading: "PEFC Certified Flooring",
          subHeading: "Hurford — sustainably sourced",
        },
        {
          icon: "Rows4",
          heading: "Solid Timber Flooring",
          subHeading: "Plantation & certified hardwoods",
        },
        {
          icon: "PencilRuler",
          heading: "Engineered Oak",
          subHeading: "Less timber · same beauty",
        },
        {
          icon: "Recycle",
          heading: "Recycled Timber",
          soon: true,
        },
        {
          icon: "Earth",
          heading: "Our Sustainability Story",
        },
        {
          icon: "Medal",
          heading: "PEFC Certification Guide",
        },
      ],
      "Eco Brands": [
        {
          icon: "Sparkle",
          heading: "Hurfords Wholesale",
          subHeading: "PEFC certified Australian hardwood",
        },
      ],
      Bathroom: [
        {
          icon: "SoapDispenserDroplet",
          heading: "Basins",
          subHeading: "Counter top, wall hung, under counter",
        },
        {
          icon: "MirrorRound",
          heading: "Vanities & Storage",
          subHeading: "Freestanding & wall mounted",
        },
        {
          icon: "Bath",
          heading: "Baths & Freestanding",
          subHeading: "Soaker, clawfoot & built-in",
        },
        {
          icon: "ShowerHead",
          heading: "Shower Screens",
          subHeading: "Frameless, semi, framed",
        },
        {
          icon: "Bubbles",
          heading: "Tapware",
          subHeading: "Mixers, shower sets, bath fillers",
        },
        {
          icon: "Toilet",
          heading: "Toilets & Suites",
        },
        {
          icon: "MirrorRectangular",
          heading: "Mirrors & Cabinets",
        },
        {
          icon: "TowelRack",
          heading: "Accessories",
        },
      ],
      Kitchen: [
        {
          icon: "Armchair",
          heading: "Bamboo Benchtops",
          subHeading: "Available now · popular!",
        },
        {
          icon: "Cuboid",
          heading: "Stone Benchtops",
          soon: true,
        },
        {
          icon: "Anvil",
          heading: "Kitchen Sinks",
          soon: true,
        },
        {
          icon: "Droplet",
          heading: "Kitchen Tapware",
          soon: true,
        },
        {
          icon: "ZodiacAquarius",
          heading: "Splashbacks",
          soon: true,
        },
        {
          icon: "Refrigerator",
          heading: "Appliances",
          soon: true,
        },
      ],
      Brands: [
        {
          icon: "Sparkle",
          heading: "Pfienza",
          subHeading: "Hybrid, engineered, laminate",
        },
        {
          icon: "Sparkle",
          heading: "AVIA Bathware",
          subHeading: "Hybrid, engineered, laminate",
        },
      ],
      Services: [
        {
          icon: "Wrench",
          heading: "Bathroom Renovation",
          subHeading: "Full supply + install packages",
        },
        {
          icon: "Toolbox",
          heading: "Free Measure & Quote",
        },
      ],
      "Indoor Tiles": [
        {
          icon: "Square",
          heading: "Floor Tiles",
          subHeading: "Porcelain, ceramic, stone look",
          soon: true,
        },
        {
          icon: "SquareSquare",
          heading: "Wall Tiles",
          subHeading: "Bathroom, kitchen, feature walls",
          soon: true,
        },
        {
          icon: "SquareStack",
          heading: "Feature Tiles",
          subHeading: "Encaustic, patterned, textured",
          soon: true,
        },
        {
          icon: "DotSquare",
          heading: "Mosaic Tiles",
          soon: true,
        },
      ],
      "Outdoor & Commercial": [
        {
          icon: "ExternalLink",
          heading: "Outdoor Tiles",
          soon: true,
        },
        {
          icon: "WavesLadder",
          heading: "Pool Tiles",
          soon: true,
        },
        {
          icon: "Grid",
          heading: "Commercial Tiles",
          soon: true,
        },
        {
          icon: "Table2",
          heading: "Porcelain Pavers",
          soon: true,
        },
      ],
      "DW Tiles": [
        {
          icon: "Grid2x2Check",
          heading: "DW Tiles",
          subHeading: "Flooring, rugs, feature walls",
        },
      ],
      Installation: [
        {
          icon: "Download",
          heading: "Flooring Installation",
          subHeading: "All floor types · licensed · Melbourne",
        },
        {
          icon: "Home",
          heading: "Cladding Installation",
          subHeading: "External & internal · supply + install",
        },
        {
          icon: "SquareMousePointer",
          heading: "Decking Installation",
          subHeading: "Timber & composite · measure & quote",
        },
        {
          icon: "Bath",
          heading: "Bathroom Renovation",
          subHeading: "Full project management",
        },
        {
          icon: "Soup",
          heading: "Kitchen Renovation",
          soon: true,
        },
      ],
      Consultation: [
        {
          icon: "MapPinCheck",
          heading: "Visit Display Centre",
          subHeading: "Laverton VIC · Mon–Sat 9am–5pm",
        },
        {
          icon: "MapPinHouse",
          heading: "In-Home Consultation",
          subHeading: "Free for Melbourne metro",
        },
        {
          icon: "BadgePercent",
          heading: "Free Measure & Quote",
          subHeading: "Obligation free · 48hr turnaround",
        },
        {
          icon: "Video",
          heading: "Video Consultation",
          subHeading: "Zoom call with our specialists",
        },
      ],
      "Current Offers": [
        {
          icon: "LayoutGrid",
          heading: "Flooring Sale",
          subHeading: "Up to 20% off selected hybrid & timber",
        },
        {
          icon: "BadgeDollarSign",
          heading: "Outdoor Clearance",
          subHeading: "Decking & cladding end-of-line",
        },
        {
          icon: "SoapDispenserDroplet",
          heading: "Bathware Specials",
          subHeading: "Selected Pfienza & AVIA",
        },
        {
          icon: "SwatchBook",
          heading: "Free Sample Packs",
          subHeading: "Timber samples delivered free",
        },
      ],
      "Trade & Volume": [
        {
          icon: "ChartCandlestick",
          heading: "100m²+ Trade Pricing",
          subHeading: "Call us — we beat any written quote",
        },
        {
          icon: "Building2",
          heading: "Builder & Trade Account",
          subHeading: "Apply for ongoing trade rates",
        },
        {
          icon: "Palette",
          heading: "Designer Program",
          subHeading: "Interior designers — contact us",
        },
      ],
    }