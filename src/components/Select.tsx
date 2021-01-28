import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Select({ children }: { children: ReactNode }) {
  return <select className={styles.select}>{children}</select>;
}
