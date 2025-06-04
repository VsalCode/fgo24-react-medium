import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <nav className="bg-white fixed top-0 right-0 left-0 flex justify-between items-center px-20 py-5 shadow">
      <div>
        <img className="w-35" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-10 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact Us</Link>
      </div>
      <div className="flex items-center gap-3 font-semibold">
        <Link className="border py-1 px-3 rounded-full" to="/">Sign In</Link>
        <Link className="border bg-black text-white py-1 px-3 rounded-full" to="/">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
