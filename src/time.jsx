import React from 'react'
import './index.css';

const Time = () => {

    const wish = ()=>{
        const todayTime = new Date(2024,1,22,1).getHours()

        if(todayTime=>1 && todayTime<11 ){
            return("GOOD MORNING")
        }else if (todayTime>12 && todayTime<17){
       return(
        "GOOD AFTERNOON"
       )}else if (todayTime>18 && todayTime<24){
            return("GOOD NIGHT")
        }
        
    }

  return (
    <div className='time'>
        <h1 >Hello guys {wish()}</h1>
    </div>
     

  )
}

export default Time