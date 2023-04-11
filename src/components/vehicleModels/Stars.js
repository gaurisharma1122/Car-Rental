import React from 'react'

const Stars = ({ rating }) => {
    const arr= [1, 2, 3, 4, 5];
  return (
    <section className='stars'>
      {
        arr.map((item)=>{
            if(item<=rating){
                return <i key={item} className="fa-solid fa-star"></i>
            }
        })
      }
    </section>
  )
}

export default Stars
