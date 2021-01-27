import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";

export default function VerticalGroup({
  children,
  gap = 0,
}: {
  children: ReactNode;
  gap?: number;
}) {
  return (
    <div
      className={styles.verticalGroup}
      style={{ "--gap": gap } as CSSProperties}
    >
      {children}
    </div>
  );
}
