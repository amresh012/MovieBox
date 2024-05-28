import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
    const { favourites } = useSelector((state) => state.favouritesHolder);

  return (
    <div className="flex w-full justify-around items-center p-4">
      <div className="lg:text-3xl uppercase text-xl font-bold text-red-500">
        Movie<span className="bg-white px-2">Box</span>
      </div>
      <Link to="Favourite" className="flex items-center gap-2">
        <p className=" hover:border-b-2 hover:border-red-500 px-2 duration-300">Favourites</p>
        <small className=" p-2 rounded-full bg-white/20 backdrop-blur-md ">{favourites.length ||  0}</small>
      </Link>
    </div>
  );
}

export default Navbar