function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const KNOWN_PRODUCTS = new Set([
  "Artisan Sourdough",
  "Rustic Baguette",
  "Honey Wheat Loaf",
  "Olive Rosemary Loaf",
  "Chocolate Fudge Cake",
  "Lemon Elderflower Cake",
  "Carrot Walnut Cake",
  "Vanilla Bean Layer Cake",
  "Butter Croissant",
  "Almond Croissant",
  "Pain au Chocolat",
  "Cinnamon Roll",
  "Sea Salt Chocolate Chip",
  "Oatmeal Raisin",
  "Almond Shortbread",
  "Double Ginger Molasses",
  "Ham & Gruyère Croissant",
  "Everything Bagel",
  "Berry Yogurt Parfait",
  "Spinach & Feta Quiche",
  "Pumpkin Spice Loaf",
  "Key Lime Tart",
  "Peach Galette",
  "Gingerbread Cookies",
]);

const KNOWN_GALLERY_CAPTIONS = new Set([
  "Butter croissants, fresh from the oven",
  "Our storefront on Central Avenue",
  "Custom three-tier wedding cake",
  "Shaping the morning sourdough",
  "Almond croissants cooling on the rack",
  "Seasonal fruit tarts",
  "Our warm, sunlit dining corner",
  "Chocolate fudge layer cake",
  "Early morning dough prep",
  "Cinnamon rolls glazed and ready",
  "Fresh loaves lined up for the case",
  "Golden hour at the counter",
]);

const CATEGORY_FALLBACK: Record<string, string> = {
  Breads: "artisan-sourdough",
  Cakes: "vanilla-bean-layer-cake",
  Pastries: "butter-croissant",
  Cookies: "sea-salt-chocolate-chip",
  Breakfast: "everything-bagel",
  Seasonal: "pumpkin-spice-loaf",
};

export function productImage(name: string, category?: string): string {
  if (KNOWN_PRODUCTS.has(name)) return `/images/products/${slug(name)}.svg`;
  const fallback = (category && CATEGORY_FALLBACK[category]) || "artisan-sourdough";
  return `/images/products/${fallback}.svg`;
}

export function galleryImage(caption: string): string {
  if (KNOWN_GALLERY_CAPTIONS.has(caption)) return `/images/gallery/${slug(caption)}.svg`;
  return "/images/gallery/golden-hour-at-the-counter.svg";
}

export function teamImage(id: string): string {
  return `/images/team/${id}.svg`;
}

export function specialOrderIcon(id: string): string {
  return `/images/icons/${id}.svg`;
}
