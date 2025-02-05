import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.logoSection}></div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="https://www.csn.edu">CSN Home</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/admissions">Admissions</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/financial-aid">Financial Aid</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/academics">Academic Programs</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="https://www.csn.edu/canvas">Canvas</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/directory">Directory</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/library">Library</a>
                </li>
                <li>
                  <a href="https://www.csn.edu/bookstore">Bookstore</a>
                </li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Info</h4>
              <ul>
                <li>Las Vegas, Nevada</li>
                <li>(702) 330-7487</li>
                <li> ######## </li>
                <li> ######## </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.apple}>&copy; 2024 Apple^2</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
