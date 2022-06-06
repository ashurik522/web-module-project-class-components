import React from 'react'

const toDos = [
  {
    name: '',
    id: null,
    comleted: false
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
      <div>
        Todo App
      </div>
    )
  }
}
