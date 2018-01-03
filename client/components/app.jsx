import React from 'react';
import List from './List.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value
    })

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({ items: [...this.state.items, this.state.value]})
    console.log('here is items :',this.state.items)
  }

  render (){
    return (
      <div>
        <h3>To Do List</h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a New To Do :
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
        <h5>Current To Do</h5>
        <List items={this.state.items} />
      </div>
    )
  }
}
