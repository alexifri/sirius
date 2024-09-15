import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SatelliteImageTypes from '../../../shared_code/enums/SatelliteImageTypes.js';

function SatelliteTypeSelector({ onTypeChange }) {
    const [selectedType, setSelectedType] = useState(SatelliteImageTypes.TRUE_COLOR);
  
    const handleChange = (event) => {
      const newType = event.target.value;
      setSelectedType(newType);
      onTypeChange(newType);
    };
  
    return (
        <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel
          id="satellite-type-label"
          sx={{ color: "white" }} // Makes the label white
        >
          Satellite Image Type
        </InputLabel>
        <Select
          labelId="satellite-type-label"
          id="satellite-type-select"
          value={selectedType}
          onChange={handleChange}
          label="Satellite Image Type"
          sx={{
            backgroundColor: 'black',
            color: "white", // Makes the selected text white
            ".MuiSvgIcon-root": { color: "white" }, // Makes the dropdown icon white
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#333", // Background color of the dropdown
                color: "white",  // Text color in dropdown
              },
            },
          }}
        >
          <MenuItem sx={{
            backgroundColor: 'black',
            color: "white", // Makes the selected text white
            ".MuiSvgIcon-root": { color: "white" }, // Makes the dropdown icon white
          }} value="TRUE_COLOR">True Color</MenuItem>
          <MenuItem sx={{
            backgroundColor: 'black',
            color: "white", // Makes the selected text white
            ".MuiSvgIcon-root": { color: "white" }, // Makes the dropdown icon white
          }} value="NDVI">NDVI</MenuItem>
          <MenuItem sx={{
            backgroundColor: 'black',
            color: "white", // Makes the selected text white
            ".MuiSvgIcon-root": { color: "white" }, // Makes the dropdown icon white
          }} value="NDWI">NDWI</MenuItem>
            <MenuItem sx={{
            backgroundColor: 'black',
            color: "white", // Makes the selected text white
            ".MuiSvgIcon-root": { color: "white" }, // Makes the dropdown icon white
          }} value="NDWIFLOODING">NDWI for flooding</MenuItem>
        </Select>
      </FormControl>
    );
  }
  
  export default SatelliteTypeSelector;