import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { navData } from "../../../data/data";
import {
  BrickWall,
  GalleryHorizontalEnd,
  Hammer,
  SquareArrowOutUpRight,
  Armchair,
  Bath,
  BadgePercent,
  BadgeQuestionMark,
} from "lucide-react";
import * as Icons from "lucide-react";

const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

export default function MainNav({ activeNav, setActiveNav }) {
  const popular = [
    {
      icon: BrickWall,
      text: "Hybrid Flooring",
    },
    {
      icon: GalleryHorizontalEnd,
      text: "Blackbutt",
    },
    {
      icon: Hammer,
      text: "Engineered Oak",
    },
    {
      icon: SquareArrowOutUpRight,
      text: "Decking",
    },
    {
      icon: Armchair,
      text: "Bamboo Benchtops",
    },
    {
      icon: Bath,
      text: "Bathroom Packages",
    },
  ];
  return (
    <div className="relative">
      {activeNav !== null && (
        <div
          className="absolute top-full hidden lg:block border-t border-[#D6CEC6]/30 bg-[#f5efed]/30 w-full bg-white shadow-[0_12px_40px_rgba(138,106,90,0.2)] 
         nav-scroll scroll-smooth"
        >
          <div className="bg-[#D7CEC5] w-full py-2">
            <div className="w-10/12 mx-auto flex flex-wrap justify-center 2xl:gap-10 lg:gap-1.5 items-center">
              <p className="text-[16px] text-[#666E7C]">Popular: </p>
              {popular.map((item, index) => {
                const Icons = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-[#AFA79C] bg-[#F5F0ED] text-sm py-1.5 px-3 gap-2 cursor-pointer"
                  >
                    <Icons size={18} color="#8A6A5B" />
                    <p className="text-sm text-[#666E7C] text-nowrap">
                      {item.text}
                    </p>
                  </div>
                );
              })}
              <div className="h-[35px] w-[1px] bg-[#AFA79C]"></div>
              <div className="flex justify-center items-center 2x:gap-10 lg:gap-1.5">
                {[
                  {
                    icon: BadgePercent,
                    text: "Sale",
                  },
                  {
                    icon: BadgeQuestionMark,
                    text: "Floor Finder Quiz",
                  },
                ].map((item, index) => {
                  const Icons = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between border ${index == 0 ? "border-[#4C6647] bg-[#E3E4DD]" : "border-[#B2873C] bg-[#EFE8DA]"}
                       text-sm py-1.5 px-3 gap-2 cursor-pointer`}
                    >
                      <Icons
                        size={18}
                        color={index == 0 ? "#4C6647" : "#B2873C"}
                      />
                      <p
                        className={`text-sm ${index == 0 ? "text-[#4C6647]" : "text-[#B2873C]"} text-nowrap`}
                      >
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <nav className="w-10/12 transition-all mx-auto max-h-[70vh] overflow-y-auto pb-20 py-8 xl:py-16">
            <div className="flex items-start justify-between gap-1 xl:gap-10 w-full">
              <NavbarLeftSection activeNav={activeNav} />
              <NavbarRightSection activeNav={activeNav} />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

// ── Reusable Nav Link Item ──────────────────────────────────────────────────
function NavItem({ item }) {
  const Icon = Icons[item.icon];
  return (
    <Link
      to={`/${slugify(item.heading)}`}
      className="flex hover:bg-[#f5efed] py-2 px-2 w-full"
      onClick={()=> setActiveNav(null)}
    >
      <motion.div
        transition={{ duration: 0.25 }}
        className="flex items-start gap-2 w-full"
      >
        {Icon && <Icon size={19} className="text-[#B2873C] shrink-0 mt-0.5" />}
        <div className="flex items-start gap-3 flex-wrap min-w-0">
          <div className="space-y-2 min-w-0">
            <p className="text-md lg:text-sm 2xl:text-lg text-[#666E7C] m-0 leading-tight">
              {item.heading}
            </p>
            {item.subHeading && (
              <p className="text-sm lg:text-xs 2xl:text-md text-[#666E7C] leading-tight">
                {item.subHeading}
              </p>
            )}
          </div>
          {item.soon && (
            <button className="bg-[#EFE8DA] text-xs text-[#B2873C] px-2 py-0.5 h-fit shrink-0">
              Soon
            </button>
          )}
        </div>
      </motion.div>
    </Link>
  );
}

// ── Reusable Section Block ──────────────────────────────────────────────────
function NavSection({ title, items, borderBottom, borderTop }) {
  return (
    <div
      className={`h-fit ${borderBottom ? "pb-4 border-b border-[#E7E9EB]" : ""} ${borderTop ? "pt-4" : ""}`}
    >
      <p className="text-base xl:text-lg text-black font-medium">{title}</p>
      <div className="mt-3 flex flex-col gap-1">
        {items?.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

// ── Left Section ───────────────────────────────────────────────────────────
function NavbarLeftSection({ activeNav }) {
  switch (activeNav) {
    case 0:
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-9/12">
          <NavSection title="By Room" items={navData["By Room"]} />
          <NavSection title="By Category" items={navData["By Category"]} />
          <div className="col-span-2 lg:col-span-1">
            <NavSection
              title="Shop By Brands"
              items={navData["Shop By Brands"]}
            />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-9/12">
          <div className="space-y-4">
            <NavSection
              title="Resilient & Modern"
              items={navData["Resilient & Modern"]}
              borderBottom
            />
            <NavSection
              title="Accessories"
              items={navData["Accessories"]}
              borderBottom
              borderTop
            />
            <NavSection title="Brands" items={navData["Brands"]} borderTop />
          </div>
          <div className="space-y-4">
            <NavSection
              title="Natural Timber"
              items={navData["Natural Timber"]}
              borderBottom
            />
            <NavSection
              title="By Species"
              items={navData["By Species"]}
              borderTop
            />
          </div>
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <NavSection
              title="Eco - Friendly"
              items={navData["Eco - Friendly"]}
              borderBottom
            />
            <NavSection
              title="Need Help?"
              items={navData["Need Help?"]}
              borderTop
            />
          </div>
        </div>
      );

    case 2:
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-9/12">
          <div className="space-y-4">
            <NavSection title="Decking" items={navData["Decking"]} />
            <div className="bg-[#F5F0ED] p-4 border-l border-[#8A6A5B] space-y-1">
              <p className="text-sm font-semibold text-black">
                🔥 BAL 29 Rated Decking
              </p>
              <p className="text-sm text-[#666E7C]">
                Blackbutt approved for bushfire zones
              </p>
            </div>
          </div>
          <NavSection
            title="Cladding & Screening"
            items={navData["Cladding & Screening"]}
          />
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <NavSection
              title="Fencing & Benchtops"
              items={navData["Fencing & Benchtops"]}
              borderBottom
            />
            <NavSection
              title="Outdoor Benchtops"
              items={navData["Outdoor Benchtops"]}
              borderTop
            />
          </div>
        </div>
      );

    case 3:
      return (
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-9/12">
          <NavSection
            title="Bamboo Products"
            items={navData["Bamboo Products"]}
          />
          <NavSection
            title="Sustainable Timber"
            items={navData["Sustainable Timber"]}
          />
          <div className="col-span-2 lg:col-span-1">
            <NavSection title="Eco Brands" items={navData["Eco Brands"]} />
          </div>
        </div>
      );

    case 4:
      return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-9/12">
          <NavSection title="Bathroom" items={navData["Bathroom"]} />
          <NavSection title="Kitchen" items={navData["Kitchen"]} />
          <div className="space-y-4 col-span-2 lg:col-span-1">
            <NavSection title="Brands" items={navData["Brands"]} borderBottom />
            <NavSection
              title="Services"
              items={navData["Services"]}
              borderTop
            />
          </div>
        </div>
      );

    case 5:
      return (
        <div className="grid grid-cols-2 gap-6 w-full xl:w-6/12">
          <NavSection title="Indoor Tiles" items={navData["Indoor Tiles"]} />
          <div className="space-y-4">
            <NavSection
              title="Outdoor & Commercial"
              items={navData["Outdoor & Commercial"]}
            />
            <NavSection
              title="DW Tiles"
              items={navData["DW Tiles"]}
              borderBottom
            />
          </div>
        </div>
      );

    case 6:
      return (
        <div className="grid grid-cols-2 gap-6 w-full lg:w-6/12">
          <NavSection title="Installation" items={navData["Installation"]} />
          <NavSection title="Consultation" items={navData["Consultation"]} />
        </div>
      );

    case 7:
      return (
        <div className="grid grid-cols-2 gap-6 w-full lg:w-6/12">
          <NavSection
            title="Current Offers"
            items={navData["Current Offers"]}
          />
          <NavSection
            title="Trade & Volume"
            items={navData["Trade & Volume"]}
          />
        </div>
      );
  }
}

// ── Right Section ──────────────────────────────────────────────────────────
function NavbarRightSection({ activeNav }) {
  const narrowCard =
    "bg-[#8A6A5B] p-4 xl:p-5 space-y-3 w-full lg:w-3/12 shrink-0";
  const wideCard = "w-full lg:w-5/12 xl:w-6/12 shrink-0";

  switch (activeNav) {
    case 0:
      return (
        <div className={narrowCard}>
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full object-cover"
          />
          <p className="text-white text-base xl:text-lg font-semibold">
            Laverton Display Centre
          </p>
          <p className="text-white text-sm">See Products in person</p>
          <button className="bg-white text-[#998E8A] text-sm xl:text-md font-medium px-6 xl:px-8 py-3 xl:py-4 w-full sm:w-auto">
            Book a time
          </button>
        </div>
      );

    case 1:
      return (
        <div className={narrowCard}>
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full object-cover"
          />
          <p className="text-white text-base xl:text-lg font-semibold">
            Blackbutt 130×14mm Select Flooring
          </p>
          <p className="text-white text-sm">
            Australia's most popular hardwood. Janka 9kN, BAL 29, PEFC
            certified.
          </p>
          <button className="bg-white text-[#998E8A] text-sm font-medium px-6 xl:px-8 py-3 xl:py-4 w-full sm:w-auto">
            Shop Now
          </button>
          <div className="bg-white p-4 space-y-2">
            <p className="text-sm font-semibold">
              🎯 Not sure what floor suits you?
            </p>
            <p className="text-sm">
              5 quick questions → matched to the right floor for your home and
              subfloor.
            </p>
            <p className="text-[#998E8A] text-sm font-semibold">
              Take the Floor Finder Quiz →
            </p>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={narrowCard}>
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full object-cover"
          />
          <p className="text-white text-base xl:text-lg font-semibold">
            Blackbutt Cladding & Decking
          </p>
          <p className="text-white text-sm">
            BAL 29 rated. Class 1 durability. The premium Australian hardwood
            for outdoor use.
          </p>
          <button className="bg-white text-[#998E8A] text-sm font-medium px-6 xl:px-8 py-3 xl:py-4 w-full sm:w-auto">
            Explore Outdoor
          </button>
          <div className="bg-white p-4 space-y-2">
            <p className="text-sm font-semibold">📐 Free Measure & Quote</p>
            <p className="text-sm">
              Supply + install for decking & cladding in Melbourne. Quote within
              48hrs.
            </p>
            <p className="text-[#998E8A] text-sm font-semibold">
              Book a free quote →
            </p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={narrowCard}>
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full object-cover"
          />
          <p className="text-white text-base xl:text-lg font-semibold">
            Bamboo — Nature's Hardest Grass
          </p>
          <p className="text-white text-sm">
            Harder than most hardwoods, grows back in 5 years. FSC certified and
            independently tested.
          </p>
          <button className="bg-white text-[#998E8A] text-sm font-medium px-6 xl:px-8 py-3 xl:py-4 w-full sm:w-auto font-semibold">
            Shop Bamboo →
          </button>
        </div>
      );

    case 4:
      return (
        <div className={narrowCard}>
          <img
            src="./images/bathroom.webp"
            alt=""
            className="w-full object-cover"
          />
          <p className="text-white text-base xl:text-lg font-semibold">
            Complete Bathroom Packages
          </p>
          <p className="text-white text-sm">
            Vanity + basin + tapware + mirror. Curated from Pfienza and AVIA.
          </p>
          <button className="bg-white text-[#998E8A] text-sm font-medium px-6 xl:px-8 py-3 xl:py-4 w-full sm:w-auto">
            Shop Packages
          </button>
          <div className="bg-white p-4 space-y-2">
            <p className="text-sm font-semibold">
              🛁 Renovating your bathroom?
            </p>
            <p className="text-sm">
              Visit our Laverton display centre — see Pfienza and AVIA in
              person.
            </p>
            <p className="text-[#998E8A] text-sm font-semibold">
              Book a visit →
            </p>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={`space-y-6 ${wideCard}`}>
          <div className="bg-[#8A6A5B] p-4 xl:p-5 w-full space-y-3">
            <p className="text-base xl:text-lg text-white font-semibold">
              Tiles
            </p>
            <p className="text-base xl:text-lg text-white font-semibold">
              Coming Soon
            </p>
            <p className="text-white text-sm">
              Our full DW Tiles range is launching soon. Be the first to know.
            </p>
            <button className="text-[#998E8A] text-sm px-6 xl:px-8 py-3 xl:py-4 bg-white font-semibold w-full sm:w-auto">
              Notify Me
            </button>
          </div>
          <div className="bg-[#F5F0ED] border-l border-[#8A6A5B] p-4 space-y-2">
            <p className="text-sm text-black font-semibold">Need tiles now?</p>
            <p className="text-sm text-[#666E7C] font-semibold">
              Call us — we source from DW Tiles and organise supply + install in
              Melbourne.
            </p>
            <p>📞 1300 000 000</p>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={`bg-[#8A6A5B] p-4 xl:p-5 space-y-6 ${wideCard}`}>
          <div className="w-full space-y-3">
            <p className="text-base xl:text-lg text-white font-semibold">
              One call.
            </p>
            <p className="text-base xl:text-lg text-white font-semibold">
              Complete renovation.
            </p>
            <p className="text-white text-sm">
              Floor selection to final install — our team handles everything.
            </p>
            <button className="text-[#998E8A] text-sm px-6 xl:px-8 py-3 xl:py-4 bg-white font-semibold w-full sm:w-auto">
              Book a consult
            </button>
          </div>
          <div className="bg-[#F5F0ED] p-4 space-y-2">
            <p className="text-sm text-black font-semibold">Display Center</p>
            <p className="text-sm text-[#666E7C] font-semibold">
              📍 Laverton, Melbourne VIC
            </p>
            <p>Mon–Sat 9am–5pm · Sun by appt</p>
          </div>
        </div>
      );

    case 7:
      return (
        <div className={`bg-[#8A6A5B] p-4 xl:p-5 ${wideCard} space-y-2`}>
          <p className="text-base xl:text-lg text-white font-semibold">Up to</p>
          <p className="text-base xl:text-lg text-white font-semibold">
            20% Off
          </p>
          <p className="text-white text-sm">
            Selected flooring, outdoor products & bathware. Limited stock.
          </p>
          <button className="text-[#998E8A] text-sm px-6 xl:px-8 py-3 xl:py-4 bg-white font-semibold w-full sm:w-auto">
            Shop Sale
          </button>
        </div>
      );
  }
}
