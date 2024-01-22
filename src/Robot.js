import React, { useEffect } from 'react'


const Robot = ()=>{
   const fetchData  =  async () => {
    try{
      const fatch = await fetch('https://jsonplaceholder.typicode.com/posts')
      const resp = await fatch.json()
      
    }catch(e){
      console.log(e);
    }
    }

    useEffect(() => {
      fetchData()
    },[]);
  

  return (
  <h1>hy</h1>
  )
  }
export default Robot