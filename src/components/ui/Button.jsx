// src/components/ui/Button.jsx
import * as React from "react";
import { motion } from "framer-motion";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const baseStyles =
  "inline-flex items-center justify-center font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[#998E8A]/40 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

const variants = {
  // Filled — warm brown bg, white text
  primary:
    "bg-[#998E8A] text-white hover:bg-[#7a6e6a]",

    secondary:
    "bg-white text-[#8A6A5A] hover:hover:bg-[#f5f0ed]",

  // Outlined — transparent bg, brown border + text
  outline:
    "bg-white text-[#998E8A] border border-[#998E8A] hover:bg-stone-50",

  // Dark filled — for CTAs like "Add to Cart"
  dark: "bg-[#2d2926] text-white hover:bg-[#1a1614] border-2 border-[#2d2926]",

  // Ghost — no border, subtle hover
  ghost:
    "bg-transparent text-[#998E8A] hover:bg-[#f5efed] border-2 border-transparent",

  // Danger — for destructive actions
  danger:
    "bg-white text-red-500 border border-red-400 hover:bg-red-50",
};

const sizes = {
  xs: "py-1.5 px-4 text-xs",
  sm: "py-2 px-5 text-sm",
  md: "py-3 px-6 text-sm",
  lg: "py-3.5 px-8 text-base",
  xl: "py-4 px-10 text-base",
  full: "py-3 px-6 text-sm w-full",
};

const roundedness = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-xl",
  full: "rounded-full",
};

// ─── Button Component ─────────────────────────────────────────────────────────
export const Button = React.forwardRef(function Button(
  {
    className = "",
    variant = "primary",
    size = "md",
    rounded = "none",
    animate = true,
    loading = false,
    icon = null,
    iconRight = null,
    children,
    disabled,
    ...props
  },
  ref,
) {
  const classes = [
    baseStyles,
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    roundedness[rounded] ?? roundedness.none,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {loading && (
        <svg
          className="animate-spin mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      )}
      {icon && !loading && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {children}
      {iconRight && (
        <span className="ml-2 flex items-center">{iconRight}</span>
      )}
    </>
  );

  if (animate) {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1.03 : 1.03 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
        transition={{duration: "3s", ease: "easeInOut"}}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {inner}
      </motion.button>
    );
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {inner}
    </button>
  );
});
