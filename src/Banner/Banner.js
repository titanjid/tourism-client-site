import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://dailyasianage.com/library/2019/09/28/1569705652_5.jpg"
                        alt=""
                        />
                        <Carousel.Caption>
                        <h3>Cox's Bazar</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://awalkintheworld.com/wp-content/uploads/2020/08/boats-docked-saint-martins-1024x576.jpg"
                        alt=""
                        />

                        <Carousel.Caption>
                        <h3>Saint_Martin</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://media-cdn.tripadvisor.com/media/photo-s/18/02/4a/50/sylhet-jaflong-is-a-beautiful.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Sylhet_Jaflong</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
        </div>
    );
};

export default Banner;