import React, {useState, useEffect} from "react";
import Api from '../../resources/api'
import { Button } from '../../components'
import Board from "./components/Board";

function Main(){
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})

  useEffect(() => {
    Api.getCountryData(country)
      .then(data => setData(data))
  }, [country])

  return (
    <div>
      <Board data={data}/>
    </div>
  )
}

export default Main