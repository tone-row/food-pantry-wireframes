import { brandImage } from "../constants";
import styles from "./styles.module.scss";
export default function BrandBlock() {
  return <div className={styles.brandBlock}>{brandImage}</div>;
}
