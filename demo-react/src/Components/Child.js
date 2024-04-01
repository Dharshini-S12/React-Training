import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Click</button>
    </div>
  )
}

export default Child