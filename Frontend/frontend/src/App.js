// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
function App() {
  const butt = true;

  const [mike,setmike] = useState(false)

  const handlemike = ()=>{
    setmike(true)
  }

  const handlepost = ()=>{
    console.log("post")
  }
  // The dummy text is applied here //////////////////////
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quisquam facere iure soluta animi asperiores illum! Temporibus eum iure nostrum dolorum iusto natus nihil deserunt delectus eaque, pariatur perferendis ipsam?";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

