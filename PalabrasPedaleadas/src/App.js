import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SignInForm from './componentes/Login/SignInForm';
import RegisterForm from './componentes/Register/RegisterForm'


const App = () => {
  return (

    <Router>
      
      <Switch>

        <Route path="/" exact component={SignInForm}/>
        <Route path="/RegisterForm" component={RegisterForm}/>

      </Switch>
  </Router>



  )
}

export default App;
