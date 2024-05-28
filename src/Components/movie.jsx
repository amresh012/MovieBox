/* eslint-disable no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addtofavourite } from "../store/FavouritesSlice";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState(new Set());
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const MOVIES_PER_PAGE = 9;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://dummyapi.online/api/movies/");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const handleAddToFavourite = useCallback(
    (movie) => {
      dispatch(addtofavourite(movie));
      setFavourites((prev) => new Set(prev).add(movie.id));
    },
    [dispatch]
  );

  const sortedMovies = useCallback((movies, order) => {
    return movies.slice().sort((a, b) => {
      return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
    });
  }, []);

  const paginatedMovies = useCallback(() => {
    const startIndex = (currentPage - 1) * MOVIES_PER_PAGE;
    const endIndex = startIndex + MOVIES_PER_PAGE;
    return sortedMovies(movies, sortOrder).slice(startIndex, endIndex);
  }, [movies, sortOrder, currentPage, sortedMovies]);

  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }, []);

  return (
    <div className="w-auto h-auto flex flex-wrap items-center justify-evenly gap-2 p-2">
      <div className="sort-buttons lg:w-fit w-[70vw] text-center absolute top-[22%]  lg:top-[63%] right-2 lg:right-44 lg:flex flex-col mb-4">
        <h1 className="text-xl bg-red-500 text-white p-2 rounded-md relative">
          Sort by
        </h1>
        <div className="content  absolute right-0 top-10 flex flex-col bg-zinc-200 p-2 rounded-md gap-1 text-slate-950 w-max">
          <button onClick={() => setSortOrder("asc")}>
            Rating (Low to High)
          </button>
          <button onClick={() => setSortOrder("desc")}>
            Rating (High to Low)
          </button>
        </div>
      </div>

      {paginatedMovies().map((item) => (
        <div
          className="border lg:w-[30vw] w-full p-2 rounded-md m-4"
          key={item.id}
        >
          <Link to={item.imdb_url}>
            <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
              <img src={item.image} alt={item.movie} className="text-white" />
            </div>
          </Link>
          <div className="title p-2 flex items-center justify-between">
            <div>
              <h1 className="lg:text-xl font-bold">{item.movie}</h1>
              <span>Rating: {item.rating}</span>
            </div>
            {favourites.has(item.id) ? (
              <span
                className="text-red-500 text-2xl"
                title="Added to favourite"
              >
                <FaHeart />
              </span>
            ) : (
              <FaRegHeart
                className="text-2xl text-red cursor-pointer"
                onClick={() => handleAddToFavourite(item)}
              />
            )}
          </div>
        </div>
      ))}

      <div className="pagination-buttons flex justify-around h-12 w-full">
        <button
          className="bg-red-500 p-2 rounded-md shadow-lg text-white"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-red-500 p-2 rounded-md shadow-lg text-white"
          onClick={handleNextPage}
          disabled={currentPage * MOVIES_PER_PAGE >= movies.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
