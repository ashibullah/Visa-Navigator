import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10  bg-blur backdrop-blur-lg">
          <div className="navbar bg-black text-white  opacity-80 flex justify-around mx-auto ">
        <div className="">
          <NavLink to={"/"} className="btn btn-ghost text-xl">Visa Navigator</NavLink>
        </div>
        <div className="space-x-10">
          <NavLink to={"/"} className=" text-md">Home</NavLink>
          <NavLink to={"/visas"} className=" text-md">All Visa</NavLink>
        </div>
        <div className="space-x-4">
          <NavLink to={"/auth"}  className="mr-3 text-md">Log In</NavLink>
          <NavLink to={"/signup"} className=" text-md">Register</NavLink>
        </div>
        
      </div>
        </nav>
    );
};

export default Navbar;