import React from 'react'
import './Upperheader.css'
import { IoLocationOutline } from 'react-icons/io5'
import image1 from '../../../images/logo-default-336x120.png'
import { FiMail } from 'react-icons/fi'
const Upperheader = () => {
  return (
    <section className='upperHeader'>
      <div className='upperHeaderInner'>
        <div className='addressCard'>
          <div className='addressCardInner'>
            <div className='locationDiv'>
              <IoLocationOutline className='locationIcon' />
            </div>
            <div className='address'>
              <a href='#'>
                523 Sylvan Ave
                <br />
                Mountain View, CA 94041
              </a>
            </div>
          </div>
        </div>
        <div className='pufflesLogo'>
          <div className='pufflesLogoInner'>
            <a href='#'><img src={image1} /></a>
          </div>
        </div>
        <div className='getInTouchButton'>
          <a href='#'><FiMail className='mailIcon' />GET IN TOUCH</a>
        </div>
      </div>
    </section>
  )
}

export default Upperheader