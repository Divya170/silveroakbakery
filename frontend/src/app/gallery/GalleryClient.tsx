"use client";

import { useMemo, useState } from "react";
import type { GalleryItem } from "@/lib/types";
import { CategoryPills } from "@/components/CategoryPills";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Lightbox } from "@/components/Lightbox";
import { galleryImage } from "@/lib/media";
import homeStyles from "../Home.module.css";
import styles from "./Gallery.module.css";

const CATEGORIES = ["All", "Products", "Bakery", "Behind the Scenes", "Cakes", "Pastries"];
const HEIGHTS = [260, 320, 220, 300, 240, 340];

export function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState("All");
  const [lightboxPos, setLightboxPos] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((g) => g.category === active)),
    [items, active],
  );

  const lightboxItem = lightboxPos !== null ? filtered[lightboxPos] : null;

  return (
    <>
      <section className={homeStyles.section} style={{ paddingBottom: 24 }}>
        <CategoryPills
          categories={CATEGORIES}
          active={active}
          onSelect={(cat) => {
            setActive(cat);
            setLightboxPos(null);
          }}
        />
      </section>

      <section className={homeStyles.section} style={{ paddingTop: 24, paddingBottom: 100 }}>
        <div className={styles.masonry}>
          {filtered.map((item, i) => (
            <button key={item.id} type="button" className={styles.tile} onClick={() => setLightboxPos(i)}>
              <ImagePlaceholder
                caption={item.caption}
                src={galleryImage(item.caption)}
                shape="rect"
                zoom
                style={{ width: "100%", height: HEIGHTS[item.sortOrder % HEIGHTS.length] }}
              />
              <span className={styles.tileLabel}>{item.category}</span>
            </button>
          ))}
        </div>
      </section>

      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={() => setLightboxPos(null)}
          onPrev={() => setLightboxPos((p) => (p === null ? p : (p - 1 + filtered.length) % filtered.length))}
          onNext={() => setLightboxPos((p) => (p === null ? p : (p + 1) % filtered.length))}
        />
      )}
    </>
  );
}
