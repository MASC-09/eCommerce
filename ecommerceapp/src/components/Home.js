import React from 'react'
import * as api from '../services/Api';



const Home = () => {
  return (
    <div>
    <button onClick={api.getAllProducts}>test</button>
    </div>
  )
}

export default Home