import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex  flex-col lg:flex-row items-center justify-between bg-slate-900 text-white p-2">
      <div className="">Design & Developed by Amresh ©️</div>
      <div className="flex gap-2 items-center text-2xl">
        <Link to="https://github.com/amresh012">
          <FaGithub />
        </Link>
        <Link t="https://www.linkedin.com/in/a-m-r-e-s-h/">
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}

export default Footer