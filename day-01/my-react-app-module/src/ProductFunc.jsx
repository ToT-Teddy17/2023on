import products from "./Seed"

function ProductFunc(props){
    return(
        <div className="first" >
          
          <img className="zurag" src={props.productImageUrl} />
            
            <div className="text">
              <h2>^ <b>44</b></h2>
              <a href="https://github.com/ToT-Teddy17">{props.title}</a>
              <div>High-minded or absent-minded?You decide</div>
  
  
              <div className="footerheseg ">
                <p>Submitted by:</p><img className="icon" src={props.submitterAvatarUrl}></img>
  
              </div>
  
            </div>
          </div>
    )
}
export default ProductFunc