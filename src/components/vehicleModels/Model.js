import React from 'react'
import Stars from './Stars'
import { Link } from 'react-router-dom'

const Model = ({ id, name, full_image, price, rating, characteristics }) => {
  return (
    <article className='model'>
      <img src={full_image} alt={name} />
      <div className="model-content">
        <div className="model-content-heading">
            <h2>{name}</h2>
            <h2>$ {price}</h2>
        </div>
        <Stars rating={rating}/>
        <div className="model-characteristics">
            <p><i className="fa-solid fa-car"></i> {characteristics.model}</p>
            <p><i className="fa-solid fa-car"></i> {characteristics.doors} Doors</p>
            <p><i className="fa-solid fa-car"></i> {characteristics.transmission}</p>
            <p><i className="fa-solid fa-car"></i> {characteristics.fuel}</p>
        </div>
        <button className="btn-orange">
            <Link to="/">Book Ride</Link> 
        </button>
      </div>
    </article>
  )
}

export default Model
