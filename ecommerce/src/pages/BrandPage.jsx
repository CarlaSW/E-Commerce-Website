import { useParams } from "react-router-dom";
import SideBarBrands from "../components/SideBarBrands";
import Header from "../components/Header";
import styles from "./brandPage.module.css";
import Product from "../components/Product";
import { useContext } from "react";
import { UserContext } from "../context/Provider";
export default function BrandPage() {
  const { id } = useParams();
  const { products } = useContext(UserContext);
  window.scrollTo(0, 0);
  //console.log(id);
  return (
    <div>
      <Header />
      <div className={styles.pageGrid}>
        <SideBarBrands className={styles.sideBar} />
        <div className={styles.productsGrid}>
          {products.map((product) => {
            return product.brand._id === id ? (
              <Product key={product.id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}
