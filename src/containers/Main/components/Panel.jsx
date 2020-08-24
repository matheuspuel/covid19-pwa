import React from "react";
import {CardContent, Typography} from "@material-ui/core";
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
    <Button onClick={shareInfo}>
      Compartilhar
    </Button>
  )

  const CopyButton = (
    <Button onClick={copyInfo}>
      Copiar
    </Button>
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
      <CardContent style={{width: '100%'}}>
        <div style={{overflow: "hidden" }}>
          <div style={{display:"inline-block"}}>
            <Typography variant="h4" color="primary">
              COVID-19
            </Typography>
            <Typography variant="h6">
              Painel Coronavírus
            </Typography>
          </div>
          <div style={{float:'right'}}>
            {navigatorHasShare ? ShareButton : CopyButton}
          </div>
        </div>
        <Typography variant="body2" color="textSecondary">
          Atualizado em: {updatedAt}
        </Typography>
        <Select onChange={changeCountry} value={country}>
          {COUNTRIES.map(renderCountries)}
        </Select>
      </CardContent>
    </CardPanelStyled>
  )
}

export default Panel;