import { ReactElement } from "react";
import styles from "./styles.module.scss";

export default function Table({ rows }: { rows: ReactElement[] }) {
  return (
    <table className={styles.table}>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <td>{row}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
