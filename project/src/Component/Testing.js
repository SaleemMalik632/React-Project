import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [

    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
    { url: 'https://i.dummyjson.com/data/products/9/3.png' },
]


const ImageSlider = () => {

    return (
        <div style={{ textAlign: 'center', }}>
            <Carousel showArrows={true} autoPlay={true}   >
                {
                    images.map((imageUrl, index) => {
                        return (
                            <div>
                                <div style={{ maxHeight: '500px' }} >
                                    <img src={imageUrl.url} alt='loading....' />
                                </div>
                            </div>

                        );
                    })

                }
            </Carousel >
        </div>

    );
};

export default ImageSlider;
