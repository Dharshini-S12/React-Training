import React, { Component } from 'react'
import Child from './Child'


class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname : 'Parent'
      }
      this.greetName = this.greetName.bind(this)
    }
    greetName(){
        alert(`Hello ${this.state.parentname}`)
    }
  render() {
    return (
      <div>
          <Child greetHandler={this.greetName}/>
      </div>
    )
  }
}

export default Parent