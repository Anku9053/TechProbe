import logo from './logo.svg';
import './App.css';
import './normal.css';
// import VoiceToTextConverter from './TextConverter/VoiceToTextConverter';
import {BiSolidSend} from "react-icons/bi"
import upgradeAi from "../src/Assets/WhatsApp Image 2023-06-22 at 10.55.02 PM.jpeg"
// ai-practice\src\normal.css
import {BsFillMicFill} from "react-icons/bs"
import {BsFillMicMuteFill} from "react-icons/bs"
import {LiaBookSolid} from "react-icons/lia"

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

      {/* <VoiceToTextConverter/> */}


      <aside className="sidemenu">
       <div className ="side-menu-button">
        <span>+</span>
        New Chat
       </div>
       <div className ="side-menu-button" style={{marginTop:"50%"}}>
        <span><LiaBookSolid/></span>
        Choose Courses
       
       </div>
       
      </aside>
     
      
      <section className="Chatbox">
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
            <div className="avatar">
              {/* Enter Users Images Here */}
              </div>
  
              <div className="message">
                {/* Show questions Here by users */}
                Hello World
              </div>

            </div>
           


          </div>
           



          <div className="chat-message chatgpt">
            <div className="chat-message-center">
            <div className="avatar chatgpt">
              <img className='upgradeAi' src={upgradeAi} alt='upgradeAi image'/>
              </div>
  
              <div className="message">

                {/* Show Codes Responses here  */}
              <p>{text}</p>  
              
           <button className='copybutton' onClick={() => {
               navigator.clipboard.writeText(text);}}>
            Copy
           </button>
               
              </div>

            </div>
           


          </div>
           




          </div>
        <div className="chat-input-holder">
          <textarea 
          rows="1"
          className="chat-input-textarea">

         
          </textarea>
          <button className='send_button' style={{backgroundColor:"transparent",color:"#19c37d",boxShadow:"none",border:"none",position:"relative",bottom:"0.5rem"}} onClick={handlepost}>
          <BiSolidSend/>
          </button>

          <button className='send_button2' style={{backgroundColor:"transparent",color:"white",boxShadow:"none",
          border:"0px",position:"relative",bottom:"0.5rem",fontSize:"2.0rem"}} onClick={handlemike}>
          {mike?<BsFillMicMuteFill
          
          style={{color:"red"}}
          />:<BsFillMicFill
          style={{color:"#19c37d"}}
          />}
          
          
          </button>
         
        </div>
      </section>
      
    </div>
  );
}

export default App;
