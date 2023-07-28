import React from 'react'
import Button from '@mui/material/Button';
import MultiSlider from './MultiSliderE';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  Toys  from './ToysandMore';
import Bestseller from './Bestsellers';
import Testing from './Testing';

const Text = () => {
  function viewmore() {
    alert('view more is call')
  }
  return (

    <>
     <Testing/>
      {/* this electronic shops  */}
      <Box sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Customize the box shadow
        borderRadius: '8px', // Optional: add border radius for rounded corners
        pt: 5, // Optional: add padding to the container
        mt: 5, // Optional: add margin top to create some space from the content above
        m: 3,
        p: 3,

      }}
      >
        <Grid container spacing={2} style={{ marginLeft: '5px', backgroundColor: '#fff' }}>

          <Grid item xs={2} style={{ marginLeft: '10px', marginTop: '10px' }}>
            <h1 style={{ maxWidth: '112px' }}>Best Of Electronics</h1>
            <Button variant="contained" onClick={viewmore}>View All</Button>
          </Grid>

          <Grid item xs={9}>
            <MultiSlider />
          </Grid>

        </Grid>
      </Box >
      {/* shoes    list  */}
      <Box sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Customize the box shadow
        borderRadius: '8px', // Optional: add border radius for rounded corners
        pt: 5, // Optional: add padding to the container
        mt: 5, // Optional: add margin top to create some space from the content above
        m: 3,
        p: 3,

      }}
      >
        <Grid container spacing={2} style={{ marginLeft: '5px', backgroundColor: '#fff' }}>

          <Grid item xs={2} style={{ marginLeft: '10px', marginTop: '10px' }}>
            <h1 style={{ minWidth: '150px' }}>Beauty, Food, Toys & more</h1>
            <Button variant="contained" onClick={viewmore}>View All</Button>
          </Grid>

          <Grid item xs={8}>
            <Toys />
          </Grid>

        </Grid>
      </Box >
      {/*  this is for t-shirts  */}
      <Box sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Customize the box shadow
        borderRadius: '8px', // Optional: add border radius for rounded corners
        pt: 5, // Optional: add padding to the container
        mt: 5, // Optional: add margin top to create some space from the content above
        m: 3,
        p: 3,

      }}
      >
        <Grid container spacing={2} style={{ marginLeft: '5px', backgroundColor: '#fff' }}>

          <Grid item xs={2} style={{ marginLeft: '10px', marginTop: '10px' }}>
            <h1 style={{ minWidth: '150px' }}>End of Season Bestsellers</h1>
            <Button variant="contained" onClick={viewmore}>View All</Button>
          </Grid>

          <Grid item xs={9}>
            <Bestseller />
          </Grid> 

        </Grid>
      </Box >

    </>

  )
}

export default Text 