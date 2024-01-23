import React from "react";
import obj from "./MSdata";
import "./index.css";

const MovieCard = () => {
       
     const Cart = ()=>{
         return  obj.map((props) => {   
                return (
                    <div className="cardDiv" key={props.id}   >
                      <div className="Card" >
                        <img src={props.imgsrc} style={{ width: "100%", height: "40vh" }}  />
                        <div>
                          <h1  >{props.title}</h1>
                          <a href={props.link} target="_blank" >
                            <button className="BTN" >Watch Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  
                );
              }); 
     }
     
    
  return (
        
       <Cart/>      
        
  )
};

export default MovieCard;
