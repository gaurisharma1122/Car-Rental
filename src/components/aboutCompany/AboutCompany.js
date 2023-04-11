import React from 'react'
import "./AboutCompany.css"
import aboutImg from "../../images/car-about.jpg"

const AboutCompany = () => {
  return (
    <section className='about-company'>
      <div className="container about-company-container">
        <img src={aboutImg} alt="about image" />
        <div className="about-company-content">
            <h3 className="heading3">About Company</h3>
            <h1 className="heading1">You start the engine and your adventure begins</h1>
            <p className="heading-para">Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            
            <div className="about-info">
                <div className="about-info-item">
                    <i className="fa-solid fa-car"></i>
                    <h2>20</h2>
                    <p>Car Types</p>
                </div>
                <div className="about-info-item">
                    <i className="fa-solid fa-building"></i>
                    <h2>85</h2>
                    <p>Rental Outlets</p>
                </div>
                <div className="about-info-item">
                    <i className="fa-solid fa-hammer"></i>
                    <h2>75</h2>
                    <p>Repair Shops</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany
