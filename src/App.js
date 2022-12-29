import React, {Component} from 'react';


// function App() {
//   return  <div>Hello, world!</div>;
// }


//jsx
class App extends Component{
  render(){
    return (
      <div>
      <label htmlFor='bar'>bar</label>
      <input type="text" onChange={() =>{console.log("I am clicked")}}/>
      </div>
    )
  }
}

//javascript
// class App extends Component{
//   render(){
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!"
//     )
//   }
// }
export default App;
