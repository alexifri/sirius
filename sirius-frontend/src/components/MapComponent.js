import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Button } from '@mui/material';

import DrawControl from './DrawControl';

import { saveAs } from 'file-saver';  // FileSaver.js for saving files client-side


function MapComponent({ selectedType }) {
    const [polygon, setPolygon] = useState(null);
    const [imageURL, setImageURL] = useState(null);
    const [imageBounds, setImageBounds] = useState(null);
  
    const handlePolygonCreated = (geoJsonData) => {
      // Store the polygon data in state
      setPolygon(geoJsonData);
    };


    const handleSubmit = () => {
      if (!polygon) return;
  
      // Extract coordinates and ensure they are in [longitude, latitude] order
      const coordinates = polygon.geometry.coordinates[0]; // Assuming single polygon
  
      // Flatten coordinates if necessary
      const coordinateArray = coordinates.map((coord) => [coord[1], coord[0]]);
  
      // Build the query parameters
      const params = new URLSearchParams();
      params.append('index', selectedType);
      params.append('array', JSON.stringify(coordinateArray));
  
      // Construct the URL
      const url = `http://localhost:5001/api/v2/process?${params.toString()}`;
  
      // Send GET request
      fetch(url)
        .then(response => response.blob())
        .then((data) => {

            console.log('Received data:', data);
            const objectURL = URL.createObjectURL(data);
            const latlngs = coordinateArray.map((coord) => L.latLng(coord[0], coord[1]));
            const bounds = L.latLngBounds(latlngs);
            setImageURL(objectURL);
            setImageBounds(bounds);
          // Handle the response from the backend
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
            {imageURL  && (
                <ImageOverlay url={imageURL} bounds={imageBounds} opacity={1}  // Rotate the image back to correct orientation
                />
            )}
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