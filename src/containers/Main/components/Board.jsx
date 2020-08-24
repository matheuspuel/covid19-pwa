import React from "react";
import { Grid } from "@material-ui/core";
import { Card } from '../components'

function Board({ data }){
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={cases} label='Total de casos' color="#ff0000"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={deaths} label='Total de óbitos' color="#000000"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={todayCases} label='Casos hoje' color="#7f0000"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={todayDeaths} label='Óbitos hoje' color="#7f7f7f"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={recovered} label='Total de recuperados' color="#007f00"/>
      </Grid>
    </Grid>
  )

}

export default Board;