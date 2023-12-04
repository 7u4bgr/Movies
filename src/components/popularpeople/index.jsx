import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import {getPopularpeople} from '../../api/popularpeople'
import { Link } from "react-router-dom";
const PopularPeople = () => {
  const [query,setQuery]=useState("1")
  const [data, setData] = useState(null);
  useEffect(()=>{
    getPopularpeople(query).then((res)=>setData(res.data.results))
  },[query])
  return (

      <div className={styles.background}>
            <div className={styles.flexs}>
                <div className={styles.texts}>
                    <h2>Popular People</h2>
                </div>
                <div className={styles.control}>
                {data?.map((item)=>(

                    <div className={styles.images}>
                        <Link to={"/person/"+item.id}>
                        <img src={"https://image.tmdb.org/t/p/original"+item.profile_path} alt="" />
                        </Link>
                            <h2>{item.original_name}</h2>
                    </div>
                ))}
                </div>
            </div>
      </div>
      );
};

export default PopularPeople;
