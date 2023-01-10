import React from "react";
import products from "./Seed";
import 'bootstrap/dist/css/bootstrap.min.css';

function handleUpVote(){
  // console.log(props)
}
class Product extends React.Component{
    render(){
        return(
            <div className="first" >
            <img className="zurag" src="image-aqua.png"></img>
            <div className="text">
              <a onClick={() => {handleUpVote()}}>
              <i class="fa-solid fa-caret-up">44</i>
              </a>
              <a href="@">Haught or Naught</a>
              <div>High-minded or absent-minded?You decide</div>
  
  
              <div className="footerheseg ">
                <p>Submitted by:</p><img className="icon" src="unnamed(1).png"></img>
  
              </div>
  
            </div>
          </div>
        )
    }
}
export default Product;



