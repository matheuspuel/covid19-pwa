import React from "react";
import { Card } from "components"
import { Typography } from "@material-ui/core";
import { CardContentStyled } from "../style";
import { numberFormat } from "commons/utils/number";

function CustomCard({ label, value, color }){

  return (
    <Card>
      <CardContentStyled color={color}>
        <Typography variant="h4">
          {numberFormat(value)}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {label}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default CustomCard