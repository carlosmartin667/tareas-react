import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Tabla from "./Components/Tabla";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/admin" exact>
              Ruta de administracion
            </Route>
            <Route path="/" exact>
              <Tabla />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
