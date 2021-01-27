import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function HorizontalGroup({ children }: { children: ReactNode }) {
  return <div className={styles.horizontalGroup}>{children}</div>;
}
