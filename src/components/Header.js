import React from 'react'

export default function Header({text,bg,count}) {
  return (
    <div className={`bg-${bg} d-flex position-relative w-100 align-items-center`}>
    <h2 className={` text-light w-100 d-flex  justify-content-center  `}>
        
            {text} 
        
     
        
    </h2>
       <div className='position-absolute end-0 me-3 d-flex fw-bold  bg-light rounded-5 text-dark fs-5 align-items-center px-2 '> {count}</div>
  
       </div>
  )
}
