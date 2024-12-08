import { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Myvisa = () => {
    const { user } = useContext(AuthContext);
    const myVisaInfoLoaded = useLoaderData();
    const [myVisaInfo, setMyVisaInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


    useEffect(() => {
        setMyVisaInfo(myVisaInfoLoaded);
        setLoading(false);
    }, [myVisaInfoLoaded]);

    const handleDelete = (id) => {
        setLoading(true);
        fetch(`https://visa-navigator-server-phi.vercel.app/visa/delete/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setMyVisaInfo((prevVisas) =>
                        prevVisas.filter((visa) => visa.applicationId !== id)
                    );
                } else {
                    console.log("Failed to delete visa:", data.acknowledged);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };


    const filteredVisas = myVisaInfo.filter((visa) =>
        visa.countryName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <div className="overflow-x-auto lg:max-w-7xl mt-10 mx-auto">
                {loading ? (
                    <div className="flex justify-center items-center mt-10">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                ) : myVisaInfo.length ? (
                    <div>
                     
                        <div className="relative mb-5">
                            <input
                                type="text"
                                placeholder="Search by country..."
                                value={search}
                                onChange={handleSearchChange}
                                className="pl-10 pr-4 py-2 border rounded-lg w-full"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                        </div>

                        <h1 className="text-lg font-bold text-center mb-5">
                            List of visa Applied by {user.displayName}
                        </h1>

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Visa Type</th>
                                    <th>Processing Time</th>
                                    <th>Fee</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredVisas.length ? (
                                    filteredVisas.map((visa) => (
                                        <tr key={visa._id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                src={visa.countryImage}
                                                                alt={visa.countryName}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">
                                                            {visa.countryName}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{visa.visaType}</td>
                                            <td>{visa.processingTime} days</td>
                                            <td>${visa.fee}</td>
                                            <th>
                                                <button
                                                    onClick={() => handleDelete(visa.applicationId)}
                                                    className="btn bg-red-600 text-white btn-xs"
                                                >
                                                    Cancel
                                                </button>
                                            </th>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">
                                            No visas match your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-lg font-bold text-center">
                            There is no visa applied by {user.displayName}
                        </h1>
                    </div>
                )}
            </div>
        </>
    );
};

export default Myvisa;
