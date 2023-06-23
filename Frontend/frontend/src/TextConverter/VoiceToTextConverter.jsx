import React, { useState } from 'react'
// import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import {BsFillMicFill} from "react-icons/bs"
import {BsFillMicMuteFill} from "react-icons/bs"

// BsFillMicFill
// BsFillMicMuteFill
const VoiceToTextConverter = () => {
const {microphone,usemicrophone} = useState(false)




    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();

      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
if(listening){
console.log(transcript)
}

  return (
    <div>
        <p>
        {/* {listening?"on":"off"}</p> */}</p>
       <button style={{backgroundColor:"transparent",position:"relative !imporant"}} onClick={SpeechRecognition.startListening}>{listening?<BsFillMicFill/>:<BsFillMicMuteFill/>}</button>
       <div>

       <p>{transcript}</p>
       </div>
    </div>
  )
}

export default VoiceToTextConverter