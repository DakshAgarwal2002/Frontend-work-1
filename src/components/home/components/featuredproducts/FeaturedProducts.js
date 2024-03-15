import React from 'react'
import './FeaturedProducts.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import card1_image from '../../../../images/about-1-370x276.jpg'
import card2_image from '../../../../images/about-2-370x276.jpg'
import card3_image from '../../../../images/about-3-370x276.jpg'
const FeaturedProducts = () => {
    var settings0 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots:true
                }
            }
        ]
    };
    return (
        <div className='FeaturedProducts'>
            <div className='FeaturedProducts_container'>
                <h2>Featured productsa</h2>
                <div className='CardContainer0'>
                    <div className='CarouselContainer0'>
                        <div>
                            <Slider {...settings0}>
                                <div>
                                <div className="owl-item cardDiv">
                                    <article className="box-info-modern wow slideInUp">
                                        <a className="box-info-modern-figure link-img" href="#">
                                            <img src={card1_image}/>
                                        </a>
                                    <h4 className="box-info-modern-title">
                                    <a href="#">Best pets clothing</a>
                                    </h4>
                                    <a className="box-info-modern-link" href="#">more</a>
                                    </article>
                                    </div>
                                </div>
                                <div>
                                <div className="owl-item cardDiv">
                                    <article className="box-info-modern wow slideInUp">
                                        <a className="box-info-modern-figure link-img" href="#">
                                            <img src={card1_image}/>
                                        </a>
                                    <h4 className="box-info-modern-title">
                                    <a href="#">Best pets clothing</a>
                                    </h4>
                                    <a className="box-info-modern-link" href="#">more</a>
                                    </article>
                                    </div>
                                </div>
                                <div>
                                <div className="owl-item cardDiv">
                                    <article className="box-info-modern wow slideInUp">
                                        <a className="box-info-modern-figure link-img" href="#">
                                            <img src={card1_image}/>
                                        </a>
                                    <h4 className="box-info-modern-title">
                                    <a href="#">Best pets clothing</a>
                                    </h4>
                                    <a className="box-info-modern-link" href="#">more</a>
                                    </article>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts