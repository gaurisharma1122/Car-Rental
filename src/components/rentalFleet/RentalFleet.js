import React, { useState } from 'react'
import "./RentalFleet.css"
import { vehicleModels } from '../../data'

const RentalFleet = () => {
    const [modelIndex, setModelIndex] = useState(0);
    const { id, name, image, price, characteristics } = vehicleModels[modelIndex];
    return (
        <section className='rental-fleet'>
            <div className="container rental-fleet-container">
                <h3 className='heading3'>Vehicle Models</h3>
                <h1 className='heading1'>Our rental fleet</h1>
                <p className='heading-para'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>

                <div className="rental-fleet-model">
                    <div className="rental-model-buttons">
                        {
                            vehicleModels.map((item) => {
                                return <button key={item.id} onClick={()=> setModelIndex(item.id -1)}
                                className={modelIndex === item.id-1?'active-model-button':undefined}>
                                    {item.name}
                                </button>
                            })
                        }
                    </div>
                    <div className="rental-model-info">
                        <div className='rental-model-img'>
                            <img src={image} alt={name} />
                        </div>
                        <div className="rental-model-table">
                            <ul>
                                <li className="model-rent">$ {price} / rent per day</li>
                                {
                                    Object.keys(characteristics).map((keyName, index) => {
                                        return (
                                            <li key={index}>
                                                <span>{keyName}</span> <span>|</span> <span>{characteristics[keyName]}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <button className="btn-orange">Reserve Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default RentalFleet
