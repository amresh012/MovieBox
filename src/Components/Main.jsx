import Navbar from "./Navbar";
import Movies from "./movie";

const Main = () => {
  return (
    <div className="">
      <div className="absolute flex  justify-between w-full text-white">
        <Navbar />
      </div>
      <div className="container lg:h-[400px] h-40 bg-slate-950 flex items-center justify-center ">
        <h1 className="text-white lg:text-6xl text-2xl font-bold text-center">Enjoy your Movies 😃</h1>
      </div>
      <div className="flex flex-col gap-4 mt-3">
        <h1 className="px-8 font-bold lg:text-4xl text-2xl mt-4">Popular Movies 🔥</h1>
        <div className="movie">
          <Movies/>
        </div>
      </div>
    </div>
  );
};

export default Main;
