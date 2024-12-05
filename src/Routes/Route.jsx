import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import VisaList from "../Pages/VisaList";
import Myvisa from "../Pages/Myvisa";
import MyApplication from "../Pages/MyApplication";
import AddVisa from "../Pages/AddVisa";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path : "/signup",
        element : <RegisterPage/>
    },
    {
        path : "/auth",
        element: <LoginPage/>
    },
    {
        path: "/visas",
        element: <PrivateRoute>
            <VisaList/>
        </PrivateRoute>
    },
    {
        path: "/visas/add",
        element: <PrivateRoute>
            <AddVisa/>
        </PrivateRoute>
    },
    {
        path: "/visas/myvisa",
        element: <PrivateRoute>
            <Myvisa/>
        </PrivateRoute>
    },
    {
        path: "/visas/application",
        element: <PrivateRoute>
            <MyApplication/>
        </PrivateRoute>
    },
]);