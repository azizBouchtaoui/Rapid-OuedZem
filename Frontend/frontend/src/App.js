 import React from 'react';
 import { BrowserRouter as Router, 
Route,
Redirect,
Switch, } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';


import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Testimonial from './pages/Testimonial/Testsimonial';
import About from './pages/About/About';
 
 

const  App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
        
          <Route path="/" exact>
            <Home/>
          </Route>
        
          <Route path="/About" exact>
            <About/>
          </Route>
        
          <Route path="/Contact" exact>
            <Contact/>
          </Route>

          <Route path="/Services" exact>
            <Services/>
          </Route>
       
          <Route path="/Testimonial" exact>
            <Testimonial/>
          </Route>
        
          <Redirect to="/"/>
        </Switch>
      </main>

    </Router>
  );
}

export default App;
