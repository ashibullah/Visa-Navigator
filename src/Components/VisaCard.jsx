/* eslint-disable react/prop-types */
const VisaCard = ({ visa, handleDetails }) => {
    return (
        <div key={visa._id} className="bg-white rounded-xl shadow-md p-6 mb-4 w-full mx-auto">
            <img
                src={visa.countryImage}
                alt={visa.countryName}
                className="h-32 w-full object-cover rounded-t-xl"
            />
            <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">{visa.countryName}</h3>
                <p className="text-sm text-gray-500">{visa.visaType}</p>
                <p className="mt-2 text-gray-700 text-sm">{visa.description}</p>
                <div className="mt-4 space-y-2">
                    <p className="text-sm"><span className="font-medium">Fee:</span> ${visa.fee}</p>
                </div>
                <button
                    onClick={() => handleDetails(visa._id)}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md"
                >
                    Details
                </button>
            </div>
        </div>
    );
};

export default VisaCard;
