import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div>
      <section className='firstBanner'>
        <div className='bannercontainer'>
          <div className='banner1InnerContainer'>
            <div className='bannerInfo'>
              <h1>Puffles</h1>
              <h3 className='secondLine'>MAKE YOUR PETS HAPPY</h3>
              <h4>Our Pet Shop values quality, comfort, and
                <br />
                individuality of our products and services.</h4>
              <div className='buttondWrap'>
              <a href="#">READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner