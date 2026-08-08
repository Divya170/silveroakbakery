import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SpecialOrderForm } from "@/components/SpecialOrderForm";
import { specialOrderIcon } from "@/lib/media";
import styles from "./SpecialOrders.module.css";

export const metadata: Metadata = {
  title: "Special Orders",
  description:
    "Custom cakes, birthday orders, event orders, and catering from Silver Oak Bakery — tell us about your occasion.",
};

const CATEGORIES = [
  { id: "cat-cakes", caption: "Custom cake", name: "Custom Cakes" },
  { id: "cat-bday", caption: "Birthday order", name: "Birthday Orders" },
  { id: "cat-event", caption: "Event order", name: "Event Orders" },
  { id: "cat-catering", caption: "Catering spread", name: "Catering" },
  { id: "cat-custom", caption: "Custom request", name: "Custom Requests" },
];

export default function SpecialOrdersPage() {
  return (
    <>
      <section className={styles.hero}>
        <div style={{ fontSize: 12.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent-700)", fontWeight: 600, marginBottom: 14 }}>
          Special Orders
        </div>
        <h1 className={styles.heroHeading}>Made for Your Special Moments</h1>
        <p className={styles.heroText}>
          From birthday cakes to weddings and full-scale catering, we build custom orders around your occasion. Tell
          us what you&rsquo;re planning below.
        </p>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.categoryGrid}>
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className={styles.categoryCard}>
              <ImagePlaceholder
                caption={cat.caption}
                src={specialOrderIcon(cat.id)}
                shape="circle"
                style={{ width: 88, height: 88, margin: "0 auto 16px" }}
              />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.formSection}>
        <div className={styles.formInner}>
          <SpecialOrderForm />
        </div>
      </section>
    </>
  );
}
