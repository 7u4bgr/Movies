import About from "./pages/about";
import Comingsoon from "./pages/comingsoon";
import Home from "./pages/home";
import Movies from "./pages/movies";
import NotFound from "./pages/notFound";
import Popular from "./pages/popular";
import TopRatedGo from "./pages/topratedgo";
import TopTvShowGo from "./pages/toptvshowgo";
import TvPages from "./pages/tv";
import TvShowsGo from "./pages/tvshowsgo";
import Upcomingsoongo from "./pages/upcomingsoongo";
import PopularMoviesGo from "./pages/popularmoviesgo";
import MoviesImages from "./pages/backgroundimages";
import PeopleImages from "./pages/peopleimages";
import TvImages from "./pages/tvimages";
import SearchGo from "./pages/searchgo";


const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),
  about: routeItem(2, 'about', "/about", About),
  notFound: routeItem(3, 'notFound', "*", NotFound),
  movies:routeItem(4,"movies","/movies",Movies),
  tvpages:routeItem(5,"tvpages","/tvpages",TvPages),
  comingsoon:routeItem(6,"comingsoon","/comingsoon",Comingsoon),
  popular:routeItem(7,"popular","/popular",Popular),
  topratedgo:routeItem(8,"topratedgo","/topratedgo",TopRatedGo),
  toptvshowgo:routeItem(9,"toptvshowgo","/toptvshowgo",TopTvShowGo),
  upcomingsoongo:routeItem(10,"upcomingsoongo","/upcomingsoongo",Upcomingsoongo),
  tvshowsgo:routeItem(11,"tvshowsgo","/tvshowsgo",TvShowsGo),
  popularmoviesgo:routeItem(12,"popularmoviesgo","/popularmoviesgo",PopularMoviesGo),
  movie:routeItem(13,"movie","/movie/:id",MoviesImages),
  popularimages:routeItem(14,"peopledetails","/person/:id",PeopleImages),
  tvimages:routeItem(15,"tvimages","/tv/:id",TvImages),
  searchgo:routeItem(16,"searchgo","/search/:query",SearchGo)
};

const routeArr = Object.values(routes);

export { routes, routeArr };
