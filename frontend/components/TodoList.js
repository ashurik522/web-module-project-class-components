import React from 'react'
import Todo from './Todo'

const TodoList = props => {
  
  
    console.log(props)
    return (
      <div className='todo-list'>
        {props.toDos.map(item=> (
          <Todo key={item.id} item={item}/>
        ))}
      </div>
    )
}

export default TodoList