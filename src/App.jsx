import React, { useEffect, useState } from "react";
import apiFirebase from "./db/apiFirebase";

const App = () => {
  const [data, setdata] = useState([]);
  const [tarea, settarea] = useState("");

  const getData = async () => {
    setdata(await apiFirebase.obtenerDatos());
   
  };

  const addTarea = async (e) => {
    e.preventDefault();
    if (!tarea.trim() ) {
      return;
    }
    try {
      await apiFirebase.agregarDatos(tarea);
      settarea("");
      setdata(await apiFirebase.obtenerDatos());
    } catch (error) {
      console.log(error);
    }
      
    
    console.log("tarea", tarea);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="App" className="container">
      <div className="row">
        <h1>hola</h1>
        <div className="col-5">
          <table className="table table-success table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <div className="card text-white bg-success ">
            <div className="card-header">Tarea Agregar</div>
            <div className="card-body">
              <form onSubmit={addTarea}>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="tarea"
                  onChange={(e) => settarea(e.target.value)}
                  value={tarea}
                />
              </form>
            </div>
            <div className="card-footer bg-transparent border-success">
              <button className="btn btn-dark btn-block mh-2">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
