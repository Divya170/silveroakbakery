import type { ReactNode } from "react";
import styles from "./FormField.module.css";

export function FormField({
  label,
  required,
  error,
  children,
  fullWidth,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div className={styles.field} style={fullWidth ? { gridColumn: "1 / -1" } : undefined}>
      <label className={styles.label}>
        {label}
        {required ? " *" : ""}
      </label>
      {children}
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}

export function controlClassName(hasError?: string, extra?: string) {
  return [styles.control, hasError ? styles.controlError : "", extra].filter(Boolean).join(" ");
}
