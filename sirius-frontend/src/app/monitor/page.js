'use client';
import { useState } from 'react';
import SatelliteTypeSelector from '@/components/SatelliteTypeSelector';
import MapComponent from '@/components/MapComponent';
import SatelliteImageTypes from '../../../../shared_code/enums/SatelliteImageTypes.js';
function MapPage() {
  const [selectedType, setSelectedType] = useState(SatelliteImageTypes.TRUE_COLOR);

  return (
    <div>
      <SatelliteTypeSelector onTypeChange={setSelectedType} />
      <MapComponent selectedType={selectedType} />
    </div>
  );
}

export default MapPage;
