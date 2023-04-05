import React, { useState } from 'react'
import "./FAQ.css"
import { faq } from '../../data'
import carFaq from "../../images/car-faq.png"

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className='faq'>
            <div className="container faq-container">
                <h3 className="heading3">FAQ</h3>
                <h1 className="heading1">Frequently Asked Questions</h1>
                <p className="heading-para">Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
                <div className="content">
                    <div className="faq-questions">
                        {
                            faq.map((item) => {
                                return (
                                    <div key={item.id} className="question-container">
                                        <h3 className={activeIndex === item.id ? 'active-question' : undefined}
                                            onClick={() => setActiveIndex(item.id)}>
                                            {item.id}. {item.title} <span><i className="fa-solid fa-angle-down"></i></span>
                                        </h3>
                                        <p className={activeIndex === item.id ? 'active-answer' : undefined} >
                                            {item.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="faq-img-container">
                        <img src={carFaq} alt="car" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
