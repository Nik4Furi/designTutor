import React from 'react'

function Testimonials({name,review}) {
  return (
    <>
       <div className="card mx-2 my-2 p-0 position-relative"  data-aos="fade-up" style={{ width: "20rem" }}>
        <h2 className='position-absolute text-highlight' style={{top:"0%",left:"2%",fontSize:"4rem"}}>"</h2>
        <div className="card-body">
          <p className="card-text p-2 mx-2">{review}</p>
        </div>
        <div className="card-footer">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </>
  )
}

export default Testimonials
