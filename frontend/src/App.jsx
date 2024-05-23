import { useEffect, useState } from 'react'

import axios from 'axios'
import './App.css'

function App() {
  const [data, setdata] =useState([])
  useEffect(() =>{
    axios.get('/user/data')
    .then((response) =>{
      setdata(response.data)
    })
    .catch((error) =>{
      console.error(error)
  })
  })
  return (
    <>
      <h1>backend and frontend</h1>
      <p>DAta: {data.length}</p>

      {
        data.map((data)=> (
          <div key={data.name}>
            <h3>{data.name}</h3>
            <p>{data.age}</p>
            <p>{data.gender}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
