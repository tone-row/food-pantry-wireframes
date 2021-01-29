import { CSSProperties, ReactNode } from "react";
import styles from "./styles.module.scss";

export default function VerticalGroup({
  children,
  gap = 0,
  className = "",
}: {
  children: ReactNode;
  gap?: number;
  className?: string;
}) {
  return (
    <div
      className={[styles.verticalGroup, className].join(" ")}
      style={{ "--gap": gap } as CSSProperties}
    >
      {children}
    </div>
  );
}
