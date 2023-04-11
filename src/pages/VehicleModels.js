import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PageHero from '../components/pageHero/PageHero'
import GetInTouch from '../components/getInTouch/GetInTouch'
import VehicleModelsContainer from '../components/vehicleModels/VehicleModelsContainer'

const VehicleModels = () => {
  return (
    <div>
        <Navbar/>
        <PageHero title="Vehicle Models"/>
        <VehicleModelsContainer/>
        <GetInTouch/>
    </div>
  )
}

export default VehicleModels
