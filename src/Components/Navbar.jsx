import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout =()=>{
    navigate("/");
    logout();
  }
  return (
    <nav className="sticky top-0 z-10  bg-blur backdrop-blur-lg">
      <div className="navbar bg-black text-white  opacity-80 flex justify-around mx-auto ">
        <div className="">
          <NavLink to={"/"} className="btn btn-ghost text-xl">Visa Navigator</NavLink>
        </div>
        <div className="space-x-10">
          <NavLink to={"/"} className=" text-sm">Home</NavLink>
          <NavLink to={"/visas"} className=" text-sm">All Visa</NavLink>
          {
            user && (
              <>
              <NavLink to={"/visas/add"} className=" text-sm">Add Visa</NavLink>
               <NavLink to={`/visa/myVisa/${user.email}`} className=" text-sm">My Visa Application</NavLink>
               <NavLink to={`/visa/addedBy/${user.uid}`} className=" text-sm">My Added Visa</NavLink>
              </>
            )
          }
        </div>
        {
          (user) ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user.photoURL || "https://th.bing.com/th/id/OIP.d32V8vlXqR6_0zkyyJJBbQHaHa?rs=1&pid=ImgDetMain"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (<div className="space-x-4">
            <NavLink to={"/auth"} className="mr-3 text-md">Log In</NavLink>
            <NavLink to={"/signup"} className=" text-md">Register</NavLink>
          </div>)
        }



      </div>
    </nav>
  );
};

export default Navbar;