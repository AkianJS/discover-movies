import styles from "../styles/Navbar.module.css";
import logo from "../assets/favicon.svg";
import SearchMovie from "./SearchMovie";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.bar}>Bar</li>
        <Link to={"/"}>
        <li className={styles.logo}>
          <img width={50} height={40} src={logo} alt="logo" />
        </li>
        </Link>
        <li className={styles.search}><SearchMovie/></li>
      </ul>
    </nav>
  );
};

export default Navbar;
