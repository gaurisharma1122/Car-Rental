import React from 'react'
import "./Home.css"
import car_1 from "../../images/car-1.png"
import Navbar from '../../components/navbar/Navbar'
import { carTypes, locations } from '../../data'

const Home = () => {
    return (
        <section className='home'>
            <Navbar />
            <div className="container home-container">
                <div className="home-container-top">
                    <div className="home-content">
                        <h3>Plan your trip now</h3>
                        <h1>Save big with our car rental</h1>
                        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                        </p>
                        <div className="home-buttons">
                            <button className="btn-orange">
                                Book Ride <i className="fa-sharp fa-solid fa-circle-check"></i>
                            </button>
                            <button className="btn-black">
                                Learn More <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="home-image">
                        <img src={car_1} alt="car" />
                    </div>
                </div>

                <div className="home-container-form">
                    <h2>Book a car</h2>
                    <form>
                        <div>
                            <label>
                                <i className="fa-solid fa-car"></i> Select your car type
                            </label>
                            <select required>
                                <option>Select your car type</option>
                                {
                                    carTypes.map((item) => {
                                        return <option key={item.id} value={item.title}>{item.title}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>
                                <i className="fa-solid fa-location-dot"></i> Pick-Up location
                            </label>
                            <select required>
                                <option>Select your location</option>
                                {
                                    locations.map((item) => {
                                        return <option key={item.id} value={item.title}>{item.title}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>
                                <i className="fa-solid fa-location-dot"></i> Drop-Off location
                            </label>
                            <select required>
                                <option>Select your location</option>
                                {
                                    locations.map((item) => {
                                        return <option key={item.id} value={item.title}>{item.title}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label>
                                <i className="fa-solid fa-calendar-days"></i> Pick-Up date
                            </label>
                            <input type="date" required />
                        </div>
                        <div>
                            <label>
                                <i className="fa-solid fa-calendar-days"></i> Drop-Off date
                            </label>
                            <input type="date" required/>
                        </div>
                        <div>
                            <button className='btn-orange'>Book Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Home
