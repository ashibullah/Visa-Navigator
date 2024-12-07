import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute, { CrashLogin } from "./PrivateRoute";
import VisaList from "../Pages/VisaList";
import Myvisa from "../Pages/Myvisa";
import MyApplication from "../Pages/MyApplication";
import AddVisa from "../Pages/AddVisa";
import VisaDetails from "../Pages/VisaDetails";


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
        path: "/visa/myVisa/:id",
        element: <PrivateRoute>
            <Myvisa/>
        </PrivateRoute>,
        loader :({params}) => fetch(`http://localhost:5000/visa/myVisa/${params.id}`),
    },
    {
        path: "/visas/application",
        element: <PrivateRoute>
            <MyApplication />
        </PrivateRoute>
    },
    {
        path: "/visas/:id",
        element: <PrivateRoute>
            <VisaDetails/>
        </PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/visas/${params.id}`),
    },
]);