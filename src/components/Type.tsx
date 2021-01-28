import {
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./styles.module.scss";

const BASE = 1.111;

export default function Type({
  children,
  size = 1,
  ...props
}: {
  children: ReactNode;
  size?: number;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      {...props}
      style={
        { "--size": Math.pow(BASE, size - 1), ...props.style } as CSSProperties
      }
      className={styles.type}
    >
      {children}
    </div>
  );
}

export function Title({
  children,
  size = 3,
}: {
  children: ReactNode;
  size?: number;
}) {
  return (
    <Type size={size} style={{ fontWeight: 700 }}>
      {children}
    </Type>
  );
}
