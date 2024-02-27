import React from 'react'
import Search from '../../Components/Search/Search'
import EventCard from '../../Components/Cards/EventCard'

const Home = () => {

    //title , participants , type=onlie , apply button , date ,city , paid , pincode  ,

    const cardsData = [
        {
          title: 'Blood Donation Camp',
          description: 'Description for Card',
          imageUrl: 'https://media.istockphoto.com/id/538449165/photo/beautiful-cloudscape-over-the-sea-sunset-shot.jpg?s=612x612&w=0&k=20&c=XwieRIV5Df3Azuk8tH3CnAlLA-GO5GBE7R7dKtb1POw=',
        },
        // {
        //   title: 'City Cleanup Drive',
        //   description: 'Description for Card 2',
        //   imageUrl: 'https://via.placeholder.com/150',
        // },
        // {
        //   title: 'ok some text',
        //   description: 'Description for Card 3',
        //   imageUrl: 'https://via.placeholder.com/150',
        // },
      ];
    

      
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div>
            <Search />
        </div>
        <div className='flex flex-wrap gap-8 m-8'>
        {/* Mapping over cardsData to render SampleCard dynamically */}
        {cardsData.map((card, index) => (
          <EventCard
            key={index} // Ensure each card has a unique key
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

    </div>
  )
}

export default Home