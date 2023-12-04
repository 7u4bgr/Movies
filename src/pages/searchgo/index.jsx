import React from "react";
import styles from "./index.module.css";
import Images from "../../assets/images/swipe1.png";
import Paginaton from "../../components/pagination";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getSearch } from "../../api/search";
const SearchGo = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState("1");
  const { query } = useParams();
  useEffect(() => {
    getSearch(query, page).then((res) => setData(res.data));
  }, [query, page]);
  return (
    <div className={styles.background}>
      <div className={styles.flexs}>
        <div className={styles.textsflexs}>
          <div className={styles.texts}>
            <h2>
              About {data?.total_results} results found for "{query}"
            </h2>
          </div>
        </div>
        <div className={styles.cardmaps}>
          {data?.results.map((item) => (
            <Link
              to={
                item.media_type == "movie"
                  ? "/movie/" + item.id
                  : null || item.media_type == "tv"
                  ? "/tv/" + item.id
                  : null || item.media_type=="person"?"/person/"+item.id:null
              }
              className={styles.cards}
            >
              <div className={styles.cardsflexs}>
                <div className={styles.images}>
                  <img
                    src={
                      item.media_type == "person"
                        ? "https://image.tmdb.org/t/p/original" +
                          item.profile_path
                        : "https://image.tmdb.org/t/p/original" +
                          item.poster_path
                    }
                    alt=""
                  />
                </div>
                <div className={styles.cardstexts}>
                  <h2>{item.media_type == "movie" ? item.title : item.name}</h2>
                  <p>{item.overview}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Paginaton totalPages={data?.total_pages} setQuery={setPage} />
      </div>
    </div>
  );
};

export default SearchGo;
