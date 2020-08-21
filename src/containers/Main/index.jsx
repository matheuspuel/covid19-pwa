import React, {useState, useEffect} from "react";
import Api from '../../resources/api'
import { Button } from '../../components'
import { Board, Panel } from "./components";

function Main(){
  const [country, setCountry] = useState('brazil')
  const [data, setData] = useState({})

  useEffect(() => {
    Api.getCountryData(country)
      .then(data => setData(data))
  }, [country])

  return (
    <div>
      <Panel setCountry={setCountry}></Panel>
      <Board data={data}/>
    </div>
  )
}

export default Main