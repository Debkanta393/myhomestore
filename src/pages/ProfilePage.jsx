import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, MapPin, ShoppingBag, Heart, HelpCircle,
  Edit2, Trash2, Plus, ChevronDown, ChevronUp, Check,
  Camera, Phone, Mail, Home, Briefcase, Package,
  ShoppingCart, Star, TruckIcon, RefreshCw, Shield,
  LogOut, Bell, Settings, ArrowRight, BadgeCheck,
  CalendarDays, Hash, DollarSign, X
} from 'lucide-react';

// ─── MOCK DATA ────────────────────────────────────────────────────────────────
const initialUserData = {
  name: 'Alex Doe',
  email: 'alex@example.com',
  phone: '+1 234 567 890',
};

const addresses = [
  { id: 1, type: 'Home',   icon: Home,      street: '123 Meadow Lane',    city: 'Springfield', zip: '12345', default: true  },
  { id: 2, type: 'Work',   icon: Briefcase, street: '456 Corporate Blvd', city: 'Metropolis',  zip: '67890', default: false },
];

const orders = [
  { id: 'ORD-001', date: 'Oct 24, 2025', status: 'Delivered',  total: '$124.00', items: 3 },
  { id: 'ORD-002', date: 'Sep 12, 2025', status: 'Processing', total: '$89.50',  items: 1 },
  { id: 'ORD-003', date: 'Aug 05, 2025', status: 'Delivered',  total: '$210.00', items: 5 },
];

const wishlist = [
  { id: 1, name: 'Minimalist Vase',      price: '$45.00', rating: 4.5, reviews: 128 },
  { id: 2, name: 'Linen Throw Blanket',  price: '$85.00', rating: 4.8, reviews: 86  },
  { id: 3, name: 'Ceramic Mug Set',      price: '$32.00', rating: 4.3, reviews: 214 },
];

const faqs = [
  {
    q: 'What is your return policy?',
    a: 'You can return any unused item within 30 days of purchase for a full refund. Items must be in original packaging.',
    icon: RefreshCw,
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 3–5 business days. Expedited (1–2 days) is available at checkout.',
    icon: TruckIcon,
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently, we ship within the continental US and Canada. International shipping is coming soon!',
    icon: MapPin,
  },
  {
    q: 'Is my payment information secure?',
    a: 'Yes. We use industry-standard PCI-DSS compliant encryption. We never store full card details.',
    icon: Shield,
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────────
const tabVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.32, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -14, transition: { duration: 0.2 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariant = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

// ─── STATUS CONFIG ────────────────────────────────────────────────────────────
const statusConfig = {
  Delivered:  { bg: 'bg-emerald-50',  text: 'text-emerald-700', dot: 'bg-emerald-500',  icon: Check       },
  Processing: { bg: 'bg-amber-50',    text: 'text-amber-700',   dot: 'bg-amber-400',    icon: RefreshCw   },
  Cancelled:  { bg: 'bg-red-50',      text: 'text-red-600',     dot: 'bg-red-500',      icon: X           },
};

// ─── SHARED UI ────────────────────────────────────────────────────────────────
const SectionTitle = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2.5 bg-[#f5efed] rounded-xl">
      <Icon size={20} className="text-[#90776b]" />
    </div>
    <h3 className="text-2xl font-bold text-[#90776b]">{children}</h3>
  </div>
);

// ─── PROFILE SECTION ──────────────────────────────────────────────────────────
function ProfileSection() {
  const [isEditing, setIsEditing]   = useState(false);
  const [formData,  setFormData]    = useState(initialUserData);
  const [saved,     setSaved]       = useState(false);
  const [avatar,    setAvatar]      = useState(null);
  const [dragOver,  setDragOver]    = useState(false);
  const fileRef                     = useRef();

  const fieldMeta = {
    name:  { label: 'Full Name',     icon: User,  type: 'text'  },
    email: { label: 'Email Address', icon: Mail,  type: 'email' },
    phone: { label: 'Phone Number',  icon: Phone, type: 'tel'   },
  };

  const handleSave = () => {
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => setAvatar(e.target.result);
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <SectionTitle icon={User}>Profile Details</SectionTitle>

      {/* ── Avatar Card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mb-10 rounded-2xl overflow-hidden border border-[#d7cec5]"
      >
        {/* Banner */}
        <div
          className="h-32 w-full"
          style={{ background: 'linear-gradient(135deg, #d7cec5 0%, #90776b 100%)' }}
        />

        {/* Avatar + info row */}
        <div className="bg-white px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-10 -mt-12">
            {/* Avatar bubble */}
            <div className="relative w-24 h-24 shrink-0">
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                className={`w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden
                  flex items-center justify-center bg-[#f5efed] transition-all
                  ${dragOver ? 'ring-2 ring-[#90776b]' : ''}`}
              >
                {avatar
                  ? <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
                  : <User size={36} className="text-[#d7cec5]" />
                }
              </div>
              {/* Camera button */}
              <button
                onClick={() => fileRef.current.click()}
                className="absolute -bottom-3 -right-3 p-1.5 bg-[#90776b] text-white rounded-full
                           shadow hover:bg-[#7a645a] transition-colors"
              >
                <Camera size={13} />
              </button>
              <input
                ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </div>

            {/* Name / email */}
            <div className="flex-1 pb-1">
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-bold text-[#90776b]">{formData.name}</h4>
                <BadgeCheck size={18} className="text-[#90776b]" />
              </div>
              <p className="text-sm text-[#998e8a] flex items-center gap-1.5 mt-0.5">
                <Mail size={13} /> {formData.email}
              </p>
            </div>

            {/* Edit / Save button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl
                         bg-[#90776b] text-white hover:bg-[#7a645a] transition-colors shadow-sm shrink-0"
            >
              {isEditing
                ? <><Check size={15} /> Save Changes</>
                : <><Edit2 size={15} /> Edit Profile</>
              }
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Drag-drop hint */}
      {isEditing && (
        <p className="text-xs text-[#998e8a] mb-4 flex items-center gap-1.5">
          <Camera size={12} /> Drag & drop a photo onto the avatar or click the camera icon to update.
        </p>
      )}

      {/* ── Fields ── */}
      <AnimatePresence>
        {saved && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200
                       rounded-xl px-4 py-3 mb-6"
          >
            <Check size={15} /> Profile updated successfully!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-5 max-w-lg">
        {Object.entries(formData).map(([key, value]) => {
          const meta = fieldMeta[key];
          const Icon = meta.icon;
          return (
            <motion.div key={key} variants={cardVariant} className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-[#998e8a] flex items-center gap-1.5">
                <Icon size={12} /> {meta.label}
              </label>
              {isEditing ? (
                <div className="relative">
                  <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#d7cec5]" />
                  <input
                    type={meta.type}
                    value={value}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full bg-[#fcf8f5] border border-[#d7cec5] rounded-xl pl-10 pr-4 py-3
                               text-[#90776b] focus:outline-none focus:border-[#90776b] focus:ring-2
                               focus:ring-[#90776b]/10 transition-all"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 bg-[#fcf8f5] border border-transparent rounded-xl px-4 py-3 text-[#90776b]">
                  <Icon size={16} className="text-[#d7cec5] shrink-0" />
                  {value}
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ─── ADDRESSES SECTION ────────────────────────────────────────────────────────
function AddressesSection() {
  const [list,   setList]   = useState(addresses);
  const [adding, setAdding] = useState(false);
  const [newAddr, setNewAddr] = useState({ type: '', street: '', city: '', zip: '' });

  const handleAdd = () => {
    if (!newAddr.street) return;
    setList(prev => [...prev, { ...newAddr, id: Date.now(), icon: Home, default: false }]);
    setNewAddr({ type: '', street: '', city: '', zip: '' });
    setAdding(false);
  };

  return (
    <div>
      <SectionTitle icon={MapPin}>Saved Addresses</SectionTitle>

      <motion.div variants={stagger} initial="hidden" animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {list.map((addr) => {
          const AddrIcon = addr.icon || Home;
          return (
            <motion.div key={addr.id} variants={cardVariant}
              whileHover={{ y: -3 }}
              className="border border-[#d7cec5] rounded-2xl p-5 bg-[#fcf8f5] hover:border-[#90776b]
                         hover:shadow-md transition-all group relative overflow-hidden">
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5"
                   style={{ background: 'radial-gradient(circle, #90776b, transparent)' }} />

              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#f5efed] rounded-lg">
                    <AddrIcon size={16} className="text-[#90776b]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#90776b]">{addr.type}</span>
                    {addr.default && (
                      <span className="ml-2 text-[10px] font-bold bg-[#90776b] text-white px-2 py-0.5 rounded-full">
                        DEFAULT
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setList(l => l.filter(a => a.id !== addr.id))}
                  className="p-1.5 text-[#d7cec5] hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <div className="space-y-1 pl-1">
                <p className="text-[#90776b] font-medium flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#d7cec5]" />
                  {addr.street}
                </p>
                <p className="text-[#998e8a] text-sm pl-5">{addr.city}, {addr.zip}</p>
              </div>
            </motion.div>
          );
        })}

        {/* Add new address card */}
        <motion.div variants={cardVariant}>
          <AnimatePresence mode="wait">
            {!adding ? (
              <motion.button
                key="add-btn"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setAdding(true)}
                className="w-full min-h-[160px] border-2 border-dashed border-[#d7cec5] rounded-2xl
                           flex flex-col items-center justify-center gap-2 text-[#998e8a]
                           hover:text-[#90776b] hover:border-[#90776b] hover:bg-[#fcf8f5] transition-all"
              >
                <div className="p-3 bg-[#f5efed] rounded-full">
                  <Plus size={22} className="text-[#90776b]" />
                </div>
                <span className="font-semibold text-sm">Add New Address</span>
              </motion.button>
            ) : (
              <motion.div
                key="add-form"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="border border-[#d7cec5] rounded-2xl p-5 bg-[#fcf8f5] space-y-3"
              >
                {[
                  ['Address Type', 'type',   'e.g. Home'],
                  ['Street',       'street', '123 Main St'],
                  ['City',         'city',   'Springfield'],
                  ['ZIP Code',     'zip',    '12345'],
                ].map(([label, field, placeholder]) => (
                  <div key={field}>
                    <label className="text-xs font-bold text-[#998e8a] uppercase tracking-wider mb-1 block">
                      {label}
                    </label>
                    <input
                      placeholder={placeholder}
                      value={newAddr[field]}
                      onChange={e => setNewAddr(p => ({ ...p, [field]: e.target.value }))}
                      className="w-full border border-[#d7cec5] rounded-xl px-3 py-2 text-sm text-[#90776b]
                                 bg-white focus:outline-none focus:border-[#90776b] transition"
                    />
                  </div>
                ))}
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={handleAdd}
                    className="flex-1 bg-[#90776b] text-white text-sm font-semibold py-2 rounded-xl
                               hover:bg-[#7a645a] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check size={14} /> Save
                  </button>
                  <button
                    onClick={() => setAdding(false)}
                    className="flex-1 border border-[#d7cec5] text-[#998e8a] text-sm py-2 rounded-xl
                               hover:bg-[#f5efed] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <X size={14} /> Cancel
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── ORDERS SECTION ───────────────────────────────────────────────────────────
function OrdersSection() {
  return (
    <div>
      <SectionTitle icon={ShoppingBag}>Order History</SectionTitle>

      {/* Summary pills */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: 'Total Orders', value: orders.length,                                icon: Hash       },
          { label: 'Delivered',    value: orders.filter(o => o.status === 'Delivered').length, icon: Package },
          { label: 'Processing',   value: orders.filter(o => o.status === 'Processing').length, icon: RefreshCw },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="bg-[#fcf8f5] border border-[#d7cec5] rounded-2xl p-4 text-center">
            <Icon size={18} className="text-[#90776b] mx-auto mb-1.5" />
            <p className="text-2xl font-bold text-[#90776b]">{value}</p>
            <p className="text-xs text-[#998e8a] mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-3">
        {orders.map((order) => {
          const cfg   = statusConfig[order.status] || statusConfig.Processing;
          const SIcon = cfg.icon;
          return (
            <motion.div key={order.id} variants={cardVariant}
              whileHover={{ x: 3 }}
              className="border border-[#d7cec5] rounded-2xl p-4 bg-[#fcf8f5] flex flex-col sm:flex-row
                         sm:items-center justify-between gap-3 hover:border-[#90776b] hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-[#f5efed] rounded-xl">
                  <Package size={18} className="text-[#90776b]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#90776b] text-sm">#{order.id}</span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${cfg.bg} ${cfg.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-[#998e8a]">
                    <span className="flex items-center gap-1"><CalendarDays size={11} /> {order.date}</span>
                    <span className="flex items-center gap-1"><ShoppingBag size={11} /> {order.items} items</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#90776b] flex items-center gap-1">
                  <DollarSign size={14} />{order.total.replace('$', '')}
                </span>
                <button className="flex items-center gap-1.5 text-xs border border-[#d7cec5] text-[#90776b]
                                   px-3 py-1.5 rounded-lg hover:bg-[#f5efed] transition-colors font-medium">
                  Details <ArrowRight size={12} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ─── WISHLIST SECTION ─────────────────────────────────────────────────────────
function WishlistSection() {
  const [items, setItems] = useState(wishlist);

  return (
    <div>
      <SectionTitle icon={Heart}>My Wishlist</SectionTitle>

      <motion.div variants={stagger} initial="hidden" animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <motion.div key={item.id} variants={cardVariant} whileHover={{ y: -5 }}
            className="bg-[#fcf8f5] border border-[#d7cec5] rounded-2xl overflow-hidden
                       hover:border-[#90776b] hover:shadow-md transition-all group">
            {/* Image placeholder */}
            <div className="h-44 bg-gradient-to-br from-[#f5efed] to-[#d7cec5] flex items-center
                            justify-center relative">
              <Heart size={36} className="text-[#c4b5ad] group-hover:scale-110 transition-transform" />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setItems(i => i.filter(x => x.id !== item.id))}
                className="absolute top-3 right-3 p-2 bg-white rounded-full text-[#998e8a]
                           hover:text-red-400 shadow-sm opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 size={14} />
              </motion.button>
            </div>

            <div className="p-4">
              <h4 className="font-bold text-[#90776b] mb-1">{item.name}</h4>

              {/* Star rating */}
              <div className="flex items-center gap-1.5 mb-3">
                <div className="flex">
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={12}
                      className={s <= Math.round(item.rating) ? 'text-amber-400 fill-amber-400' : 'text-[#d7cec5]'} />
                  ))}
                </div>
                <span className="text-xs text-[#998e8a]">{item.rating} ({item.reviews})</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-[#90776b]">{item.price}</span>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 bg-[#90776b] text-white text-xs font-semibold
                             px-3.5 py-2 rounded-xl hover:bg-[#7a645a] transition-colors"
                >
                  <ShoppingCart size={13} /> Add to Cart
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-2xl">
      <SectionTitle icon={HelpCircle}>Frequently Asked Questions</SectionTitle>

      <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen  = openIndex === index;
          const FaqIcon = faq.icon;
          return (
            <motion.div key={index} variants={cardVariant}
              className={`border rounded-2xl overflow-hidden transition-colors duration-200
                ${isOpen ? 'border-[#90776b] shadow-sm' : 'border-[#d7cec5]'}`}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full flex justify-between items-center p-5 text-left font-semibold
                  transition-colors ${isOpen ? 'bg-[#f5efed] text-[#90776b]' : 'bg-[#fcf8f5] text-[#90776b] hover:bg-[#f5efed]'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-[#90776b]/10' : 'bg-[#f5efed]'}`}>
                    <FaqIcon size={15} className="text-[#90776b]" />
                  </div>
                  <span className="text-sm">{faq.q}</span>
                </div>
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 ml-3">
                  <ChevronDown size={18} className="text-[#90776b]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 py-4 text-sm text-[#998e8a] bg-white border-t border-[#e8e0db] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile',   label: 'Profile Details', icon: User       },
    { id: 'addresses', label: 'Addresses',        icon: MapPin     },
    { id: 'orders',    label: 'Order History',    icon: ShoppingBag},
    { id: 'wishlist',  label: 'Wishlist',         icon: Heart      },
    { id: 'faq',       label: 'FAQ',              icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#f5efed] text-[#998e8a] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* ── SIDEBAR ── */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl p-4 sticky top-8 border border-[#d7cec5] shadow-sm">

            {/* Brand / account header */}
            <div className="flex items-center gap-2.5 px-2 mb-5">
              <div className="p-2 bg-[#f5efed] rounded-xl">
                <Settings size={16} className="text-[#90776b]" />
              </div>
              <h2 className="text-base font-bold text-[#90776b]">My Account</h2>
            </div>

            <nav className="flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {tabs.map((tab) => {
                const Icon     = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-xl
                      transition-all whitespace-nowrap md:whitespace-normal text-sm
                      ${isActive
                        ? 'bg-[#90776b] text-white shadow-sm'
                        : 'text-[#998e8a] hover:bg-[#f5efed] hover:text-[#90776b]'
                      }`}
                  >
                    <Icon size={17} />
                    <span className="font-medium">{tab.label}</span>
                    {isActive && (
                      <motion.span layoutId="tabDot"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-white/60" />
                    )}
                  </motion.button>
                );
              })}
            </nav>

            {/* Divider + extras */}
            <div className="border-t border-[#f5efed] mt-4 pt-4 space-y-1">
              {[
                { icon: Bell,    label: 'Notifications' },
                { icon: LogOut,  label: 'Sign Out',     danger: true },
              ].map(({ icon: Icon, label, danger }) => (
                <button key={label}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm
                    font-medium transition-colors
                    ${danger
                      ? 'text-red-400 hover:bg-red-50'
                      : 'text-[#998e8a] hover:bg-[#f5efed] hover:text-[#90776b]'
                    }`}>
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="flex-1 bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-[#d7cec5] min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeTab === 'profile'   && <ProfileSection />}
              {activeTab === 'addresses' && <AddressesSection />}
              {activeTab === 'orders'    && <OrdersSection />}
              {activeTab === 'wishlist'  && <WishlistSection />}
              {activeTab === 'faq'       && <FaqSection />}
            </motion.div>
          </AnimatePresence>
        </main>

      </div>
    </div>
  );
}
