import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";
import { UserContext } from "../context/Provider";
export default function CartItem({ cartItem, totalCost, setTotalCost }) {
  const URL = `https://ecommerce.routemisr.com/api/v1/cart/${cartItem.product.id}`;
  const URLdelete = `https://ecommerce.routemisr.com/api/v1/cart/${cartItem.product.id}`;
  const { token, cart, setCart } = useContext(UserContext);
  const { newCart, setNewCart } = useState([]);

  async function handlePlusQuantity() {
    try {
      const response = await fetch(URL, {
        method: "Put",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: `${cartItem.count + 1}` }),
      });
      if (!response.ok) {
        throw new Error("Cannot update item quantity !!!");
      }
      const result = await response.json();
      console.log(result.data.products);
      //setTotalCost(totalCost + cartItem.price);
    } catch (error) {
      console.error("Error : ", error);
    }
  }

  async function handleMinusQuantity() {
    try {
      const response = await fetch(URL, {
        method: "Put",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: `${cartItem.count - 1}` }),
      });
      if (!response.ok) {
        throw new Error("Cannot update item quantity !!!");
      }
      const result = await response.json();
      console.log(result.data.products);
      //setTotalCost(totalCost - cartItem.price);
    } catch (error) {
      console.error("Error : ", error);
    }
  }

  async function handleDeleteButton() {
    try {
      const response = await fetch(URLdelete, {
        method: "Delete",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Cannot delete this item!!!");
      }
      const result = await response.json();
      console.log(result);
      //setTotalCost(totalCost - cartItem.price * cartItem.count);
    } catch (error) {
      console.error("Error : ", error);
    }
  }
  return (
    <div className={styles.itemContainer}>
      <div>
        <img className={styles.image} src={cartItem.product.imageCover}></img>
      </div>
      <div className={styles.info}>
        <div className={styles.left}>
          <p className={styles.name}>{cartItem.product.title}</p>
          <p className={styles.price}>EGP {cartItem.price}</p>
        </div>
        <div className={styles.right}>
          <button className={styles.remove} onClick={handleDeleteButton}>
            🗑️
          </button>
          <p className={styles.quantity}>
            <button
              className={styles.minusButton}
              onClick={handleMinusQuantity}
            >
              -
            </button>
            {cartItem.count}
            <button className={styles.plusButton} onClick={handlePlusQuantity}>
              +
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
