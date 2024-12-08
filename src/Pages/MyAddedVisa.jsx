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
            <div className="max-w-7xl mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {visaData.map(visa => (
                    <VisaCard key={visa._id} visa={visa} handleDetails={handleDetails} />
                ))}
            </div>
        </>

    );
};

export default MyAddedVisa;