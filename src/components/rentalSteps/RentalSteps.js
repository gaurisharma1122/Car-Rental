import React from 'react'
import "./RentalSteps.css"
import { rentalSteps } from '../../data'

const RentalSteps = () => {
  return (
    <section className='rental-steps'>
      <div className="container rental-steps-container">
        <h3>Plan your trip now</h3>
        <h1>Quick & easy car rental</h1>
        <div className='steps'>
            {
                rentalSteps.map((item)=>{
                    return (
                        <div key={item.id} className="step">
                            <i className={item.icon}></i>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default RentalSteps
