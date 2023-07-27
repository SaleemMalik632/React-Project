import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageSlider = () => {

    return (
        <div style={{ textAlign: 'center', }}>

            <Carousel showArrows={true} autoPlay={true}   >
                <div>
                    <div style={{ maxHeight: '100px' }}>
                        <img style={{ maxHeight: '500px' }} src='https://i.dummyjson.com/data/products/9/3.png' alt='' />
                    </div>
                </div>
                <div>
                    <div>
                        <img style={{ maxHeight: '500px' }} src='https://i.dummyjson.com/data/products/9/4.jpg' alt='' />
                    </div>
                </div>
                <div>
                    <div>
                        <img style={{ maxHeight: '500px' }} src='https://i.dummyjson.com/data/products/9/3.png' alt='' />
                    </div>
                </div>
                <div>
                    <div>
                        <img style={{ maxHeight: '500px' }} src='https://i.dummyjson.com/data/products/9/3.png' alt='' />
                    </div>
                </div>
                <div >
                    <div>
                        <img style={{ maxHeight: '500px' }} src='https://i.dummyjson.com/data/products/9/3.png' alt='' />
                    </div>
                </div>

            </Carousel>
        </div>

    );
};

export default ImageSlider;
