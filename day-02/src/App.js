
import './App.css';
import HelloWorld from './helloWorld';
//hmtl deer zuer text gargaj uzev

function App() {
  //odoo function dotor function hiih gj bn

  const user = {
    firstName: "Teddy",
    lastName: ".O"
  };
  function formatName(user) {
    return user.firstName + '' + user.lastName;
  }

  const Style = {
    color: "red",
    background: "black",
    margin: "auto",
    textAlign:"center"
   
  }
  

  const element = (
    <h1 style={Style}>hello,{formatName(user)}!</h1>
  )
  const secondElement = (
    <p>it began</p>
  )
  return (
    <div>
      <div>return dotroh text</div>
      {element}
      {secondElement}
      <HelloWorld/>

    </div>

  )

  // const name="teddy";
  // const element=<h1>Hello,{name}</h1>
  // return (
  //   element
  // );
}
















export default App;



import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';






