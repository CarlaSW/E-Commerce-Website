import { useNavigate } from "react-router-dom";
import styles from "./product.module.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";
export default function Product({ product }) {
  const navigate = useNavigate();
  const { cart, setCart, token, wishes, setWishes, totalCost, setTotalCost } =
    useContext(UserContext);
  const URL = "https://ecommerce.routemisr.com/api/v1/cart";
  const URLaddToWishList = "https://ecommerce.routemisr.com/api/v1/wishlist";
  const [addedToWish, setAddedToWish] = useState(false);
  useEffect(() => {
    wishes.map((wishItem) => {
      if (wishItem.id === product.id) {
        setAddedToWish(true);
      }
      return wishItem;
    });
  }, [wishes]);

  function handleProductClick() {
    navigate(`/product/${product.id}`);
  }
  async function handleAddToCart(e) {
    e.stopPropagation();
    try {
      console.log("vjhvvvvvvvvvv");
      const response = await fetch(URL, {
        method: "Post",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      });
      if (!response.ok) {
        throw new Error("Cannot add this item to cart !!!");
      }
      const result = await response.json();
      console.log("result of cart item:", result);
    } catch (error) {
      console.error("Error ;", error);
    }
  }
  async function handleAddToWishlistButton(e) {
    e.stopPropagation();
    try {
      const response = await fetch(URLaddToWishList, {
        method: "Post",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: `${product.id}` }),
      });
      if (!response.ok) {
        throw new Error("Cannot add this item to wishlist !!!");
      }
      const result = await response.json();
      console.log(result);
      setAddedToWish(true);
    } catch (error) {
      console.error("Error : ", error);
    }
  }
  return (
    <div className={styles.productContainer} onClick={handleProductClick}>
      <div className={styles.imageConatiner}>
        <button
          className={styles.likeButton}
          onClick={(e) => {
            handleAddToWishlistButton(e);
          }}
        >
          {addedToWish ? "❤️" : "🤍"}
        </button>
        <img className={styles.image} src={product.imageCover}></img>
      </div>
      <div className={styles.info}>
        <p className={styles.nameContainer}>{product.title}</p>
        <div className={styles.priceContainer}>
          {product.priceAfterDiscount ? (
            <>
              <span className={styles.afterDiscount}>
                EGP {product.priceAfterDiscount}
              </span>
              <span className={styles.beforeDiscount}>{product.price} EGP</span>
            </>
          ) : (
            <span className={styles.noDiscount}>EGP {product.price}</span>
          )}
        </div>
        <div className={styles.reviewsContainer}>
          <p className={styles.rating}>Review ({product.ratingsAverage}) ⭐ </p>
          <button
            className={styles.plusButton}
            onClick={(e) => {
              handleAddToCart(e);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
