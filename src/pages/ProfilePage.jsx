import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bell,
  CalendarClock,
  CircleCheck,
  CreditCard,
  Gift,
  MapPin,
  Package,
  Star,
  UserRound,
  Wallet,
} from "lucide-react";

const quickStats = [
  { label: "Orders", value: "24", icon: Package },
  { label: "Saved Addresses", value: "3", icon: MapPin },
  { label: "Reward Points", value: "2,480", icon: Gift },
  { label: "Wishlist", value: "12", icon: Star },
];

const recentOrders = [
  { id: "MHS-48210", date: "Apr 04, 2026", status: "Delivered", total: "$289.00" },
  { id: "MHS-48077", date: "Mar 29, 2026", status: "Shipped", total: "$124.50" },
  { id: "MHS-47891", date: "Mar 18, 2026", status: "Processing", total: "$510.00" },
];

const highlights = [
  "Priority support for active projects",
  "Exclusive seasonal discounts",
  "Fast re-order from previous purchases",
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,#f4ece6,#fff_38%)] px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="overflow-hidden rounded-3xl border border-[#e9dfd7] bg-white shadow-[0_14px_45px_rgba(138,106,90,0.12)]"
        >
          <div className="relative bg-linear-to-r from-[#8A6A5A] to-[#9f8376] p-6 md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <UserRound size={28} />
                </div>
                <div>
                  <p className="text-sm text-white/85">Welcome back</p>
                  <h1 className="text-2xl font-semibold text-white md:text-3xl">Alex Doe</h1>
                  <p className="text-sm text-white/85">alex@example.com</p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#8A6A5A] transition hover:bg-[#f9f2ec]">
                Edit Profile <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4 md:gap-4 md:p-6">
            {quickStats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#eee4dc] bg-[#fcf9f6] p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="mb-2 inline-flex rounded-lg bg-white p-2 text-[#8A6A5A]">
                  <Icon size={16} />
                </div>
                <p className="text-xl font-bold text-[#6c5348]">{value}</p>
                <p className="text-xs text-[#8f7b70]">{label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-[#e9dfd7] bg-white p-6 shadow-[0_10px_30px_rgba(138,106,90,0.08)] lg:col-span-2"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#6c5348]">Recent Orders</h2>
              <button className="text-sm font-medium text-[#8A6A5A] hover:underline">
                View all
              </button>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-3 rounded-2xl border border-[#efe6de] bg-[#fdfaf8] p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#6c5348]">{order.id}</p>
                    <p className="text-xs text-[#8f7b70]">{order.date}</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7e6357] shadow-sm">
                    <CircleCheck size={14} />
                    {order.status}
                  </div>
                  <p className="text-sm font-semibold text-[#6c5348]">{order.total}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="space-y-4 rounded-3xl border border-[#e9dfd7] bg-white p-6 shadow-[0_10px_30px_rgba(138,106,90,0.08)]"
          >
            <h3 className="text-lg font-semibold text-[#6c5348]">Account Tools</h3>
            <button className="flex w-full items-center justify-between rounded-xl border border-[#ece2da] bg-[#fcf9f6] p-3 text-sm text-[#7e6357] hover:bg-[#f7efe9]">
              <span className="flex items-center gap-2">
                <CreditCard size={16} /> Payment Methods
              </span>
              <ArrowUpRight size={16} />
            </button>
            <button className="flex w-full items-center justify-between rounded-xl border border-[#ece2da] bg-[#fcf9f6] p-3 text-sm text-[#7e6357] hover:bg-[#f7efe9]">
              <span className="flex items-center gap-2">
                <Wallet size={16} /> Billing & Invoices
              </span>
              <ArrowUpRight size={16} />
            </button>
            <button className="flex w-full items-center justify-between rounded-xl border border-[#ece2da] bg-[#fcf9f6] p-3 text-sm text-[#7e6357] hover:bg-[#f7efe9]">
              <span className="flex items-center gap-2">
                <Bell size={16} /> Notifications
              </span>
              <ArrowUpRight size={16} />
            </button>
            <div className="rounded-2xl bg-linear-to-r from-[#f3e9e2] to-[#f8f2ee] p-4">
              <p className="mb-1 text-sm font-semibold text-[#6c5348]">Next delivery</p>
              <p className="flex items-center gap-2 text-sm text-[#7e6357]">
                <CalendarClock size={15} /> Wednesday, Apr 10
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-[#dfcfc3] bg-white p-4">
              <p className="mb-2 text-sm font-semibold text-[#6c5348]">Member Perks</p>
              <ul className="space-y-1.5 text-xs text-[#8f7b70]">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#8A6A5A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
