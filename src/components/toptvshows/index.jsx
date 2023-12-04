import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { RightIcon } from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getToptvshow } from "../../api/toptvshow";
import { Link } from "react-router-dom";
const TopTvShows = () => {
  const [query,setQuery]=useState("1")
  const [data, setData] = useState(null);
  useEffect(()=>{
    getToptvshow(query).then((res)=>setData(res.data.results))
  },[query])
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.texts}>
          <div className={styles.text1}>
            <h2>Top TV Shows</h2>
          </div>
          <Link to={"/toptvshowgo"} className={styles.text2}>
            <h2>see more </h2>
            <RightIcon />
          </Link>
        </div>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 2.4,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 3.4,
            },
            992: {
              spaceBetween: 24,
              slidesPerView: 6.4,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide>
              <div className={styles.swiperscontrol}>
                <Link to={"/tv/"+item.id}>
                <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt="" />
                </Link>
                <div className={styles.swiperstexts}>
                  <div className={styles.skortext}>
                    <h1>{Math.trunc(item.vote_average)}</h1>
                    <h2>{item.original_name}</h2>
                  </div>
                  <h3>{item.first_air_date}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopTvShows;