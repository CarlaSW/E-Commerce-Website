import styles from "./SigninPage.module.css";
import routeLogo from "../images/RouteLogo.png";
import Signin from "../components/Signin";
import { useState } from "react";
export default function SigninPage() {
  window.scrollTo(0, 0);
  return (
    <div className={`${styles.wholePage} ${styles.pageBackground1}`}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={routeLogo}></img>
      </div>
      <div className={styles.welcome}>
        <h1>Welcome back to our website</h1>
        <p>Please sign in with your email</p>
      </div>
      <Signin />
    </div>
  );
}
