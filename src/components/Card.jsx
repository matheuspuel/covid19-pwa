import React from "react";

function Card({ label, value, color, children }){
  const style = {
    color: color || 'white',
    padding: '0 20px',
  }

  return (
    <div style={style}>
      <h2>{label}</h2>
      <p>{value}</p>
      {children}
    </div>
  )
}

export default Card