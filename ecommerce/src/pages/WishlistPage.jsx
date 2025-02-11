import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";
import Header from "../components/Header";
import styles from "../components/wishlist.module.css";
import WishItem from "../components/WishItem";

export default function WishlistPage() {
  const { token, wishes, setWishes } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URLwishlist = "https://ecommerce.routemisr.com/api/v1/wishlist";
  //window.scrollTo(0, 0);

  useEffect(() => {
    async function fetchWishlist() {
      try {
        const response = await fetch(URLwishlist, {
          method: "Get",
          headers: {
            token: `${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Cannot find you wishlist !!!");
        }
        const result = await response.json();
        setWishes(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error : ", error);
      }
    }
    fetchWishlist();
  }, [wishes, token, setWishes]);
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wishlistPage}>
        {isLoading ? (
          <h1>
            Loading...{" "}
            <span className={styles.logInAgain}>
              If it takes too long, Please log in again !!
            </span>
          </h1>
        ) : (
          <div>
            {console.log(wishes)}
            {wishes && wishes.length > 0 ? (
              wishes.map((wishItem) => {
                return <WishItem key={wishItem.id} wishItem={wishItem} />;
              })
            ) : (
              <h2 className={styles.emptyWishlist}>
                Your Wishlist is empty :(
              </h2>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
