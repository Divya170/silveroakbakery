import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { teamImage } from "@/lib/media";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "The story, philosophy, and people behind Silver Oak Bakery in St. Petersburg, Florida.",
};

const TEAM = [
  { id: "team-1", caption: "Head baker portrait", name: "Maria Alvarez", role: "Head Baker & Founder" },
  { id: "team-2", caption: "Pastry chef portrait", name: "David Chen", role: "Pastry Chef" },
  { id: "team-3", caption: "Cake decorator portrait", name: "Sofia Reyes", role: "Cake Decorator" },
  { id: "team-4", caption: "Front of house portrait", name: "Owen Marsh", role: "Front of House Lead" },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.label} style={{ display: "inline-block" }}>
          About Us
        </div>
        <h1 className={styles.heroHeading}>A Little Bakery With a Lot of Heart</h1>
        <p className={styles.heroText}>The story, the people, and the craft behind Silver Oak Bakery.</p>
      </section>

      <section className={styles.split}>
        <div className={styles.splitImage}>
          <ImagePlaceholder
            caption="Silver Oak Bakery storefront"
            src="/images/scenes/about-storefront.svg"
            shape="rounded"
            radius={28}
            style={{ width: "100%", height: 440 }}
          />
        </div>
        <div className={styles.splitCopy}>
          <div className={styles.label}>Our Story</div>
          <h2 className={styles.heading}>How Silver Oak Began</h2>
          <p className={styles.text}>
            Silver Oak Bakery opened its doors with one goal: bring genuinely handcrafted bread and pastry to St.
            Petersburg. What began as early mornings in a small kitchen has grown into a neighborhood gathering
            place, but the process hasn&rsquo;t changed — everything is still mixed, shaped, and baked by hand.
          </p>
          <p className={styles.text} style={{ marginBottom: 0 }}>
            We named the bakery after the old oak trees that line our street — a small nod to the neighborhood
            that&rsquo;s supported us from day one.
          </p>
        </div>
      </section>

      <section className={styles.surfaceSection}>
        <div className={styles.splitReverse}>
          <div className={styles.splitCopy}>
            <div className={styles.label}>Our Philosophy</div>
            <h2 className={styles.heading}>Craft Over Shortcuts</h2>
            <p className={styles.text}>
              We believe good bread and pastry can&rsquo;t be rushed. Our sourdough is fermented over 24 hours, our
              laminated doughs are folded by hand, and nothing leaves our ovens before it&rsquo;s ready — not before.
            </p>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              Quality and craftsmanship guide every decision, from the ingredients we choose to the way we plate a
              single croissant.
            </p>
          </div>
          <div className={styles.splitImage}>
            <ImagePlaceholder
              caption="Baker folding laminated dough"
              src="/images/scenes/about-baker.svg"
              shape="rounded"
              radius={28}
              style={{ width: "100%", height: 420 }}
            />
          </div>
        </div>
      </section>

      <section className={styles.split} style={{ margin: "96px auto", padding: "0 32px" }}>
        <div className={styles.splitImage}>
          <ImagePlaceholder
            caption="Fresh ingredients on a wooden counter"
            src="/images/scenes/about-ingredients.svg"
            shape="rounded"
            radius={28}
            style={{ width: "100%", height: 420 }}
          />
        </div>
        <div className={styles.splitCopy}>
          <div className={styles.label}>Our Ingredients</div>
          <h2 className={styles.heading}>Simple, Honest, Fresh</h2>
          <p className={styles.text}>
            Real butter, unbleached flour, and fruit sourced from local growers whenever the season allows. No
            shortcuts, no preservatives — just ingredients you could name yourself.
          </p>
          <p className={styles.text} style={{ marginBottom: 0 }}>
            Freshness isn&rsquo;t a marketing word here — it&rsquo;s why we bake in small batches, several times a
            day, instead of once.
          </p>
        </div>
      </section>

      <section className={styles.surfaceSection}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={styles.teamHead}>
            <div className={styles.label}>Meet the Team</div>
            <h2 className={styles.heading} style={{ marginBottom: 0 }}>The Hands Behind the Ovens</h2>
          </div>
          <div className={styles.teamGrid} style={{ marginTop: 44 }}>
            {TEAM.map((member) => (
              <div key={member.id}>
                <ImagePlaceholder
                  caption={member.caption}
                  src={teamImage(member.id)}
                  shape="rounded"
                  radius={20}
                  style={{ width: "100%", height: 260, marginBottom: 16 }}
                />
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.split} style={{ margin: "0 auto", padding: "96px 32px" }}>
        <div className={styles.splitCopy}>
          <div className={styles.label}>Local Connection</div>
          <h2 className={styles.heading}>Proudly St. Petersburg</h2>
          <p className={styles.text} style={{ marginBottom: 22 }}>
            We partner with local farms and roasters when we can, host neighborhood pop-ups, and love catering the
            events that make this community what it is.
          </p>
          <Link href="/contact" className={styles.link}>
            Come Visit Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
        <div className={styles.splitImage}>
          <ImagePlaceholder
            caption="St. Petersburg neighborhood street"
            src="/images/scenes/about-street.svg"
            shape="rounded"
            radius={28}
            style={{ width: "100%", height: 380 }}
          />
        </div>
      </section>
    </>
  );
}
