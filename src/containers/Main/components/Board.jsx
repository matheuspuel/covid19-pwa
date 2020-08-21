import React from "react";
import { Grid, Card } from '../../../components'

function Board({ data }){
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  return (
    <Grid>
      <Card value={cases} label='Total de casos'/>
      <Card value={deaths} label='Total de óbitos'/>
      <Card value={todayCases} label='Casos hoje'/>
      <Card value={todayDeaths} label='Óbitos hoje'/>
      <Card value={recovered} label='Total de recuperados'/>
    </Grid>
  )

}

export default Board;