import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Center({ children }: { children: ReactNode }) {
  return <div className={styles.center}>{children}</div>;
}
