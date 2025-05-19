import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link } from "react-router-dom";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(e) {
    e.preventDefault();

    if (showPassword === false) {
      setShowPassword(true);
    } else if (showPassword === true) {
      setShowPassword(false);
    }
  }

  return (
        <form>
          <div className="pb-5">
            <p className="font-semibold pb-3 sm:text-4xl text-2xl">Sign In</p>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3  mt-3 mb-5   rounded-lg">
              <MdOutlineMail className="sm:text-xl text-base" />
              <input className="border-0 outline-none grow sm:text-base text-sm" type="email" placeholder="Enter your email" />
            </span>
            <label htmlFor="password">Password</label>
            <span className="flex items-center gap-4 border sm:px-5 px-2 py-3 mt-3 rounded-lg w-full">
              <TbLockPassword className="sm:text-xl text-base" />
              <input type={showPassword === false ? "password" : "text"} className="border-0 outline-none grow sm:text-base text-sm" name="password" placeholder="Enter your password" maxLength="8" />
              <button className="cursor-pointer text-xl" onClick={handleShowPassword}>
                {showPassword === false ? <LuEye className="sm:text-xl text-base" /> : <LuEyeClosed className="sm:text-xl text-base" />}
              </button>
            </span>
          </div>
          <div className="text-blue-600 font-medium py-4 flex justify-end sm:text-base text-sm">
            <Link>Forgot Your Password?</Link>
          </div>
          <div className="text-center font-medium sm:text-base text-sm">
            <button type="submit" className="bg-black w-full text-white  py-3 rounded-lg mb-5">Login</button>
          </div>
        </form>
  );
};

export default Login;
