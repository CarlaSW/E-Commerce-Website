import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";
import CartItem from "../components/CartItem";
import styles from "../components/cart.module.css";
import Header from "../components/Header";
import TotalCost from "../components/TotalCost";

export default function CartPage() {
  const URL = "https://ecommerce.routemisr.com/api/v1/cart";
  const { token, cart, setCart, totalCost, setTotalCost, cartId, setCartId } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [costOfCartItems, setCostOfCartItems] = useState(0);

  //window.scrollTo(0, 0);

  useEffect(() => {
    if (!token) {
      console.log("i need the token again, Sorry!");
      return;
    }
    async function fetchMyCart() {
      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: { token: `${token}`, "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Cannot fetch your cart !!!");
        }
        const results = await response.json();
        setCart(results.data.products || []); // Safely handle results
        //console.log(results);
        setTotalCost(results.data.totalCartPrice);
        console.log("total price: ", totalCost);
        console.log(results.cartId);
        setCartId(results.cartId);
        setIsLoading(false);
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    fetchMyCart();
  }, [token, setCart, cart]);

  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.pageGrid}>
        <div className={styles.cartPage}>
          {isLoading ? (
            <h1>
              Loading...
              <span className={styles.logInAgain}>
                If it takes too long, Please log in again !!
              </span>
            </h1>
          ) : (
            <div>
              {console.log("Cart : ", cart)}
              {cart && cart.length > 0 ? (
                cart.map((cartItem) => (
                  <CartItem
                    key={cartItem.product._id}
                    cartItem={cartItem}
                    totalCost={totalCost}
                    setTotalCost={setTotalCost}
                  />
                ))
              ) : (
                <h2 className={styles.emptyCart}>Your Cart is empty :(</h2>
              )}
            </div>
          )}
        </div>

        <div className={styles.totalCost}>
          <TotalCost />
        </div>
      </div>
    </div>
  );
}
