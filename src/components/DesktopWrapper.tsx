import { CSSProperties, ReactNode } from "react";
import Box from "./Box";
import HorizontalGroup from "./HorizontalGroup";
import styles from "./styles.module.scss";

export default function DesktopWrapper({ children }: { children: ReactNode }) {
  return (
    <div className={styles.desktopWrapper}>
      <aside>
        <Box>
          <HorizontalGroup>
            <div
              className={styles.circle}
              style={{ "--background-color": "red" } as CSSProperties}
            />
            <div
              className={styles.circle}
              style={{ "--background-color": "orange" } as CSSProperties}
            />
            <div
              className={styles.circle}
              style={{ "--background-color": "green" } as CSSProperties}
            />
          </HorizontalGroup>
        </Box>
      </aside>
      <main>{children}</main>
    </div>
  );
}
