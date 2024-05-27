import { FaBookmark } from 'react-icons/fa'
import { removefavourite } from '../store/FavouritesSlice'
import {useSelector,useDispatch } from 'react-redux'
import { Link} from "react-router-dom"

const Favourites = () => {
  const favMovies = useSelector((state) => {
    return state.favouritesHolder;
  })
  const { favourites } = favMovies;
  const dispatch = useDispatch();
  const handlefavourateRemove = (movies) => {
    dispatch(removefavourite(movies))
  }
  return (
    <div className=" relative">
      <Link to='/'>
      <div className="lg:text-3xl uppercase text-xl font-bold text-red-500 absolute m-12 cursor-pointer">
        Movie<span className="bg-white px-2">Box</span>
      </div>
      </Link>
      <div className="  lg:h-[400px] h-40  bg-slate-950 flex items-center justify-center">
        <h1 className="text-white lg:text-6xl text-2xl font-bold">
          Enjoy your Favourites 😃
        </h1>
      </div>
      <div className=" grid place-items-center p-2">
        <h1 className="text-xl font-bold px-4 mt-4">Your Favourites 👍</h1>
        <div className="favouites flex w-full gap-2 flex-wrap justify-center items-start  p-2 rounded-md border-2">
          {favourites.map((movies) => (
            <div className="w-[20vw]" key={movies.id}>
              <Link to={movies.imdb_url}>
                <div className="h-[30vh] bg-slate-900/20 rounded-md bg-blend-multiply">
                  <img
                    src={movies.image}
                    alt={movies.movie}
                    className="text-white"
                  />
                </div>
              </Link>
              <div className="info-box flex items-center justify-between w-full p-2 ">
                <div className="">
                  <h1>{movies.movie}</h1>
                  <p className="rating">{movies.rating}</p>
                  <span
                    title="Add to favourite"
                    className=" text-xl bg-zinc-200 p-2 rounded-full "
                    onClick={handlefavourateRemove}
                  >
                    <FaBookmark />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favourites