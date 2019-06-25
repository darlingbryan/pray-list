import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='ui container'>
        <Navbar />
      </div>
    </Router>
  )
}

export default App
