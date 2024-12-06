import { useLoaderData, useNavigate } from "react-router-dom";

const Latestvisa = () => {
    const navigate = useNavigate();
    const handleDetails =(id)=>{
        navigate(`/visas/${id}`);
    }
    const visas = useLoaderData(); 
    return (
        <div className="md:px-20 sm:px-10 py-10 space-y-3">
            <h1 className="text-4xl font-bold text-center mb-5">Latest Visa</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-5">
                {visas.map((visa) => (
                    <div
                        key={visa._id}
                        className="card bg-base-100 image-full lg:w-full md:w-full sm:w-full shadow-xl"
                    >
                        <figure>
                            <img
                                src={visa.countryImage || 'https://via.placeholder.com/150'}
                                alt={visa.countryName || 'Visa Image'}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold">
                                Country: {visa.countryName}
                            </h2>
                            <p className="text-md text-gray-100">
                                Visa Type: {visa.visaType}
                            </p>
                            <p className="text-sm text-gray-100">
                                Processing Time: {visa.processingTime} days
                            </p>
                            <p className="text-sm text-gray-100">
                                Fee: ${visa.fee}
                            </p>
                            <p className="text-sm text-gray-100">
                                Validity: {visa.validity}
                            </p>
                            <p className="text-sm text-gray-100">
                                Application Method: {visa.applicationMethod}
                            </p>
                            <div className="card-actions justify-start mt-4">
                                <button
                                    className="btn btn-success text-white"
                                    onClick={() => handleDetails(visa._id)}
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Latestvisa;
