import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Select, MenuItem, Button} from '../../../components'
import COUNTRIES from "commons/constants/countries";

const navigatorHasShare = navigator.share

function Panel({ updatedAt, country, data, changeCountry }) {

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

  const itemStyle = {
    display: 'flex',
    minWidth: '150px',
  }

  const renderCountries = ({label, value, flag}) => {
    return (
      <MenuItem key={value} value={value}>
        <div style={itemStyle}>
          <img src={flag} alt={`País-${label}`} style={{marginRight:'10px'}}/>
          <div>{label}</div>
        </div>
      </MenuItem>
    )
  }

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
  }

  return (
    <Card style={style}>
      <CardContent>
        <Typography variant="h3" color="primary">
          COVID-19
        </Typography>
        <Typography variant="h5">
          Painel Coronavírus
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Atualizado em: {updatedAt}
        </Typography>
        <Select onChange={changeCountry} value={country}>
          {COUNTRIES.map(renderCountries)}
        </Select>
      </CardContent>
      <CardContent>
        {navigatorHasShare ? ShareButton : CopyButton}
      </CardContent>
    </Card>
  )
}

export default Panel;