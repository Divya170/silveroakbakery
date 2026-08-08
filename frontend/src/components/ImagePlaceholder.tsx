import type { CSSProperties } from "react";
import styles from "./ImagePlaceholder.module.css";

type Shape = "rect" | "rounded" | "circle";

export function ImagePlaceholder({
  caption,
  src,
  shape = "rect",
  radius = 0,
  zoom = false,
  style,
  className,
}: {
  caption: string;
  src?: string;
  shape?: Shape;
  radius?: number;
  zoom?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  const borderRadius = shape === "circle" ? "50%" : shape === "rounded" ? `${radius}px` : 0;

  if (src) {
    return (
      <div
        className={[styles.placeholder, styles.filled, zoom ? styles.zoom : "", className].filter(Boolean).join(" ")}
        style={{ borderRadius, ...style }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={src} alt={caption} loading="lazy" />
      </div>
    );
  }

  return (
    <div
      className={[styles.placeholder, zoom ? styles.zoom : "", className].filter(Boolean).join(" ")}
      style={{ borderRadius, ...style }}
      role="img"
      aria-label={caption}
    >
      <svg className={styles.icon} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className={styles.caption}>{caption}</span>
    </div>
  );
}
