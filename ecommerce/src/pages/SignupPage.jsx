import styles from "./SignupPage.module.css";
import routeLogo from "../images/RouteLogo.png";
import Signup from "../components/Signup";
export default function SignUpPage() {
  window.scrollTo(0, 0);
  return (
    <div className={`${styles.wholePage} ${styles.pageBackground1}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={routeLogo}></img>
      </div>
      <Signup />
    </div>
  );
}
