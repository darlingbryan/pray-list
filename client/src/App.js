import React from 'react'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrayerState from './contexts/prayer/PrayerState'
import AuthState from './contexts/auth/AuthState'
import AlertState from './contexts/alert/AlertState'

function App() {
  return (
    <AuthState>
      <PrayerState>
        <AlertState>
          <Router>
            <div className='ui container'>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </PrayerState>
    </AuthState>
  )
}

export default App
