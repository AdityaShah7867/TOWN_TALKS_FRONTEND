import React, { useEffect } from 'react'
import Search from '../../Components/Search/Search'
import EventCard from '../../Components/Cards/EventCard'
import { useEvent } from '../../Context/EventContext'
import { useState } from 'react'

const Home = () => {


  const [events, setEvents] = useState([])

  const { fetchEvents } = useEvent()



  useEffect(() => {
    fetchEvents().then((response) => {
      setEvents(response.data)
    })
  }, [])

  return (
    <div className='bg-gray-100 min-h-screen'>
      <div>
        <Search />
      </div>
      <div className=' mx-20  flex flex-wrap gap-8 m-8'>
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