import React from 'react';
import './index.css';

const Counter = () => {

// const name = "Nitesh";
// const date = new Date().toLocaleDateString()
// const currentTime = new Date().toLocaleTimeString()
const img1 = 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWV8ZW58MHx8MHx8fDA%3D'
const width = "360px"
const link ='https://www.google.com/search?sca_esv=600337699&sxsrf=ACQVn0-bjUJpqOXQ6Quc3KDRnS9385HGFQ:1705905641121&q=free+images&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjBmInesfCDAxVse2wGHVQrDuAQ0pQJegQIDhAB&biw=1440&bih=779&dpr=2#imgrc=tvOzOymMZcNIhM'



  return (
    <div>
    {/* <h1 contentEditable="true">Hello , My name is {name}</h1>
    <p>today Date is {date}</p>
    <p>current time is {currentTime} </p> */}
    <h1 className='heading'>Hello this image is for human</h1>
    <br/>
    <a href={link} target="_blank">
    <img src={img1} width={width}/>
    </a>
    <img src={img1} width={width}/>
    <img src={img1} width={width}/>
    <img src={img1} width={width}/>
   
    </div>
  );
};

export default Counter;
