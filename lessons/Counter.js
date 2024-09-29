import React, { useState } from "react";
import './Counter.css';

const Counter = ({ name, hobbies }) => {
  const [counter, setCounter] = useState(0);
  const modifyCounter = (value) => setCounter(prevCounter => prevCounter + value);

  return (
    <div className="counter-container">
      <h1>{name}</h1>
      
      <h2>Loendur: {counter}</h2>
      {[+1, +5, +50, -1, -5, -50].map(element => (
        <button key={element} onClick={() => modifyCounter(element)}>
          {element > 0 ? `+${element}` : element}
        </button>
      ))}
      
      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async +1
      </button>

      <h2>Hobid</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <h2>Kontaktivorm</h2>
      <form>
        <label>
          E-mail: <input type="email" value="Karzee@tlu.ee" readOnly />
        </label>
        <br />
        <label>
          Sõnum: <textarea placeholder="Kirjuta siia..." />
        </label>
        <br />
        <button type="button">Saada</button>
      </form>
    </div>
  );
};

export default Counter;