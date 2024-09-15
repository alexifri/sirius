// DrawControl.js
import { useMap } from 'react-leaflet';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet-draw'; // Import after 'leaflet'
import 'leaflet-draw/dist/leaflet.draw.css';

export default function DrawControl({ onPolygonCreated }) {
  const map = useMap();
  const drawControlRef = useRef(null);
  const drawnItemsRef = useRef(new L.FeatureGroup());

  useEffect(() => {
    if (!map) return;

    const drawnItems = drawnItemsRef.current;
    map.addLayer(drawnItems);

    // Remove existing draw control to prevent duplicates
    if (drawControlRef.current) {
      map.removeControl(drawControlRef.current);
    }

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false,
      },
      edit: {
        featureGroup: drawnItems,
        edit: false,
        remove: true,
      },
    });

    drawControlRef.current = drawControl;
    map.addControl(drawControl);

    const handleDrawCreated = (event) => {
      const { layer } = event;

      // Clear previous layers to ensure only one polygon is selected
      drawnItems.clearLayers();
      drawnItems.addLayer(layer);

      const geoJsonData = layer.toGeoJSON();

      // Notify parent component of the new polygon
      if (onPolygonCreated) {
        onPolygonCreated(geoJsonData);
      }
    };

    map.on(L.Draw.Event.CREATED, handleDrawCreated);

    // Cleanup function
    return () => {
      map.off(L.Draw.Event.CREATED, handleDrawCreated);

      if (drawControlRef.current) {
        map.removeControl(drawControlRef.current);
        drawControlRef.current = null;
      }

      if (drawnItemsRef.current) {
        map.removeLayer(drawnItemsRef.current);
      }
    };
  }, [map, onPolygonCreated]);

  return null;
}
