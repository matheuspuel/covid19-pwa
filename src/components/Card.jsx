import React from "react";
import { Card } from "@material-ui/core";

function CustomCard({ children }){
  return (
    <Card>
      {children}
    </Card>
  )
}

export default CustomCard