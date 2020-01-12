import React from 'react';  
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'    
import App from './App.js'; 
import Tablereserve from './Tablereserve.js'; 
import Menu from './Menu.js';
import Contactus from './Contactus.js';  
import './index.css'; 
import './App.css'; 


 
import * as serviceWorker from './serviceWorker';

const routing = (  
  <Router>  
    <div>  
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item">
      <Link to="/" class="nav-link text-white">Home</Link>
    </li>
    <li class="nav-item">
      <Link to="/Menu" class="nav-link text-white">Menu</Link>
    </li>
    <li class="nav-item">
       <Link to="/Tablereserve" class="nav-link text-white">Table Reserve</Link>
    </li>
    <li class="nav-item">
       <Link to="/Contactus" class="nav-link text-white">Contact Us</Link>
    </li>
  </ul>
</nav>
      <Route exact path="/" component={App} />  
      <Route path="/Menu" component={Menu} />  
      <Route path="/Tablereserve" component={Tablereserve} />
      <Route path="/Contactus" component={Contactus} />
    </div>  
  </Router>  
)  

ReactDOM.render(routing, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
