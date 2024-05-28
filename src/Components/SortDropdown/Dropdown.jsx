/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Dropdown = ({ onClick, className }) => {
  return (
    <div className="">
      <div className="sort-buttons right-44 flex flex-col mb-4">
        <h1 className="text-xl bg-red-500 text-white p-2 rounded-md">
          sort by
        </h1>
        <div className="content flex flex-col bg-zinc-200 p-2 rounded-md gap-1 text-slate-950">
          <button onClick={onClick}>
            Rating (Low to High)
          </button>
          <button onClick={onClick}>
            Rating (High to Low)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
