import React from "react";

function Select({ onChange, value, children }){
  return (
    <select onChange={onChange} value={value}>
      {children}
    </select>
  )
}

export default Select;