import { useNavigate } from "react-router-dom";
import styles from "./brands.module.css";
import { useContext } from "react";
import { UserContext } from "../context/Provider";
export default function Brand({ brand }) {
  const navigate = useNavigate();
  const { selectedBrandId, setSelectedBrandId } = useContext(UserContext);
  function handleClickBrand() {
    console.log(brand._id);
    setSelectedBrandId(brand._id);
    navigate(`/brand/${brand._id}`);
  }
  return (
    <div className={styles.brandContainer} onClick={handleClickBrand}>
      <img className={styles.brandImage} src={brand.image}></img>
      <h2 className={styles.brandName}>{brand.name}</h2>
    </div>
  );
}
