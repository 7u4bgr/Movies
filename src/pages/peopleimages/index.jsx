import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useParams } from "react-router-dom";
import {getPeopleImages} from '../../api/peopleimages'
const PeopleImages = () => {
  
  const [data,setData]=useState(null)
  const {id}=useParams();
  useEffect(()=>{

    getPeopleImages(id).then((res)=>setData(res.data))
    
  },[id])
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
      

        <div className={styles.texth2}>
          <h2>{data?.original_title}</h2>
        </div>
       

       
        <div className={styles.control}>
          <div className={styles.images}>
            <img src={'https://image.tmdb.org/t/p/original'+data?.profile_path} alt="" />
          </div>
          <div className={styles.texts}>
            <div className={styles.textflex}>
              <h2>Name:</h2>
              <h3>{data?.name}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Birthday:</h2>
              <h3>{data?.birthday}</h3>
            </div>
            

            <div className={styles.textflex}>
              <h2>Popularity:</h2>
              <h3>{Math.trunc(data?.popularity)} %</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Country:</h2>
              <h3>{data?.place_of_birth}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Role:</h2>
              <h3>{data?.known_for_department}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Gender:</h2>
              <h3>{data?.gender==1?"Female":"Male"}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Biography:</h2>
              <h4>
               {data?.biography}
              </h4>
            </div>
          </div>
        </div>
       
     
      </div>
    </div>
  );
};

export default PeopleImages;
