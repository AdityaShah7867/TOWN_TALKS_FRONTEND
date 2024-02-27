import React from 'react'
import Newbtn from '../Buttons/newbtn'

const EventCard = ({ event }) => {

    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
        const formattedDate = date.toLocaleDateString('en-US', options);

        return formattedDate;
    }

    return (
        <div className="font-['inter_var'] font-semibold rounded-2xl border  shadow-orange-950">
            <div className="bg-white p-6 max-w-96  rounded-2xl " style={{
                width: '500px'
            }}>
                <div>
                    <img src={`http://localhost:4000/${event.image}` || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nzdHxRZ_7w7JoH3dQlCi66ir4kP1a2JBuQ&usqp=CAU'} className='rounded-xl max-h-60 max-w-full rr mt-4' alt="" />
                </div>

                <div className='flex justify-between mt-8'>

                    <div className=' font-sans'>
                        <p>{formatDateTime(event.startDate)}</p>
                    </div>
                    <div className='m-1 text-xs font-sans'>
                        {event.address}
                    </div>


                </div>
                <div className='mt-4 font-semibold text-xl font-sans'>
                    {event.title}
                </div>
                <div className='mt-4  text-xl font-sans'>
                    {event.description}
                </div>

                <div className='mt-6 mb-8 '>
                    <span className='h-12 bg-gray-200 p-2 rounded-xl font-sans'>OFFLINE</span>
                    <span className='h-12 ml-4 bg-gray-200 p-2 rounded-xl font-sans'>PAID</span>
                    <span className='text-black font-lg font-bold '>{event.price}</span>
                </div>
                <div className='flex justify-between mt-4'>
                    <div>

                        <button class="hover:brightness-110 hover:animate-pulse text-sm font-bold py-3  px-4 rounded-md bg-green-500 shadow-lg shadow-indigo-500/50 text-white font-sans">Join</button>
                    </div>
                    <div className='flex '>
                        <img src="https://avatars.githubusercontent.com/u/121731399?v=3" className='rounded-full w-8 h-8' alt="" />
                        <img src="https://avatars.githubusercontent.com/u/121731399?v=3" className='rounded-full w-8 h-8' alt="" />
                        <div className='bg-gray-800 h-8 w-8 text-white rounded-full'>
                            <p className='p-1'>+87</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard