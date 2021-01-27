import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";

const BASE = 1.33;

export default function Type({
  children,
  size = 1,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <div
      style={{ "--size": Math.pow(BASE, size - 1) } as CSSProperties}
      className={styles.type}
    >
      {children}
    </div>
  );
}
