import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";



const ErrorPage = () => {
    const navigate = useNavigate();
    function goToHome(){
        navigate('/');
    }

    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center h-[600px] bg-white    text-center">
            <h1 className="text-9xl font-bold text-gray-600 mb-4">404</h1>
            <p className="text-lg text-gray-900 mb-6">This is not the web page you are looking for.</p>
            <button
                onClick={goToHome}
                className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full shadow-lg transition-colors duration-200"
            >
                Return to Home
            </button>
        </div>
        
        </div>
    );
};

export default ErrorPage;