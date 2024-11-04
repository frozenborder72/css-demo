import Link from "next/link";
import styles from "./Logo.module.scss";

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/" className="ff-title">
      css demo
    </Link>
  </div>
);

export default Logo;
