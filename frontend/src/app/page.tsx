import Link from "next/link";
import { getProducts, getTestimonials } from "@/lib/api";
import { Button } from "@/components/Button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { BUSINESS } from "@/lib/site-config";
import styles from "./Home.module.css";

export default async function HomePage() {
  const [products, testimonials] = await Promise.all([getProducts(), getTestimonials()]);
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const bestSellers = products.filter((p) => p.bestSeller).slice(0, 4);

  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.heroCopy} fade-up`}>
          <div className={styles.heroLabel}>Handcrafted in St. Petersburg</div>
          <h1 className={styles.heroHeading}>Freshly Baked. Thoughtfully Made.</h1>
          <p className={styles.heroText}>
            Handcrafted breads, pastries, cakes, and sweet treats made fresh every morning with quality ingredients
            and a little extra care.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/menu" variant="primary" size="lg">
              Explore Our Menu
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Visit Silver Oak Bakery
            </Button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <ImagePlaceholder
            caption="Hero photo — pastries on the bakery counter"
            src="/images/scenes/hero-home.svg"
            shape="rounded"
            radius={28}
            style={{ width: "100%", height: 520, boxShadow: "var(--shadow-lg)" }}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div className={styles.heroLabel} style={{ marginBottom: 12 }}>
            Our Favorites
          </div>
          <h2 className={styles.sectionHeading}>Made Fresh. Loved Daily.</h2>
        </div>
        <div className={styles.productGrid}>
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} variant="card" />
          ))}
        </div>
      </section>

      <section className={styles.storySplit}>
        <div className={styles.storyImage}>
          <ImagePlaceholder
            caption="Baker shaping dough by hand"
            src="/images/scenes/hero-story.svg"
            shape="rounded"
            radius={28}
            style={{ width: "100%", height: 460 }}
          />
        </div>
        <div className={styles.storyCopy}>
          <div className={styles.storyLabel}>Our Story</div>
          <h2 className={styles.storyHeading}>A Little Bakery With a Lot of Heart</h2>
          <p className={styles.storyText}>
            Silver Oak Bakery started as a single oven and a simple promise: bake everything the slow way, with real
            butter, real flour, and real care. Every loaf and pastry is still shaped by hand each morning.
          </p>
          <p className={styles.storyText} style={{ marginBottom: 26 }}>
            Today we&rsquo;re proud to be part of the St. Petersburg community — a neighborhood spot where regulars
            know us by name.
          </p>
          <Link href="/about" className={styles.storyLink}>
            Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <section className={styles.sectionSurface}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={styles.sectionHead}>
            <div className={styles.heroLabel} style={{ marginBottom: 12 }}>
              Why Choose Silver Oak
            </div>
            <h2 className={styles.sectionHeading}>Small Batches. Big Care.</h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <svg className={styles.whyIcon} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
              <h3>Fresh Every Day</h3>
              <p>Our breads and pastries are prepared fresh each morning, never held over.</p>
            </div>
            <div className={styles.whyItem}>
              <svg className={styles.whyIcon} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <h3>Quality Ingredients</h3>
              <p>Thoughtfully sourced butter, flour, and fruit go into every recipe.</p>
            </div>
            <div className={styles.whyItem}>
              <svg className={styles.whyIcon} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3>Made by Hand</h3>
              <p>Small-batch baking with attention paid to every fold and shape.</p>
            </div>
            <div className={styles.whyItem}>
              <svg className={styles.whyIcon} width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3>Local &amp; Welcoming</h3>
              <p>A neighborhood bakery made for the St. Petersburg community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ paddingTop: 96 }}>
        <div className={styles.bestSellersHead}>
          <h2 className={styles.bestSellersHeading}>A Few Things You&rsquo;ll Love</h2>
          <Link href="/menu" className={styles.viewMenuLink}>
            View Full Menu →
          </Link>
        </div>
        <div className={styles.bestSellersGrid}>
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} variant="plain" />
          ))}
        </div>
      </section>

      <section className={styles.occasionsSection}>
        <div className={styles.occasionsBanner}>
          <ImagePlaceholder
            caption="Custom celebration cake"
            src="/images/scenes/occasions-cake.svg"
            shape="rect"
            style={{ width: "100%", height: 440 }}
          />
          <div className={styles.occasionsOverlay} />
          <div className={styles.occasionsCopy}>
            <h2 className={styles.occasionsHeading}>Made for Your Special Moments</h2>
            <p className={styles.occasionsText}>
              From birthday cakes to weddings and gatherings, we create custom treats made to make the occasion
              memorable.
            </p>
            <span className={styles.occasionsCta}>
              <Button href="/special-orders" variant="primary" size="lg">
                Explore Special Orders
              </Button>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.sectionSurface}>
        <div className={styles.testimonialsInner}>
          <h2 className={styles.testimonialsHeading}>What Our Customers Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.visitSection}>
        <div className={styles.visitCopy}>
          <div className={styles.storyLabel}>Visit Us</div>
          <h2 className={styles.visitHeading}>Come Say Hello</h2>
          <div className={styles.visitDetails}>
            <div className={styles.visitRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {BUSINESS.address1}
                <br />
                {BUSINESS.address2}
              </span>
            </div>
            <div className={styles.visitRow} style={{ alignItems: "center" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={BUSINESS.phoneHref} style={{ textDecoration: "none", color: "var(--color-text)" }}>
                {BUSINESS.phone}
              </a>
            </div>
            <div className={styles.visitRow}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c67139" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 2 }}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Mon–Fri 7am–6pm · Sat 7am–5pm · Sun 8am–3pm</span>
            </div>
          </div>
          <div className={styles.visitCtas}>
            <Button href={BUSINESS.mapsHref} variant="primary" size="md">
              Get Directions
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="md">
              Call Us
            </Button>
          </div>
        </div>
        <div className={styles.visitMap}>
          <div className={styles.mapPlaceholder}>Google Maps embed — {BUSINESS.address1}, {BUSINESS.address2}</div>
        </div>
      </section>
    </>
  );
}
