import { createElement } from 'react';
import characters from './api/char';
import parts from './api/part'
import Checkbox from '@mui/material/Checkbox';
import CSS from './App.css';
import char from './api/char';
const App = () => {
  return (
    <div id='wrapper'>
      <div className="characters">
        {
          characters.map(char => {
            return (
              <button key={char.img} title={char.name}><img src={char.img}></img></button>
            )
          })
        }
      </div>
      <div className="filters">
        <div className="filters-content">
          <h1>Parts</h1>
          <ul>
            {
              parts.map(part => {
                const Filter = () => {
                  
                };
                return (
                  <li key={part} onClick={Filter}><Checkbox></Checkbox>{part}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>

  )
};

export default App;