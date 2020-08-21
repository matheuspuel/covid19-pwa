import React from "react";
import {Card, Select, MenuItem, Button} from '../../../components'
import COUNTRIES from "../../../commons/constants/countries";

const navigatorHasShare = navigator.share

function Panel({ updatedAt, country, data, changeCountry }) {
  const renderCountries = ({label, value, flag}) => {
    return (
      <MenuItem key={value} value={value}>{label}</MenuItem>
    )
  }

  const infoText = `País: ${data.country}, total de óbitos: ${data.deaths}`

  const copyInfo = () => {
    navigator.clipboard.writeText(infoText)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid-19 - ${data.country}`,
      text: infoText,
      url: 'https://covid19-counter.netlify.app/'
    })
  }

  const ShareButton = (
    <div>
      <Button onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const CopyButton = (
    <div>
      <Button onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <div>
        <h1>COVID-19</h1>
        <h2>Painel Coronavírus</h2>
        {navigatorHasShare ? ShareButton : CopyButton}
        <p>Atualizado em: {updatedAt}</p>
        <Select onChange={changeCountry} value={country}>
          {COUNTRIES.map(renderCountries)}
        </Select>
      </div>
    </Card>
  )
}

export default Panel;