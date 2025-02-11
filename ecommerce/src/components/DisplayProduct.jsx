import { useContext, useState } from "react";
import styles from "./productDetails.module.css";
import { UserContext } from "../context/Provider";

export default function DisplayProduct({ product, images }) {
  const [isAdded, setIsAdded] = useState(false);
  const { cart, setCart, token } = useContext(UserContext);
  const URL = "https://ecommerce.routemisr.com/api/v1/cart";
  const URL1 = `https://ecommerce.routemisr.com/api/v1/cart/${product.id}`;
  const URLdelete = `https://ecommerce.routemisr.com/api/v1/cart/${product.id}`;
  const [quantity, setQuantity] = useState(1);
  const URLaddToWishList = "https://ecommerce.routemisr.com/api/v1/wishlist";
  const [addedToWish, setAddedToWish] = useState(false);

  async function handleAddToCart() {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
    //<CartAddOrRemove id={product.id} />;

    try {
      //console.log("vjhvvvvvvvvvv");
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

  async function handlePlusQuantity() {
    try {
      setQuantity(quantity + 1);
      const response = await fetch(URL1, {
        method: "Put",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: `${quantity + 1}` }),
      });
      if (!response.ok) {
        throw new Error("Cannot update item quantity !!!");
      }
      const result = await response.json();
      console.log(result.data.products);
    } catch (error) {
      console.error("Error : ", error);
    }
  }

  async function handleMinusQuantity() {
    try {
      setQuantity(quantity - 1);

      const response = await fetch(URL1, {
        method: "Put",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: `${quantity - 1}` }),
      });
      if (!response.ok) {
        throw new Error("Cannot update item quantity !!!");
      }
      const result = await response.json();
      console.log(result.data.products);
    } catch (error) {
      console.error("Error : ", error);
    }
  }
  async function handleAddToWishlistButton() {
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
      setTimeout(() => {
        setAddedToWish(false);
      }, 1000);
    } catch (error) {
      console.error("Error : ", error);
    }
  }
  return (
    <div className={styles.productGrid}>
      <div className={styles.imagesContainer}>
        {images && images.length > 0 ? (
          images.map((image, index) => (
            <img key={index} className={styles.image} src={image} />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.name}>
          <span className={styles.title}>{product.title}</span>

          {product.priceAfterDiscount ? (
            <>
              <span className={styles.afterDiscount}>
                EGP {product.priceAfterDiscount}
              </span>
              <span className={styles.beforeDiscount}>EGP {product.price}</span>
            </>
          ) : (
            <span className={styles.noDiscount}>EGP {product.price}</span>
          )}
        </div>
        <div className={styles.reviewsAndQuantity}>
          <span className={styles.sold}>{product.sold} Sold</span>
          <span className={styles.ratings}>
            ⭐ {product.ratingsAverage} ({product.ratingsQuantity})
          </span>
          <span className={styles.quantityButton}>
            <button
              className={styles.minusButton}
              onClick={handleMinusQuantity}
            >
              -
            </button>{" "}
            {quantity}
            <button className={styles.plusButton} onClick={handlePlusQuantity}>
              +
            </button>
          </span>
        </div>
        <div className={styles.descriptionTitle}>
          <h2>Description</h2>
          <p className={styles.description}>{product.description}</p>
        </div>
        <div className={styles.cart}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Add To Cart 🛒
          </button>
          {isAdded ? (
            <>
              <span className={styles.addedToCart}>Added to cart ✅</span>
            </>
          ) : null}
          <button
            className={styles.addToWishList}
            onClick={handleAddToWishlistButton}
          >
            Add To WishList ❤️
          </button>
          {addedToWish ? (
            <>
              <span className={styles.addedToWishlist}>
                Added to wishlist ❤️
              </span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
