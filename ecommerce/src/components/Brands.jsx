import { useContext, useEffect, useState } from "react";
import styles from "./brands.module.css";
import Brand from "./Brand";
import { UserContext } from "../context/Provider";

export default function Brands() {
  const { brands, setBrands } = useContext(UserContext);
  return (
    <div className={styles.brandsBar}>
      <h1 className={styles.brandsTitle}>Brands</h1>
      <div className={styles.brandsContainer}>
        {brands.map((brand) => {
          return <Brand key={brand._id} brand={brand} />;
        })}
      </div>
    </div>
  );
}
