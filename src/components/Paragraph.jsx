import React from 'react'

const Paragraph = ({text,className}) => {
  return (
    <p className={`font-poppins font-normal text-[#546179] text-xl ${className}`}>{text}</p>
  )
}

export default Paragraph