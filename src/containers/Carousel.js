import React from 'react';
import CarouselGroup from './CarouselGroup'
import './Carousel.css';

const Carousel = ({groups , setSelectedDevice, token} ) => {


    const groupList = groups.map((group, i) => {
        return (
            <CarouselGroup
                key={i}
                group={groups[i]}
                setSelectedDevice={setSelectedDevice}
                token={token}
            />
        );
    });
    
    return (
        <section id="groups">

            <div id="carouselExampleControls" className="carousel slide" data-touch="true" data-interval="90000000">
                <div className="carousel-inner">

                    


                    <div>
                        {groupList}
                    </div>


                </div>

                <a className="carousel-control-prev slidebutton" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next slidebutton" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>

        </section>
    );
}

export default Carousel;