import { useEffect, useState } from "react";
import { addtofavourite } from "../store/FavouritesSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";

const Movies = () => {
  const [movie, setMovie] = useState([]);
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
  };
  return (
    <div className="w-auto   h-auto flex  items-center justify-evenly gap-2 flex-wrap p-2 ">
      {movie.map((movie) => (
        <div
          className="border lg:h-[50vh] lg:w-[30vw] w-full  p-2 rounded-md m-4"
          key={movie.id}
        >
          <Link to={movie.imdb_url}>
            <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
              <img src={movie.image} alt={movie.movie} className="text-white" />
            </div>
          </Link>
          <div className="title  p-2 flex items-center justify-between">
            <div className="">
              <h1 className="lg:text-2xl font-bold">{movie.movie}</h1>
              <span>Rating:{movie.rating}</span>
            </div>
            <span
              title="Add to favourite"
              className=" text-xl bg-zinc-200 p-2 rounded-full cursor-pointer "
              onClick={handleAdd}
            >
              <CiBookmark />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
