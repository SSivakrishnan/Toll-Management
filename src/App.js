import React from 'react'
import {Switch,Route} from 'react-router-dom'
import AllTolls from './pages/AllTolls'
import Home from './pages/Home'


function App() {
  return (
    <div className='App'>
      <h1>Toll Management Application</h1>
  <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/all-tolls' exact component={AllTolls}/>
   
    
   </Switch>
    </div>
  )
}

export default App