import React, { useState } from "react";
import styles from "./index.module.css";
import { SearchIcon } from "../../../icons";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSearch } from "../../../api/search";
const Header = () => {
const [query,setQuery]=useState('1')
const [data,setData]=useState(null)
function submitHandler(e){
  e.preventDefault();
  window.location.replace(`/search/${e.target[0].value}`);
}
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.logo}>
          <Link to={'/'}>M</Link>
        </div>
        <div className={styles.texts}>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/tvpages"}>TV</Link>
          <Link to={"/comingsoon"}>Coming Soon</Link>
          <Link to={"/popular"}>Popular</Link>
        </div>
        <form onSubmit={(e)=>submitHandler(e)} className={styles.search}>
          <input placeholder={"Search"} type="text" />
        
    <button>

          <SearchIcon />
    </button>
          
        </form>
      </div>
    </div>
  );
};

export default Header;
