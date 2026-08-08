import type {
  ContactMessagePayload,
  GalleryItem,
  Product,
  SpecialOrderPayload,
  Testimonial,
} from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Request to ${path} failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export function getProducts() {
  return getJson<Product[]>("/products");
}

export function getTestimonials() {
  return getJson<Testimonial[]>("/testimonials");
}

export function getGallery() {
  return getJson<GalleryItem[]>("/gallery");
}

async function postJson(path: string, body: unknown) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.json().catch(() => null);
    throw new Error(detail?.message ?? `Request to ${path} failed: ${res.status}`);
  }
  return res.json();
}

export function submitContactMessage(payload: ContactMessagePayload) {
  return postJson("/contact", payload);
}

export function submitSpecialOrder(payload: SpecialOrderPayload) {
  return postJson("/special-orders", payload);
}
