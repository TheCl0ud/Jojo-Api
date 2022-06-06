import { createElement } from 'react';
import characters from './api/char';
import parts from './api/part'
import Checkbox from '@mui/material/Checkbox';
import CSS from './App.css';
const App = () => {
  return (

    <div id='wrapper'>
      <div className="characters">
        {
          characters.map(char => {
            return (
              <button title={char.name}><img src={char.img}></img></button>
            )
          })
        }
      </div>
      <div className="filters">
        <ul>
          {
            parts.map(part => {
              return (
                <li>{part}<Checkbox></Checkbox></li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )
};

export default App;