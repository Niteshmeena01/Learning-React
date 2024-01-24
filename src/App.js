import React, { useState } from "react";
import './index.css' ;



const App = () => {

  let [input,inState] = useState("Hello")
  const [FullName ,fState] = useState("")

  const inputEvent = (event)=>{
    inState(event.target.value)

  }

const inputValue = () => {
        fState(input)
        
}

 return(
  <>
  <div className="inputDiv">
  <div className="centerDiv">
  <center>
    <h1>Sign up {FullName}</h1>
    <br/>
    <input type="text" placeholder="Enter Your Name" onChange={inputEvent}  style={{width:"300px",height:"30px"}}/>
    <br/>
    <br/>
    <input type="Password" placeholder="Enter Your Password" onChange={inputEvent} style={{width:"300px",height:"30px"}}/>
    <br/>
    <br/>
    <button onClick={inputValue} style={{width:"150px",height:"30px"}}>click me</button>
    </center>
    </div>
    </div>
  </>
 )
};

export default App;
