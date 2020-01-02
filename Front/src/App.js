import React, { Component } from 'react';
import Acceuil from './Acceuil.js';
import Login from './login.component.js' ; 
import SignUp from './signup.component.js' ; 
import AddTheseComponent from './AddThese.jsx';
import ListTheseComponent from './AfficherThese.jsx'; 
import EditUserComponent from './EditThese.jsx'; 
import NavBar from './NavBar.jsx'; 
import Container from '@material-ui/core/Container';
import SideBar from './SideBar.jsx'; 
import './App.css'; 
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

    const App = (props) => {
      return (
        <Router>
           
            <Switch>
              <Route exact path="/" component={Acceuil} />
              <Route path="/Login" component={Login}/>
              <Route path="/SignUp" component={SignUp}/>
              <Route path="/Add" component={AddTheseComponent}/>
              <Route path="/List" component={ListTheseComponent} />
              
    
            </Switch>
        </Router>
      );
    };
  
export default App; 