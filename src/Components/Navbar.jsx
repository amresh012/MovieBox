import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
  return (
    <div className="flex w-full justify-around items-center p-4">
      <div className="lg:text-3xl uppercase text-xl font-bold text-red-500">
        Movie<span className="bg-white px-2">Box</span>
      </div>
      <Link to="Favourite">
        <p className="border-2 border-red-500 px-2 rounded-md">Favourites</p>
      </Link>
    </div>
  );
}

export default Navbar