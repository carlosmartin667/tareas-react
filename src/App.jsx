import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Tabla from "./Components/Tabla";
import { auth } from "./db/firebase";

const App = () => {
  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <Navbar firebaseUser={firebaseUser} />
      <div className="container">
        <div className="row">
          <Switch>
            <Route path="/login" exact>
              <Login />
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
  ) : (
    <div>Cargando...</div>
  );
};

export default App;
