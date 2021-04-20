import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import AddLocation from "../AddLocation/AddLocation";
import Logo from "../images/wanderer-logo.png"
import "./App.css";

import { Provider } from "../Context";

 
const App = () => {

  const [user, setUser] = useState({ userName: null})

  const [loggedIn, setLoggedIn] = useState({loggedIn: false})
  
  const storeUser = user => {
    localStorage.setItem("user", user.userName);
    setUser(user)
  }

  const logout = () => {
    localStorage.clear()
    setUser({userName: null})
  }

console.log(localStorage)

  return (
    
    <div className="App">
        <header className="App-header" >
          <Route path="/" component={NavBar}/>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route 
          path="/register" 
          render={(props) => (<Register {...props} storeUser={storeUser} />)}
          />
          <Route path="/login" 
          render={(props) => (<Login {...props} loggedIn={setLoggedIn} />)}
          />
          <Route path="/home" component={Home} user={user}/>
          <Route path="/add-location" component={AddLocation} />
        </main>
        <Footer />
    </div>
  );
}


export default App