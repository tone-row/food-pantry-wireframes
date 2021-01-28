import { ReactElement, ReactNode } from "react";
import Button from "./Button";
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
