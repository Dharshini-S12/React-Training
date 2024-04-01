import React, { Component } from 'react'

 class Eventclass extends Component {
    myfun() {
        document.getElementById("demo").innerHTML = "vgsjcfjd"
   }
  render() {
     
    return (
      <div>
          <button onClick={this.myfun}>Click</button>
          <p id="demo"></p>
      </div>
    )
  }
}

export default Eventclass