import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute, { CrashLogin } from "./PrivateRoute";
import VisaList from "../Pages/VisaList";
import Myvisa from "../Pages/Myvisa";
import MyApplication from "../Pages/MyApplication";
import AddVisa from "../Pages/AddVisa";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
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
        element: <PrivateRoute>
            <VisaList/>
        </PrivateRoute>,
        loader: ()=>fetch("http://localhost:5000/visa"),
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
            <MyApplication />
        </PrivateRoute>
    },
]);