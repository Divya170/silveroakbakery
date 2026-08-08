import Link from "next/link";
import { OakIcon } from "./OakIcon";
import { NAV, BUSINESS } from "@/lib/site-config";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            <OakIcon color="#f6a06b" size={26} />
            <span className={styles.brandName}>{BUSINESS.name}</span>
          </div>
          <p className={styles.tagline}>Freshly baked. Thoughtfully made.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <div className={styles.heading}>Explore</div>
          <div className={styles.links}>
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className={styles.heading}>Visit</div>
          <div className={styles.contactBlock}>
            <span>
              {BUSINESS.address1}
              <br />
              {BUSINESS.address2}
            </span>
            <a href={BUSINESS.phoneHref} className={styles.link}>
              {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className={styles.link}>
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
