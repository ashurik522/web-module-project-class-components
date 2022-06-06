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
      toDos: toDos, 
      text: ""
    }
  }


    


  render() {
    const { status } = this.state
    return (
      <div className='App'>
        <div className='header'>
          <h2>Todos:</h2>
        </div>
        <TodoList toDos={this.state.toDos}/>
        <Form />
        <button onClick={() => this.setState({ status: !status })}>
        {`${status ? 'Show Completed' : 'Hide Completed'}`}</button>
      </div>
    )
  }
}
