import React from 'react';
import Background from '../../components/background';

import Wrapper from '../../components/UI/wrapper';
import TopRated from '../../components/toprated';
import TopTvShows from '../../components/toptvshows';
import UpComingSoon from '../../components/upcomingsoon';
import PopularTV from '../../components/populartv';
import PopularMovies from '../../components/popularmovies';
import PopularPeople from '../../components/popularpeople';


const Home = () => {
  return (

    <div>
     <Background/>
     <Wrapper>

    <TopRated/>
    <TopTvShows/>
    <UpComingSoon/>
    <PopularTV/>
    <PopularMovies/>
    <PopularPeople/>
     </Wrapper>
    </div>
    )
};

export default Home;
