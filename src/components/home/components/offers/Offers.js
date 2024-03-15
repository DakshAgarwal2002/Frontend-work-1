import React from 'react'
import './Offers.css'
import icon_image1 from '../../../../images/icon-01-50x50.png'
import icon_image2 from '../../../../images/icon-02-50x42.png'
import icon_image3 from '../../../../images/icon-03-48x50.png'
import icon_image4 from '../../../../images/icon-04-42x50.png'
import icon_image5 from '../../../../images/icon-05-42x50.png'
import icon_image6 from '../../../../images/icon-06-50x44.png'
const Offers = () => {
  return (
        <section className='Offers'>
            <div className='Offers_container'>
                <h2>What we offer</h2>
                <div className='Offers_CardContainer'>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image1}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Grooming</a></h4>
                    <p className="box-icon-classic-text">Let your pets enjoy the first-class grooming services provided by our certified and experienced groomers.</p>
                  </div>
                </div>
              </article>
                </div>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image2}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Pet hotel</a></h4>
                    <p className="box-icon-classic-text">At Puffles, we offer a safe & clean environment with playtime, exercises, healthy meals & more.</p>
                  </div>
                </div>
              </article>
                </div>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image3}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Dog daycare</a></h4>
                    <p className="box-icon-classic-text">Our daytime guests enjoy playtime with other dogs in a safe and fun environment.</p>
                  </div>
                </div>
              </article>
                </div>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image4}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Dog training</a></h4>
                    <p className="box-icon-classic-text">Our accredited pet trainers teach fun & eﬀective group & private classes through positive reinforcement.</p>
                  </div>
                </div>
              </article>
                </div>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image5}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Veterinary care</a></h4>
                    <p className="box-icon-classic-text">Save your pet the discomfort of advanced illness & help save you the stress & expense of treatment.</p>
                  </div>
                </div>
              </article>
                </div>
                <div className='Offers_Card Offers_Card1'>
                <article className="box-icon-classic text-sm-left">
                <div className="unit flex-column flex-sm-row flex-md-column flex-xl-row">
                  <div className="unit-left">
                    <div className="box-icon-classic-icon">
                        <img src={icon_image6}/>
                    </div>
                  </div>
                  <div className="unit-body">
                    <h4 className="box-icon-classic-title"><a href="#">Adoption</a></h4>
                    <p className="box-icon-classic-text">Whether you adopt online or at a Puffles store near you, you’re helping change the life of a pet in need.</p>
                  </div>
                </div>
              </article>
                </div>
            </div>
            </div>
            
        </section>
  )
}

export default Offers