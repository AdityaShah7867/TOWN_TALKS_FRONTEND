import React, { useState } from 'react';

const Addevents2 = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDateTime: '',
    endDateTime: '',
    address: '',
    pincode: '',
    city: '',
    paid: false,
    price: '',
    image: null,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle the form submission logic here
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        body: formDataToSend,
      });

      // Handle response as needed
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const renderFormFields = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-1/2">
            {/* Title Field */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-1/2">
            {/* Start Date and Time */}
            <div className="mb-4">
              <label htmlFor="startDateTime" className="block text-sm font-medium text-gray-600">
                Start Date and Time
              </label>
              <input
                type="datetime-local"
                id="startDateTime"
                name="startDateTime"
                value={formData.startDateTime}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* End Date and Time */}
            <div className="mb-4">
              <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-600">
                End Date and Time
              </label>
              <input
                type="datetime-local"
                id="endDateTime"
                name="endDateTime"
                value={formData.endDateTime}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-1/2">
            {/* Address, Pincode, City */}
            <div className="mb-4 flex flex-row w-full gap-5">
              <div className="w-1/2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <textarea
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-1/2">
            {/* Paid and Price */}
            <div className="mb-4 mt-5">
              <label className="block text-sm font-medium text-gray-600">Paid</label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="paid"
                  name="paid"
                  checked={formData.paid}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
                />
                <label htmlFor="paid" className="ml-2">
                  Yes
                </label>
              </div>
              {formData.paid && (
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="mt-3 p-2 w-full border rounded-md"
                />
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="w-1/2">
            {/* Image Upload */}
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-600">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-10/12">
        <h2 className="text-5xl font-bold mb-4 justify-center text-center">Add Event</h2>

        {/* Event Form */}
        <form onSubmit={handleSubmit} className="flex justify-between">
          {renderFormFields()}

          {/* Navigation Buttons */}
          <div className="mt-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Previous
              </button>
            )}
            {currentStep < 5 && (
              <button
                type="button"
                onClick={handleNextStep}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Next
              </button>
            )}
            {currentStep === 5 && (
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Add Event
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addevents2;
