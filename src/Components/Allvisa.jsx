import { useLoaderData, useNavigate } from "react-router-dom";
import VisaCard from "./VisaCard";

const Allvisa = () => {
    const navigate = useNavigate();
    const allVisa = useLoaderData();
    // console.log(allVisa)
    const handleDetails = (id) => {
        navigate(`/visas/${id}`);
    }
    return (
        <div className="max-w-7xl mx-auto py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

            {allVisa.map(visa => (
                <VisaCard key={visa._id} visa={visa} handleDetails={handleDetails} />
            ))}


        </div>
    );
};

export default Allvisa;