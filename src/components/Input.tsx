import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export default function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input className={styles.input} {...props} />;
}
