import React from 'react'
import './OurClients.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import quote1 from '../../../../images/quote-37x29.png'
import user5 from '../../../../images/user-5-62x62.jpg'
import user6 from '../../../../images/user-6-62x62.jpg'
import user10 from '../../../../images/user-10-62x62.jpg'
import user11 from '../../../../images/user-11-62x62.jpg'
const OurClients = () => {
    let settings2 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
  return (
    <section className='clientSection'>
        <div className='clientContainer'>
            <h2>What Our Clients Say</h2>
            <div className='carouselContainer'>
            <Slider {...settings2}>
          <div>
          <div className="owl-item active" >
            <article className="quote-carly quote-carly-1">
              <div className="quote-carly-text"><img className="quote-carly-icon" src={quote1}/>
                <div className="q">The daycare service provided by Puffles is a real timesaver for me. I’m always calm and happy that my dog is treated well.</div>
              </div>
              <div className="quote-carly-footer">
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-carly-figure"><img src={user10}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-carly-author">BRIAN FOSTER</div>
                    <div className="quote-carly-status">Client</div>
                  </div>
                </div>
              </div>
            </article>
            </div>
          </div>
          <div>
          <div className="owl-item active" >
            <article className="quote-carly quote-carly-1">
              <div className="quote-carly-text"><img className="quote-carly-icon" src={quote1}/>
                <div className="q">Puffles has the best selection of food and supplies for cats and dogs. I highly recommend this site to every pet owner.</div>
              </div>
              <div className="quote-carly-footer">
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-carly-figure"><img src={user11}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-carly-author">KATHRYN EVANS</div>
                    <div className="quote-carly-status">Client</div>
                  </div>
                </div>
              </div>
            </article>
            </div>
          </div>
          <div>
          <div className="owl-item active" >
            <article className="quote-carly quote-carly-1">
              <div className="quote-carly-text"><img className="quote-carly-icon" src={quote1}/>
                <div className="q">I like the vast choice of cat food that this pet shop provides. Being a regular client here for 3 years, I am 100% satisfied by Puffles.</div>
              </div>
              <div className="quote-carly-footer">
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-carly-figure"><img src={user5}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-carly-author">Evan Williams</div>
                    <div className="quote-carly-status">Client</div>
                  </div>
                </div>
              </div>
            </article>
            </div>
          </div>
          <div>
          <div className="owl-item active" >
            <article className="quote-carly quote-carly-1">
              <div className="quote-carly-text"><img className="quote-carly-icon" src={quote1}/>
                <div className="q">The supportive team of this online store helped me in choosing exactly what my dachshund needs right now. Thank you!</div>
              </div>
              <div className="quote-carly-footer">
                <div className="unit unit-spacing-sm flex-column flex-md-row align-items-center">
                  <div className="unit-left">
                    <div className="quote-carly-figure"><img src={user6}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <div className="quote-carly-author">Emily Jameson</div>
                    <div className="quote-carly-status">Client</div>
                  </div>
                </div>
              </div>
            </article>
            </div>
          </div>
        </Slider>
            </div>
        </div>
    </section>
  )
}

export default OurClients