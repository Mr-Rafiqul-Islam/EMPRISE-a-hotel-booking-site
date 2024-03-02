import React from 'react'

function Button({className,text}) {
  return (
    <button className={` bg-white text-primary rounded-3xl px-4 py-2 ${className}`}>{text}</button>
  )
}

export default Button