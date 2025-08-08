"use client"

/**
 * Reusable floral accent that prevents camouflage by controlling opacity,
 * blend and a soft backdrop behind the motif.
 */
function FloralAccent({
  className = "",
  variant = "png", // 'png' (transparent) or 'jpg' (white-bg)
  opacity = 0.08,
  size = 320,
  rotate = 0,
  blur = false,
  ariaLabel = "Decorative floral motif — DesignsByAbhishek",
}) {
  const src = variant === "jpg" ? "/images/floral-designsbyabhishek.jpg" : "/images/floral-designsbyabhishek.png"

  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      aria-hidden="true"
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
    >
      {/* Soft backdrop to avoid motif blending with text */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(253,251,246,0.85), rgba(253,251,246,0.55), rgba(253,251,246,0))",
          filter: blur ? "blur(8px)" : "none",
        }}
      />
      <img
        src={src || "/placeholder.png"}
        alt={ariaLabel}
        className="w-full h-full object-contain"
        style={{ opacity, filter: blur ? "blur(0.5px)" : "none" }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default FloralAccent
