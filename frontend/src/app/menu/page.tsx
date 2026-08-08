import type { Metadata } from "next";
import { getProducts } from "@/lib/api";
import { MenuClient } from "./MenuClient";
import styles from "../Home.module.css";

export const metadata: Metadata = {
  title: "Our Menu",
  description: "Browse Silver Oak Bakery's full menu of breads, cakes, pastries, cookies, breakfast, and seasonal bakes.",
};

export default async function MenuPage() {
  const products = await getProducts();

  return (
    <>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 32px 28px", textAlign: "center" }}>
        <div className={styles.heroLabel}>Our Menu</div>
        <h1 style={{ fontSize: 44, margin: "0 0 16px" }}>Something Fresh for Every Craving</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 75%, transparent)" }}>
          From morning loaves to celebration cakes, everything here is baked in-house. Prices and availability may
          change seasonally.
        </p>
      </section>

      <MenuClient products={products} />
    </>
  );
}
