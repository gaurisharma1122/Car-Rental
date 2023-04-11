import React from 'react'
import Navbar from '../components/navbar/Navbar'
import RentalSteps from '../components/rentalSteps/RentalSteps'
import GetInTouch from '../components/getInTouch/GetInTouch'
import PageHero from '../components/pageHero/PageHero'

const About = () => {
  return (
    <div>
        <Navbar/>
        <PageHero title="About"/>
        <RentalSteps/>
        <GetInTouch/>
    </div>
  )
}

export default About
