import Logo from "@/components/Logo/Logo";
import ToggleLightDarkMode from "@/components/ToggleLightDarkMode/ToggleLightDarkMode";

import styles from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.navbar}>
    <Logo />
    <ToggleLightDarkMode />
  </nav>
);

export default Navbar;
