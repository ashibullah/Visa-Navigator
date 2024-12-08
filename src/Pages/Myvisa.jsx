import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";


const Myvisa = () => {
    const { user } = useContext(AuthContext);
    const myVisaInfoLoaded = useLoaderData();
    const [myVisaInfo , setMyVisaInfo] = useState(myVisaInfoLoaded);
    const handleDelete = (id)=>{
        // console.log(id);
        fetch(`http://localhost:5000/visa/delete/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),

          })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount) {
                  // Remove the deleted visa from the state
                  setMyVisaInfo((prevVisas) => prevVisas.filter((visa) => visa.applicationId !== id));
              } else {
                  console.log("Failed to delete visa:", data.acknowledged);
              }
          })
          .catch((err) => {
              console.log(err);
          });
    }
    // console.log(myVisaInfo)

    // console.log(myVisaInfo);
    // console.log(user.email)
    return (<>
    <Navbar/>
    <div className="overflow-x-auto lg:max-w-7xl mt-10 mx-auto">
        {/* <h1 className="text-lg font-bold text-center">List of visa added by {user.displayName}</h1> */}
        {
            (myVisaInfo.length)? <div> 
                <h1 className="text-lg font-bold text-center mb-5">List of visa Applied by {user.displayName}</h1>
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
                                <button onClick={()=>handleDelete(visa.applicationId)} className="btn bg-red-600 text-white btn-xs">Cancel</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            </div>: <div>
            <h1 className="text-lg font-bold text-center">There is no visa applied by {user.displayName}</h1>
            </div>
        }
           
        </div>
    </>
        
    );
};

export default Myvisa;