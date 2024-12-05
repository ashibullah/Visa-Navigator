import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user && user?.email){
        return (children);
    }
    alert("You need to log in to access this page.");
    return (
        <div>
            <Navigate to={"/auth"}></Navigate>
        </div>
    );
};

export default PrivateRoute;