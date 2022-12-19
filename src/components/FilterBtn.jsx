import React from 'react'

function FilterBtn({category,handleFillter,active}) {
   return (
    <>
    {category && category.map((cate)=>{
        return   <button key={cate}  className={`${active === cate ? 'btnActive' : ''} btn btn-danger mx-2 text-capitalize`} data-aos="zoom-out-up" onClick={() => handleFillter(cate)}>{cate}</button>
    })}
    
    </>
  )
}

export default FilterBtn
