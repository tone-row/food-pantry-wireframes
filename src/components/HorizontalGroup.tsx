import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";

export default function HorizontalGroup({
  children,
  gap = 0,
  align,
}: {
  children: ReactNode;
  gap?: number;
  align?: string;
}) {
  return (
    <div
      className={styles.horizontalGroup}
      style={{ "--gap": gap, alignItems: align } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function BetweenHorizontalGroup({
  children,
  align = "end",
}: {
  children: ReactNode;
  align?: string;
}) {
  return (
    <div
      className={styles.betweenHorizontalGroup}
      style={{ "--align": align } as CSSProperties}
    >
      {children}
    </div>
  );
}
