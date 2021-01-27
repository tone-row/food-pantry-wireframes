import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Button({ children }: { children: ReactNode }) {
  return <div className={styles.button}>{children}</div>;
}
