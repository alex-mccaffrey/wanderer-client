import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Landing from "../Landing/Landing";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Home from "../Home/Home";
import AddLocation from "../AddLocation/AddLocation";
import PrivateRoute from "../services/PrivateRoute";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" render={(props) => <NavBar {...props} />} />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" render={(props) => <Register {...props} />} />
          <Route path="/login" render={(props) => <Login {...props} />} />
          <PrivateRoute path="/dashboard" component={Home} />
          <PrivateRoute path="/call-out" component={AddLocation} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
