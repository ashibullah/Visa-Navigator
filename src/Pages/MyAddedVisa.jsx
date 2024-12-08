import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import VisaCard from "../Components/VisaCard";


const MyAddedVisa = () => {
    const navigate = useNavigate()
    const visaData = useLoaderData();
    const handleDetails = (id) => {
        navigate(`/visas/${id}`);
    }

    return (
        <>
            <Navbar />
            {(visaData.length)?(<div className="max-w-7xl mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {visaData.map(visa => (
                    <VisaCard key={visa._id} visa={visa} handleDetails={handleDetails} />
                ))}
            </div>):(<div className="max-w-7xl mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                
                    <h1 className="font-bold text-center text-xl">You have not added any visa</h1>
                
            </div>)}
        </>

    );
};

export default MyAddedVisa;