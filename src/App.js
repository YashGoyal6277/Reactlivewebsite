import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { Service } from './Service';
import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';


export const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route exact path="/about">
        <About/>
        </Route>

        <Route exact path="/service">
        <Service/>
        </Route>

        <Route exact path="/contact">
        <Contact/>
        </Route>

        <Redirect to="/" />
      </Switch>
      <Footer/>
      </Router>
    </div>
  )
}
