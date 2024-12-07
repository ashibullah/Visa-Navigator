import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const VisaDetails = () => {
    const {user} = useContext(AuthContext);
    const visa = useLoaderData()
    const [showModal, setShowModal] = useState(false);
    const handleApply = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        let myVisa = Object.fromEntries(formData.entries());
        myVisa = { 
            ...myVisa, 
            visaId: visa._id 
        };
        
        fetch('http://localhost:5000/visa/apply', 
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(myVisa),
    
              })
              .then(res => res.json()) 
              .then(data => {
                  console.log(data.result); 
                  if(data.result) alert("Visa applied successfully.")
                    else alert("You have already applied for this country")
              })
                .catch(err => {
                    console.log(err);
                })

    }

    return (
        <div>
        <Navbar />
        <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-6 rounded-lg shadow-md max-w-7xl mx-auto mt-6">
            
            <div className="md:w-1/2 w-full">
                <img
                    src={visa.countryImage}
                    alt={visa.countryName}
                    className="rounded-lg object-cover w-full h-60 md:h-full"
                />
            </div>


            <div className="md:w-2/3 w-full md:ml-6 mt-4 md:mt-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{visa.countryName}</h2>
                <p className="text-sm text-gray-600 mb-4">{visa.visaType}</p>
                <p className="text-gray-700 mb-4">{visa.description}</p>
                
                <div className="space-y-2">
                    <p className="text-sm">
                        <span className="font-medium">Processing Time:</span> {visa.processingTime} days
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Fee:</span> ${visa.fee}
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Validity:</span> {visa.validity}
                    </p>
                    <p className="text-sm">
                        <span className="font-medium">Age Restriction:</span> {visa.ageRestriction}
                    </p>
                    <p className="text-sm text-green-800">
                        <span className="font-medium text-gray-600 ">Application Method:</span> {visa.applicationMethod}
                    </p>
                </div>

                <p className="mt-4 text-sm text-gray-400 italic">
                    Uploaded on: {new Date(visa.uploadTime).toLocaleDateString()}
                </p>
                <button onClick={()=>setShowModal(true)} className="mt-4 px-5 py-2 text-sm rounded-full bg-blue-500 text-white">Apply for the Visa</button>
            </div>
        </div>
         {/* Modal */}
         {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                        <h2 className="text-xl font-bold mb-4">Apply for the Visa</h2>
                        <form onSubmit={handleApply} className="space-y-4">
                            {/* Email Field */}
                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user.email}
                                    readOnly
                                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                                />
                            </div>

                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full mt-1 px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="w-full mt-1 px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>

                            {/* Applied Date */}
                            <div>
                                <label className="block text-sm font-medium">Applied Date</label>
                                <input
                                    type="text"
                                    name="appliedDate"
                                    defaultValue={new Date().toLocaleDateString()}
                                    readOnly
                                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                                />
                            </div>

                            {/* Fee */}
                            <div>
                                <label className="block text-sm font-medium">Fee</label>
                                <input
                                    type="text"
                                    name="fee"
                                    defaultValue={visa.fee}
                                    readOnly
                                    className="w-full mt-1 px-4 py-2 border rounded-md bg-gray-100"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            >
                                Apply
                            </button>
                        </form>

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 text-sm text-gray-500 hover:text-gray-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
    </div>
    );
};

export default VisaDetails;