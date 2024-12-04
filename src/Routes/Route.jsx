import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";

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
    }
]);