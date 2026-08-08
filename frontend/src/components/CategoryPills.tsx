import styles from "./CategoryPills.module.css";

export function CategoryPills({
  categories,
  active,
  onSelect,
}: {
  categories: string[];
  active: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className={styles.row}>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={`${styles.pill} ${cat === active ? styles.active : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
