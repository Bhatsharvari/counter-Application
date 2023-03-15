//sample code

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor()
//     {
//         super()
//         this.state={
//             username:"sharvari",
//             count:0
//         }
//     }

//         handleChange=()=>{
//             this.setState({username:"prashika"})
//         }

//         handleNumberChange=()=>{
//             this.setState({count:1})
//         }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <h2>{this.state.count}</h2>
//         <button onClick={this.handleChange}>change</button>
//         <button onClick={this.handleNumberChange}>change number</button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import "./global.css"

export default class App extends Component {
    constructor(){
        super()
        this.state={
            count : 0
        }
    }

handleIncrement=()=>{
    this.setState({count:this.state.count+1})
}
handleDecrement=()=>{
    this.setState({count:this.state.count-1})
}
handleReset=()=>{
    this.setState({count:0})
}



  render() {
    return (
      <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        <div className='btnBlock'>
        <button id='btn' onClick={this.handleIncrement}>+ INCREMENT</button>
        <button id='btn1' onClick={this.handleDecrement}>- DECREMENT</button>
        <button id='btn2' onClick={this.handleReset}>RESET</button>
        </div>
      </div>
    )
  }
}

