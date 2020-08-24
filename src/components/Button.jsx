import React from "react";
import { Button } from "@material-ui/core"

function CustomButton({ onClick, children }){
  return (
    <Button onClick={onClick} variant="contained" color="primary">{children}</Button>
  )
}

export default CustomButton