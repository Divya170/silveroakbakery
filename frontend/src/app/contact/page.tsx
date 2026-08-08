import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { BUSINESS } from "@/lib/site-config";
import styles from "./Contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Silver Oak Bakery in St. Petersburg, Florida — address, phone, hours, and a contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div style={{ fontSize: 12.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent-700)", fontWeight: 600, marginBottom: 14 }}>
          Contact
        </div>
        <h1 className={styles.heroHeading}>We&rsquo;d Love to Hear From You</h1>
        <p className={styles.heroText}>Questions, feedback, or just want to say hello — reach out any time.</p>
      </section>

      <section className={styles.layout}>
        <div className={styles.infoCol}>
          <div className={styles.infoList}>
            <div className={styles.infoRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong className={styles.infoLabel}>Address</strong>
                {BUSINESS.address1}
                <br />
                {BUSINESS.address2}
              </div>
            </div>
            <div className={styles.infoRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div>
                <strong className={styles.infoLabel}>Phone</strong>
                <a href={BUSINESS.phoneHref} style={{ color: "var(--color-text)", textDecoration: "none" }}>
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
            <div className={styles.infoRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <div>
                <strong className={styles.infoLabel}>Email</strong>
                <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-text)", textDecoration: "none" }}>
                  {BUSINESS.email}
                </a>
              </div>
            </div>
            <div className={styles.infoRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <strong className={styles.infoLabel}>Hours</strong>
                Mon–Fri 7am–6pm
                <br />
                Sat 7am–5pm · Sun 8am–3pm
              </div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <Button href={BUSINESS.mapsHref} variant="primary" size="md">
              Get Directions
            </Button>
            <a href="#" aria-label="Instagram" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.iconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>

          <div className={styles.mapPlaceholder}>Google Maps embed — {BUSINESS.address1}</div>
        </div>

        <div className={styles.formCol}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
