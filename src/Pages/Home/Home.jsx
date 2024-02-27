import React, { useEffect } from 'react'
import Search from '../../Components/Search/Search'
import EventCard from '../../Components/Cards/EventCard'
import { useEvent } from '../../Context/EventContext'
import { useState } from 'react'
import Multi from '../../Components/Multi/Multi'

const Home = () => {


  const [events, setEvents] = useState([])

  const { fetchEvents } = useEvent()



  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.data)
    })
  }, [])

  return (
    <div className='bg-gray-100 p-12 min-h-screen overflow-hid font-sans'>
      <div>
        
        <p className='text-3xl font-bold ml-8'>FIND EVENTS</p>
        <Multi />
      </div>
      <div className=' mx-20  flex flex-wrap gap-8 mt-4'>
        {events.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            
          />
        ))}
      </div>

    </div>
  )
}

export default Home