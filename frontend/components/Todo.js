import React from 'react'

const Todo = props => {
  
    return (
      <div className='todo'>
        <p>{props.item.name}</p>
      </div>
    )
}

export default Todo;