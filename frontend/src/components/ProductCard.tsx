import type { Product } from "@/lib/types";
import { formatDietary, formatPrice } from "@/lib/format";
import { productImage } from "@/lib/media";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./ProductCard.module.css";

export function ProductCard({
  product,
  variant = "card",
  imageHeight,
}: {
  product: Product;
  variant?: "card" | "grid" | "plain";
  imageHeight?: number;
}) {
  const dietaryStr = formatDietary(product.dietary);
  const image = productImage(product.name, product.category);

  if (variant === "plain") {
    return (
      <div className={styles.plain}>
        <div className={styles.plainImageWrap}>
          <ImagePlaceholder
            caption={`${product.name} photo`}
            src={image}
            shape="rect"
            zoom
            style={{ width: "100%", height: imageHeight ?? 290 }}
          />
        </div>
        <div>
          <div className={styles.plainTitleRow}>
            <h3 className={styles.plainName}>{product.name}</h3>
            <span className={styles.plainPrice}>{formatPrice(product.price)}</span>
          </div>
          <p className={styles.plainDescription}>{product.description}</p>
        </div>
      </div>
    );
  }

  const isGrid = variant === "grid";

  return (
    <div className={`${styles.card} ${isGrid ? styles.cardGrid : ""}`}>
      <div className={styles.imageWrap}>
        <ImagePlaceholder
          caption={`${product.name} photo`}
          src={image}
          shape="rect"
          zoom
          style={{ width: "100%", height: imageHeight ?? (isGrid ? 210 : 220) }}
        />
        {isGrid && product.bestSeller && (
          <span className={`${styles.badge} ${styles.badgeBestSeller}`}>Best Seller</span>
        )}
        {isGrid && product.seasonal && (
          <span className={`${styles.badge} ${styles.badgeSeasonal}`}>Seasonal</span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{product.name}</h3>
          <span className={styles.price}>{formatPrice(product.price)}</span>
        </div>
        <p className={styles.description}>{product.description}</p>
        {isGrid ? (
          <div className={styles.metaRow}>
            {dietaryStr && <span className={styles.dietary}>{dietaryStr}</span>}
            <span className={styles.allergen}>Contains {product.allergen}</span>
          </div>
        ) : (
          dietaryStr && <span className={styles.dietary}>{dietaryStr}</span>
        )}
      </div>
    </div>
  );
}
