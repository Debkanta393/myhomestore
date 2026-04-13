import React from "react";

// ── Helpers ───────────────────────────────────────────────────
const buildStyle = (props) => ({
  width: props.width || "100%",
  maxWidth: props.maxWidth ? `${props.maxWidth}px` : undefined,
  marginTop: props.marginTop ? `${props.marginTop}px` : undefined,
  marginBottom: props.marginBottom ? `${props.marginBottom}px` : undefined,
  marginLeft: props.marginLeft ?? "auto",
  marginRight: props.marginRight ?? "auto",
  paddingTop: props.paddingTop ? `${props.paddingTop}px` : undefined,
  paddingBottom: props.paddingBottom ? `${props.paddingBottom}px` : undefined,
  paddingLeft: props.paddingLeft ? `${props.paddingLeft}px` : undefined,
  paddingRight: props.paddingRight ? `${props.paddingRight}px` : undefined,
  boxShadow: props.boxShadow || undefined,
  borderRadius: props.borderRadius ? `${props.borderRadius}px` : undefined,
});

const Overlay = ({ color }) =>
  color ? (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: `#${color}`,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  ) : null;

// ── Default Props ─────────────────────────────────────────────
const defaultProps = {
  badge: "",
  heading: "About Bamboo Flooring",
  subheading: "Flooring You Can Trust",
  description:
    "Since 2003, Clever Choice has been delivering premium flooring solutions across Australia. From engineered timber and hybrid flooring to laminate and bamboo, our products are designed to combine beauty, durability, and long-term value.",
  listItems: [
    { icon: "✓", text: "Carefully selected raw materials and finishes" },
    { icon: "✓", text: "Water-resistant and scratch-resistant technologies" },
    { icon: "✓", text: "Designed for Australian climate conditions" },
  ],
  primaryButtonLabel: "",
  primaryButtonLink: "",
  secondaryButtonLabel: "",
  secondaryButtonLink: "",
  image1: "",
  image1Alt: "Flooring image 1",
  image2: "",
  image2Alt: "Flooring image 2",
  imageLayout: "right",
  imageBorderRadius: 8,
  image1Height: 480,
  image2Height: 320,
  image2Width: 55,
  imageGap: 12,
  imageOverlap: -80,
  headingColor: "1a1207",
  headingFontSize: 32,
  headingFontWeight: "800",
  headingFontFamily: "Georgia, 'Times New Roman', serif",
  subheadingColor: "1a1207",
  subheadingFontSize: 18,
  bodyColor: "374151",
  bodyFontSize: 15,
  listIconColor: "92400e",
  listTextColor: "374151",
  listIconSize: 14,
  listTextSize: 15,
  listGap: 16,
  primaryBg: "1a1207",
  primaryColor: "ffffff",
  primaryBorderColor: "1a1207",
  primaryBorderWidth: 2,
  primaryBorderStyle: "solid",
  primaryBorderRadius: 4,
  primaryPaddingX: 28,
  primaryPaddingY: 12,
  primaryFontSize: 14,
  primaryFontWeight: "600",
  secondaryBg: "ffffff",
  secondaryColor: "1a1207",
  secondaryBorderColor: "1a1207",
  secondaryBorderWidth: 2,
  secondaryBorderStyle: "solid",
  secondaryBorderRadius: 4,
  secondaryPaddingX: 28,
  secondaryPaddingY: 12,
  secondaryFontSize: 14,
  secondaryFontWeight: "600",
  columnGap: 64,
  contentWidth: 52,
  backgroundColor: "f5f0ea",
  paddingTop: 80,
  paddingBottom: 80,
  paddingLeft: 48,
  paddingRight: 48,
};

// ── Component ─────────────────────────────────────────────────
export default function AboutSection(userProps) {
  const {
    badge,
    heading,
    subheading,
    description,
    listItems,
    primaryButtonLabel,
    primaryButtonLink,
    secondaryButtonLabel,
    secondaryButtonLink,
    image1,
    image1Alt,
    image2,
    image2Alt,
    imageLayout,
    imageBorderRadius,
    image1Height,
    image2Height,
    image2Width,
    imageGap,
    imageOverlap,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    subheadingColor,
    subheadingFontSize,
    bodyColor,
    bodyFontSize,
    listIconColor,
    listTextColor,
    listIconSize,
    listTextSize,
    listGap,
    primaryBg,
    primaryColor,
    primaryBorderColor,
    primaryBorderWidth,
    primaryBorderStyle,
    primaryBorderRadius,
    primaryPaddingX,
    primaryPaddingY,
    primaryFontSize,
    primaryFontWeight,
    secondaryBg,
    secondaryColor,
    secondaryBorderColor,
    secondaryBorderWidth,
    secondaryBorderStyle,
    secondaryBorderRadius,
    secondaryPaddingX,
    secondaryPaddingY,
    secondaryFontSize,
    secondaryFontWeight,
    columnGap,
    contentWidth,
    overlayColor,
    htmlId,
    className,
    ...props
  } = { ...defaultProps, ...userProps };

  const isRight = imageLayout !== "left";
  const uid = `about-${(heading || "section").replace(/\W+/g, "-").toLowerCase()}`;

  // ── Text Column ───────────────────────────────────────────
  const textCol = (
    <div
      style={{
        flex: `0 0 ${contentWidth ?? 52}%`,
        maxWidth: `${contentWidth ?? 52}%`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {badge && (
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: `#${listIconColor || "92400e"}`,
            marginBottom: 14,
            opacity: 0.85,
          }}
        >
          {badge}
        </span>
      )}

      <h2
        style={{
          fontFamily: headingFontFamily || "Georgia, serif",
          fontSize: headingFontSize ? `${headingFontSize}px` : "32px",
          fontWeight: headingFontWeight || 800,
          color: headingColor ? `#${headingColor}` : "#1a1207",
          lineHeight: 1.15,
          margin: 0,
          marginBottom: 20,
        }}
      >
        {heading || "About Us"}
      </h2>

      {description && (
        <p
          style={{
            fontSize: bodyFontSize ? `${bodyFontSize}px` : "15px",
            color: bodyColor ? `#${bodyColor}` : "#374151",
            lineHeight: 1.75,
            margin: 0,
            marginBottom: 24,
          }}
        >
          {description}
        </p>
      )}

      {subheading && (
        <h3
          style={{
            fontSize: subheadingFontSize ? `${subheadingFontSize}px` : "18px",
            fontWeight: 700,
            color: subheadingColor ? `#${subheadingColor}` : "#1a1207",
            margin: 0,
            marginBottom: 16,
          }}
        >
          {subheading}
        </h3>
      )}

      {listItems?.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
            gap: listGap ? `${listGap}px` : "16px",
          }}
        >
          {listItems.map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span
                style={{
                  fontSize: listIconSize ? `${listIconSize}px` : "14px",
                  color: listIconColor ? `#${listIconColor}` : "#92400e",
                  fontWeight: 700,
                  lineHeight: "1.6",
                  flexShrink: 0,
                }}
              >
                {item.icon || "✓"}
              </span>
              <span
                style={{
                  fontSize: listTextSize ? `${listTextSize}px` : "15px",
                  color: listTextColor ? `#${listTextColor}` : "#374151",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      )}

      {(primaryButtonLabel || secondaryButtonLabel) && (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {primaryButtonLabel && (
            <a
              href={primaryButtonLink || "#"}
              style={{
                display: "inline-block",
                padding: `${primaryPaddingY ?? 12}px ${primaryPaddingX ?? 28}px`,
                background: primaryBg ? `#${primaryBg}` : "#1a1207",
                color: primaryColor ? `#${primaryColor}` : "#ffffff",
                fontSize: primaryFontSize ? `${primaryFontSize}px` : "14px",
                fontWeight: primaryFontWeight || 600,
                textDecoration: "none",
                borderRadius: primaryBorderRadius ? `${primaryBorderRadius}px` : "4px",
                border:
                  primaryBorderStyle && primaryBorderStyle !== "none"
                    ? `${primaryBorderWidth ?? 2}px ${primaryBorderStyle} #${primaryBorderColor || "1a1207"}`
                    : "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {primaryButtonLabel}
            </a>
          )}
          {secondaryButtonLabel && (
            <a
              href={secondaryButtonLink || "#"}
              style={{
                display: "inline-block",
                padding: `${secondaryPaddingY ?? 12}px ${secondaryPaddingX ?? 28}px`,
                background: secondaryBg ? `#${secondaryBg}` : "#ffffff",
                color: secondaryColor ? `#${secondaryColor}` : "#1a1207",
                fontSize: secondaryFontSize ? `${secondaryFontSize}px` : "14px",
                fontWeight: secondaryFontWeight || 600,
                textDecoration: "none",
                borderRadius: secondaryBorderRadius ? `${secondaryBorderRadius}px` : "4px",
                border:
                  secondaryBorderStyle && secondaryBorderStyle !== "none"
                    ? `${secondaryBorderWidth ?? 2}px ${secondaryBorderStyle} #${secondaryBorderColor || "1a1207"}`
                    : "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              {secondaryButtonLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );

  // ── Image Column ──────────────────────────────────────────
  const imageCol = (
    <div
      style={{
        flex: `0 0 calc(${100 - (contentWidth ?? 52)}% - ${columnGap ?? 64}px)`,
        position: "relative",
        minHeight: image1Height ? `${image1Height}px` : "480px",
      }}
    >
      {/* Image 1 — large, left-aligned */}
      {image1 ? (
        <img
          src={image1}
          alt={image1Alt || ""}
          loading="lazy"
          style={{
            width: `${100 - (image2Width ?? 55) - 4}%`,
            height: image1Height ? `${image1Height}px` : "480px",
            objectFit: "cover",
            borderRadius: imageBorderRadius ? `${imageBorderRadius}px` : "8px",
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      ) : (
        <div
          style={{
            width: `${100 - (image2Width ?? 55) - 4}%`,
            height: image1Height ? `${image1Height}px` : "480px",
            borderRadius: imageBorderRadius ? `${imageBorderRadius}px` : "8px",
            background: "#d1c9bc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            fontSize: 13,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        >
          Image 1
        </div>
      )}

      {/* Image 2 — smaller, right + offset */}
      {image2 ? (
        <img
          src={image2}
          alt={image2Alt || ""}
          loading="lazy"
          style={{
            width: `${image2Width ?? 55}%`,
            height: image2Height ? `${image2Height}px` : "320px",
            objectFit: "cover",
            borderRadius: imageBorderRadius ? `${imageBorderRadius}px` : "8px",
            display: "block",
            position: "absolute",
            right: 0,
            bottom: imageOverlap != null ? `${imageOverlap}px` : "-80px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
          }}
        />
      ) : (
        <div
          style={{
            width: `${image2Width ?? 55}%`,
            height: image2Height ? `${image2Height}px` : "320px",
            borderRadius: imageBorderRadius ? `${imageBorderRadius}px` : "8px",
            background: "#bfb9af",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            fontSize: 13,
            position: "absolute",
            right: 0,
            bottom: imageOverlap != null ? `${imageOverlap}px` : "-80px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
          }}
        >
          Image 2
        </div>
      )}
    </div>
  );

  return (
    <section
      id={htmlId || undefined}
      className={`${className || ""} ${uid}`}
      style={{
        ...buildStyle(props),
        backgroundColor: props.backgroundColor
          ? `#${props.backgroundColor}`
          : "#f5f0ea",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <Overlay color={overlayColor} />

      {/* Responsive styles */}
      <style>{`
        .${uid}-inner {
          display: flex;
          align-items: center;
          gap: ${columnGap ?? 64}px;
          position: relative;
          z-index: 1;
          padding-bottom: ${Math.abs(imageOverlap ?? 80)}px;
        }
        @media (max-width: 768px) {
          .${uid}-inner {
            flex-direction: column !important;
          }
          .${uid}-inner > * {
            max-width: 100% !important;
            flex: 0 0 100% !important;
            width: 100% !important;
          }
        }
      `}</style>

      <div className={`${uid}-inner`}>
        {isRight ? textCol : imageCol}
        {isRight ? imageCol : textCol}
      </div>
    </section>
  );
}