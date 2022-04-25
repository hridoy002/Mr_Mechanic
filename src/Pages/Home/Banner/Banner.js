import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg.png'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner2.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
    
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;