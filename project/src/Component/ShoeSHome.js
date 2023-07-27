import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MultiSlider from './MultiSlider';

const Text = () => {
  return (
    <div>
      <div >
        <Box sx={{ marginLeft: '15px' , display:'flex' }}>
          <div>
            <h1 style={{ maxWidth: '112px' }}>Best Of Electronics</h1>
            <Button variant="contained">View All</Button>
          </div>
          <div> 
          {/* <h1 style={{ maxWidth: '112px' }}>Best Of Electronics</h1> */}
           <MultiSlider/> 
          </div> 
        </Box>
      </div>
    </div>
  )
}

export default Text 