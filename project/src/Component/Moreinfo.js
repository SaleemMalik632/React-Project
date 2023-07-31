import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const products = [

    { img: 'http://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/l/w/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfhayhcxfp.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/128/128/xif0q/shoe/o/s/a/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfafhszg7y.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/2/w/x/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfju9pv6dz.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/5/w/3/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfxfzajqgm.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/k/4/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvf95gzbyk8.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/c/x/d/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfgztgwzp3.jpeg?q=70' },
    { img: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/g/g/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfue6886v9.jpeg?q=70' },
    // Add more products as needed
];




export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Carousel>
                        {
                            products.map((image, index) => {
                                return (
                                    <div>
                                        <img style={{ maxWidth: '200px' }} src={image.img} alt='Loading...'></img>

                                    </div>
                                )

                            })

                        }
                    </Carousel>
                </Grid>
                <Grid item xs={6}>
                    <p>INNOKIN</p>
                    <h3>Innokin I.O Replacement Pods – 3 Pcs</h3>
                    <h5>₨1,649.00</h5>
                    <p>The Innokin I.O. Replacement Pods (3-Pack) are a set of food-grade PCTG pods, crafted for the Innokin I.O. Pod System, featuring a bottom fill system, holding up to 0.8mL within the reservoir, while utilizing the integrated pod coil clocking in at 1.4ohms</p>
                    <p></p>
                </Grid>
            </Grid>
        </Box>
    );
}
