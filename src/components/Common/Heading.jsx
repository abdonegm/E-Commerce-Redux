import React from 'react'

const Heading = ({title,desc}) => {
  return (
    <>
     <div className='heading'>
        <h2>{title}</h2>
        <p>{desc}</p>
     </div>
    </>
  )
}

export default Heading
