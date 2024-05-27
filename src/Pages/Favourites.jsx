import { removefavourite } from "../store/FavouritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favMovies = useSelector((state) => state.favouritesHolder);
  const { favourites } = favMovies;

  const dispatch = useDispatch();

  const handlefavouriteRemove = (movie) => {
    dispatch(removefavourite(movie));
  };

  return (
    <div className="relative">
      <Link to="/">
        <div className="lg:text-3xl uppercase text-xl font-bold text-red-500 absolute m-12 cursor-pointer">
          Movie<span className="bg-white px-2">Box</span>
        </div>
      </Link>
      <div className="lg:h-[400px] h-40 bg-slate-950 flex items-center justify-center">
        <h1 className="text-white lg:text-6xl text-2xl font-bold">
          Enjoy your Favourites 😃
        </h1>
      </div>
      <div className="grid place-items-center p-2">
        <h1 className="text-xl font-bold px-4 mt-4">Your Favourites 👍</h1>
        <div className="favourites flex w-full gap-2 flex-wrap justify-center items-start p-2 rounded-md border-2">
          {favourites.map((movies) => (
            <div className="w-[20vw]" key={movies.id}>
              <Link to={movies.imdb_url}>
                <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
                  <img
                    src={movies.image}
                    alt={movies.movie}
                    className="object-cover h-full w-full rounded-md"
                  />
                  
                </div>
              </Link>
              <div className="movie-info">
                <h1>{movies.movie}</h1>
                <p>{movies.rating }</p>
              </div>
              <button className="p-2 bg-slate-900 text-white" onClick={()=>handlefavouriteRemove(movies.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
