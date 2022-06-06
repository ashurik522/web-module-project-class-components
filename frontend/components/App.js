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

  addItem = (item) => {
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      toDos: [...this.state.toDos, newItem]
    })
  }

  toggleItem = (itemId) => {
    this.setState({
      toDos: this.state.toDos.map(item => {
        if(itemId === item.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    })
  }

  render() {
    const { status } = this.state

    return (
      <div className='App'>
        <div className='header'>
          <h2>Todos:</h2>
        </div>
        <TodoList 
          toDos={this.state.toDos}
          toggleItem={this.toggleItem}
        />
        <Form addItem={this.addItem}/>
        <button 
          onClick={() => this.setState({ status: !status })}>
          {`${status ? 'Show Completed' : 'Hide Completed'}`}
        </button>
      </div>
    )
  }
}
