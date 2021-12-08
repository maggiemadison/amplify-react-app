import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './App.css';


const App = () => {
  // Create coins & born variables and set to empty array
  const [coins, updateCoins] = useState([]);
  const [born, updateBorn] = useState([]);

  // Define function to all API
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins')
    updateCoins(data.coins)
  }

   // Define function to all API
   async function fetchBorn() {
    const data = await API.get('bornapi', '/born')
    updateBorn(data.born)
  }

  // Call fetchCoins & fetchBorn function when component loads
  useEffect(() => {
    fetchCoins()
  }, [])

  useEffect(() => {
    fetchBorn()
  }, [])

  return (
    <div className="App">
      {
        coins.map((coin, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
      {
        born.map((born, index) => (
          <div key={index}>
            <h2>{born.login}  {born.created_at}</h2>
          </div>
        ))
      }

    </div>
  );
}

export default App