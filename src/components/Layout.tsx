import { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

export default function Layout({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactElement;
}) {
  return (
    <div className={styles.layout}>
      <aside>{aside}</aside>
      <main>{children}</main>
    </div>
  );
}
