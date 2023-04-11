import React from 'react'
import "./PageHero.css"
import { Link } from 'react-router-dom'

const PageHero = ({ title }) => {
  return (
    <section className='page-hero'>
        <div className="container page-hero-container">
            <h1 className="heading1">{title}</h1>
            <h3 className="heading3">
                <Link to="/" className='page-hero-link'>Home</Link> / {title}
            </h3>
        </div>
    </section>
  )
}

export default PageHero
