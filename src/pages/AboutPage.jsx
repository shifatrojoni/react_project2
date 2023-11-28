import React from 'react'
import Choose from '../components/Choose'
import AboutBanner from '../components/AboutBanner'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'

const AboutPage = () => {
  return (
    <div>
        <AboutBanner />
        <Choose />
        <Team />
        {/* <Testimonial/>  */}
    </div>
  )
}

export default AboutPage;