import React from "react";
import { Clock3, Mail, MapPin, PhoneCall, Send, Sparkles, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#f4ece6,#fff_42%)] px-4 py-10 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <section className="relative overflow-hidden rounded-3xl border border-[#e9dfd7] bg-white p-6 shadow-[0_14px_45px_rgba(138,106,90,0.1)] md:p-8">
          <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#f1e4dc] blur-3xl" />
          <p className="text-sm font-semibold uppercase tracking-wider text-[#8A6A5A]">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#6c5348] md:text-4xl">
            Let us help with your next project
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#8f7b70]">
            Reach out for product advice, quotes, installation support, or showroom
            bookings. Our team will get back to you quickly.
          </p>

          <div className="mt-8 space-y-3">
            <InfoRow icon={PhoneCall} text="1300 000 000" />
            <InfoRow icon={Mail} text="hello@myhomestore.com.au" />
            <InfoRow icon={MapPin} text="Laverton North, Melbourne VIC" />
            <InfoRow icon={Clock3} text="Mon-Sat: 9:00 AM - 5:00 PM" />
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-[#dfcfc3] bg-[#fcf8f5] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#6c5348]">
              <Sparkles size={16} className="text-[#8A6A5A]" />
              Fast Response Promise
            </p>
            <p className="mt-1 text-xs text-[#8f7b70]">
              We typically reply to all new enquiries within 24 business hours.
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-[#e9dfd7] bg-white p-6 shadow-[0_14px_45px_rgba(138,106,90,0.1)] md:p-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-[#6c5348]">
            <MessageSquare size={19} className="text-[#8A6A5A]" />
            Send a message
          </h2>
          <form className="mt-5 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Smith" />
            </div>
            <Input label="Email" placeholder="john@example.com" type="email" />
            <Input label="Phone" placeholder="+61 4xx xxx xxx" />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#7e6357]">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us what you need..."
                className="w-full rounded-xl border border-[#eadfd7] bg-[#fdfaf8] px-3 py-2.5 text-sm text-[#6c5348] outline-none transition focus:border-[#8A6A5A]"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[#8A6A5A] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#795e4f]"
            >
              Send Message <Send size={15} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#eee4dc] bg-[#fcf9f6] px-3 py-2.5 text-sm text-[#7e6357]">
      <Icon size={16} className="text-[#8A6A5A]" />
      <span>{text}</span>
    </div>
  );
}

function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[#7e6357]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#eadfd7] bg-[#fdfaf8] px-3 py-2.5 text-sm text-[#6c5348] outline-none transition focus:border-[#8A6A5A]"
      />
    </div>
  );
}
