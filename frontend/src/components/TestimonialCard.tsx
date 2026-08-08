import type { Testimonial } from "@/lib/types";
import { StarRating } from "./StarRating";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        background: "var(--color-bg)",
        borderRadius: 20,
        padding: 26,
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <StarRating rating={testimonial.rating} />
      </div>
      <p style={{ fontSize: 14.5, lineHeight: 1.6, fontStyle: "italic", margin: "0 0 16px" }}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div style={{ fontSize: 13, fontWeight: 600 }}>{testimonial.name}</div>
    </div>
  );
}
