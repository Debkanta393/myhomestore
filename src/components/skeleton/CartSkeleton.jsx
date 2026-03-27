// src/components/ui/CartPageSkeleton.jsx

function Bone({ className = "" }) {
  return (
    <div
      className={`bg-gradient-to-r from-[#f0ece8] via-[#e8e2de] to-[#f0ece8]
      bg-[length:200%_100%] animate-shimmer rounded ${className}`}
    />
  );
}

// ── Single cart item row skeleton ──────────────────────────────────
function CartItemSkeleton() {
  return (
    <div className="p-3 sm:p-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10">

        {/* Image + stepper */}
        <div className="flex sm:flex-col gap-3 sm:w-36 lg:w-48">
          <Bone className="w-24 h-24 sm:w-full sm:h-[130px] lg:h-[150px] flex-shrink-0" />
          {/* Qty stepper */}
          <div className="flex-1 sm:flex-none">
            <Bone className="w-full h-10" />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0 space-y-3">
          {/* Title row + price + remove */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-2 flex-1">
              <Bone className="h-6 w-3/4" />
              <Bone className="h-4 w-1/2" />
              <Bone className="h-4 w-2/5" />
            </div>
            <div className="flex items-start gap-3 flex-shrink-0">
              <Bone className="h-6 w-20" />
              <Bone className="h-5 w-5 rounded-full" />
            </div>
          </div>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {[80, 64, 96].map((w, i) => (
              <Bone key={i} className={`h-6 w-${w === 80 ? "20" : w === 64 ? "16" : "24"}`} />
            ))}
          </div>

          {/* Area / packs / wastage line */}
          <Bone className="h-4 w-3/4" />

          {/* Supply + Install note placeholder */}
          <Bone className="h-16 w-full" />

          {/* Actions */}
          <div className="flex gap-4 mt-2">
            <Bone className="h-4 w-24" />
            <Bone className="h-4 w-16" />
          </div>
          <Bone className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
}

// ── Order summary right panel skeleton ────────────────────────────
function CartSummarySkeleton() {
  return (
    <div className="w-full overflow-hidden">
      <div className="px-4 sm:px-5 pt-6 pb-5">

        {/* Heading */}
        <Bone className="h-8 w-44 mb-4 pb-5" />
        <div className="border-b border-[#f0ece6] pb-4 space-y-2 mt-6">
          {/* Line items */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between gap-2 py-1">
              <Bone className="h-5 w-2/3" />
              <Bone className="h-5 w-16 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Subtotal row */}
        <div className="flex justify-between mt-4">
          <Bone className="h-5 w-36" />
          <Bone className="h-5 w-20" />
        </div>

        {/* Shipping row */}
        <div className="flex justify-between gap-4 mt-3 mb-5">
          <Bone className="h-5 w-20 flex-shrink-0" />
          <Bone className="h-5 w-48" />
        </div>

        {/* Promo input */}
        <div className="flex gap-2 mb-4">
          <Bone className="flex-1 h-12" />
          <Bone className="h-12 w-20 flex-shrink-0" />
        </div>

        {/* Total row */}
        <div className="flex justify-between items-center border-t border-[#f0ece6] pt-4 mt-2">
          <Bone className="h-6 w-16" />
          <Bone className="h-7 w-32" />
        </div>

        {/* GST note */}
        <Bone className="h-4 w-44 mt-2 ml-auto" />
      </div>

      {/* CTA buttons */}
      <div className="px-3 sm:px-4 pb-4 flex flex-col gap-2.5 mt-2">
        <Bone className="w-full h-12" />
        <Bone className="w-full h-10" />
      </div>

      {/* Trust badges */}
      <div className="px-3 sm:px-5 space-y-3 mt-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Bone className="w-5 h-5 rounded-full flex-shrink-0" />
            <Bone className="h-4 w-48" />
          </div>
        ))}
      </div>

      {/* Help box */}
      <div className="mx-3 sm:mx-4 mt-10 mb-5 p-4 bg-[#F5F0ED] border-l-2 border-[#8A6A5B] space-y-2 flex flex-col items-center">
        <Bone className="h-4 w-44" />
        <Bone className="h-6 w-32" />
        <Bone className="h-4 w-40" />
      </div>
    </div>
  );
}

// ── Full page skeleton export ──────────────────────────────────────
export default function CartPageSkeleton() {
  return (
    <div className="min-h-screen">
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
        {/* ── Left: cart items ── */}
        <div className="lg:px-6 xl:px-10">
          {/* "Your Cart" heading */}
          <Bone className="h-8 w-36 mb-5 border-b border-[#E7E9EB] py-5" />

          <div className="flex flex-col gap-3.5 divide-y divide-[#E7E9EB]">
            {[...Array(3)].map((_, i) => (
              <CartItemSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* ── Right: order summary ── */}
        <div className="lg:sticky lg:top-[200px] lg:self-start lg:h-fit">
          <CartSummarySkeleton />
        </div>
      </div>
    </div>
  );
}
