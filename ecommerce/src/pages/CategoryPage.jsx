import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import styles from "./categoryPage.module.css";
import SideBar from "../components/SideBar";
import { UserContext } from "../context/Provider";
import Product from "../components/Product";

export default function CategoryPage() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { products } = useContext(UserContext);

  return (
    <div>
      <Header />
      <div className={styles.pageGrid}>
        <SideBar className={styles.sideBar} />
        <div className={styles.productsGrid}>
          {products.map((product) => {
            return product.category._id === id ? (
              <Product key={product.id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
