import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'
import App from './App';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './Home';
import DonarDetails from './Donater'; 
import Accepter from './Accepter';
import ListView from './DonorsList';
  
let CustomRoutes =() => (
    <Router>
        <div>
            <Route exact path='/' component={SignIn}  />
            <Route path='/home' component={Home} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/donater' component={DonarDetails} />
            <Route path='/accepter' component={Accepter} />
            <Route path='/donorslist/:bloodGroup/:city' component={ListView} />
        </div>
    </Router>
);

export default CustomRoutes
