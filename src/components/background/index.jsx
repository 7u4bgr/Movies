import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { SearchIcon } from "../../icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {getPlaying} from '../../api/getplaying'
import {getBackground} from '../../api/background'
import { Link } from "react-router-dom";
const Background = ({films}) => {
  const [query,setQuery]=useState('1')
  const [query1,setQuery1]=useState('5')
  const [data, setData] = useState(null);
  useEffect(()=>{
    getPlaying(query).then((res)=>setData(res.data.results))
    getBackground(query1).then((res)=>setData(res.data.results))
  },[query],[query1])
function submitHandler(e){
  e.preventDefault();
  window.location.replace(`/search/${e.target[0].value}`);
}

  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.search}>
          <div className={styles.texts}>
            <h2>Search your Movies,TV Series...</h2>
          </div>
          <form onSubmit={(e)=>submitHandler(e)} className={styles.inputs}>
            <input placeholder="Search" type="text" />
            <button>
              <SearchIcon />
            </button>
          </form>
          <div className={styles.hr}>

          <hr />
          </div>
        </div>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0:{
              spaceBetween:24,
              slidesPerView:2.4,
            },
            768:{
              spaceBetween:24,
              slidesPerView:3.4,
            },
            992:{
              spaceBetween:24,
              slidesPerView:8.4,
            },
          }}
        >
          {data?.map((item) => (
            <SwiperSlide>
              <div className={styles.swiperscontrol}>
                <Link to={"/movie/"+item.id}>
                <img src={"https://image.tmdb.org/t/p/original"+item.poster_path} alt="" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Background;
