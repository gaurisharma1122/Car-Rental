import React from 'react'
import "./VehicleModels.css"
import { vehicleModels } from '../../data'
import Model from './Model'

const VehicleModelsContainer = () => {
  return (
    <section className='vehicle-models'>
      <div className="container vehicle-models-container">
        {
          vehicleModels.map((item)=>{
            return <Model key={item.id}
              id={item.id}
              name={item.name}
              full_image={item.full_image}
              price={item.price}
              rating={item.rating}
              characteristics={item.characteristics}/>
          })
        }
      </div>
    </section>
  )
}

export default VehicleModelsContainer
