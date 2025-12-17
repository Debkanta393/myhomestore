import * as React from "react";

export const Card = React.forwardRef(function Card(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`bg-white border border-stone-200 shadow-sm ${className}`}
      {...props}
    />
  );
});

export const CardContent = React.forwardRef(function CardContent(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`p-6 ${className}`}
      {...props}
    />
  );
});

Card.displayName = "Card";
CardContent.displayName = "CardContent";
