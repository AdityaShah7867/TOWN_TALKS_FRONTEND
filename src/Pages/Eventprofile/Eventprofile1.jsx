import React, { useState } from 'react'
import PieChart from "../../Components/Chart/Piechart";
import ColumnChart from "../../Components/Chart/Columnchart";

import bg from '../../Assets/Images/b.avif'
import bg1 from '../../Assets/Images/bg1.jpg'
import b1 from '../../Assets/Images/b.jpg'
import b2 from '../../Assets/Images/back.jpg'

const Eventprofile1 = () => {
    const pieChartData = [
        { label: 'Category 1', value: 30 },
        { label: 'Category 2', value: 40 },
        { label: 'Category 3', value: 20 },
        { label: 'Category 4', value: 10 },
    ];
    const chartData = [30, 40, 45, 50, 49, 60, 70, 91, 125];
    const chartCategories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];
  
    const [feedback, setFeedback] = useState({
        rating: null,
        experience: '',
    });

    const handleRatingChange = (value) => {
        setFeedback({ ...feedback, rating: value });
    };

    const handleExperienceChange = (event) => {
        setFeedback({ ...feedback, experience: event.target.value });
    };

    const handleSubmitFeedback = (event) => {
        event.preventDefault();
        // Log feedback details
        console.log('Feedback:', feedback);
        // Add further logic here, such as sending feedback to a server, etc.
    };

    return (
        <div className='flex justify-center items-center origin-center pb-10'>

            <div className='w-3/4 flex flex-col justify-center self-center bg-gray-50'>
                <div className='flex flex-col lg:flex-row justify-center gap-5 items-center  h-screen'>
                    <img src="https://source.unsplash.com/random" alt="" className='w-2/3 h-4/5 rounded-3xl' />
                    <div className='w-1/3  flex flex-row overflow-scroll lg:flex-col lg:gap-6  '>
                        <img src="https://source.unsplash.com/random" alt="" className='rounded-2xl h-48' />
                        <img src="https://source.unsplash.com/random" alt="" className='rounded-2xl h-48' />
                        <img src="https://source.unsplash.com/random" alt="" className='rounded-2xl h-48' />
                    </div>
                </div>
                <div className='flex flex-row -mt-8'>
                    <div className='w-2/3 mr-5 border-2 flex flex-col shadow-md p-2 bg-white'>
                        <p className='font-semibold text-3xl'> Trovilla Plan in Sereno Canyon - Estate Collection by Toll Brothers</p>
                        <p className='font-medium text-xl mt-2'>2861 62nd Ave, Oakland, CA 94605</p>

                        <p className='font-extralight text-2xl mt-3'> A slider is great way to display a slideshow featuring images or videos, usually on your homepage.
                            Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a slider widget and it will automatically insert the slider on your web page.
                            So, the Elementor slider would be a great tool to work with when building a WordPress site</p>
                        <div className='flex flex-row gap-5 font-medium text-lg mt-2'>
                            <p className=''> Start Date: 12/12/23</p>
                            <p className=''> End Date: 15/12/23</p>
                        </div>
                        <p className=' font-medium text-lg mt-4'> No of Registrations:450</p>
                        <PieChart data={pieChartData} />
                        <ColumnChart data={chartData} categories={chartCategories} />


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
                                    value={feedback.experience}
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