import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [USD, setUSD] = useState(0);
  const [selectCoin, setSelectCoin] = useState("");
  const [selectCoinsPrice, setSelectCoinsPrice] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
      setSelectCoin(json[0].symbol);
      setSelectCoinsPrice(json[0].quotes.USD.price);
    })
  },[])

  const onChangeInput = (event) => {
    setUSD(event.target.value);
  }

  const onChangeSelect = ({target}) => {
    const value = JSON.parse(target.value);
    setSelectCoin(value.symbol);
    setSelectCoinsPrice(value.quotes.USD.price);
    
    console.log(value);
  }

  return (
    <div>
      <h1>The Coins!({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={onChangeSelect}>
        {coins.map((coin)=>{
          return <option key={coin.id} value={JSON.stringify(coin)}>{coin.id}({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
        })}
      </select>
      <hr></hr>
      <input 
        type="number"
        placeholder="My USD amount"
        value={USD}
        onChange={onChangeInput}
      />
      <h1>You can Buy {(USD*selectCoinsPrice).toFixed(2)} {selectCoin}</h1>
    </div>
  );
}

export default App;