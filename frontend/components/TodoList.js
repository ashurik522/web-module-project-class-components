import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
 
  
  render() {
    return (
      <div className='todo-list'>
        {this.props.toDos.map(item=> (
          <Todo key={item.id} item={item}/>
        ))}
      </div>
    )
  }
}
