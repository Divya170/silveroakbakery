import type { Metadata } from "next";
import { getGallery } from "@/lib/api";
import { GalleryClient } from "./GalleryClient";
import styles from "../Home.module.css";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A peek behind the counter at Silver Oak Bakery — fresh bakes, custom cakes, and everyday moments.",
};

export default async function GalleryPage() {
  const items = await getGallery();

  return (
    <>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 32px 20px", textAlign: "center" }}>
        <div className={styles.heroLabel}>Gallery</div>
        <h1 style={{ fontSize: 44, margin: "0 0 16px" }}>A Peek Behind the Counter</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 75%, transparent)" }}>
          Fresh bakes, custom cakes, and the everyday moments that make Silver Oak home.
        </p>
      </section>

      <GalleryClient items={items} />
    </>
  );
}
