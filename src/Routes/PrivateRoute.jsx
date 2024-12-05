/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";




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

export const CrashLogin =({children})=>{
    const { user } = useContext(AuthContext);

    return !(user) ? children : <Navigate to="/" />;
}


export default PrivateRoute;