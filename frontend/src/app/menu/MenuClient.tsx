"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { CategoryPills } from "@/components/CategoryPills";
import { ProductCard } from "@/components/ProductCard";
import styles from "../Home.module.css";

const CATEGORIES = ["All", "Breads", "Cakes", "Pastries", "Cookies", "Breakfast", "Seasonal"];

export function MenuClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [products, active],
  );

  return (
    <>
      <section className={styles.section} style={{ paddingBottom: 24 }}>
        <CategoryPills categories={CATEGORIES} active={active} onSelect={setActive} />
      </section>

      <section className={styles.section} style={{ paddingTop: 24, paddingBottom: 100 }}>
        <div className={styles.productGrid} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" />
          ))}
        </div>
        {products.length > 0 && filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "color-mix(in srgb, var(--color-text) 55%, transparent)" }}>
            <p style={{ fontSize: 15 }}>No items in this category right now — check back soon.</p>
          </div>
        )}
      </section>
    </>
  );
}
