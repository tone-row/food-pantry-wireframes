import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Button({
  children,
  active,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <div className={[styles.button, active ? "active" : ""].join(" ")}>
      {children}
    </div>
  );
}
