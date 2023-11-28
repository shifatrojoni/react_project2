import React from 'react'
import Banner from '../components/Banner'
import Product from '../components/Product'
import Choose from '../components/Choose'
import Help from '../components/Help'
import PopularProduct from '../components/PopularProduct'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div>
        <Banner />
        <Product />
        <Choose />
        <Help />
        <PopularProduct />
        {/* <Testimonial /> */}
        <Blog />
    </div>
  )
}

export default Home