import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ImageCarousel.css';
import Style from './Style.css';
import { Badge, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const products = [
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70', title: 'Moniter', specialPrice: '$100', oriPrice: '$150' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/sandal/i/b/b/6-192-sndl-black-40-bruton-black-original-image3x2hha3cjuz-bb.jpeg?q=70', title: 'Camera', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/slipper-flip-flop/e/d/m/6-combo-p-1875-1904-bersache-multicolor-original-imagmzmyvckpcfzf.jpeg?q=70', title: 'Power Bank', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70', title: 'Best Trimmers', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kdj4xow0/treadmill/b/g/c/ft098-steel-motorized-ft98-steel-motorized-motorized-fitkit-original-imafuerskytashcz.jpeg?q=70', title: 'Moniter', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/xif0q/duffel-bag/m/x/w/20-premium-quality-purple-duffel-bag-prpl-chks-02-duffel-with-original-imagh5yxhwhqxra7.jpeg?q=70', title: 'Rrojector', specialPrice: '$200', oriPrice: '$250' },
    { url: '/New', img: 'https://rukminim2.flixcart.com/image/200/200/kmgn0cw0/kids-lehenga-choli/o/z/i/7-8-years-roseblue-7-8-nakrani-creation-original-imagfcm7f8xyysct.jpeg?q=70', title: 'Printer', specialPrice: '$200', oriPrice: '$250' },
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


