import React from "react";

function Card({ label, value, color }){
  const style = {
    color: 'white',
    padding: '0 20px',
  }

  return (
    <div style={style}>
      <h2>{label}</h2>
      <p>{value}</p>
    </div>
  )
}

export default Card