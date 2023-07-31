import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css';
import Style from './Style.css';
import { Badge, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const products = [
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70', title: 'Moniter', specialPrice: '$100', oriPrice: '$150' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70', title: 'Camera', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/power-bank/d/a/f/-original-imagky3e8yp5ebvr.jpeg?q=70', title: 'Power Bank', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70', title: 'Best Trimmers', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70', title: 'Moniter', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70', title: 'Rrojector', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70', title: 'Printer', specialPrice: '$200', oriPrice: '$250' },
    // Add more products as needed
];




const ImageCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <Carousel responsive={responsive} autoPlay={true}>
            {
                products.map((images, index) => {
                    return (
                        <>
                            <Carousel responsive={responsive} autoPlay={true}  >
                                <div style={{ margin: '5px', cursor: 'pointer' }}>
                                    <div style={{ textAlign: 'center', marginLeft: '1px', marginTop: '-10px' }}>
                                            <Badge
                                                badgeContent={
                                                    <Typography height={20} variant="body2" color="green">
                                                         <ShoppingCartIcon/>
                                                        </Typography>
                                                }
                                            />
                                        <Link to={images.url} key={index} target='_blank' style={{ textDecoration: 'none' }}>
                                            <img className='img' style={Style} src={images.img} alt='Loading...' />
                                            <p>{images.title}</p>
                                            <span>{images.specialPrice}</span>
                                            <span>{'-' + images.oriPrice}</span>
                                            <Badge
                                                style={{ minWidth:'100px', marginLeft:'50px' ,marginBottom:'20px'}} 
                                                badgeContent={
                                                        <Typography margin={100} width={100} variant="body1" color="green">
                                                            25% off today
                                                        </Typography>
                                                }
                                            />
                                        </Link>
                                    </div>
                                </div> 
                            </Carousel>
                        </>
                    )
                })
            }
        </Carousel>
    );
}





export default ImageCarousel;


