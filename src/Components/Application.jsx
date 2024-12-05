

const Application = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const visaDetails = Object.fromEntries(formData.entries());
        visaDetails.requiredDocuments = formData.getAll("requiredDocuments");
        visaDetails.uploadTime = new Date().toISOString();
        fetch('http://localhost:5000/visa', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(visaDetails),
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
            })
        console.log(visaDetails);

        alert("Visa Added Successfully");

        e.target.reset();

    };

    return (
        <div className="flex justify-center items-center  bg-gray-100 p-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl  border border-gray-200"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add Visa</h2>
                <section className="flex gap-2 justify-between">
                    <div>


                        {/* Country Image */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Country Image URL</label>
                            <input
                                type="text"
                                name="countryImage"
                                placeholder="Paste image link here"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Country Name */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Country Name</label>
                            <input
                                type="text"
                                name="countryName"
                                placeholder="Enter country name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Visa Type */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Visa Type</label>
                            <select
                                name="visaType"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="Tourist visa">Tourist Visa</option>
                                <option value="Student visa">Student Visa</option>
                                <option value="Official visa">Official Visa</option>
                            </select>
                        </div>

                        {/* Processing Time */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Processing Time</label>
                            <input
                                type="text"
                                name="processingTime"
                                placeholder="e.g., 5-10 days"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Required Documents */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">
                                Required Documents
                            </label>
                            <div className="space-y-2">
                                {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map((doc) => (
                                    <label key={doc} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value={doc}
                                            className="text-blue-500 focus:ring-blue-500"
                                        />
                                        <span>{doc}</span>
                                    </label>
                                ))}
                            </div>
                        </div>


                    </div>
                    {/* dividing for flex */}
                    <div>


                        {/* Age Restriction */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">
                                Age Restriction
                            </label>
                            <input
                                type="number"
                                name="ageRestriction"
                                placeholder="e.g., 18"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Fee */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Fee</label>
                            <input
                                type="number"
                                name="fee"
                                placeholder="e.g., 100"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Validity */}
                        <div className="mb-4">
                            <label className="block text-gray-600 font-medium mb-2">Validity</label>
                            <input
                                type="text"
                                name="validity"
                                placeholder="e.g., 6 months"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Application Method */}
                        <div className="mb-6">
                            <label className="block text-gray-600 font-medium mb-2">
                                Application Method
                            </label>
                            <input
                                type="text"
                                name="applicationMethod"
                                placeholder="e.g., Online, In-person"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </section>
                {/* Description */}
                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Description</label>
                    <textarea
                        name="description"
                        placeholder="Write a description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                >
                    Add Visa
                </button>
            </form>
        </div>
    );
};

export default Application;
