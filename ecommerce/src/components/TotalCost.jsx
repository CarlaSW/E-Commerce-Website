import { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";
import { UserContext } from "../context/Provider";
export default function TotalCost() {
  const { totalCost, setTotalCost, cartId, setCartId, cart, token } =
    useContext(UserContext);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const URLGetUserOrders = `https://ecommerce.routemisr.com/api/v1/orders/user/${cartId}`;
  const URLCreateCashOrder = `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`;

  /*useEffect(() => {
    async function fetchOrders() {
      try {
        setIsCheckedOut(false);
        const response = await fetch(URLGetUserOrders, {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Cannot fetch your orders !!!");
        }
        const results = await response.json();
        console.log("Orders", results);
      } catch (error) {
        console.error("Error : ", error);
      }
    }
    fetchOrders();
  }, [isCheckedOut]);*/

  async function handleCheckOut() {
    try {
      const response = await fetch(URLCreateCashOrder, {
        method: "Post",
        headers: {
          token: `${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shippingAddress: {
            details: "details",
            phone: "01010800921",
            city: "Cairo",
          },
        }),
      });
      if (!response.ok) {
        throw new Error("Cannot place your order !!!");
      }
      const result = await response.json();
      console.log(result);
      setTotalCost(result.totalOrderPrice);
    } catch (error) {
      console.error("Error : ", error);
    }
    setIsCheckedOut(true);
    setTimeout(() => {
      setIsCheckedOut(false);
    }, 1000);
  }
  return (
    <div>
      <h1 className={styles.priceLogo}>Total Price : </h1>
      <h1 className={styles.price}>{totalCost} EGP</h1>
      <button className={styles.checkoutButton} onClick={handleCheckOut}>
        Check out 💵
        {isCheckedOut ? (
          <p className={styles.orderPlaced}>
            Your Order is placed successfully ✅
          </p>
        ) : null}
      </button>
    </div>
  );
}
