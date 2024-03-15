import React from 'react'
import AboutUs from './components/aboutus/AboutUs'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner2/Banner2'
import Carousel from './components/carousel/Carousel'
import FeaturedProducts from './components/featuredproducts/FeaturedProducts'
import Logos from './components/logos/Logos'
import News from './components/news/News'
import Offers from './components/offers/Offers'
import OurClients from './components/ourclients/OurClients'
import OurTeam from './components/ourTeam/OurTeam'
import Treats from './components/treats/Treats'

const Home = () => {
  return (
    <>
    <Banner/>
    <FeaturedProducts/>
    <Offers/>
    <Banner2/>
    {/* <Carousel/> */}
    <AboutUs/>
    <OurTeam/>
    <Treats/>
    <OurClients/>
    <News/>
    <Logos/>
    </>
  )
}

export default Home