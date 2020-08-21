const url = 'https://coronavirus-19-api.herokuapp.com/countries/'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
}

function getCountryData(country){
  return fetch(url + country, headers)
    .then(response => response.json())
}

export default {getCountryData}