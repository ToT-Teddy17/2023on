
import './App.css';
import ProductFunc from './Seed'

// function Profile(props) {

//   const { img, name, age, } = props
//   return (

//     <div className='container'>
//       <div className='profile'>

//         <img src={img} alt='' />
//         <hr></hr>
//         <div className='text'>
//           <p>name:{name}</p>
//           <p>age:{age}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

function App() {
  
    const productList=products.map((product) => {
      console.log(product)
      return <ProductFunc id={product}/>
    })
    
  
  // const user={
  //   img:"logo192.png",
  //   name:"Teddy",
  //   age: 17
  //   }
  // return (
  //   <div className='app'>


      {/* /* <Profile
      img="logo192.png"
      name="JsX"
      age={1}
      />
      <Profile
      img="241359349024212.png"
      name="Cloud"
      age={1}
      />
      <Profile
      img="logo192.png"
      name="JsX"
      age={1}
      />
      <Profile
      img="241359349024212.png"
      name="Cloud"
      age={1}
      /> */}


//     </div>
//   )
    }

export default App





