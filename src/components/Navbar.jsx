import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const Navbar = () => {
=======
const Navbar = ({onSubmit, ...props}) => {
>>>>>>> e3cc1824b245b1c14ca3dfcc30c42735d0dd8ab9

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
