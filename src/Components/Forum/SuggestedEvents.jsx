import React from 'react'
import { useEvent } from '../../Context/EventContext'
import { useState } from 'react'
import { useEffect } from 'react'
const SuggestedEvents = () => {

  const [events, setEvents] = useState([])

  const { fetchEvents } = useEvent()


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

  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.data)
    })
  }, [])


  return (
    <div>
      <div className=''>
        <h1 className='text-2xl font-bold text-center'>Suggested Events</h1>
        {
          events.map((event, index) => (

            <div className=' mt-2 p-2'>
              <center>
                <div>
                  <img src={
                    `http://localhost:4000/${event.image}` ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nzdHxRZ_7w7JoH3dQlCi66ir4kP1a2JBuQ&usqp=CAU"
                  } alt="" className=' h-64 w-96' />
                </div>

                <div className='flex flex-col gap-2'>
                  <p className='text-blank font-sans text-lg font-bold'>Event Name:{event.title}    </p>
                  <p className='text-blank font-sans text-lg font-bold'>Event Date:{formatDateTime(event.startDate)}</p>
                </div>
              </center>
              <hr className='mt-4' />
            </div>


          ))
        }
      </div >
    </div >
  )
}

export default SuggestedEvents