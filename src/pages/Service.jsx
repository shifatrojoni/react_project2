import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import ServiceSection from '../components/ServiceSection';
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';

const ServicePage = () => {
  return (
    <div>
        <ServiceBanner />
        <ServiceSection />
        <Product />
        {/* <Testimonial /> */}
    </div>
  )
}

export default ServicePage;