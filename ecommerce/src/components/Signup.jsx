import { Link, useNavigate } from "react-router-dom";
import showPassword from "../images/ShowPassword.avif";
import { UserContext } from "../context/Provider";
import { useContext } from "react";

import styles from "../pages/SignupPage.module.css";
import { useState } from "react";
export default function Signup() {
  const URL = "https://ecommerce.routemisr.com/api/v1/auth/signup";
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState();
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {
    token,
    setToken,
    email,
    setEmail,
    password,
    setPassword,
    userData,
    setUserData,
  } = useContext(UserContext);
  const navigate = useNavigate();

  function handleShowPass() {
    if (showPass === true) {
      setShowPass(false);
    } else if (showPass === false) {
      setShowPass(true);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  async function handleSignUp() {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
          rePassword: password,
          phone: mobileNo,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to Sign Up !");
      }
      const data = await response.json();
      console.log(data);
      setToken(data.token);
      setUserData({ email: data.user.email, username: data.user.name });
      setIsLoading(false);
      navigate("/homepage");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className={styles.fullName}>
          <label className={styles.label}>Full Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.mobileNumber}>
          <label className={styles.label}>Mobile Number</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your mobile no."
            onChange={(e) => {
              setMobileNo(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.email}>
          <label className={styles.label}>E-mail address</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className={styles.password}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            type={showPass ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button
            onClick={handleShowPass}
            className={styles.showPasswordButton}
          >
            <img className={styles.showPassword} src={showPassword}></img>
          </button>
        </div>
        <button className={styles.signUpButton} onClick={handleSignUp}>
          Sign up
        </button>
      </form>
    </div>
  );
}
