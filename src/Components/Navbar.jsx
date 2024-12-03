const Navbar = () => {
    return (
        <div className="navbar bg-gray-200  opacity-80 flex justify-around mx-auto">
        <div className="">
          <a className="btn btn-ghost text-xl">Visa Navigator</a>
        </div>
        <div className="space-x-4">
          <a className=" text-lg">Home</a>
          <a className=" text-lg">All Visas</a>
        </div>
        <div className="">
          <a className="mr-3 text-lg">Log In</a>
          <a className=" text-lg">Register</a>
        </div>
        
      </div>
    );
};

export default Navbar;