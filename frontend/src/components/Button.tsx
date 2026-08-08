import type { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
  buttonProps?: undefined;
};

type ActionButtonProps = CommonProps & {
  href?: undefined;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

function classes(variant: Variant, size: Size, block: boolean, extra?: string) {
  return [styles.btn, styles[variant], styles[size], block ? styles.block : "", extra]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: LinkButtonProps | ActionButtonProps) {
  const { variant = "primary", size = "lg", block = false, className, children } = props;
  const cls = classes(variant, size, block, className);

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props.buttonProps}>
      {children}
    </button>
  );
}
