import { createElement } from 'react';
import characters from './api/char'
import CSS from './App.css'
const App = () => {
  const Click = () => {
    // const overlay = () =>;

  }
  return (
    <div id='wrapper'>
      {
        characters.map(char => {
          return (
            <div className="char">
              <button onClick={Click} title={char.name}><img src={char.img}></img></button>
            </div>
          )
        }
        )
      }
    </div>
  )

};

export default App;