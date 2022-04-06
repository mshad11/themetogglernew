import React,{useContext} from 'react';
import './App.css';
import { ThemeContext } from './ThemeProvider';
function App() {
  const {toggle, toggleFunction} = useContext(ThemeContext)
  return (
    <div className="app" style={{backgroundColor: toggle ? 'pink' : 'red' }}>
     <h1>Theme Toggler</h1>
      <button className='button' onClick={toggleFunction}>Theme Changer</button>
    </div>
  );
}

export default App;
