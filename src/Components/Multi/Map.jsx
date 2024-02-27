import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Map = () => {
  var apiKey = 'AIzaSyCiQvZuxBj_YBs5d1pIYE2GmrjUx6n-YMo';
  const [location, setLocation] = useState({
    latitude: '',
    longitude: ''
  });
  const [surroundingLocations, setSurroundingLocations] = useState([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    getCoordinates();
  }, []);

  function getCoordinates() {
    var selectedCity = 'New Delhi';
    var geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${selectedCity}&key=${apiKey}`;
    fetch(geocodingUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          var location = data.results[0].geometry.location;
          var latitude = location.lat;
          var longitude = location.lng;
          setLocation({ latitude, longitude });
          // Fetch surrounding locations or use some predefined locations
          fetchSurroundingLocations(latitude, longitude);
        } else {
          console.log('Location coordinates not found');
        }
      })
      .catch(error => {
        console.error('Error fetching coordinates:', error);
      });
  }

  function fetchSurroundingLocations(latitude, longitude) {

    const nearbyLocations = [
      { name: 'Location A', lat: latitude + 0.01, lng: longitude + 0.01 },
      { name: 'Location B', lat: latitude - 0.01, lng: longitude - 0.01 }
    ];
    setSurroundingLocations(nearbyLocations);
  }

  const navigate = useNavigate();

  useEffect(() => {
    function updateMapSize() {
      if (mapContainerRef.current) {
        const width = mapContainerRef.current.offsetWidth;
        const height = mapContainerRef.current.offsetHeight;
        console.log("Map size:", width, height);
      }
    }

    window.addEventListener('resize', updateMapSize);
    return () => window.removeEventListener('resize', updateMapSize);
  }, []);

  return (
    <>
      <div ref={mapContainerRef} className="map-container w-full h-full" style={{ height: '300px' }}>
        <iframe
          title="Map"
          src={`https://www.google.com/maps/embed/v1/view?key=${apiKey}&center=${location.latitude},${location.longitude}&zoom=15`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
        ></iframe>
        {/* Add markers for surrounding locations */}
        {surroundingLocations.map((loc, index) => (
          <Marker key={index} lat={loc.lat} lng={loc.lng} name={loc.name} />
        ))}
      </div>
    </>
  );
};

const Marker = ({ lat, lng, name }) => (
  <div style={{ position: 'absolute', left: `${lat * 100}%`, top: `${lng * 100}%`, transform: 'translate(-50%, -50%)' }}>
    <div style={{ backgroundColor: 'red', borderRadius: '50%', width: '10px', height: '10px' }} title={name}></div>
  </div>
);

export default Map;
