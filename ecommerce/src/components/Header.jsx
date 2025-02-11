import styles from "./header.module.css";
import RouteLogo2 from "../images/RouteLogo2.png";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Provider";

export default function Header() {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(UserContext);
  function handlerefreshPage() {
    //  console.log("Navigating to /homepage");
    setQuery("");
    navigate("/homepage");
  }
  function handleCartButton() {
    navigate("/cart");
  }
  function handleWishlistButton() {
    navigate("/wishlist");
  }
  function handleProfileButton() {
    navigate("/profile");
  }
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src={RouteLogo2}
        onClick={handlerefreshPage}
      ></img>
      <Search />
      <button className={styles.heartButton} onClick={handleWishlistButton}>
        ❤️
      </button>
      <button className={styles.cartButton} onClick={handleCartButton}>
        🛒
      </button>
      <button className={styles.profileButton} onClick={handleProfileButton}>
        👤
      </button>
    </div>
  );
}
