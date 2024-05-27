import { useEffect, useState } from "react";
import { addtofavourite } from "../store/FavouritesSlice";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [addedMovies, setAddedMovies] = useState(new Set());
  const dispatch = useDispatch();

  useEffect(() => {
    const FetchMovie = async () => {
      let response = await fetch("https://dummyapi.online/api/movies/");
      let data = await response.json();
      setMovie(data);
    };
    FetchMovie();
  }, []);

  const handleAdd = (movie) => {
    dispatch(addtofavourite(movie));
    setAddedMovies((prev) => new Set(prev).add(movie.id));
  };

  return (
    <div className="w-auto h-auto flex items-center justify-evenly gap-2 flex-wrap p-2">
      {movie.map((item) => (
        <div
          className="border lg:h-[50vh] lg:w-[30vw] w-full p-2 rounded-md m-4"
          key={item.id}
        >
          <Link to={item.imdb_url}>
            <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
              <img src={item.image} alt={item.movie} className="text-white" />
            </div>
          </Link>
          <div className="title p-2 flex items-center justify-between">
            <div className="">
              <h1 className="lg:text-xl font-bold">{item.movie}</h1>
              <span>Rating: {item.rating}</span>
            </div>
            {addedMovies.has(item.id) ? (
              <span className="text-green-500" title="add to favourite">Added</span>
            ) : (
              <CiBookmark
                className="text-2xl text-red cursor-pointer"
                onClick={() => handleAdd(item)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
