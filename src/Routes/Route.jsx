import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute, { CrashLogin } from "./PrivateRoute";
import VisaList from "../Pages/VisaList";
import Myvisa from "../Pages/Myvisa";

import AddVisa from "../Pages/AddVisa";
import VisaDetails from "../Pages/VisaDetails";
import MyAddedVisa from "../Pages/MyAddedVisa";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader : ()=> fetch('http://localhost:5000/visa/latest'),
    },
    {
        path: "/signup",
        element: <CrashLogin>
            <RegisterPage />
        </CrashLogin> 
    },
    {
        path: "/auth",
        element: <CrashLogin>
            <LoginPage/>
        </CrashLogin>
    },
    {
        path: "/visas",
        element: 
            <VisaList/>,    
        loader: ()=>fetch("http://localhost:5000/visa"),
    },
    {
        path: "/visas/add",
        element: <PrivateRoute>
            <AddVisa/>
        </PrivateRoute>
    },
    {
        path: "/visa/myVisa/:id",
        element: <PrivateRoute>
            <Myvisa/>
        </PrivateRoute>,
        loader :({params}) => fetch(`http://localhost:5000/visa/myVisa/${params.id}`),
    },
    {
        path: "/visa/addedBy/:id",
        element: <PrivateRoute>
            <MyAddedVisa />
        </PrivateRoute>,
        loader :({params}) => fetch(`http://localhost:5000/visa/addedBy/${params.id}`),
    },
    {
        path: "/visas/:id",
        element: <PrivateRoute>
            <VisaDetails/>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/visas/${params.id}`),
    },
]);