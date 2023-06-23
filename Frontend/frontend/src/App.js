// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Choice from './pages/Choice';
import AllRoutes from './components/AllRoutes';
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
     {/* <Choice/> */}
     <AllRoutes/>
    </div>
  );
}

export default App;

