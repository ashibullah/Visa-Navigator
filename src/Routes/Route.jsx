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
import ErrorPage from "../Pages/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader : ()=> fetch('https://visa-navigator-server-phi.vercel.app/visa/latest'),
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
        loader: ()=>fetch(`https://visa-navigator-server-phi.vercel.app/visa`),
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
        loader :({params}) => fetch(`https://visa-navigator-server-phi.vercel.app/visa/myVisa/${params.id}`),
    },
    {
        path: "/visa/addedBy/:id",
        element: <PrivateRoute>
            <MyAddedVisa />
        </PrivateRoute>,
        loader :({params}) => fetch(`https://visa-navigator-server-phi.vercel.app/visa/addedBy/${params.id}`),
    },
    {
        path: "/visas/:id",
        element: <PrivateRoute>
            <VisaDetails/>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://visa-navigator-server-phi.vercel.app/visas/${params.id}`),
    },
    {
        path : "*",
        element : <ErrorPage/>
    }
]);