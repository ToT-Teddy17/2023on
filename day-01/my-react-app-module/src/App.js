import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import ProductFirst from './Product1';
import ProductSecond from './Product2';
import ProductLast from './Productlast';
import Alert from './Alert';
import ProductFunc from './ProductFunc';
import ProductFunc1 from './ProductFunc1';
import ProductFunc2 from './ProductFun2';
import ProductFunc3 from './ProductFun3';
import products from './Seed'

function App() {
  const productList=products.map((product) => {
    console.log(product)
    return <ProductFunc 
    id={product}
    title={product.title}

    submitterAvatarUrl={product.submitterAvatarUrl}
    productImageUrl={product.productImageUrl}
    />
  })

  
  return (
    



    <div className="App container">
      <Alert />
      {/* tolgoi heseg */}
      <header className="App-header">
        
        
        <h1 className="tolgoi container"><img src={logo} className="icon" alt="logo" />  <b>Popular Products</b> <img src={logo} className="icon" alt="logo" /></h1>
      </header>

      {/* body heseg */}
      <div id='container'>
      {productList}
      <hr></hr>
      {productList}
        
        {/* <ProductFirst />

        <Product />

        <ProductSecond />

        <ProductLast /> */}

        

        {/* <h1 style={Style}><b>SECOND LIST</b><hr></hr></h1>



        <ProductFunc/>
        <ProductFunc1/>
        <ProductFunc2/>
        <ProductFunc3/> */}

      </div>

    </div>

  );
 
}
const Style = {
   
  textAlign:"center"
 
}

export default App;
