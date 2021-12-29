import React, { useEffect } from "react";
import apiFirebase from "./db/apiFirebase";

const App = () => {
  useEffect(() => {
    var x = apiFirebase.optenerDatos();
    console.log(x);
  }, []);

  return (
    <div id="App" className="container">
      <h1>hola</h1>
    </div>
  );
};

export default App;
