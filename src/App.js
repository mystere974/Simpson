
import { useState, useEffect } from 'react';
import './App.css';



function App() {
    
    const [showQuote, setShowQuote] = useState ([]);
    const [image, setImage] = useState ()
    const [character, setCharacter] = useState ()
    const [simpson, setSimpson] = useState ()

    const buttonValue = () => {
      fetch(`https://simpsons-quotes-api.herokuapp.com/quotes`)
        .then(res => res.json())
        .then(data => (
          setShowQuote(data[0].quote),
          setImage(data[0].image),
          setCharacter(data[0].character)))
          
    }

      
  return (
    <div className="container">
    <button onClick={() => buttonValue()}>quote</button>
    <h3>{character}</h3>
    <p>{showQuote}</p>
    <img src={image}/>
    </div>

  );
}

export default App;
