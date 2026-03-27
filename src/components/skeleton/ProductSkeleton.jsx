
function Bone({ className = "" }) {
  return (
    <div
      className={`bg-gradient-to-r from-[#f0ece8] via-[#e8e2de] to-[#f0ece8] bg-[length:200%_100%] animate-shimmer rounded ${className}`}
    />
  );
}

export default function ProductSkeleton() {
  return (
    <div className="w-full mb-20">
      {/* Breadcrumb skeleton */}
      <div className="w-10/12 mx-auto mb-10 pt-6">
        <Bone className="h-9 w-64 rounded-full" />
      </div>

      {/* Main two-column layout */}
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

        {/* ── LEFT: Image gallery ── */}
        <div className="w-full">
          {/* Hero image */}
          <Bone className="w-full h-[300px] sm:h-[400px] lg:h-[500px]" />

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-5 overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <Bone key={i} className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 rounded" />
            ))}
          </div>

          {/* Color options heading + swatches */}
          <Bone className="h-7 w-52 mt-10 mb-5" />
          <div className="flex flex-wrap gap-3">
            {[...Array(5)].map((_, i) => (
              <Bone key={i} className="w-32 h-40 xl:w-40 xl:h-48" />
            ))}
          </div>

          {/* Thickness heading + chips */}
          <Bone className="h-7 w-60 mt-10 mb-5" />
          <div className="flex flex-wrap gap-4">
            {[...Array(3)].map((_, i) => (
              <Bone key={i} className="w-28 h-10" />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Product details ── */}
        <div className="w-full space-y-6">
          {/* Badge chips */}
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <Bone key={i} className="h-9 w-24" />
            ))}
          </div>

          {/* Product name */}
          <div className="space-y-3 mt-2">
            <Bone className="h-10 w-4/5" />
            <Bone className="h-10 w-3/5" />
            <Bone className="h-5 w-48 mt-2" />
          </div>

          {/* Star rating */}
          <div className="flex items-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Bone key={i} className="w-5 h-5 rounded-full" />
            ))}
            <Bone className="h-5 w-24 ml-2" />
          </div>

          {/* Specs grid (4 cells) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#E7E9EB] divide-x divide-[#E7E9EB]">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4">
                <Bone className="h-6 w-16" />
                <Bone className="h-4 w-12" />
              </div>
            ))}
          </div>

          {/* Price tabs */}
          <div className="grid grid-cols-3 gap-2 border border-[#E7E9EB] p-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4">
                <Bone className="h-5 w-24" />
                <Bone className="h-8 w-16" />
              </div>
            ))}
          </div>

          {/* Calculator block */}
          <div className="border border-[#E7E9EB] p-4 sm:p-5 space-y-4">
            <Bone className="h-10 w-32" />
            <Bone className="h-5 w-72" />
            <Bone className="h-6 w-48 mt-4" />
            <Bone className="w-full h-12 mt-2" />
            <div className="flex gap-4 mt-3">
              {[...Array(3)].map((_, i) => (
                <Bone key={i} className="h-5 w-16" />
              ))}
            </div>
            {/* Price summary */}
            <div className="mt-8 bg-[#F5F0ED] p-4 sm:p-6 space-y-3">
              <Bone className="h-6 w-36" />
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Bone className="h-5 w-40" />
                  <Bone className="h-5 w-20" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA banner */}
          <Bone className="w-full h-20" />

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Bone className="w-full h-12" />
            <Bone className="w-full h-12" />
          </div>

          {/* Wishlist */}
          <Bone className="h-5 w-36 mx-auto" />
        </div>
      </div>

      {/* Product Highlights section */}
      <div className="mt-20 w-full bg-[#FCF8F5] p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-10/12 mx-auto">
          <Bone className="h-10 w-56" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Bone key={i} className="h-6 w-full" />
            ))}
          </div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <Bone key={i} className="h-6 w-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Specs & Details tabs */}
      <div className="w-10/12 mx-auto mt-20 space-y-5">
        <Bone className="h-9 w-72" />
        <div className="flex gap-2 border-b border-gray-200 pb-3">
          {[...Array(6)].map((_, i) => (
            <Bone key={i} className="h-8 w-24" />
          ))}
        </div>
        <div className="space-y-3 mt-4">
          {[...Array(3)].map((_, i) => (
            <Bone key={i} className="h-5 w-full" />
          ))}
          <Bone className="h-5 w-3/4" />
        </div>
      </div>
    </div>
  );
}
