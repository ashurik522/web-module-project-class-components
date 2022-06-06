import React from 'react'
import TodoList from './TodoList';
import Form from './Form'

const toDos = [
  {
    name: 'Clean up',
    id: 2343256,
    completed: false
  }
]

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      toDos: toDos 
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todos:</h2>
        </div>
        <TodoList toDos={this.state.toDos}/>
        <Form />
      </div>
    )
  }
}
