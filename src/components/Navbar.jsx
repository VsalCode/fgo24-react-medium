import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({onSubmit, ...props}) => {

  return (
    <nav className="bg-white fixed top-0 right-0 left-0 flex justify-between items-center px-20 py-5 shadow">
      <div>
        <img className="w-35" src="/src/assets/logo.png" alt="" />
      </div>
      <form onSubmit={onSubmit} className="flex bg-[#F9F9F9] border px-5 rounded-full w-[700]">
        <input {...props} className="outline-none grow py-2" type="text" />
        <button type="submit">
          <IoSearch/>
        </button>
      </form>
      <div className="flex items-center gap-10 font-semibold">
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
