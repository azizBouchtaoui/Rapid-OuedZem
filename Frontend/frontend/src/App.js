 import React from 'react';
 import { BrowserRouter as Router, 
Route,
Redirect,
Switch, } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Reservation from './pages/Reservation/ReservationForm';

 
import Home from './pages/Home/Home';
 
import Testimonial from './pages/Testimonial/Testsimonial';
 
 
 

const  App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
        
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Reservation" exact>
            <Reservation/>
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
