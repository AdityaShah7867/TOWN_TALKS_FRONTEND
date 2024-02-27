import React from 'react'
import Newbtn from '../Buttons/newbtn'

const EventCard = () => {
  return (
    <div className="font-['inter_var'] font-semibold">
        <div className="bg-white p-4 max-w-80 ">
            <div>
                <img src="https://scrmc.com/wp-content/uploads/2022/01/blood-donor-month-1.jpg" className='rounded-xl rr mt-4 max-w-72 ' alt="" />
            </div>

            <div className='flex justify-between mt-8'>

                <div className=''>
                <p>10 dec Monday</p>
                </div>
                <div className='m-1 text-xs'>
                VIRAR, MUMBAI 401303
                </div>

            </div>
                <div className='mt-4 font-semibold text-xl'>
                BLOOD DONATION CAMP
                </div>
            <div className='mt-6 mb-8 '>
                <span className='h-12 bg-gray-200 p-2 rounded-xl'>OFFLINE</span>
                <span className='h-12 ml-4 bg-gray-200 p-2 rounded-xl'>PAID</span>
            </div>
            <div className='flex justify-between mt-4'>
                <div>

                <button class="hover:brightness-110 hover:animate-pulse text-sm font-bold py-3  px-4 rounded-md bg-green-500 shadow-lg shadow-indigo-500/50 text-white">Join</button>
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