import { createElement } from 'react';
import characters from './api/char';
import Checkbox from '@mui/material/Checkbox';
import CSS from './App.css';
const App = () => {
  return (
    <div id='wrapper'>
      {
        characters.map(char => {
          return (
            <div className="char">
              <button title={char.name}><img src={char.img}></img></button>
            </div>
          )
        }
        )
      }
    </div>
  )
};

export default App;