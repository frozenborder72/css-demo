import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <nav>
      <ul className={styles["home-navigation"]}>
        <li className="ff-title">
          <Link href="/custom-properties">Custom Properties</Link>
        </li>
        <li className="ff-title">
          <Link href="/advanced-selectors">Advanced Selectors</Link>
        </li>
        <li className="ff-title">
          <Link href="/properties">Properties</Link>
        </li>
        <li className="ff-title">
          <Link href="/accessibility">Accessibility</Link>
        </li>
      </ul>
    </nav>
  );
}
