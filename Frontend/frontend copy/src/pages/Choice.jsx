import React from 'react';
import '../Choice.css';
import {useNavigate} from "react-router-dom"



const Choice = () => {
    const navigate = useNavigate()
  const handleButtonClick = async (buttonNumber) => {
    try {
      let endpoint = '';
      let question = '';
  
      switch (buttonNumber) {
        case 1:
          endpoint = "https://odd-gold-moose-cuff.cyclic.app/interview-question";
          question = "five question for react developer";
          navigate("/question");
          break;
        case 2:
          endpoint = "https://odd-gold-moose-cuff.cyclic.app/interview-question";
          question = "five question for Software developer";
          navigate("/question");
          break;
        case 3:
          endpoint = "https://odd-gold-moose-cuff.cyclic.app/interview-question";
          question = "five question for general interview";
          navigate("/question");
          break;
        case 4:
          endpoint = "https://odd-gold-moose-cuff.cyclic.app/interview-question";navigate("/question");navigate("/question");
          question = "five question for NODEJs developer";
          navigate("/question");
          break;
        case 5:
          endpoint = "https://odd-gold-moose-cuff.cyclic.app/interview-question";
          question = "five question for Java developer";
          navigate("/question");
          break;
        default:
          // Handle cases for other button numbers if needed
          return;
      }
  
      const obj = { question };
      const req = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "content-type": "application/json"
        }
      });
      const res = await req.json();
      console.log(res);
      showData(res.bot);
    } catch (error) {
      console.log(error);
    }
  };
  const showData = (data) => {
    localStorage.setItem("que", data);
    };
   return (
    <div className="container">
      <div className='heading'>
      <h1 className='head'>What kind of interview would you like to practice?</h1></div>
      <div className="button-container">
        <button className="big-button" onClick={() => handleButtonClick(2)}>React</button>
        <button className="big-button"onClick={() => handleButtonClick(2)}>Software Developer</button>
        <button className="big-button"onClick={() => handleButtonClick(2)}>General</button>
        <button className="big-button"onClick={() => handleButtonClick(2)}>Node.js</button>
        <button className="big-button"onClick={() => handleButtonClick(2)}>Java</button>
        <button className="big-button"onClick={() => handleButtonClick(2)}>Full Stack</button>
      </div>
    </div>
  );
};

export default Choice;