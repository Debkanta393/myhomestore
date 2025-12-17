// src/components/ui/button.jsx
import * as React from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-stone-900 text-white hover:bg-stone-800",
  outline: "border border-stone-300 text-stone-900 hover:bg-stone-100",
  ghost: "text-stone-900 hover:bg-stone-100",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

export const Button = React.forwardRef(function Button(
  {
    className = "",
    variant = "default",
    size = "md",
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
});
