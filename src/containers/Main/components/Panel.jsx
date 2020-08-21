import React from "react";
import { Card, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from "../../../commons/constants/countries";

function Panel({ updateAt, country, setCountry }){
  const renderCountries = country => {
    console.log(country)
  }

  return (
    <Card>
      <div>
        <h1>COVID 19</h1>
        <h2>Painel Coronavírus</h2>
        <p>Atualizado em: {updateAt}</p>
        <Select onChange={setCountry} value={country}>
          {COUNTRIES.map(renderCountries)}
        </Select>
      </div>
    </Card>
  )
}

export default Panel;