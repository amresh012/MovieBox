import { removefavourite } from "../store/FavouritesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favMovies = useSelector((state) => state.favouritesHolder);
  const { favourites } = favMovies;

  const dispatch = useDispatch();

  // This is a reducer function, The purpose of this reducer is to handle an "add to favourite" action.
  const handlefavouriteRemove = (movie) => {
    dispatch(removefavourite(movie));
  };

  return (
    <div>
      <div className="lg:h-[400px] h-40  flex flex-col items-center justify-center favourite-container">
        <h1 className="text-white lg:text-6xl text-2xl font-bold">
          Enjoy your Favourites 😃
        </h1>
        <Link to="/">
          <div className="border-b capitalize font-bold text-zinc-100 cursor-pointer">
            Back toHome
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <h1 className=" p-2 font-bold px-4 bg-slate-500/20 w-full text-center text-2xl ">
          Your Favourites 👍
        </h1>
        <div className="favourites flex w-full gap-6 flex-wrap justify-center items-start p-2 rounded-md">
          {favourites.map((movies) => (
            <div
              className="md:w-[20vw] w-full border-2 p-2 rounded-md bg-slate-900/10 hover:shadow-md  hover:scale-105 duration-300"
              key={movies.id}
            >
              <Link to={movies.imdb_url}>
                <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
                  <img
                    src={movies.image}
                    alt={movies.movie}
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
              </Link>
              <div className="movie-info mb-2">
                <h1 className="text-xl">{movies.movie}</h1>
                <p className="bg-yellow-500 p-2  w-fit ">
                  Rating:
                  {movies.rating}
                </p>
              </div>
              <button
                className="p-2 bg-slate-900 text-white w-full"
                onClick={() => handlefavouriteRemove(movies.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
