import React from "react";
import { Card } from "../../../components"
import { CardContent, Typography } from "@material-ui/core";
import { numberFormat } from "../../../commons/utils/number";

function CustomCard({ label, value, color, children }){
  const cardStyle = {
    borderLeft: `8px solid ${color || "black"}`,
  }

  return (
    <Card>
      <CardContent style={cardStyle}>
        <Typography variant="h4">
          {numberFormat(value)}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {label}
        </Typography>
      </CardContent>
      {children}
    </Card>
  )
}

export default CustomCard