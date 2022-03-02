import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom"
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/LogIn/LogIn/Login';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home"> <Home /> </Route>
            <PrivateRoute path="/booking/:serviceId"> <Booking /> </PrivateRoute>
            <Route path="/login"> <Login /> </Route>
            <Route path="*"> <NotFound /> </Route>
          </Switch>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
