import { Link } from "react-router-dom";


import styles from "./Navbar.module.css";
import logo from '../../../img/master-projects_logo.png';
import Container from "../Container/Container";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="master projects" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/"> Home </Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects"> Projetos </Link>
          </li>
          <li className={styles.item}>
            <Link to="/company"> Empresa </Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact"> Contato </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
