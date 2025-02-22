import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {

    document.documentElement.setAttribute("data-theme", theme); // changed the theme inside the tailwind.config.js
    localStorage.setItem("theme", theme); 
  }, [theme]);

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav className="sticky top-0 z-10 bg-blur backdrop-blur-lg">
      <div className="navbar bg-white text-black opacity-80 px-4 py-2 flex lg:justify-around sm:justify-between items-center mx-auto">
        <div className="flex items-center space-x-4">
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            Visa Navigator
          </NavLink>
          {/* Theme Switcher */}
          <label className="swap swap-rotate">
            <input 
              type="checkbox" 
              checked={theme === "dark"}  
              onChange={handleThemeChange}  
            />
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.5,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
              />
            </svg>
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
              />
            </svg>
          </label>
        </div>

        <div className="md:hidden">
          <details className="dropdown">
            <summary className="btn btn-ghost m-1">Menu</summary>
            <ul className="menu dropdown-content bg-white rounded-box z-[1] w-52 p-2 shadow">
              <li>
                <NavLink to={"/"} className="text-sm">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/visas"} className="text-sm">
                  All Visa
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink to={"/visas/add"} className="text-sm">
                      Add Visa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/visa/myVisa/${user.email}`} className="text-sm">
                      My Visa Application
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={`/visa/addedBy/${user.uid}`} className="text-sm">
                      My Added Visa
                    </NavLink>
                  </li>
                </>
              )}
              {user ? (
                <li>
                  <button onClick={handleLogout} className="text-sm">
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to={"/auth"} className="text-sm">
                      Log In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/signup"} className="text-sm">
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </details>
      
         
        </div>

        {/* Desktop NavLinks */}
        <div className="hidden md:flex space-x-10">
          <NavLink to={"/"} className="text-sm">
            Home
          </NavLink>
          <NavLink to={"/visas"} className="text-sm">
            All Visa
          </NavLink>
          {user && (
            <>
              <NavLink to={"/visas/add"} className="text-sm">
                Add Visa
              </NavLink>
              <NavLink to={`/visa/myVisa/${user.email}`} className="text-sm">
                My Visa Application
              </NavLink>
              <NavLink to={`/visa/addedBy/${user.uid}`} className="text-sm">
                My Added Visa
              </NavLink>
            </>
          )}
        </div>

        {user ? (
          <div className="dropdown dropdown-end space-x-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user.photoURL || "https://th.bing.com/th/id/OIP.d32V8vlXqR6_0zkyyJJBbQHaHa?rs=1&pid=ImgDetMain"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-x-4 hidden md:flex">
            <NavLink to={"/auth"} className="mr-3 text-md">
              Log In
            </NavLink>
            <NavLink to={"/signup"} className="text-md">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
