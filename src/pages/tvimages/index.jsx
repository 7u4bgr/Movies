import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

import { Link, useParams } from "react-router-dom";
import { getTvDetails } from "../../api/tvdetails";
import { getTvDetailsImages } from "../../api/tvdetailsimage";
import { getTvPopularPeoples } from "../../api/tvpopularpeoples";
const TvImages = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getTvDetails(id).then((res) => setData(res.data));
    getTvDetailsImages(id).then((res) => setData1(res.data.backdrops));
    getTvPopularPeoples(id).then((res) => setData2(res.data));
  }, [id]);
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.texth2}>
          <h2>{data?.original_title}</h2>
        </div>

        <div className={styles.control}>
          <div className={styles.images}>
            <img
              src={"https://image.tmdb.org/t/p/original" + data?.poster_path}
              alt=""
            />
          </div>
          <div className={styles.texts}>
            <div className={styles.textflex}>
              <h2>Name:</h2>
              <h3>{data?.name}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Language:</h2>
              <h3>{data?.original_language}</h3>
            </div>
            
            

            <div className={styles.textflex}>
              <h2>Popularity:</h2>
              <h3>{Math.trunc(data?.popularity)} %</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Release Date:</h2>
              <h3>{data?.first_air_date}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Finale Date:</h2>
              <h3>{data?.last_air_date}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Score:</h2>
              <h3>{Math.trunc(data?.vote_average)}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Overview:</h2>
              <h4>{data?.overview}</h4>
            </div>
          </div>
        </div>
        <div className={styles.controlimages}>
          {data2?.cast.slice(0, 10).map((item) => (
            <Link to={"/person/"+item.id}>
              <img
                src={"https://image.tmdb.org/t/p/original" + item.profile_path}
                alt=""
              />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </div>
        <div className={styles.youtubeimages}>
          <div className={styles.youtubemedia}>
            <div className={styles.textimages}>
              <h2>Media</h2>
            </div>
            <div className={styles.youtubeflexs}>

           
            {data1?.slice(0,3).map((item) => (
              <div className={styles.iframes}>
                <img src={"https://image.tmdb.org/t/p/original"+item.file_path} alt="" />
              </div>
            ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvImages;