import { useContext } from "react";
import { UserContext } from "../context/Provider";
import Header from "../components/Header";
import styles from "./profilePage.module.css";

export default function ProfilePage() {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageGrid}>
        <h1 className={styles.welcome}>Welcome, {userData.username}</h1>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <p className={styles.infoLogo}>Your full name</p>
            <input
              className={styles.infoInput}
              type="text"
              readOnly
              value={userData.username}
            ></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoLogo}>Your Email Address</p>
            <input
              className={styles.infoInput}
              type="text"
              readOnly
              value={userData.email}
            ></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoLogo}>Your Password</p>
            <input className={styles.infoInput}></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoLogo}>Your mobile number</p>
            <input className={styles.infoInput}></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.infoLogo}>Your Address</p>
            <input className={styles.infoInput}></input>
          </div>
        </div>
      </div>
    </div>
  );
}
