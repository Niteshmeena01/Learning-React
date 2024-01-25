import React, { useState } from 'react'
import './index.css' 

const Input = () => {

const [Name,NState]= useState('')
const [Password,PState]= useState('')

const [xName,xNState]= useState('')
const [xPassword,xPState]= useState('')

const [firstName , setFirstName] = useState({
  fName :"",
  lName :""
})


const inputValue = (data)=>{
  console.log(data);
    NState(data.target.value)
    console.log(data.target.value);
}
const passwordValue = (password)=>{
    PState(password.target.value)
}

const getData = (event)=>{
    event.preventDefault()
    alert('Data Submited')
    xNState(Name)
    xPState(Password)
    setFirstName({fName:Name,lName:Password})
    console.log(firstName);
}

  return (
    <>
     <form className='form' onSubmit={getData}>
     <center>
     <h2>Sign Box</h2>
     <br/>
        <div>
        <input type='text' placeholder='Enter Your Name'   name='fName'  onChange={inputValue}/>
        </div>
        <br/>
        <div>
        <input type='password' placeholder='Enter Your Password' name='lName'  onChange={passwordValue}/>
        </div>
        <br/>
        <div>
        <input type='Submit'  />
        </div>
        </center>
     </form>
     <div className='getData'>
     <h2>{xName}</h2>
     <h2>{xPassword}</h2>
     </div>   
    </>
  )
}

export default Input