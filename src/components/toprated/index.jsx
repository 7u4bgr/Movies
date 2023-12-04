import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { RightIcon } from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getToprated } from "../../api/toprated";
import { Link } from "react-router-dom";
const TopRated = () => {
  const [query,setQuery]=useState("1")
  const [data, setData] = useState(null);
  useEffect(()=>{
   getToprated(query).then((res)=>setData(res.data.results))
  },[query])
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.texts}>
          <div className={styles.text1}>
            <h2>Top Rated</h2>
          </div>
          <Link to={"/topratedgo"} className={styles.text2}>
            <h2>see more </h2>
            <RightIcon />
          </Link>
        </div>
        <Swiper
          spaceBetween={15}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 2.3,
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
              <Link  to={"/movie/"+item.id} className={styles.swiperscontrol}>
                <a>

                <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt="" />
                </a>
                <div className={styles.swiperstexts}>
                  <div className={styles.skortext}>
                    <h1>{Math.trunc(item.vote_average)}</h1>
                    <h2>{item.title}</h2>
                  </div>
                  <h3>{item.release_date}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
