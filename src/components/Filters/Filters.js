import React from "react";
import style from "./Filters.module.css";
import { ReactComponent as Search } from "../../assets/search.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
function Filters() {
  return (
    <div className={style.searchContainer}>
      <div className={style.exploreHeading}>Explore Challenges</div>
      <div style={{ display: "flex" }}>
        <div className={style.searchBar}>
          <div className={style.inputContainer}>
            <span className={style.searchIcon}>
              <Search />
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div>
          <button className={style.filterBtn}>
            Filter {" "}
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filters;
