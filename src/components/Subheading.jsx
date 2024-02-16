import React from 'react'

function Subheading({className,text}) {
  return (
    <h3 className={`font-poppins text-primary text-2xl ${className}`}>{text}</h3>
  )
}

export default Subheading