import React from "react";

function MenuItem({ value, children }){
  return (
    <option value={value}>
      {children}
    </option>
  )
}

export default MenuItem;