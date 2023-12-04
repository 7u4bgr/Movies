import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Images from "../../assets/images/swipe1.png";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/moviedetails";
import { getMoviesYoutube } from "../../api/moviesyoutube";
import { getMoviePeoples } from "../../api/moviepeoples";
const MoviesImages = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getMovieDetails(id).then((res) => setData(res.data));
    getMoviesYoutube(id).then((res) => setData1(res.data.results));
    getMoviePeoples(id).then((res) => setData2(res.data));
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
              <h3>{data?.original_title}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Language:</h2>
              <h3>{data?.original_language}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Date:</h2>
              <h3>{data?.release_date}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>RunTime:</h2>
              <h3>{data?.runtime} Minute</h3>
            </div>

            <div className={styles.textflex}>
              <h2>Popularity:</h2>
              <h3>{Math.trunc(data?.popularity)} %</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Budget:</h2>
              <h3>$ {data?.budget}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Revenue:</h2>
              <h3>$ {data?.revenue}</h3>
            </div>
            <div className={styles.textflex}>
              <h2>Tagline:</h2>
              <h3>{data?.tagline}</h3>
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
                <iframe
                  
                  src={"https://www.youtube.com/embed/"+item.key}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesImages;
