export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function formatDietary(dietary: string[]) {
  return dietary.join(", ");
}
