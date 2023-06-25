import React from 'react'
import "../App.css"

const Home = () => {
  return (
    <div>
       <aside className="sidemenu">
       <div className ="side-menu-button">
        <span>+</span>
        New Chat
       </div>
       <div className ="side-menu-button" style={{marginTop:"50%"}}>
        <span><LiaBookSolid/></span>
        Choose Courses
       
       </div>
       {/* <div className ="side-menu-button">
        <span><LiaBookSolid/></span>
        Choose Courses
       </div>
       <div className ="side-menu-button">
        <span><LiaBookSolid/></span>
        Choose Courses
       </div>
       <div className ="side-menu-button">
        <span><LiaBookSolid/></span>
        Choose Courses
       </div> */}
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
               {/* <Copy/> */}
              </div>

            </div>
           


          </div>
           




          </div>
        <div className="chat-input-holder">
          <textarea 
          rows="1"
          className="chat-input-textarea">

         
          </textarea>
          <button className='send_button' style={{backgroundColor:"transparent",color:"#19c37d",boxShadow:"none",border:"none",position:"relative",bottom:"0.5rem"}}>
          <BiSolidSend/>
          </button>

          <button className='send_button2' style={{backgroundColor:"transparent",color:"white",boxShadow:"none",
          border:"0px",position:"relative",bottom:"0.5rem",fontSize:"2.0rem"}} onClick={handlemike}>
          {mike?<BsFillMicMuteFill/>:<BsFillMicFill/>}
          
          
          </button>
         
        </div>
      </section>
      
    </div>
  )
}

export default Home