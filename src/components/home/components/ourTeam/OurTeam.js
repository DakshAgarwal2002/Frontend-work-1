import React from 'react'
import './OurTeam.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img8 from '../../../../images/team-8-249x249.jpg'
import img9 from '../../../../images/team-9-249x249.jpg'
import img10 from '../../../../images/team-10-249x249.jpg'
import {ImInstagram} from 'react-icons/im';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineGooglePlus} from 'react-icons/ai';
const OurTeam = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='ourteamsection'>
      <div className='ourteamcontainer'>
        <h2>Our team</h2>
        <div className='carouselcontainer'>
          <div className='carouselInnerContainer'>
          <Slider {...settings}>
            <div>
            <div className="owl-item active">
              <article className="team-creative wow slideInUp" data-wow-delay=".1s">
              <div className="team-creative-header">
                <a className="team-creative-figure" href="#"><img src={img9}/></a>
                <div className="team-creative-decor"></div>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name"><a href="#">Richard Smith</a></h4>
                <p className="team-creative-text">Senior salesman with 15 years of experience. He knows everything about the pet products he offers.</p>
                <ul className="list-inline team-creative-list-social list-social-2 list-inline-sm">
                  <li><FaFacebookF className='icon'/></li>
                  <li><AiOutlineTwitter className='icon'/></li>
                  <li><ImInstagram className='icon'/></li>
                  <li><AiOutlineGooglePlus className='icon'/></li>
                </ul>
              </div>
            </article>
            </div>
            </div>
            <div>
            <div className="owl-item active">
              <article className="team-creative wow slideInUp" data-wow-delay=".1s">
              <div className="team-creative-header">
                <a className="team-creative-figure" href="#"><img src={img10}/></a>
                <div className="team-creative-decor"></div>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name"><a href="#">Richard Smith</a></h4>
                <p className="team-creative-text">Senior salesman with 15 years of experience. He knows everything about the pet products he offers.</p>
                <ul className="list-inline team-creative-list-social list-social-2 list-inline-sm">
                  <li><FaFacebookF className='icon'/></li>
                  <li><AiOutlineTwitter className='icon'/></li>
                  <li><ImInstagram className='icon'/></li>
                  <li><AiOutlineGooglePlus className='icon'/></li>
                </ul>
              </div>
            </article>
            </div>
            </div>
            <div>
            <div className="owl-item active">
              <article className="team-creative wow slideInUp" data-wow-delay=".1s">
              <div className="team-creative-header">
                <a className="team-creative-figure" href="#"><img src={img8}/></a>
                <div className="team-creative-decor"></div>
              </div>
              <div className="team-creative-body">
                <h4 className="team-creative-name"><a href="#">Richard Smith</a></h4>
                <p className="team-creative-text">Senior salesman with 15 years of experience. He knows everything about the pet products he offers.</p>
                <ul className="list-inline team-creative-list-social list-social-2 list-inline-sm">
                  <li><FaFacebookF className='icon'/></li>
                  <li><AiOutlineTwitter className='icon'/></li>
                  <li><ImInstagram className='icon'/></li>
                  <li><AiOutlineGooglePlus className='icon'/></li>
                </ul>
              </div>
            </article>
            </div>
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam