import React from 'react'
import './AboutUs.css'
import MainFrameLeftImage from '../../../../images/about-4-570x511.jpg'
const AboutUs = () => {
  function clickHandler1()
  {
    let tabs_1_1=document.getElementById("tabs-1-1")
    let tabs_1_2=document.getElementById("tabs-1-2")
    let tabs_1_3=document.getElementById("tabs-1-3")
    let butn1=document.getElementById("butn1")
    let butn2=document.getElementById("butn2")
    let butn3=document.getElementById("butn3")
    butn1.classList.add("active");
    butn2.classList.remove("active");
    butn3.classList.remove("active");
    tabs_1_1.classList.add("active");
    tabs_1_2.classList.remove("active");
    tabs_1_3.classList.remove("active");
  }
  function clickHandler2()
  {
    let tabs_1_1=document.getElementById("tabs-1-1")
    let tabs_1_2=document.getElementById("tabs-1-2")
    let tabs_1_3=document.getElementById("tabs-1-3")
    let butn1=document.getElementById("butn1")
    let butn2=document.getElementById("butn2")
    let butn3=document.getElementById("butn3")
    tabs_1_1.classList.remove("active");
    tabs_1_2.classList.add("active");
    tabs_1_3.classList.remove("active");
    butn1.classList.remove("active");
    butn2.classList.add("active");
    butn3.classList.remove("active");
  }
  function clickHandler3()
  {
    let tabs_1_1=document.getElementById("tabs-1-1")
    let tabs_1_2=document.getElementById("tabs-1-2")
    let tabs_1_3=document.getElementById("tabs-1-3")
    let butn1=document.getElementById("butn1")
    let butn2=document.getElementById("butn2")
    let butn3=document.getElementById("butn3")
    tabs_1_1.classList.remove("active");
    tabs_1_2.classList.remove("active");
    tabs_1_3.classList.add("active");
    butn1.classList.remove("active");
    butn2.classList.remove("active");
    butn3.classList.add("active");
  }
  return (
    <section className='AboutUs_Section'>
        <div className='AboutUs_Container'>
        <h2>About us</h2>
        <div className='Mainframe'>
            <div className='MainframeLeft'>
                <img src={MainFrameLeftImage}/>
            </div>
            <div className='MainframeRight'>
                <div className='MainframeRightContainer tabs-custom tabs-jean'>
                    <div className='TabContent'>
                    <div className="tab-pane fade active show" id="tabs-1-1">
                    <div className="box-info-creative">
                      <h4 className="box-info-creative-title"><a href="#">Our Pet Shop’s mission lies in providing quality care for pets.</a></h4>
                      <div className="box-info-creative-text">We want our clients and their pets to receive the best service and goods, that’s why we work only with proven and respected manufacturers.</div>
                      <a className="link-classic box-info-creative-link" href="#">Read more</a>
                    </div>
                  </div>
                  <div className="tab-pane fade show" id="tabs-1-2">
                    <div className="box-info-creative">
                      <h4 className="box-info-creative-title"><a href="#">Aiming to be the leading place for pet care and shopping</a></h4>
                      <div className="box-info-creative-text">Our vision at Puffles is to become the #1 online store for pets as well as the space where owners can get any kind of pet-related services at an affordable price.</div><a className="link-classic box-info-creative-link" href="#">Read more</a>
                    </div>
                  </div>
                  <div className="tab-pane fade show" id="tabs-1-3">
                    <div className="box-info-creative">
                      <h4 className="box-info-creative-title"><a href="#">We always strive for being professional and consistent</a></h4>
                      <div className="box-info-creative-text">Our work is defined by certain values that include excellence, care, professionalism, innovation, and consistency. We aim to provide the best pet care services to you.</div><a className="link-classic box-info-creative-link" href="#">Read more</a>
                    </div>
                  </div>
                    </div>
                    {/* Design Nav Tab */}
                    <div className="nav-tabs-wrap">
                  <ul className="nav nav-tabs">
                    <li className="nav-item" id='butn1' role="presentation"><a className="nav-link active" href="#tabs-1-1" data-bs-toggle="tab" onClick={clickHandler1}>Our mission</a></li>
                    <li className="nav-item" id='butn2' role="presentation"><a className="nav-link" href="#tabs-1-2" data-bs-toggle="tab" onClick={clickHandler2}>our vision</a></li>
                    <li className="nav-item" id='butn3' role="presentation"><a className="nav-link" href="#tabs-1-3" data-bs-toggle="tab" onClick={clickHandler3}>our values</a></li>
                  </ul>
                </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUs