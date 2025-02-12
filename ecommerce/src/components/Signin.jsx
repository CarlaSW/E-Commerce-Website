import { Link, useNavigate } from "react-router-dom";
import styles from "../pages/SigninPage.module.css";
import showPassword from "../images/ShowPassword.avif";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";

export default function Signin() {
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
  const URL = "https://ecommerce.routemisr.com/api/v1/auth/signin";
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

  function handleEnterKeyDown(e) {
    if (e.key === "Enter") {
      handleLogin();
    }
  }
  async function handleLogin() {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password }),
      });
      //console.log(response);

      if (!response.ok) {
        throw new Error("Failed to log in !");
      }
      const data = await response.json();
      setToken(data.token);
      console.log("You are logged in successfully !!!");
      console.log(data);
      setUserData({ email: data.user.email, username: data.user.name });
      setIsLoading(false);
      navigate("/homepage");
    } catch (error) {
      console.error("Error during Log in !", error);
    }
  }

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        onKeyDown={(e) => {
          handleEnterKeyDown(e);
        }}
      >
        <div className={styles.userName}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your email"
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
            type="button"
            onClick={handleShowPass}
            className={styles.showPasswordButton}
          >
            <img className={styles.showPassword} src={showPassword}></img>
          </button>
        </div>

        <button className={styles.forgotPassButton}>Forgot password</button>
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
        <Link className={styles.linkToSignup} to="/signUp">
          Don't have an account? Create an account
        </Link>
      </form>
    </div>
  );
}
