import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Slider defaultValue={30} step={10} marks min={0} max={100} disabled />
    </Box>
  );
}