import { useLoaderData, useNavigate } from "react-router-dom";
import VisaCard from "./VisaCard";
import { useState } from "react";

const Allvisa = () => {
    const navigate = useNavigate();
    const allVisa = useLoaderData(); 
    const [filteredVisa, setFilteredVisa] = useState(allVisa); 
    const [selectedType, setSelectedType] = useState(""); 


    const handleFilter = (event) => {
        const type = event.target.value;
        setSelectedType(type);
        if (type === "all" || type === "") {
            setFilteredVisa(allVisa); 
        } else {
            const filtered = allVisa.filter((visa) => visa.visaType === type);
            setFilteredVisa(filtered);
        }
    };

    const handleDetails = (id) => {
        navigate(`/visas/${id}`);
    };


    const visaTypes = [...new Set(allVisa.map((visa) => visa.visaType))];

    return (
        <div className="max-w-7xl mx-auto py-5">

            <div className="mb-5 text-center">
                <label htmlFor="visaTypeFilter" className="mr-3 font-bold">
                    Filter by Visa Type:
                </label>
                <select id="visaTypeFilter" value={selectedType} onChange={handleFilter} className="border border-gray-300 p-2 rounded-xl  ">
                    <option value="all">All Types</option>
                    {visaTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>


            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                {filteredVisa.map((visa) => (
                    <VisaCard key={visa._id} visa={visa} handleDetails={handleDetails} />
                ))}
            </div>
        </div>
    );
};

export default Allvisa;
