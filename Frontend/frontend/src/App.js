import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Reservation from "./pages/Reservation/ReservationForm";

import Home from "./pages/Home/Home";

 

const App = () => {
  const [place, setPlace] = useState(1)
 
 




  return (
    <Router>
      <Navbar props={place}/>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home   />
          </Route>
          <Route path="/Reservation" exact>
            <Reservation   />
          </Route>
          

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
