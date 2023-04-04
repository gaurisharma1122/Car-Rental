import React from 'react'
import "./Footer.css"
import { navLinks } from '../../data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="footer-subcontent">
        <h3>Car Rental</h3>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
        <h4>
            <i className="fa-solid fa-phone"></i>  (123) -456-789
        </h4>
        <h4>
            <i className="fa-solid fa-envelope"></i> carrental@gmail.com
        </h4>
      </div>

      <div className="footer-subcontent">
        <h3>Company</h3>
        <ul>
        {
            navLinks.map((item)=>{
               return <li key={item.id}><Link to={item.url}>{item.title}</Link></li>
            })
        }
        </ul>
      </div>

      <div className="footer-subcontent">
        <h3>Working Hours</h3>
        <ul>
            <li>Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
        </ul>
      </div>

      <div className="footer-subcontent">
        <h3>Subscription</h3>
        <p>Subscribe your Email address for latest news & updates.</p>
        <form>
            <input type="email" placeholder='Enter Email Id' required/>
            <button className='btn-orange' type='submit'>Submit</button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
