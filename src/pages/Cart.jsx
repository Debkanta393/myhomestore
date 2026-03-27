// CartPage.jsx
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Package, CircleDollarSign, House } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItems, fetchCartItems } from "../features/cart/cart"; // ✅ FIX 1: single import (was duplicated across two lines)
import { useNavigate } from "react-router-dom";
import CartPageSkeleton from "../components/skeleton/CartSkeleton";

// ##################### Price formula ##################### //
function calcItemPrice(quantity, wastage, service, product) {
  if (!product) return 0;

  const qty = Number(quantity) || 0;
  const wst = Number(wastage) || 0;

  // ✅ FIX 2: wastage should always be applied as an ADDITIVE multiplier.
  // Old logic: wst !== 0 ? qty * (wst / 100) : qty
  //   → when wastage = 10, result = qty * 0.10 (only 10% of area — wrong!)
  //   → should mean qty PLUS 10% extra = qty * 1.10
  const result = qty * (1 + wst / 100);

  const supplyInstallPrice = parseInt(product.supplyInstallPrice || 0);
  const supplyPrice = parseInt(product.supplyPrice || 0);

  const subtotal =
    service === "Supply + Install"
      ? result * supplyInstallPrice
      : result * supplyPrice;

  const totalGst = subtotal * (10 / 100);
  return Math.round(subtotal + totalGst);
}

// ##################### Animation variants ##################### //
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.13,
      duration: 0.48,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
  exit: {
    opacity: 0,
    x: -60,
    scale: 0.96,
    transition: { duration: 0.32, ease: "easeIn" },
  },
};

const summaryVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.15 },
  },
};

// ##################### QtyStepper ##################### //
function QtyStepper({ value, onDecrement, onIncrement }) {
  return (
    <div className="flex items-center justify-between gap-2 border border-[#c8c2ba] w-full mx-auto">
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={onDecrement}
        className="w-10 h-10 text-[#7a7367] hover:border-[#6b6055] hover:text-[#6b6055] flex items-center justify-center text-lg leading-none transition-colors select-none"
      >
        −
      </motion.button>
      <motion.span
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-5 text-center text-lg font-semibold text-[#2d2926]"
      >
        {value}
      </motion.span>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={onIncrement}
        className="w-10 h-10 text-[#7a7367] hover:border-[#6b6055] hover:text-[#6b6055] flex items-center justify-center text-lg leading-none transition-colors select-none"
      >
        +
      </motion.button>
    </div>
  );
}

// ##################### CartItem ##################### //
function CartItem({ item, index, onRemove, onChangeQty }) {
  const livePrice = calcItemPrice(
    item.quantity,
    item.wastage,
    item.service,
    item.product,
  );

  return (
    <motion.div
      layout
      custom={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-3 sm:p-4 divide-y divide-[#E7E9EB]"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">
        {/* ── Image + Stepper ── */}
        <div className="flex sm:flex-col gap-3 sm:gap-3 sm:w-36 lg:w-48">
          <img
            src={item?.product?.productImage?.[0]?.url}
            alt={item?.product?.productName}
            className="w-24 h-24 sm:w-full sm:h-[130px] lg:h-[150px] object-cover flex-shrink-0"
          />

          <div className="flex-1 sm:flex-none flex items-center sm:block">
            <QtyStepper
              value={item.quantity}
              // ✅ FIX 3: use item._id ?? item.id consistently (was only item.id here,
              //    but onRemove used item._id || item.id — MongoDB uses _id)
              onDecrement={() => onChangeQty(item._id ?? item.id, -1)}
              onIncrement={() => onChangeQty(item._id ?? item.id, +1)}
            />
          </div>
        </div>

        {/* ── Details ── */}
        <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#2d2926] leading-snug">
                {item.product?.productName}
              </h3>
              <p className="text-sm sm:text-[16px] text-[#998E8A] font-semibold uppercase my-[3px]">
                {item.product?.brand} . {item.product?.category}
              </p>
              <p className="text-sm sm:text-[16px] text-[#666E7C] mt-[1px]">
                <span className="font-semibold">Unit Price –</span> $
                {item.service === "Supply + Install"
                  ? item.product?.supplyInstallPrice
                  : item.product?.supplyPrice}
                /m² inc. GST
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-5 flex-shrink-0">
              <motion.span
                key={livePrice}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-base sm:text-[20px] font-semibold text-[#2d2926] whitespace-nowrap"
              >
                ${livePrice.toLocaleString("en-AU")}
              </motion.span>
              <motion.button
                whileHover={{ scale: 1.2, color: "#ef4444" }}
                whileTap={{ scale: 0.85 }}
                onClick={() => onRemove(item._id ?? item.id)} // ✅ FIX 3 (same as above)
                className="text-black mt-[1px] transition-colors text-xl font-medium"
              >
                ✕
              </motion.button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-2">
            {[
              item.product?.specifications?.["Board Size (W x L x H)"],
              item.product?.specifications?.["Texture"],
              item.product?.specifications?.["Finish Around Walls"],
            ]
              .filter(Boolean)
              .map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center text-xs sm:text-sm border border-[#d6d0c8] text-[#7a7367] px-2.5 py-[3px] bg-[#f5f2ee]"
                >
                  {t}
                </span>
              ))}
            <span className="text-xs sm:text-sm px-2.5 py-[3px] font-medium bg-[#4C6647] text-white">
              {item.service}
            </span>
          </div>

          {/* Area / packs / wastage */}
          <p className="text-sm sm:text-[16px] text-[#666E7C]">
            <span className="font-semibold">{item.areaSupplied} m²</span> ·{" "}
            {item.cartons} packs required · + {item.wastage} % wastage included
          </p>

          {/* Supply + Install note */}
          <AnimatePresence>
            {item.service === "Supply + Install" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-[#FCF8F5] border-l-3 border-[#8A6A5B] px-3 py-2.5">
                  <p className="text-sm sm:text-[16px] font-semibold text-[#4a4440] mb-0.5">
                    Supply + Install selected.
                  </p>
                  <p className="text-sm sm:text-[16px] text-[#7a7367] leading-relaxed">
                    Our team will contact you within 1 business day to confirm
                    your installation date and finalise the total including
                    labour costs.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="space-y-1 mt-2.5">
            <div className="flex items-center gap-3">
              <button className="text-sm sm:text-[16px] text-[#7a7367] underline underline-offset-2 hover:text-[#2d2926] transition-colors">
                Edit Selection
              </button>
              <button
                onClick={() => onRemove(item._id ?? item.id)} // ✅ FIX 3
                className="text-sm sm:text-[16px] text-[#c0392b] underline underline-offset-2 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
            <button className="text-sm sm:text-[16px] text-[#7a7367] hover:text-[#2d2926] transition-colors">
              + Request a free sample
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ##################### Trust badges ##################### //
const TRUST = [
  { icon: Shield, label: "Secure checkout — SSL encrypted" },
  { icon: CircleDollarSign, label: "Flexible payment options" },
  { icon: House, label: "Australian owned Showroom" },
  { icon: Package, label: "Free sample available on request" },
];

// ##################### CartPage ##################### //
export default function CartPage() {
  const dispatch = useDispatch();
  const reduxCartItems = useSelector((state) => state.cart?.items ?? []);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [cartItems, setCartItems] = useState([]);
  const [promo, setPromo] = useState("");
  const [promoMsg, setPromoMsg] = useState(null);
  const navigate = useNavigate();
  const cartLoading = useSelector((state) => state.cart.loading);

  useEffect(() => {
    dispatch(fetchCartItems({ isAuthenticated }));
  }, [isAuthenticated]);

  // Sync Redux → local state
  useEffect(() => {
    if (Array.isArray(reduxCartItems)) {
      setCartItems(reduxCartItems);
    }
  }, [reduxCartItems]);

  // ##################### Remove cart ##################### //
  const removeItem = useCallback(
    (productId) => {
      dispatch(removeCartItems({ productId, isAuthenticated }))
        .unwrap()
        .then(() => {
          dispatch(fetchCartItems({ isAuthenticated }));
        })
        .catch((err) => {
          console.error("Remove failed:", err);
          // Re-sync from Redux on failure so the removed item reappears
          dispatch(fetchCartItems({ isAuthenticated }));
        });
      setCartItems((prev) =>
        prev.filter((item) => (item._id ?? item.id) !== productId),
      );
    },
    [dispatch, isAuthenticated],
  );

  // ##################### Quantity change ##################### //
  const changeQty = useCallback((id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        const itemId = item._id ?? item.id;
        if (itemId !== id) return item;

        const newQty = Math.max(1, Number(item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }),
    );
  }, []); // no external deps — uses functional setState

  // ── Derived totals ────────────────────────────────────────────────────────
  const subtotal = cartItems.reduce((sum, item) => {
    return (
      sum +
      calcItemPrice(item.quantity, item.wastage, item.service, item.product)
    );
  }, 0);

  const hasSupplyInstall = cartItems.some(
    (i) => i.service === "Supply + Install",
  );

  // ── Promo ──────────────────────────────────────────────────────────────────
  const applyPromo = () => {
    if (!promo.trim()) return;
    setPromoMsg({
      type: "error",
      text: "Invalid promo code. Please try again.",
    });
    setTimeout(() => setPromoMsg(null), 3000);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {cartLoading ? (
        <CartPageSkeleton />
      ) : (
        <div
          className="
          w-full max-w-[1600px] mx-auto
          px-4 sm:px-6 lg:px-8
          py-6 sm:py-10
          grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)]
          gap-6 lg:gap-8
          items-start
          lg:divide-x lg:divide-[#E7E9EB]
        "
        >
          {/****************** Left section ***********************/}
          <div className="lg:px-6 xl:px-10">
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-3xl font-semibold text-[#2d2926] mb-5 tracking-tight border-b border-[#E7E9EB] py-5"
            >
              Your Cart
            </motion.h1>

            <div className="flex flex-col gap-3.5 divide-y divide-[#E7E9EB]">
              <AnimatePresence mode="popLayout">
                {cartItems.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl border border-[#ece8e2] p-8 sm:p-12 text-center"
                  >
                    <div className="text-4xl mb-3">🛒</div>
                    <p className="text-[#7a7367] text-sm">
                      Your cart is empty.
                    </p>
                    <button className="mt-4 px-5 py-2 bg-[#6b6055] text-white text-sm rounded-xl hover:bg-[#2d2926] transition-colors">
                      Continue Shopping
                    </button>
                  </motion.div>
                ) : (
                  cartItems.map((item, i) => (
                    <CartItem
                      key={item.id ?? item.productId ?? i}
                      item={item}
                      index={i}
                      onRemove={removeItem}
                      onChangeQty={changeQty}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/****************** Right section ***********************/}
          <div className="lg:sticky lg:top-[200px] lg:self-start lg:h-fit">
            <motion.aside
              variants={summaryVariants}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-5 pt-6 pb-5">
                  <h2 className="text-xl sm:text-3xl font-semibold text-[#2d2926] mb-4 tracking-tight border-b border-[#E7E9EB] pb-5">
                    Order Summary
                  </h2>

                  {/* Line items */}
                  <div className="space-y-0.5 border-b border-[#f0ece6] pb-4 ">
                    <AnimatePresence>
                      {cartItems.map((item) => {
                        const linePrice = calcItemPrice(
                          item.quantity,
                          item.wastage,
                          item.service,
                          item.product,
                        );
                        return (
                          <motion.div
                            key={item._id ?? item.id}
                            layout
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex justify-between gap-2 py-1"
                          >
                            <span className="text-black text-base sm:text-lg truncate">
                              {item.product?.productName}
                            </span>
                            <motion.span
                              key={linePrice}
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="font-medium text-black text-base sm:text-lg whitespace-nowrap flex-shrink-0"
                            >
                              ${linePrice.toLocaleString("en-AU")}
                            </motion.span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>

                  {/* Subtotal */}
                  <div className="flex justify-between mt-3.5">
                    <span className="text-black text-base sm:text-lg">
                      Subtotal ({cartItems.length} item
                      {cartItems.length !== 1 ? "s" : ""})
                    </span>
                    <motion.span
                      key={subtotal}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-semibold text-black text-base sm:text-lg"
                    >
                      ${subtotal.toLocaleString("en-AU")}
                    </motion.span>
                  </div>

                  {/* Shipping */}
                  <div className="flex justify-between gap-4 mt-2.5 mb-4">
                    <span className="text-black text-base sm:text-lg flex-shrink-0">
                      Shipping
                    </span>
                    <span className="text-[#666E7C] text-sm sm:text-lg text-right leading-snug">
                      Calculated at checkout based on your postcode
                    </span>
                  </div>

                  {/* Promo */}
                  <div className="flex gap-2 mb-2">
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyPromo()}
                      placeholder="Apply Discount/Promo Code"
                      className="flex-1 min-w-0 border border-[#E7E9EB] px-3 py-3 text-sm placeholder-[#666E7C] text-[#2d2926] focus:outline-none focus:border-[#6b6055] transition-colors"
                    />
                    <motion.button
                      whileTap={{ scale: 0.94 }}
                      onClick={applyPromo}
                      className="bg-[#998E8A] hover:bg-[#6b6055] text-white text-sm font-semibold px-4 sm:px-5 transition-colors flex-shrink-0"
                    >
                      Apply
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {promoMsg && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`text-[11px] mb-2 ${
                          promoMsg.type === "error"
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {promoMsg.text}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Total */}
                  <div className="flex justify-between items-center border-t border-[#f0ece6] pt-4 mt-2">
                    <span className="text-[20px] font-semibold text-[#2d2926]">
                      Total
                    </span>
                    <div className="text-right">
                      <motion.p
                        key={subtotal}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-[16px] text-[#2d2926] leading-none"
                      >
                        AUD
                        <span className="font-bold text-[20px] ml-2">
                          ${subtotal.toLocaleString("en-AU")}
                        </span>
                      </motion.p>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#666E7C] mt-1 text-end">
                    GST included in all prices
                  </p>
                </div>

                {/* Supply + Install banner */}
                <AnimatePresence>
                  {hasSupplyInstall && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mx-3 sm:mx-4 mb-4 bg-[#D7CEC5] border border-[#e5dfd7] px-4 py-3 overflow-hidden"
                    >
                      <p className="text-md sm:text-lg font-semibold text-[#4a4440] mb-0.5">
                        🛠 Supply + Install items in your order
                      </p>
                      <p className="text-sm sm:text-lg text-[#7a7367] leading-relaxed">
                        Installation pricing is confirmed after a brief site
                        measure. Our team will call you within 1 business day.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA Buttons */}
                <div className="px-3 sm:px-4 pb-4 flex flex-col gap-2.5">
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.975 }}
                    disabled={cartItems.length === 0}
                    className="w-full bg-[#998E8A] hover:bg-[#2d2926] disabled:opacity-40 disabled:cursor-not-allowed text-white py-3 text-[16px] tracking-wide transition-colors"
                    onClick={() => navigate(`/checkout`)}
                  >
                    Proceed To Checkout
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-[#998E8A] text-[#6b6055] hover:bg-[#f5f2ee] py-2.5 text-[16px] font-medium transition-colors"
                  >
                    Continue Shopping
                  </motion.button>
                </div>

                {/* Trust Badges */}
                <div className="px-3 sm:px-0 space-y-2 sm:space-y-0">
                  {TRUST.map(({ icon: Icon, label }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-sm sm:text-lg text-[#7a7367] sm:ml-5 py-1"
                    >
                      <span className="text-lg text-[#8A6A5B]">
                        <Icon size={18} />
                      </span>
                      {label}
                    </div>
                  ))}
                </div>

                {/* Help box */}
                <div className="bg-[#F5F0ED] mx-3 sm:mx-4 mb-5 px-4 py-3.5 text-center border-l-2 border-[#8A6A5B] mt-10">
                  <p className="text-base sm:text-lg text-[#666E7C]">
                    Need help with your order?
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-[#998E8A] mt-0.5 underline">
                    03 9000 0000
                  </p>
                  <p className="text-base sm:text-lg text-[#a09890] mt-0.5">
                    Mon–Fri 8am–6pm · Sat 9am–4pm
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      )}
    </div>
  );
}
