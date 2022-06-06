import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input 
          type="text"
          name="item"
        />
        <button>Add</button>
      </form>
    )
  }
}
