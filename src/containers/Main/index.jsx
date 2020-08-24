import React, {useState, useEffect} from "react";
import Api from '../../resources/api'
import { Board, Panel } from "./components";
import {Grid} from "@material-ui/core";

function Main(){
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})
  const updatedAt = new Date().toLocaleString()

  useEffect(() => {
    Api.getCountryData(country)
      .then(data => setData(data))
  }, [country])

  const changeCountry = ({ target }) => {
    setCountry(target.value)
  }

  const divStyle = {
    margin: "0 auto",
    maxWidth: '1024px',
  }

  return (
    <Grid container spacing={4} style={divStyle}>
      <Grid item xs={12}>
        <Panel changeCountry={changeCountry} country={country} data={data} updatedAt={updatedAt}/>
      </Grid>
      <Grid item xs={12}>
        <Board data={data}/>
      </Grid>
    </Grid>
  )
}

export default Main