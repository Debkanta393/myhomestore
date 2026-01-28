import React from "react";

export default function Reviews() {
  return (
    <section className="w-10/12 mx-auto mt-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Reviews</h2>

        <button className="bg-[#9B8F88] text-white px-5 py-2 text-sm rounded-md hover:bg-[#857870] transition">
          Add a review
        </button>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center gap-4 mb-14">
        <span className="text-5xl font-semibold">5</span>

        <div className="flex text-yellow-400 text-xl">★★★★★</div>

        <span className="text-gray-600 text-sm">Based on 200 Reviews</span>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Great Quality",
            text: "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
            author: "Jenny Wilson",
          },
          {
            title: "Great Quality",
            text: "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
            author: "Jenny Wilson",
          },
          {
            title: "Great Quality",
            text: "Lorem ipsum dolor sit amet consectetur. Cras pulvinar in non sit massa aenean. Nisl ornare pharetra quis non aliquet.",
            author: "Jenny Wilson",
          },
        ].map((review, i) => (
          <div key={i} className="space-y-3">
            {/* Stars */}
            <div className="text-yellow-400 text-lg">★★★★★</div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {review.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {review.text}
            </p>

            {/* Author */}
            <p className="text-gray-500 text-sm mt-2">{review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
