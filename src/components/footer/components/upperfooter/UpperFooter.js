import React from 'react'
import './UpperFooter.css'
import fg1 from '../../../../images/footer-gallery-1-800x1200-original.jpg'
import fg2 from '../../../../images/footer-gallery-2-800x1200-original.jpg'
import fg3 from '../../../../images/footer-gallery-3-800x1200-original.jpg'
import gg1 from '../../../../images/grid-gallery-1-178x178.jpg'
import gg2 from '../../../../images/grid-gallery-2-178x178.jpg'
import gg3 from '../../../../images/grid-gallery-3-178x178.jpg'
import gg4 from '../../../../images/grid-gallery-4-178x178.jpg'
import gg5 from '../../../../images/grid-gallery-5-178x178.jpg'
import gg6 from '../../../../images/grid-gallery-6-178x178.jpg'
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaInstagramSquare} from 'react-icons/fa';
import {AiFillGooglePlusCircle} from 'react-icons/ai';
import {BsSkype} from 'react-icons/bs';

const UpperFooter = () => {
  return (
    <section className='upperFooterSection'>
      <div className='upperFooterContainer'>
        <div className='upperFooterInfo'>
          <div className='gallerySection'>
            <div className='gallery'>
              <h5>OUR GALLERY</h5>
              <div className='galleryPhotos'>
                <div className='pic pic1'>
                <a className="thumbnail-minimal" href={fg1}>
                  <img src={gg1}/>
                  </a>
                </div>
                <div className='pic pic1'>
                <a classNamw="thumbnail-minimal" href={fg1}>
                  <img src={gg2}/>
                  </a>
                </div>
                <div className='pic pic1'>
                <a className="thumbnail-minimal" href={fg1}>
                  <img src={gg3}/>
                  </a>
                </div>
                <div className='pic pic1'>
                <a className="thumbnail-minimal" href={fg1}>
                  <img src={gg4}/>
                  </a>
                </div>
                <div className='pic pic1'>
                <a className="thumbnail-minimal" href={fg1}>
                  <img src={gg5}/>
                  </a>
                </div>
                <div className='pic pic1'>
                <a className="thumbnail-minimal" href={fg1}>
                  <img src={gg6}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='quicklinksSection'>
            <h5>QUICK LINKS</h5>
            <ul className='linklist'>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Services</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Care</a></li>
                  <li><a href="#">Clothing</a></li>
                  <li><a href="#">Decor</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Grooming Supplies</a></li>
            </ul>
          </div>
          <div className='getInTouchSection'>
            <h5>GET IN TOUCH</h5>
            <ul className="contacts-creative">
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left"><IoLocationSharp className='icon'/></div>
                      <div className="unit-body"><a href="#">523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</a></div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left"><BsFillTelephoneFill className='icon'/></div>
                      <div className="unit-body"><a href="tel:#">(+844) 123 456 78</a></div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left"><AiOutlineMail className='icon'/></div>
                      <div className="unit-body"><a href="mailto:#">info@demolink.org</a></div>
                    </div>
                  </li>
            </ul>
            <ul class="list-inline list-social-3 list-inline-sm ">
                  <li><FaFacebook className='icon'/></li>
                  <li><AiFillTwitterCircle className="icon"/></li>
                  <li><FaInstagramSquare className='icon'/></li>
                  <li><AiFillGooglePlusCircle className='icon'/></li>
                  <li><BsSkype className='icon'/></li>
                </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpperFooter