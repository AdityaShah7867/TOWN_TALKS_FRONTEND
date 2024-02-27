import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const EventProfile = () => {

  const { eventId } = useParams();

  const [event, setEvent] = useState({})

  const fetchEventById = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/event/get-event/65ddb0a1a4c095cd55028fd5`)
      if (response.status === 200) {
        setEvent(response.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEventById()
  }, [eventId])

  const eventData = {
    title: 'Example Event',
    description: 'This is a sample event description.',
    startDate: '2024-03-01T10:00', // ISO 8601 format
    endDate: '2024-03-02T18:00',   // ISO 8601 format
    chiefGuest: 'John Doe',
    registrations: 150,
    completed: true,
    feedbacks: [
      { id: 1, user: 'User1', comment: 'Great event!', rating: 5 },
      { id: 2, user: 'User2', comment: 'Enjoyed it!', rating: 4 },
    ],
    imageGallery: [
      '/path/to/image1.jpg',
      '/path/to/image2.jpg',
      '/path/to/image3.jpg',
    ],
  };

  return (
    <div className="container mx-auto my-8">
      {/* Event Title */}
      <h1 className="text-4xl font-bold mb-4">{eventData.title}</h1>

      {/* Event Description */}
      <p className="text-gray-700 mb-4">{eventData.description}</p>

      {/* Event Dates and Times */}
      <p className="text-gray-700 mb-4">
        <strong>Start Date:</strong> {new Date(eventData.startDate).toLocaleString()}<br />
        <strong>End Date:</strong> {new Date(eventData.endDate).toLocaleString()}
      </p>

      {/* Chief Guest */}
      {eventData.chiefGuest && (
        <p className="text-gray-700 mb-4">
          <strong>Chief Guest:</strong> {eventData.chiefGuest}
        </p>
      )}

      {/* Number of Registrations */}
      <p className="text-gray-700 mb-4">
        <strong>Registrations:</strong> {eventData.registrations}
      </p>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventData.imageGallery.map((image, index) => (
          <img key={index} src={image} alt={`Event Image ${index + 1}`} className="w-full h-48 object-cover rounded-md" />
        ))}
      </div>

      {/* Event Completion Feedbacks */}
      {eventData.completed && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Event Feedbacks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventData.feedbacks.map((feedback) => (
              <div key={feedback.id} className="bg-white p-4 rounded-md shadow-md">
                <p className="text-gray-700 mb-2"><strong>User:</strong> {feedback.user}</p>
                <p className="text-gray-700 mb-2"><strong>Comment:</strong> {feedback.comment}</p>
                <p className="text-gray-700"><strong>Rating:</strong> {feedback.rating}/5</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventProfile;
