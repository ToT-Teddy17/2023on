import products from "./Seed"
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
function handleUpVote(){
  // console.log(props)
}

function ProductFunc(props){
    return(
        <div className="first" >
          
          <img className="zurag" src={props.productImageUrl} />
            
            <div className="text">
            <a onClick={() => {handleUpVote(props)}}>
              
              <h2><i class="fa-solid fa-caret-up">44</i></h2>
              </a>
              <a href="https://github.com/ToT-Teddy17">{props.title}</a>
              <div>High-minded or absent-minded?You decide</div>
  
  
              <div className="footerheseg ">
                <p>Submitted by:</p><img className="icon" src={props.submitterAvatarUrl}></img>
  
              </div>
              <Rating 
              
              />
  
            </div>
          </div>
    )
}
export default ProductFunc