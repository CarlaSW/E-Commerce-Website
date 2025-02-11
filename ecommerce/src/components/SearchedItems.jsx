import { useContext } from "react";
import { UserContext } from "../context/Provider";
import SearchedItem from "./SearchedItem";
import styles from "./search.module.css";

export default function SearchedItems() {
  const { searchList, setSearchList } = useContext(UserContext);

  return (
    <div className={styles.searchPage}>
      {searchList.map((searchedItem) => {
        return (
          <SearchedItem key={searchedItem._id} searchedItem={searchedItem} />
        );
      })}
    </div>
  );
}
