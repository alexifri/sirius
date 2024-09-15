import dynamic from 'next/dynamic';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Button } from '@mui/material';

import DrawControl from './DrawControl';


function MapComponent({ selectedType }) {
    const [polygon, setPolygon] = useState(null);
  
    const handlePolygonCreated = (geoJsonData) => {
      // Store the polygon data in state
      setPolygon(geoJsonData);
    };
  
    const handleSubmit = () => {
      if (!polygon) return;
  
      // Extract coordinates and ensure they are in [longitude, latitude] order
      const coordinates = polygon.geometry.coordinates[0]; // Assuming single polygon
  
      // Flatten coordinates if necessary
      const coordinateArray = coordinates.map((coord) => [coord[0], coord[1]]);
  
      // Build the query parameters
      const params = new URLSearchParams();
      params.append('index', selectedType);
      params.append('array', JSON.stringify(coordinateArray));
  
      // Construct the URL
      const url = `http://localhost:5001/api/v2/process?${params.toString()}`;
  
      // Send GET request
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the backend
          console.log('Received data:', data);
          // You might want to display this data on the map
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
    return (
      <div>
        <MapContainer
          center={[44.6, 27.8]} // Centered based on your coordinates; adjust as needed
          zoom={11}
          style={{ height: '80vh', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <DrawControl onPolygonCreated={handlePolygonCreated} />
        </MapContainer>
  
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!polygon}
          style={{ marginTop: '10px' }}
        >
          Submit
        </Button>
      </div>
    );
  }
  
  export default MapComponent;