import React, { useId } from "react";

// ── Helpers ───────────────────────────────────────────────────
const buildRadius = (tl = 0, tr = 0, br = 0, bl = 0) =>
  `${tl}px ${tr}px ${br}px ${bl}px`;

const buildBorder = (w, s, c) =>
  w && s && s !== "none" ? `${w}px ${s} ${c || "#e5e7eb"}` : undefined;

/**
 * Parses a JSON string of CSS props into a flat CSS rule string.
 * e.g. { "minHeight": "300px" } → "min-height: 300px;"
 */
const parseResponsiveStyles = (jsonString = "") => {
  if (!jsonString?.trim()) return "";
  try {
    const obj = JSON.parse(jsonString);
    return Object.entries(obj)
      .map(([key, val]) => {
        // Convert camelCase → kebab-case
        const cssKey = key.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
        return `${cssKey}: ${val};`;
      })
      .join("\n  ");
  } catch {
    return `/* Invalid JSON in responsive styles */`;
  }
};

/**
 * Builds a scoped <style> block with:
 *  - tablet media query  (≤1024px)
 *  - mobile media query  (≤768px)
 *  - custom CSS (raw, scoped to the section id/class)
 */
const buildStyleTag = ({ uid, tabletStyles, mobileStyles, customCss }) => {
  const tablet = parseResponsiveStyles(tabletStyles);
  const mobile = parseResponsiveStyles(mobileStyles);

  const tabletBlock = tablet
    ? `@media (max-width: 1024px) {\n  #${uid} {\n  ${tablet}\n  }\n}`
    : "";

  const mobileBlock = mobile
    ? `@media (max-width: 768px) {\n  #${uid} {\n  ${mobile}\n  }\n}`
    : "";

  // customCss is injected as-is but only when uid is available to scope it
  const custom = customCss?.trim()
    ? `/* Custom CSS */\n${customCss}`
    : "";

  return [tabletBlock, mobileBlock, custom].filter(Boolean).join("\n\n");
};

// ── Default Props ─────────────────────────────────────────────
const defaultProps = {
  width: "100%",
  minHeight: 520,
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,

  borderRadiusTopLeft: 0,
  borderRadiusTopRight: 0,
  borderRadiusBottomRight: 0,
  borderRadiusBottomLeft: 0,

  borderTopWidth: 0,
  borderTopStyle: "none",
  borderTopColor: "#e5e7eb",
  borderRightWidth: 0,
  borderRightStyle: "none",
  borderRightColor: "#e5e7eb",
  borderBottomWidth: 0,
  borderBottomStyle: "none",
  borderBottomColor: "#e5e7eb",
  borderLeftWidth: 0,
  borderLeftStyle: "none",
  borderLeftColor: "#e5e7eb",

  boxShadow: "",
  backgroundImage: "",
  overlayColor: "#000000",
  overlayOpacity: 0.5,
  contentMaxWidth: 700,
  contentAlign: "center",
  contentVerticalAlign: "center",
  textAlign: "center",

  showHeading: "true",
  showSubheading: "true",
  showDescription: "true",
  showPrimaryButton: "true",
  showSecondaryButton: "true",
  showScrollIndicator: "true",

  heading: "Bamboo Flooring",
  headingColor: "#ffffff",
  headingFontSize: 56,
  headingFontWeight: "800",
  headingFontFamily: "Georgia, 'Times New Roman', serif",
  headingLetterSpacing: -0.5,
  headingLineHeight: 1.1,
  headingMarginBottom: 20,

  subheading: "Quality Bathroom Solutions for Modern Living",
  subheadingColor: "#ffffff",
  subheadingFontSize: 18,
  subheadingFontWeight: "400",
  subheadingOpacity: 0.9,
  subheadingMarginBottom: 16,

  description:
    "Discover our premium collection of bathroom fixtures, tapware, and accessories designed to elevate your space with Australian quality and style.",
  descriptionColor: "#ffffff",
  descriptionFontSize: 16,
  descriptionFontWeight: "400",
  descriptionOpacity: 0.8,
  descriptionLineHeight: 1.7,
  descriptionMaxWidth: 560,
  descriptionMarginBottom: 36,

  primaryButtonLabel: "Shop Collection",
  primaryButtonLink: "#",
  primaryButtonBg: "#ffffff",
  primaryButtonColor: "#111111",
  primaryButtonBorderColor: "#ffffff",
  primaryButtonBorderWidth: 2,
  primaryButtonBorderStyle: "solid",
  primaryButtonBorderRadiusTL: 4,
  primaryButtonBorderRadiusTR: 4,
  primaryButtonBorderRadiusBR: 4,
  primaryButtonBorderRadiusBL: 4,
  primaryButtonFontSize: 15,
  primaryButtonFontWeight: "600",
  primaryButtonPaddingX: 32,
  primaryButtonPaddingY: 14,

  secondaryButtonLabel: "Learn More",
  secondaryButtonLink: "#",
  secondaryButtonBg: "rgba(255,255,255,0.12)",
  secondaryButtonColor: "#ffffff",
  secondaryButtonBorderColor: "#ffffff",
  secondaryButtonBorderWidth: 2,
  secondaryButtonBorderStyle: "solid",
  secondaryButtonBorderRadiusTL: 4,
  secondaryButtonBorderRadiusTR: 4,
  secondaryButtonBorderRadiusBR: 4,
  secondaryButtonBorderRadiusBL: 4,
  secondaryButtonFontSize: 15,
  secondaryButtonFontWeight: "600",
  secondaryButtonPaddingX: 32,
  secondaryButtonPaddingY: 14,

  scrollIndicatorColor: "#ffffff",

  // ── Responsive + Custom CSS ──────────────────────────────
  tabletStyles: "",
  mobileStyles: "",
  customCss: "",
};

// ── Component ─────────────────────────────────────────────────
export default function HeroSection(userProps) {
  const reactId = useId(); // stable unique ID per instance
  const {
    width,
    maxWidth,
    minHeight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    borderRadiusBottomLeft,
    borderTopWidth,
    borderTopStyle,
    borderTopColor,
    borderRightWidth,
    borderRightStyle,
    borderRightColor,
    borderBottomWidth,
    borderBottomStyle,
    borderBottomColor,
    borderLeftWidth,
    borderLeftStyle,
    borderLeftColor,
    boxShadow,
    backgroundImage,
    overlayColor,
    overlayOpacity,
    contentMaxWidth,
    contentAlign,
    contentVerticalAlign,
    textAlign,
    showHeading,
    showSubheading,
    showDescription,
    showPrimaryButton,
    showSecondaryButton,
    showScrollIndicator,
    heading,
    headingColor,
    headingFontSize,
    headingFontWeight,
    headingFontFamily,
    headingLetterSpacing,
    headingLineHeight,
    headingMarginBottom,
    subheading,
    subheadingColor,
    subheadingFontSize,
    subheadingFontWeight,
    subheadingOpacity,
    subheadingMarginBottom,
    description,
    descriptionColor,
    descriptionFontSize,
    descriptionFontWeight,
    descriptionOpacity,
    descriptionLineHeight,
    descriptionMaxWidth,
    descriptionMarginBottom,
    primaryButtonLabel,
    primaryButtonLink,
    primaryButtonBg,
    primaryButtonColor,
    primaryButtonBorderColor,
    primaryButtonBorderWidth,
    primaryButtonBorderStyle,
    primaryButtonBorderRadiusTL,
    primaryButtonBorderRadiusTR,
    primaryButtonBorderRadiusBR,
    primaryButtonBorderRadiusBL,
    primaryButtonFontSize,
    primaryButtonFontWeight,
    primaryButtonPaddingX,
    primaryButtonPaddingY,
    secondaryButtonLabel,
    secondaryButtonLink,
    secondaryButtonBg,
    secondaryButtonColor,
    secondaryButtonBorderColor,
    secondaryButtonBorderWidth,
    secondaryButtonBorderStyle,
    secondaryButtonBorderRadiusTL,
    secondaryButtonBorderRadiusTR,
    secondaryButtonBorderRadiusBR,
    secondaryButtonBorderRadiusBL,
    secondaryButtonFontSize,
    secondaryButtonFontWeight,
    secondaryButtonPaddingX,
    secondaryButtonPaddingY,
    scrollIndicatorColor,
    htmlId,
    className,
    tabletStyles,
    mobileStyles,
    customCss,
  } = { ...defaultProps, ...userProps };

  // Use htmlId if provided, otherwise fall back to the stable React id
  const uid = htmlId || `hero-${reactId.replace(/:/g, "")}`;

  const itemAlign =
    textAlign === "left"
      ? "flex-start"
      : textAlign === "right"
      ? "flex-end"
      : "center";

  const styleTag = buildStyleTag({ uid, tabletStyles, mobileStyles, customCss });

  return (
    <>
      {/* ── Scoped styles: responsive overrides + custom CSS ── */}
      {styleTag && <style>{styleTag}</style>}

      <section
        id={uid}
        className={className || undefined}
        style={{
          position: "relative",
          width: width || "100%",
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
          minHeight: minHeight ? `${minHeight}px` : "520px",
          marginTop: marginTop ? `${marginTop}px` : undefined,
          marginBottom: marginBottom ? `${marginBottom}px` : undefined,
          marginLeft: marginLeft ?? "auto",
          marginRight: marginRight ?? "auto",
          paddingTop: paddingTop ? `${paddingTop}px` : undefined,
          paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
          paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
          paddingRight: paddingRight ? `${paddingRight}px` : undefined,
          borderRadius: buildRadius(
            borderRadiusTopLeft,
            borderRadiusTopRight,
            borderRadiusBottomRight,
            borderRadiusBottomLeft,
          ),
          borderTop: buildBorder(borderTopWidth, borderTopStyle, borderTopColor),
          borderRight: buildBorder(borderRightWidth, borderRightStyle, borderRightColor),
          borderBottom: buildBorder(borderBottomWidth, borderBottomStyle, borderBottomColor),
          borderLeft: buildBorder(borderLeftWidth, borderLeftStyle, borderLeftColor),
          boxShadow: boxShadow || undefined,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: contentVerticalAlign || "center",
          justifyContent: contentAlign || "center",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        {/* ── Overlay ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: overlayColor || "#000000",
            opacity: overlayOpacity ?? 0.5,
            zIndex: 1,
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: textAlign || "center",
            maxWidth: contentMaxWidth ? `${contentMaxWidth}px` : "700px",
            width: "100%",
            padding: "48px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: itemAlign,
          }}
        >
          {/* Heading */}
          {showHeading !== "false" && heading && (
            <h1
              style={{
                color: headingColor || "#ffffff",
                fontSize: headingFontSize ? `${headingFontSize}px` : "56px",
                fontWeight: headingFontWeight || "800",
                fontFamily: headingFontFamily || "Georgia, serif",
                letterSpacing:
                  headingLetterSpacing != null
                    ? `${headingLetterSpacing}px`
                    : "-0.5px",
                lineHeight: headingLineHeight || 1.1,
                margin: 0,
                marginBottom:
                  headingMarginBottom != null
                    ? `${headingMarginBottom}px`
                    : "20px",
                textShadow: "0 2px 12px rgba(0,0,0,0.35)",
              }}
            >
              {heading}
            </h1>
          )}

          {/* Subheading */}
          {showSubheading !== "false" && subheading && (
            <p
              style={{
                color: subheadingColor || "#ffffff",
                fontSize: subheadingFontSize ? `${subheadingFontSize}px` : "18px",
                fontWeight: subheadingFontWeight || "400",
                opacity: subheadingOpacity ?? 0.9,
                margin: 0,
                marginBottom:
                  subheadingMarginBottom != null
                    ? `${subheadingMarginBottom}px`
                    : "16px",
                letterSpacing: "0.02em",
              }}
            >
              {subheading}
            </p>
          )}

          {/* Description */}
          {showDescription !== "false" && description && (
            <p
              style={{
                color: descriptionColor || "#ffffff",
                fontSize: descriptionFontSize ? `${descriptionFontSize}px` : "16px",
                fontWeight: descriptionFontWeight || "400",
                opacity: descriptionOpacity ?? 0.8,
                lineHeight: descriptionLineHeight || 1.7,
                maxWidth: descriptionMaxWidth ? `${descriptionMaxWidth}px` : "560px",
                margin: 0,
                marginBottom:
                  descriptionMarginBottom != null
                    ? `${descriptionMarginBottom}px`
                    : "36px",
              }}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          {(showPrimaryButton !== "false" || showSecondaryButton !== "false") && (
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: itemAlign,
                marginTop: 8,
              }}
            >
              {showPrimaryButton !== "false" && primaryButtonLabel && (
                <a
                  href={primaryButtonLink || "#"}
                  style={{
                    display: "inline-block",
                    padding: `${primaryButtonPaddingY ?? 14}px ${primaryButtonPaddingX ?? 32}px`,
                    background: primaryButtonBg || "#ffffff",
                    color: primaryButtonColor || "#111111",
                    fontWeight: primaryButtonFontWeight || "600",
                    fontSize: primaryButtonFontSize
                      ? `${primaryButtonFontSize}px`
                      : "15px",
                    textDecoration: "none",
                    borderRadius: buildRadius(
                      primaryButtonBorderRadiusTL,
                      primaryButtonBorderRadiusTR,
                      primaryButtonBorderRadiusBR,
                      primaryButtonBorderRadiusBL,
                    ),
                    border:
                      buildBorder(
                        primaryButtonBorderWidth,
                        primaryButtonBorderStyle,
                        primaryButtonBorderColor,
                      ) || "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  {primaryButtonLabel}
                </a>
              )}

              {showSecondaryButton !== "false" && secondaryButtonLabel && (
                <a
                  href={secondaryButtonLink || "#"}
                  style={{
                    display: "inline-block",
                    padding: `${secondaryButtonPaddingY ?? 14}px ${secondaryButtonPaddingX ?? 32}px`,
                    background: secondaryButtonBg || "rgba(255,255,255,0.12)",
                    color: secondaryButtonColor || "#ffffff",
                    fontWeight: secondaryButtonFontWeight || "600",
                    fontSize: secondaryButtonFontSize
                      ? `${secondaryButtonFontSize}px`
                      : "15px",
                    textDecoration: "none",
                    borderRadius: buildRadius(
                      secondaryButtonBorderRadiusTL,
                      secondaryButtonBorderRadiusTR,
                      secondaryButtonBorderRadiusBR,
                      secondaryButtonBorderRadiusBL,
                    ),
                    border:
                      buildBorder(
                        secondaryButtonBorderWidth,
                        secondaryButtonBorderStyle,
                        secondaryButtonBorderColor,
                      ) || "none",
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

        {/* ── Scroll Indicator ── */}
        {showScrollIndicator !== "false" && (
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          >
            <svg
              width="28"
              height="44"
              viewBox="0 0 28 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.75 }}
            >
              <rect
                x="1"
                y="1"
                width="26"
                height="42"
                rx="13"
                stroke={scrollIndicatorColor || "#ffffff"}
                strokeWidth="2"
              />
              <circle cx="14" cy="10" r="3" fill={scrollIndicatorColor || "#ffffff"}>
                <animate
                  attributeName="cy"
                  from="10"
                  to="30"
                  dur="1.4s"
                  repeatCount="indefinite"
                  calcMode="ease-in-out"
                />
                <animate
                  attributeName="opacity"
                  from="1"
                  to="0"
                  dur="1.4s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>
        )}
      </section>
    </>
  );
}