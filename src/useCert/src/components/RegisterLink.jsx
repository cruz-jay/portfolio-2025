// RegisterLink.jsx
import Button from "./Button";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

function RegisterLink() {
  const navigate = useNavigate();

  function RedirectRegister() {
    navigate("/useCert/register");
  }

  return (
    <div className={styles.registerSection}>
      <p className={styles.registerText}>New to CSN?</p>
      <Button type="primary" onClick={RedirectRegister}>
        Register Here
      </Button>
    </div>
  );
}

export default RegisterLink;
