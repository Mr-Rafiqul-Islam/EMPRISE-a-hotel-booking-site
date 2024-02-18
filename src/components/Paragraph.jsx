import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-poppins font-normal text-para text-xl ${className}`}>{text}</p>
  )
}

export default Paragraph