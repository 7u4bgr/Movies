import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import Images from '../../assets/images/swipe1.png'
import {getDiscovertv} from '../../api/discovertv'
import { Link } from 'react-router-dom'
import Paginaton from '../../components/pagination'
const TvPages = () => {
  const [query,setQuery]=useState("1")
const [data,setData]=useState(null)
useEffect(()=>{
  getDiscovertv(query).then((res)=>setData(res.data))
},[query])
  return (
    <div className={styles.background}>
    <div className={styles.control}>
      <div className={styles.texts}>
        <h2>TV</h2>
      </div>
      <div className={styles.moviescontrol}>
    {data?.results.map((item)=>(

      <Link to={"/tv/"+item.id} className={styles.movies}>
        <div className={styles.images}>
      <a>
        <img src={`https://image.tmdb.org/t/p/original`+item.poster_path} alt="" />
      </a>
        </div>
        <div className={styles.texts1}>
            <h1>{item.original_language}</h1>
            <h2>{item.name}</h2>
        </div>
        <div className={styles.texts2}>
          <h2>{item.first_air_date}</h2>
          <h1>{Math.trunc(item.vote_average)}</h1>
        </div>
      </Link>
    ))}
      </div>
      <Paginaton setQuery={setQuery} totalPages={data?.total_pages}/>
    </div>
  </div>
  )
}

export default TvPages