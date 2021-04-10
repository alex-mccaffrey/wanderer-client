import React from 'react'
import { Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import AddLocation from "../AddLocation/AddLocation";
import "./App.css";
import { Provider } from "../Context";

 
const App = () => {

  const user = { name: 'Alex', loggedIn: true }

  return (
    <div className="App">
      <Provider value={user}>
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/add-location" component={AddLocation} />
        </main>
        <Footer />
      </Provider>
    </div>
  );
}


export default App