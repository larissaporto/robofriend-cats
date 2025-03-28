import React, { Component } from 'react'
import CardList from './CardList'
import { robots } from './assets/robots'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <>
        <div className='tc'>
          <h1 className='f1'>Robot Friend - Cat Version</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      </>
    )
  }
}

export default App
