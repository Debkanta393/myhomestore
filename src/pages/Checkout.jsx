import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Box, CreditCard, Landmark } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount, selectTotalPrice } from "../features/cart/cart";
import CheckoutPageSkeleton from "../components/skeleton/CheckoutSkeleton";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

// ─── Product Data ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: "Engineered Oak",
    sku: "SKU: AW22 Grade · 14mm · Select Grade",
    tag: "Supply + Install",
    price: 2136.0,
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=120&q=80",
  },
  {
    id: 2,
    name: "Blackbutt Solid Timber Natural",
    sku: "8m² · Select Grade · 85mm · 19mm · Matt Finish",
    tag: "Supply Only",
    price: 2136.0,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80",
  },
];

// ─── Reusable Input ───────────────────────────────────────────────────────────
function Input({ label, placeholder, type = "text", className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-xs font-medium text-stone-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className="border border-stone-200 rounded px-3 py-3 text-sm text-stone-700 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors bg-white"
      />
    </div>
  );
}

// ─── Select ───────────────────────────────────────────────────────────────────
function Select({ label, options = [], className = "" }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-xs font-medium text-stone-500 uppercase tracking-wide">
          {label}
        </label>
      )}
      <select className="border border-stone-200 rounded px-3 py-2.5 text-sm text-stone-500 focus:outline-none focus:border-stone-400 transition-colors bg-white appearance-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

// ─── Radio Card ───────────────────────────────────────────────────────────────
function RadioCard({ selected, onClick, children, className = "" }) {
  return (
    <motion.div
      whileTap={{ scale: 0.985 }}
      onClick={onClick}
      className={`cursor-pointer border px-3 sm:px-4 py-4 sm:py-8 flex items-center gap-3 transition-colors ${
        selected
          ? "border-[#998E8A] bg-stone-50"
          : "border-[#E7E9EB] bg-white hover:border-stone-300"
      } ${className}`}
    >
      <div
        className={`mt-0.5 w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors ${
          selected ? "border-[#8A6A5B]" : "border-stone-300"
        }`}
      >
        {selected && (
          <motion.div
            layoutId="radio-dot"
            className="w-2 h-2 rounded-full bg-[#8A6A5B]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </div>
      {children}
    </motion.div>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function Section({ title, children, custom }) {
  return (
    <motion.div
      custom={custom}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="mb-7"
    >
      {title && (
        <h2 className="text-lg font-semibold text-stone-700 mb-3 uppercase border-b border-[#E7E9EB] pb-3">
          {title}
        </h2>
      )}
      {children}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CheckoutPage() {
  const [delivery, setDelivery] = useState("ship");
  const [payment, setPayment] = useState("card");
  const [agreed, setAgreed] = useState(false);
  const [coupon, setCoupon] = useState("");
  const cartItems = useSelector((state) => state.cart?.items ?? []);
  const totalPrice = useSelector(selectTotalPrice);
  const totalCart = useSelector(selectCartCount);
   const cartLoading = useSelector((state) => state.cart.loading);

  const shippingOptions = [
    {
      id: "standard",
      label: "Standard Delivery",
      sub: "Within 5-7 business days",
      price: "Free",
    },
    {
      id: "express",
      label: "Express Delivery",
      sub: "Within 1-2 business days",
      price: "$48.00",
    },
    {
      id: "regional",
      label: "Regional/Interstate Delivery",
      sub: "Estimated delivery 7-10 business days",
      price: "Calculated",
    },
  ];

  const [shipping, setShipping] = useState(() => shippingOptions[0].id);

  const subtotal = products.reduce((s, p) => s + p.price, 0);
  const shippingCost = shipping === "express" ? 48.0 : 0;
  const gst = (subtotal * 0.1).toFixed(2);
  const total = (subtotal + shippingCost).toFixed(2);

  if (cartLoading) return <CheckoutPageSkeleton />;
  return (
    <div className="min-h-screen bg-stone-50 font-sans mb-20">
      {/* ── Breadcrumb ── */}
      <motion.header
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-white border-b border-stone-100 px-4 sm:px-6 py-4"
      >
        <div className="2xl:w-8/12 lg:w-10/12 w-11/12 mx-auto flex items-center gap-2 text-md text-stone-400">
          <span className="text-stone-500 font-medium">Address</span>
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-stone-800 font-semibold">Payment</span>
        </div>
      </motion.header>

      <div className="2xl:w-8/12 lg:w-10/12 w-11/12 mx-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_500px] gap-6 lg:gap-8 gap-y-20">
        {/* ════════════════════ LEFT COLUMN ════════════════════ */}
        <div className="min-w-0">
          {/* Express Checkout */}
          <Section custom={0}>
            <p className="text-xl text-center mb-3 relative">
              Express Checkout
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6 sm:mt-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="border border-[#998E8A] py-3 flex items-center justify-center bg-white hover:bg-stone-50 transition-colors"
              >
                <span className="text-sm font-bold text-[#998E8A] tracking-tight">
                  Afterpay
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="py-3 flex items-center justify-center bg-[#998E8A] text-white transition-colors"
              >
                <span className="text-sm font-bold tracking-wide">Zip Pay</span>
              </motion.button>
            </div>
          </Section>

          {/* Contact */}
          <Section title="Contact" custom={1}>
            <Input placeholder="jenny@example.com" type="email" />
            <p className="text-lg text-stone-400 mt-3">
              Order confirmation and tracking will be sent here
            </p>
            <label className="flex items-start sm:items-center gap-2 mt-2 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 sm:mt-0 rounded border-stone-300 text-stone-700 focus:ring-stone-500 flex-shrink-0"
              />
              <span className="text-lg text-stone-500">
                Sign me up for new arrivals, promotions &amp; inspirations from
                Alphawood&amp;Sons
              </span>
            </label>
          </Section>

          {/* Delivery Method */}
          <Section title="Delivery Method" custom={2}>
            {/* 
              Mobile: stack cards vertically
              sm+: side by side 
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <RadioCard
                selected={delivery === "ship"}
                onClick={() => setDelivery("ship")}
              >
                <div>
                  <p className="text-base sm:text-xl font-medium text-stone-700 flex items-center gap-2 sm:gap-3">
                    <Truck size={20} /> Ship to me
                  </p>
                  <p className="text-sm sm:text-md text-stone-400 mt-0.5">
                    Delivered to your door. Melbourne metro only.
                  </p>
                </div>
              </RadioCard>
              <RadioCard
                selected={delivery === "collect"}
                onClick={() => setDelivery("collect")}
              >
                <div>
                  <p className="text-base sm:text-xl font-medium text-stone-700 flex items-center gap-2 sm:gap-3">
                    <Box size={20} /> Click &amp; Collect
                  </p>
                  <p className="text-sm sm:text-md text-stone-400 mt-0.5">
                    Pick up from our Essendon Melbourne store.
                  </p>
                </div>
              </RadioCard>
            </div>
          </Section>

          {/* Ship To */}
          <AnimatePresence>
            {delivery === "ship" && (
              <motion.div
                key="ship-form"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <Section title="Ship To" custom={3}>
                  {/* Name row: stacks on mobile, side-by-side on sm+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <Input label="First Name" placeholder="James" />
                    <Input label="Last Name" placeholder="Wilson" />
                  </div>
                  <Input
                    label="Address"
                    placeholder="123 Example Street"
                    className="mb-3"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <Select
                      label="Suburb"
                      options={[
                        "Select suburb",
                        "Carlton",
                        "Fitzroy",
                        "Collingwood",
                      ]}
                    />
                    <Select
                      label="State"
                      options={["VIC", "NSW", "QLD", "SA", "WA"]}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input label="Postcode" placeholder="3000" />
                    <Select
                      label="Country"
                      options={["Australia", "New Zealand"]}
                    />
                  </div>
                  <Input
                    label="Phone Number"
                    placeholder="+61 400 000 000"
                    type="tel"
                    className="mt-3"
                  />
                </Section>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Shipping Method */}
          <Section title="Shipping Method" custom={4}>
            <div className="flex flex-col gap-2">
              {shippingOptions.map((opt) => (
                <RadioCard
                  key={opt.id}
                  selected={shipping == opt.id}
                  onClick={() => setShipping(opt.id)}
                >
                  <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
                    <div className="min-w-0">
                      <p className="text-base sm:text-xl font-medium text-stone-700 leading-snug">
                        {opt.label}
                      </p>
                      <p className="text-sm sm:text-md text-stone-400">
                        {opt.sub}
                      </p>
                    </div>
                    <span className="text-base sm:text-xl font-medium text-stone-700 ml-2 sm:ml-4 whitespace-nowrap flex-shrink-0">
                      {opt.price}
                    </span>
                  </div>
                </RadioCard>
              ))}
            </div>
          </Section>

          {/* Supply + Install Notice */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-[#D7CEC5] border border-stone-200 rounded-md px-4 py-3 mb-7 flex gap-3 items-start"
          >
            <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
              <strong className="text-stone-700">
                ⚒️ Supply + Install item in your order.
              </strong>{" "}
              <br />
              Your order includes a Supply + Install item. Our team will contact
              you within 1 business day after your order is placed to arrange
              the measure &amp; confirm your installation date and find out if
              installation is available across Melbourne metro.
            </p>
          </motion.div>

          {/* Payment */}
          <Section title="Payment" custom={6}>
            <div className="flex flex-col gap-2 mb-4">
              {[
                {
                  id: "card",
                  label: "Credit/Debit Card",
                  icon: CreditCard,
                  type: "component",
                },
                {
                  id: "afterpay",
                  label: "Afterpay – 4 interest free payments",
                  icon: "/payment/afterpay.webp",
                  type: "image",
                },
                {
                  id: "zip",
                  label: "Zip Pay – Buy now, pay later",
                  icon: "/payment/zip.png",
                  type: "image",
                },
                {
                  id: "bank",
                  label: "Bank Transfer (EFT)",
                  icon: Landmark,
                  type: "component",
                },
              ].map(({ id, label, icon: Icon, type }) => (
                <div key={id} className="flex flex-col">
                  <RadioCard
                    key={id}
                    selected={payment === id}
                    onClick={() => setPayment(id)}
                  >
                    <div
                      className={`flex ${
                        id !== "card" && "flex-row-reverse justify-between"
                      } items-center gap-2 sm:gap-3 w-full`}
                    >
                      <span className="ml-1 sm:ml-3 flex-shrink-0">
                        {type === "component" ? (
                          <Icon size={22} />
                        ) : (
                          <img
                            src={Icon}
                            alt={label}
                            className="h-7 sm:h-9 object-contain rounded-full"
                          />
                        )}
                      </span>
                      <span className="text-base sm:text-xl text-stone-700 font-medium leading-snug">
                        {label}
                      </span>
                    </div>
                  </RadioCard>
                  <AnimatePresence>
                    {payment === "card" && id === "card" && (
                      <motion.div
                        key="card-form"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="border border-stone-200 p-4 bg-white mb-4 grid grid-cols-3 justify-between gap-5 items-center"
                      >
                        <Input
                          label="Card Number"
                          placeholder="1234 5678 1234 5678"
                          className="mb-3"
                        />
                        <Input label="Expiration Date" placeholder="MM / YY" />
                        <Input label="CVV Code" placeholder="•••" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Section>

          {/* Terms + Place Order */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <label className="flex items-start gap-2 cursor-pointer mb-5">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 rounded border-stone-300 text-stone-700 focus:ring-stone-500 flex-shrink-0"
              />
              <span className="text-lg text-stone-500 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="underline text-[#998E8A]">
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline text-[#998E8A]">
                  Privacy Policy
                </a>
                . I understand that Supply + Install pricing will be confirmed
                after a site measure.
              </span>
            </label>

            <motion.button
              whileHover={{ scale: agreed ? 1.015 : 1 }}
              whileTap={{ scale: agreed ? 0.97 : 1 }}
              disabled={!agreed}
              className={`w-full py-4 text-sm font-semibold tracking-wide transition-colors ${
                agreed
                  ? "bg-stone-800 text-white hover:bg-stone-900"
                  : "bg-stone-200 text-stone-400 cursor-not-allowed"
              }`}
            >
              Place Order
            </motion.button>

            <p className="text-center text-lg underline mt-3">
              Continue as guest — no account needed
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm sm:text-lg text-center px-2">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11v2h12v-2c0-1.657-1.343-3-3-3s-3 1.343-3 3z"
                />
                <rect
                  x="4"
                  y="13"
                  width="16"
                  height="8"
                  rx="2"
                  strokeWidth={2}
                />
              </svg>
              Your payment details are encrypted and never stored on our
              servers.
            </div>
          </motion.div>
        </div>

        {/* ════════════════════ RIGHT COLUMN ════════════════════ */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="lg:sticky lg:top-52 self-start w-full"
        >
          {/* Products */}
          <div className="bg-white mb-4">
            <h3 className="text-2xl font-semibold tracking-wider mb-4">
              Products
            </h3>
            <div className="flex flex-col divide-y divide-[#E7E9EB]">
              {cartItems?.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex gap-3 py-2"
                >
                  <div className="w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0 bg-stone-100">
                    <img
                      src={item.product&& item.product?.productImage[0].url}
                      alt="product image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base sm:text-xl font-medium text-stone-800 leading-tight">
                      {item.product&& item.product?.productName}
                    </p>
                    <p className="text-sm sm:text-lg text-[#666E7C] mt-0.5 leading-relaxed flex items-center">
                      {item.areaSupplied} m<sup>2</sup> .{" "}
                      {item.product&& item.product?.thickness}
                    </p>
                    <span className="inline-block mt-1 text-sm sm:text-lg text-[#666E7C] text-nowrap">
                      ⚒️ {item.service}
                    </span>
                  </div>
                  <p className="text-base sm:text-xl font-semibold text-stone-800 whitespace-nowrap flex-shrink-0">
                    ${item.totalPrice}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#E7E9EB]" />

          {/* Coupon */}
          <div className="flex gap-2 mt-5 px-0">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Apply Discount/Promo Code"
              className="flex-1 min-w-0 border border-stone-200 rounded px-3 py-3 text-sm text-stone-600 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 bg-[#998E8A] text-white text-sm hover:bg-stone-900 transition-colors flex-shrink-0"
            >
              Apply
            </motion.button>
          </div>

          {/* Payment Summary */}
          <div className="p-4 sm:p-5">
            <h3 className="text-xl font-semibold text-stone-500 mb-4">
              Payment Summary
            </h3>
            <div className="flex flex-col gap-2 text-lg">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal · {totalCart} items</span>
                <span className="font-medium">${totalPrice}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Shipping</span>
                <span className="font-medium">
                  {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                </span>
              </div>
              <span className="text-lg text-end text-[#666E7C]">
                Standard Delivery · Melbourne metro
              </span>
              <div className="flex justify-between text-lg mb-3">
                <span>GST Included</span>
                <span>${gst}</span>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#E7E9EB]" />

            <div className="border-t border-stone-100 mt-4 pt-4">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-xl font-bold text-stone-800">Total</span>
                <div className="text-right">
                  <p className="text-md text-stone-800">
                    AUD
                    <span className="font-bold text-xl ml-3">${total}</span>
                  </p>
                  <p className="text-lg text-[#666E7C]">Including ${gst} GST</p>
                </div>
              </div>
            </div>

            {/* Help */}
            <div className="mt-10 p-3 text-lg text-[#666E7C] text-center">
              <p className="font-semibold text-stone-700 mb-1">
                Need help with your order?
              </p>
              <p className="font-medium text-[#998E8A] text-xl underline">
                03 9000 0000
              </p>
              <p className="text-stone-400">Mon–Fri 9am–5pm · Sat 10am–4pm</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
