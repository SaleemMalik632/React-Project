import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css';
import Style from './Style.css';
import { Badge, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const products = [
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kq6yefk0/pressure-cooker/r/d/e/yes-14752-pigeon-original-imag498mennkq3vs.jpeg?q=70', title: 'Moniter', specialPrice: '$100', oriPrice: '$150' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70', title: 'Camera', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70', title: 'Power Bank', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70', title: 'Best Trimmers', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=70', title: 'Moniter', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=70', title: 'Rrojector', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=70', title: 'Printer', specialPrice: '$200', oriPrice: '$250' },
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


