import { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";


const Myvisa = () => {
    const { user } = useContext(AuthContext);
    const myVisaInfo = useLoaderData();

    // console.log(myVisaInfo);
    // console.log(user.email)
    return (<>
    <Navbar/>
    <div className="overflow-x-auto lg:max-w-7xl mt-10 mx-auto">
            <table className="table">
                {/* Table head */}
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
                    {/* Dynamically generate rows */}
                    {myVisaInfo.map((visa) => (
                        <tr key={visa._id}>
                           
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={visa.countryImage} alt={visa.countryName} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{visa.countryName}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{visa.visaType}</td>
                            <td>{visa.processingTime} days</td>
                            <td>${visa.fee}</td>
                            <th>
                                <Link to={`/visas/${visa._id}`} className="btn btn-ghost btn-xs">Details</Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    </>
        
    );
};

export default Myvisa;