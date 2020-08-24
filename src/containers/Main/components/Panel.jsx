import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { Select, MenuItem, Button} from 'components'
import { MenuItemDivStyled, CardPanelStyled } from "../style";
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

  const renderCountries = ({label, value, flag}) => {
    return (
      <MenuItem key={value} value={value}>
        <MenuItemDivStyled>
          <img src={flag} alt={`País-${label}`} style={{marginRight:'10px'}}/>
          <div>{label}</div>
        </MenuItemDivStyled>
      </MenuItem>
    )
  }

  return (
    <CardPanelStyled>
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
    </CardPanelStyled>
  )
}

export default Panel;