import React from 'react'
import Slider from "react-slick";
import './Logos.css'
import client1 from '../../../../images/clients-1-120x114.png'
import client2 from '../../../../images/clients-2-105x118.png'
import client3 from '../../../../images/clients-3-111x98.png'
import client4 from '../../../../images/clients-4-122x92.png'
import client5 from '../../../../images/clients-5-112x112.png'
const Logos = () => {
    var settings3 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };
  return (
    <section className='logoSection'>
        <div className='logoContainer'>
        <Slider {...settings3}>
          <div>
            <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client4}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client5}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client1}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client2}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client3}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client4}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client5}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client1}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client2}/>
                </a>
            </div>
          </div>
          <div>
          <div className="logo owl-item active">
                <a className="clients-classic" href="#">
                    <img src={client3}/>
                </a>
            </div>
          </div>
        </Slider>
        </div>
    </section>
  )
}

export default Logos