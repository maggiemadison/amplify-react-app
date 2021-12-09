import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import './App.css';
import { BornOn } from './BornOn';


const App = () => {
  // Create coins & born variables and set to empty array
  const [coins, updateCoins] = useState([]);
  
  // Create additional state to hold user input for limit and start properties
  const [input, updateInput] = useState({ limit: 5, start: 0 });

  const [loading, updateLoading] = useState(true);
// Create a new function to allow users to update the input values
  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value });
  }
  // Define function to all API
  const fetchCoins = async() => {
    updateLoading(true);
    const { limit, start } = input;
    const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`);
    console.log(data.coins)
    updateCoins(data.coins)
    console.log(data.coins)
    updateLoading(false);
  }

  
  const [user, setUser] = useState([]);

  // Define function to all API
  const fetchBorn = async() => {
    const data = await API.get('bornapi', '/born');
    setUser(data.born);
   
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
        <input
        placeholder="start"
        onChange={e => updateInputValues('start', e.target.value)}
      />
      <input
        placeholder="limit"
        onChange={e => updateInputValues('limit', e.target.value)}
      />
      <button onClick={fetchCoins}>Fetch Coins</button>
        
            {loading && <h2>Loading...</h2>}
            
            {
              
              !loading && coins.map((coin, index) => (
                <div key={index}>
                  <h2>{coin.name} - {coin.symbol}</h2>
                  <h5>${coin.price_usd}</h5>
                  {/* <h2>The user {born.login} was born on {born.created_at}.</h2> */}
                </div>
              ))
            }
            <BornOn user={user} />
    </div>
  );
}

export default App;