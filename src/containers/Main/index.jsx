import React, {useState, useEffect} from "react";
import Api from '../../resources/api'
import { Board, Panel } from "./components";

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

  return (
    <div>
      <Panel changeCountry={changeCountry} country={country} data={data} updatedAt={updatedAt}/>
      <Board data={data}/>
    </div>
  )
}

export default Main