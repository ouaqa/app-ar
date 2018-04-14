import React from 'react'
import logo from '../../logo.svg'
import HelloScene from '../Scene/HelloScene'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to googoo app</h1>
    </header>
    <HelloScene />
  </div>
)

export default App
