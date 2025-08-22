import React from 'react'

const Provider = ({ children }) => {
  return (
    <div 
        className="h-screen"
    >{children}</div>
  )
}

export default Provider