// src/components/ui/CheckoutPageSkeleton.jsx

function Bone({ className = "" }) {
  return (
    <div
      className={`bg-gradient-to-r from-[#f0ece8] via-[#e8e2de] to-[#f0ece8]
      bg-[length:200%_100%] animate-shimmer rounded ${className}`}
    />
  );
}

// ── Reusable input field skeleton ──────────────────────────────────
function InputSkeleton({ hasLabel = true }) {
  return (
    <div className="flex flex-col gap-1">
      {hasLabel && <Bone className="h-3 w-20" />}
      <Bone className="h-11 w-full" />
    </div>
  );
}

// ── Section block skeleton ─────────────────────────────────────────
function SectionSkeleton({ children, hasTitle = true }) {
  return (
    <div className="mb-7">
      {hasTitle && (
        <div className="border-b border-[#E7E9EB] pb-3 mb-3">
          <Bone className="h-5 w-36" />
        </div>
      )}
      {children}
    </div>
  );
}

// ── Radio card skeleton ────────────────────────────────────────────
function RadioCardSkeleton({ tall = false }) {
  return (
    <div className={`border border-[#E7E9EB] px-3 sm:px-4 flex items-center gap-3 ${tall ? "py-6 sm:py-8" : "py-4"}`}>
      <Bone className="w-4 h-4 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Bone className="h-5 w-40" />
        <Bone className="h-3 w-56" />
      </div>
    </div>
  );
}

// ── Left column skeleton ───────────────────────────────────────────
function CheckoutLeftSkeleton() {
  return (
    <div className="min-w-0">

      {/* Express Checkout */}
      <SectionSkeleton hasTitle={false}>
        <Bone className="h-5 w-40 mx-auto mb-6" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <Bone className="h-12 w-full" />
          <Bone className="h-12 w-full" />
        </div>
      </SectionSkeleton>

      {/* Contact */}
      <SectionSkeleton>
        <Bone className="h-11 w-full mb-3" />
        <Bone className="h-4 w-72 mt-2" />
        <div className="flex items-center gap-2 mt-3">
          <Bone className="w-4 h-4 rounded flex-shrink-0" />
          <Bone className="h-4 w-64" />
        </div>
      </SectionSkeleton>

      {/* Delivery Method — 2 radio cards */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <RadioCardSkeleton tall />
          <RadioCardSkeleton tall />
        </div>
      </SectionSkeleton>

      {/* Ship To — address form */}
      <SectionSkeleton>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <InputSkeleton />
          <InputSkeleton />
        </div>
        <InputSkeleton className="mb-3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <InputSkeleton />
          <InputSkeleton />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <InputSkeleton />
          <InputSkeleton />
        </div>
        <InputSkeleton />
      </SectionSkeleton>

      {/* Shipping Method — 3 radio cards */}
      <SectionSkeleton>
        <div className="flex flex-col gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border border-[#E7E9EB] px-3 sm:px-4 py-4 flex items-center gap-3"
            >
              <Bone className="w-4 h-4 rounded-full flex-shrink-0" />
              <div className="flex flex-1 justify-between items-center gap-2">
                <div className="space-y-2 flex-1">
                  <Bone className="h-5 w-44" />
                  <Bone className="h-3 w-56" />
                </div>
                <Bone className="h-5 w-16 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </SectionSkeleton>

      {/* Supply + Install notice banner */}
      <Bone className="h-20 w-full mb-7" />

      {/* Payment — 4 radio cards */}
      <SectionSkeleton>
        <div className="flex flex-col gap-2 mb-4">
          {/* First card has expanded card form underneath */}
          <div className="border border-[#E7E9EB] px-3 sm:px-4 py-4 flex items-center gap-3">
            <Bone className="w-4 h-4 rounded-full flex-shrink-0" />
            <div className="flex items-center gap-3 w-full">
              <Bone className="w-6 h-6 rounded flex-shrink-0" />
              <Bone className="h-5 w-40" />
            </div>
          </div>

          {/* Card form */}
          <div className="border border-stone-200 p-4 bg-white mb-2">
            <div className="grid grid-cols-3 gap-5">
              <InputSkeleton />
              <InputSkeleton />
              <InputSkeleton />
            </div>
          </div>

          {/* Remaining payment options */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border border-[#E7E9EB] px-3 sm:px-4 py-4 flex items-center gap-3"
            >
              <Bone className="w-4 h-4 rounded-full flex-shrink-0" />
              <div className="flex items-center gap-3 w-full">
                <Bone className="w-8 h-8 rounded flex-shrink-0" />
                <Bone className="h-5 w-48" />
              </div>
            </div>
          ))}
        </div>
      </SectionSkeleton>

      {/* Terms + Place Order */}
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <Bone className="w-4 h-4 rounded flex-shrink-0 mt-1" />
          <div className="space-y-2 flex-1">
            <Bone className="h-4 w-full" />
            <Bone className="h-4 w-4/5" />
          </div>
        </div>
        {/* Place Order button */}
        <Bone className="w-full h-14" />
        {/* Continue as guest */}
        <Bone className="h-4 w-48 mx-auto" />
        {/* Security note */}
        <div className="flex items-center justify-center gap-2">
          <Bone className="w-3.5 h-3.5 rounded flex-shrink-0" />
          <Bone className="h-4 w-72" />
        </div>
      </div>
    </div>
  );
}

// ── Right column skeleton ──────────────────────────────────────────
function CheckoutRightSkeleton() {
  return (
    <div className="lg:sticky lg:top-52 self-start w-full">

      {/* Products section */}
      <div className="bg-white mb-4">
        <Bone className="h-7 w-28 mb-4" />
        <div className="flex flex-col divide-y divide-[#E7E9EB]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-3 py-3">
              {/* Product image */}
              <Bone className="w-20 h-20 sm:w-32 sm:h-32 flex-shrink-0" />
              {/* Product details */}
              <div className="flex-1 min-w-0 space-y-2">
                <Bone className="h-5 w-4/5" />
                <Bone className="h-4 w-3/5" />
                <Bone className="h-4 w-2/5" />
              </div>
              {/* Price */}
              <Bone className="h-5 w-16 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#E7E9EB]" />

      {/* Coupon input */}
      <div className="flex gap-2 mt-5">
        <Bone className="flex-1 h-11" />
        <Bone className="h-11 w-20 flex-shrink-0" />
      </div>

      {/* Payment Summary */}
      <div className="p-4 sm:p-5">
        <Bone className="h-6 w-40 mb-4" />

        <div className="flex flex-col gap-3">
          {/* Subtotal */}
          <div className="flex justify-between">
            <Bone className="h-5 w-36" />
            <Bone className="h-5 w-16" />
          </div>
          {/* Shipping */}
          <div className="flex justify-between">
            <Bone className="h-5 w-20" />
            <Bone className="h-5 w-12" />
          </div>
          {/* Shipping note */}
          <Bone className="h-4 w-48 ml-auto" />
          {/* GST */}
          <div className="flex justify-between mb-2">
            <Bone className="h-5 w-28" />
            <Bone className="h-5 w-16" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#E7E9EB]" />

        {/* Total */}
        <div className="flex justify-between items-center mt-4 pt-2">
          <Bone className="h-6 w-14" />
          <div className="text-right space-y-2">
            <Bone className="h-6 w-32" />
            <Bone className="h-4 w-28" />
          </div>
        </div>

        {/* Help box */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <Bone className="h-5 w-44" />
          <Bone className="h-6 w-28" />
          <Bone className="h-4 w-40" />
        </div>
      </div>
    </div>
  );
}

// ── Full page export ───────────────────────────────────────────────
export default function CheckoutPageSkeleton() {
  return (
    <div className="min-h-screen bg-stone-50 mb-20">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100 px-4 sm:px-6 py-4">
        <div className="2xl:w-8/12 lg:w-10/12 w-11/12 mx-auto flex items-center gap-3">
          <Bone className="h-4 w-16" />
          <Bone className="h-3 w-3 rounded" />
          <Bone className="h-4 w-20" />
        </div>
      </div>

      {/* Two column layout — mirrors exact CheckoutPage grid */}
      <div className="2xl:w-8/12 lg:w-10/12 w-11/12 mx-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_500px] gap-6 lg:gap-8 gap-y-20">
        <CheckoutLeftSkeleton />
        <CheckoutRightSkeleton />
      </div>
    </div>
  );
}
