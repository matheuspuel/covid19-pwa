import React from "react";
import { Card } from "components"
import { Typography } from "@material-ui/core";
import { CardContentDataStyled } from "../style";
import { numberFormat } from "commons/utils/number";

function CustomCard({ label, value, color }){

  return (
    <Card>
      <CardContentDataStyled color={color}>
        <Typography variant="h4">
          {numberFormat(value)}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {label}
        </Typography>
      </CardContentDataStyled>
    </Card>
  )
}

export default CustomCard