import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Box({ children }: { children: ReactNode }) {
  return <div className={styles.box}>{children}</div>;
}

export function BoxWithBorder({ children }: { children: ReactNode }) {
  return <div className={styles.boxWithBorder}>{children}</div>;
}
