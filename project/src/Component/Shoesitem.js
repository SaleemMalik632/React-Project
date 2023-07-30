import React from 'react'
import Box from '@mui/material/Box';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Badge, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import More_ from './Moreinfo';
import Style from './Style.css';


var { Carousel } = require('react-responsive-carousel');


const images = [

  { url: 'http://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/l/w/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfhayhcxfp.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/128/128/xif0q/shoe/o/s/a/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfafhszg7y.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/2/w/x/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfju9pv6dz.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/5/w/3/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfxfzajqgm.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/k/4/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvf95gzbyk8.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/c/x/d/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfgztgwzp3.jpeg?q=70' },
  { url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/g/g/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfue6886v9.jpeg?q=70' },
]



const Shoesitem = () => {
  const [count, setcount] = useState(0);
  const [imagestate, changeimage] = useState(false);
  const [isdost, changedot] = useState(false);

  const onhover = () => {
    changeimage(true)
    changedot(true);
  }
  const onleave = () => {
    changeimage(false);
    changedot(false);
  }
  const handalevent = () => {
    setcount(count + 1);
  }




  return (
    <>
      <Box
        sx={{
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          width: "300px",
          m: 10,
          pt: 15
        }}
      >
        <div >
          <Badge
            badgeContent={
              <Typography marginTop={35} marginLeft={70} height={550} variant="body1" color="green">
                <button style={{ border: 'none', background: 'white' }} onClick={handalevent}><ShoppingCartIcon />{count}</button>
              </Typography>
            }
          />
          <div
            onMouseEnter={onhover}
            onMouseLeave={onleave}

          >
            <Carousel autoPlay={imagestate} showIndicators={isdost} showStatus={false} showThumbs={false} showArrows={false} interval={900} infiniteLoop>
              {
                images.map((imageUrl, index) => {
                  return (
                    <div>
                      <div  >
                        <img style={{ maxWidth: '300px', maxHeight: '200px' }} src={imageUrl.url} alt='loading....' />
                      </div>
                    </div>

                  );
                })

              }
            </Carousel >
          </div>
          {/* <img style={{ maxWidth: '300px' }} src='http://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/l/w/7-lc9573b2rtan-lee-cooper-tan-original-imagrhvfhayhcxfp.jpeg?q=70' alt='Loading...' /> */}

          <Badge
            badgeContent={
              <Typography marginLeft={80} width={100} variant="body1" color="green">
                <FavoriteBorderOutlinedIcon />
              </Typography>
            }
          />
          <div className='cartinfo' style={Style}>
            <span style={{ color: 'darkgray' }}>LEE COOPER</span>
            <br></br>
            <span>Lace Up For Men  (Tan)</span>
            <br></br>
            <p>₹2,999</p>

          </div>
        </div>
      </Box>
      <More_ />
    </>
  )
}

export default Shoesitem