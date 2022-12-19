import React from 'react'

function Card(props) {
  const { title, img, desc } = props
  return (
    <>
      <div className="card mx-1 my-2 p-0 " data-aos="zoom-in-down" style={{ width: "20rem" }}>
        <img src={img} className="card-img-top" alt="..." style={{maxHeight:"175px",minHeight:"175px"}}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}...</p>
        </div>
      </div>
    </>
  )
}

export default Card
