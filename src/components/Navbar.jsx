
const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 right-0 left-0 flex justify-between px-20 py-5 shadow">
      <div>
        <img className="w-35" src="/src/assets/logo.png" alt="" />
      </div>
      <div className="flex items-center gap-5">
        <p>Sign In</p>
        <p>Sign Up</p>
      </div>
    </nav>
  );
};

export default Navbar;
