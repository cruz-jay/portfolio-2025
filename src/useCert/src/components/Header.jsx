// Header.jsx
import { Container, Navbar, NavbarBrand } from "reactstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <Navbar dark className={styles.navbar} sticky="top" expand="md">
        <Container>
          <NavbarBrand>
            <div className={styles.headerContent}>
              <h1 className={styles.title}>Exam Registration System</h1>
            </div>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
