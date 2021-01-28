import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export default function TextArea({
  children,
  ...props
}: DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) {
  return (
    <textarea className={styles.textarea} {...props}>
      {children}
    </textarea>
  );
}
