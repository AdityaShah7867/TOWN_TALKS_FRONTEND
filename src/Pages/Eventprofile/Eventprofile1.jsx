import React, { useState } from 'react'
import PieChart from "../../Components/Chart/Piechart";
import ColumnChart from "../../Components/Chart/Columnchart";

import bg from '../../Assets/Images/b.avif'
import bg1 from '../../Assets/Images/bg1.jpg'
import b1 from '../../Assets/Images/b.jpg'
import b2 from '../../Assets/Images/back.jpg'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { toast } from 'react-toastify'

const Eventprofile1 = () => {


    const { eventId } = useParams();

    const [event, setEvent] = useState({})
    const [feedbacks, setFeedbacks] = useState([])

    const [feedback, setFeedback] = useState({
        rating: null,
        experience: '',
    });

    const createFeedback = async () => {

        const response = await axios.post(`http://localhost:4000/api/feedback/create-feedback/${eventId}`, {
            rating: feedback.rating,
            suggestion: feedback.experience,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        })

        if (response.status === 200) {
            console.log(response.data)
            toast.success('Feedback created')
        }
        else {
            toast.error('Failed to create feedback')
        }

    }

    const fetchEventById = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/event/get-event/${eventId}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth')}`
                }
            })
            if (response.status === 200) {
                setEvent(response.data)
            }

        } catch (error) {
            console.log(error)
        }
    }


    const getFeedBacksByEventyId = async () => {
        const response = await axios.get(`http://localhost:4000/api/feedback/get-feedback-data-by-event-id/${eventId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('auth')}`
            }
        }
        )
        if (response.status === 200) {
            console.log(response.data)
            setFeedbacks(response.data)
        }
    }






    useEffect(() => {
        fetchEventById()
        getFeedBacksByEventyId()

    }, [eventId])
    const pieChartData = [
        { label: 'Category 1', value: 30 },
        { label: 'Category 2', value: 40 },
        { label: 'Category 3', value: 20 },
        { label: 'Category 4', value: 10 },
    ];
    const chartData = [30, 40, 45, 50, 49, 60, 70, 91, 125];
    const chartCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];



    const handleRatingChange = (value) => {
        setFeedback({ ...feedback, rating: value });
    };

    const handleExperienceChange = (event) => {
        setFeedback({ ...feedback, experience: event.target.value });
    };

    const handleSubmitFeedback = async (event) => {
        event.preventDefault();


        await createFeedback();
        getFeedBacksByEventyId()
    };

    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);

        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
        };
        const formattedDate = date.toLocaleDateString("en-US", options);

        return formattedDate;
    }


    return (
        <div className='flex justify-center items-center origin-center pb-10'>

            <div className='w-3/4 flex flex-col justify-center self-center b'>
                <div className='flex flex-col lg:flex-row justify-center gap-5 items-center h-screen -m-16'>
                    <img src="https://bpac.in/wp-content/uploads/2024/01/Blog-Banner-3.jpg" alt="" className='w-full h-2/3 rounded-3xl' />
                    {/* <img src={'http://localhost:4000/' + event.image} alt="" className='w-full h-2/3 rounded-3xl' /> */}

                    {/* <div className='w-1/3  flex flex-row overflow-scroll lg:flex-col lg:gap-6  '>
                        <img src={'http://localhost:4000/' + event.image} alt="" className='rounded-2xl h-48' />
                        <img src={'http://localhost:4000/' + event.image} alt="" className='rounded-2xl h-48' />
                        <img src={'http://localhost:4000/' + event.image} alt="" className='rounded-2xl h-48' />
                    </div> */}
                </div>
                <div className='flex flex-row -mt-8'>
                    <div className='w-2/3 mr-5 border-2 flex flex-col shadow-md p-2 bg-white'>


                        {event.eventMode === 'offline' ? (
                            <>
                                <p className='font-semibold text-3xl'> {event.title} <a className='text-xl font-medium'>(Offline)</a></p>
                                <p className='font-medium text-lg mt-2'>{event.city} - {event.zip}</p>
                                {/* Add any other elements you want to render when eventMode is offline */}
                            </>
                        ) : (
                            <>
                                <p className='font-semibold text-3xl'> {event.title} <a className='text-xl font-medium'>(Online)</a></p>
                                <p className='font-medium text-lg mt-2'>Meeting Link: {event.meetingLink}</p>
                                {/* Add any other elements you want to render when eventMode is online */}
                            </>
                        )}
                        {event.userId && <p className='font-medium text-lg'>Organizer: {event.userId.username}</p>}
                        2
                        <p className='font-extralight text-2xl mt-3'>{event.description}</p>
                        <div className='flex flex-row gap-5 font-medium text-lg mt-2'>
                            <p className=''> Start Date: {formatDateTime(event.startDate)}</p>
                            <p className=''> End Date:  {formatDateTime(event.endDate)}</p>
                        </div>
                        <p className=' font-medium text-lg mt-4'> No of Registrations:{event?.participants?.length}</p>
                        {/* <PieChart data={pieChartData} />
                        <ColumnChart data={chartData} categories={chartCategories} /> */}

                        {
                            feedbacks.map(feedback => (
                                <div key={feedback._id} className='flex flex-col gap-2 p-2 border-2 rounded-md mt-4'>
                                    <p className='font-semibold text-xl'>User: {feedback.userId.username}</p>
                                    <p className='font-medium text-lg'>Comment: {feedback.suggestion}</p>
                                    <p className='font-medium text-lg'>Rating: {feedback.rating}</p>
                                </div>
                            ))


                        }

                    </div>
                    <div className='w-1/3 justify-center  items-center p-4'>
                        <form onSubmit={handleSubmitFeedback} className='max-w-1/3 mx-auto p-4 bg-white shadow-md rounded-md'>
                            <p className='font-semibold text-xl mb-4'>Feedback for the Event</p>

                            {/* Rating Section */}
                            <div className='mb-4'>
                                <label htmlFor="rating" className='block font-medium text-base'>Rate your Experience:</label>
                                <div className='flex flex-row gap-2'>
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <React.Fragment key={value}>
                                            <input
                                                type="radio"
                                                id={`rating${value}`}
                                                name="rating"
                                                value={value}
                                                className='form-radio text-blue-500 focus:ring focus:border-blue-300'
                                                onChange={() => handleRatingChange(value)}
                                            />
                                            <label htmlFor={`rating${value}`} className='cursor-pointer text-lg mr-2'>
                                                {value}
                                            </label>
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Sharing Section */}
                            <div className='mb-4'>
                                <label htmlFor="feedback" className='block font-medium text-base'>Share your Experience:</label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    placeholder='Enter your feedback'
                                    className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
                                    value={`feedback.experience`}
                                    onChange={handleExperienceChange}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'>
                                Submit Feedback
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventprofile1