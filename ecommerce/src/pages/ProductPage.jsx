import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Provider";
import DisplayProduct from "../components/DisplayProduct";
import styles from "../components/productDetails.module.css";
import Header from "../components/Header";

export default function ProductPage() {
  const { id } = useParams();
  const { product, setProduct } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]); // Initialize as an empty array
  const URL = `https://ecommerce.routemisr.com/api/v1/products/${id}`;
  window.scrollTo(0, 0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(URL);
        const result = await response.json();
        console.log(result.data);
        setProduct(result.data);
        setImages(result.data.images || []); // Directly set images from result.data
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, [URL, setProduct]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.pageGrid}>
        <h1 className={styles.pageTitle}>Product Details</h1>
        <div className={styles.page}>
          <DisplayProduct product={product} images={images} />
        </div>
      </div>
    </div>
  );
}
