import React,{Component} from 'react';
import './App.css';
 import './Tab';
import {Link, Router,Switch,Route} from "react-router-dom";


const Tab = () => (

  <div>
    <a href="/">Tab</a>
  </div>
)

const grid = () => (
  <div>
   <a href="/grid">Grid</a>
  </div>
)

const Input = () => (
  <div>
    <a href="/Input">Input</a>
  </div>
)


class App extends React.Component
{ 
    render()
    {
        return(
          <Router>
              <div>
                <ul>
                  <li><Link to='/'>Tab</Link></li>
                  <li><Link to='/grid</li>'>grid</Link></li>
                  <li><Link to='/Input'>Input</Link></li>
                </ul>
                <hr/>
                <Switch>
                <Router  path='/' Component={Tab} exact={true}/>
                <Router path='/grid' Component={grid}/>
                <Router path='/Input' Component={Input}/>
                </Switch>
              </div>
              </Router>
            
        );
       

    }
}

export default App;