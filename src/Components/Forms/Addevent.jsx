import React, { useState } from 'react';
import bg from '../../Assets/Images/b.avif'
import bg1 from '../../Assets/Images/bg1.jpg'
import b1 from '../../Assets/Images/b.jpg'
import b2 from '../../Assets/Images/back.jpg'
import axios from 'axios'

const Addevent = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDateTime: '',
        endDateTime: '',
        eventMode: 'online',
        address: '',
        pincode: '',
        city: '',
        paid: false,
        price: '',
        meetinglink: '',
        eventImage: null,
    });

    const [Offline, setOffline] = useState("False")

    const handleoffline = (e) => {
        setOffline = !Offline
    }

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        // Add constraints for startDateTime and endDateTime
        if (name === 'startDateTime' || name === 'endDateTime') {
            const currentDate = new Date();
            const selectedDate = new Date(value);

            // Check if the selected date is before the current date
            if (selectedDate < currentDate) {
                alert('Please select a date and time after the current date and time.');
                return;
            }

            // Check if endDateTime is not before startDateTime
            if (name === 'endDateTime' && selectedDate < new Date(formData.startDateTime)) {
                alert('End date and time should be after the start date and time.');
                return;
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Handle the form submission logic here
        const formDataToSend = new FormData();

        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('http://localhost:4000/api/event/create-event', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem('auth')}`,
                },
            });


            if (response.status === 200) {
                console.log('Event created successfully')
            }


            // Handle response as needed
            console.log('Form submitted successfully', formData);
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <>
            {/* <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center" style={{ backgroundImage:  'url("src/Assets/Images/bg1.jpg")'  }}> */}

            {/* </div> */}
            <div className=" h-screen bg-gray-200 flex items-center justify-center overflow-hidden w-screen"
            // style={{ backgroundImage: `url(${b2})`, backgroundRepeat:"no-repeat",backgroundSize:"contain"  }}
            >
                <div className="bg-white  p-8 rounded shadow-md backdrop-blur-md  w-10/12">
                    {/* <div className='w-full h-full bg-transparent blur-sm'> hello</div> */}
                    <h2 className="text-5xl font-bold mb-4 justify-center text-center">Add Event</h2>

                    {/* Event Form */}
                    <form onSubmit={handleSubmit} >
                        <div className='flex flex-col gap-10 w-full lg:flex-row'>
                            <div className='w-1/2'>
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
                                        className="mt-1 p-2 w-full border rounded-md bg-slate-100"
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
                                        className="mt-1 p-2 w-full border rounded-md bg-slate-100"
                                    ></textarea>
                                </div>

                                <div className='flex gap-4'>
                                    {/* Start Date and Time */}
                                    <div className="mb-4 w-1/2">
                                        <label htmlFor="startDateTime" className="block text-sm font-medium text-gray-600">
                                            Start Date and Time
                                        </label>
                                        <input
                                            type="datetime-local"
                                            id="startDateTime"
                                            name="startDateTime"
                                            value={formData.startDateTime}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md bg-slate-100"
                                        />
                                    </div>

                                    {/* End Date and Time */}
                                    <div className="mb-4 w-1/2">
                                        <label htmlFor="endDateTime" className="block text-sm font-medium text-gray-600">
                                            End Date and Time
                                        </label>
                                        <input
                                            type="datetime-local"
                                            id="endDateTime"
                                            name="endDateTime"
                                            value={formData.endDateTime}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md bg-slate-100"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="eventImage" className="block text-sm font-medium text-gray-600">
                                        Image
                                    </label>
                                    <div className='bg-slate-100 h-12 flex justify-center items-center rounded-md'>
                                        <input
                                            type="file"
                                            id="eventImage"
                                            name="eventImage"
                                            accept="image/*"
                                            onChange={handleChange}
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-1/2'>
                                {/* Event Mode (Online/Offline) */}

                                <div className="mb-4 mt-5">
                                    <label className="block text-sm font-medium text-gray-600">Event Mode</label>
                                    <label className="relative inline-flex items-center cursor-pointer mt-1">
                                        <input
                                            type="checkbox"
                                            id="eventMode"
                                            name="eventMode"
                                            checked={formData.eventMode === 'offline'}
                                            onChange={() =>
                                                handleChange({
                                                    target: { name: 'eventMode', value: formData.eventMode === 'offline' ? 'online' : 'offline' },
                                                })
                                            }
                                            className="sr-only peer"
                                        />
                                        <div className="peer rounded-full outline-none duration-100 after:duration-500 -mt-0.5 w-[120px] h-8 bg-blue-300 after:content-['Online'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-14 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Offline'] peer-checked:after:border-white">
                                        </div>
                                    </label>
                                </div>

                                {/* {Offline && ( */}
                                {/* Address, Pincode, City */}
                                {formData.eventMode === 'offline' ? (

                                    <>
                                        <div className="mb-4 flex flex-row w-full gap-5">
                                            <div className='w-1/2'>
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="mt-1 p-2 border rounded-md w-full bg-slate-100"
                                                />
                                            </div>
                                            <div className='w-1/2'>
                                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-600">
                                                    Pincode
                                                </label>
                                                <input
                                                    type="text"
                                                    id="pincode"
                                                    name="pincode"
                                                    value={formData.pincode}
                                                    onChange={handleChange}
                                                    className="mt-1 p-2 w-full border rounded-md bg-slate-100"
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
                                                className="mt-1 p-2 w-full border rounded-md bg-slate-100"
                                            />
                                            {/* </div> */}
                                        </div>
                                    </>)
                                    :
                                    (
                                        <div>
                                            <label htmlFor="meetinglink" className="block text-sm font-medium text-gray-600">
                                                Meeting Link
                                            </label>
                                            <input
                                                type="text"
                                                id="meetinglink"
                                                name="meetinglink"
                                                value={formData.meetinglink}
                                                onChange={handleChange}
                                                className="mt-1 p-2 w-full border rounded-md bg-slate-100"
                                            />
                                        </div>
                                    )}


                                {/* <div className="w-1/2"> */}



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
                                        <label htmlFor="paid" className='ml-2'>Yes</label>
                                    </div>
                                    {formData.paid && (
                                        <input
                                            type="text"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Price"
                                            className="mt-3 p-2 w-full border rounded-md bg-slate-100"
                                        />
                                    )}
                                </div>


                                {/* Image Upload */}

                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                Add Event
                            </button>
                        </div>

                    </form>
                </div >
            </div >
            {/* </div > */}
        </>
    );
};

export default Addevent;
