"use client";

import { useEffect } from "react";
import type { GalleryItem } from "@/lib/types";
import { galleryImage } from "@/lib/media";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./Lightbox.module.css";

export function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close" className={`${styles.iconBtn} ${styles.close}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous"
        className={`${styles.iconBtn} ${styles.prev}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next"
        className={`${styles.iconBtn} ${styles.next}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <ImagePlaceholder
          caption={item.caption}
          src={galleryImage(item.caption)}
          shape="rounded"
          radius={16}
          style={{ width: "100%", height: 520 }}
        />
        <p className={styles.caption}>{item.caption}</p>
      </div>
    </div>
  );
}
