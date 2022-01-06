import React, { useEffect, useState } from "react";
import apiFirebase from "./db/apiFirebase";

const App = () => {
  const [data, setdata] = useState([]);
  const [tarea, settarea] = useState("");
  const [modoEdicion, setmodoEdicion] = useState(false);
  const [id, setid] = useState('');

  const getData = async () => {
    setdata(await apiFirebase.obtenerDatos());
  };

  const addTarea = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
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
  };
  const eliminarTarea = async (id) => {
    try {
      await apiFirebase.eliminarDatos(id);
      setdata(await apiFirebase.obtenerDatos());
    } catch (error) {
      console.log(error);
    }
  };

  const editarTarea = async ( tarea) => {
    settarea(tarea.name);
    setmodoEdicion(true);
    setid(tarea.id);
  }
  const editar = async (e) => {
    e.preventDefault();
    if (!tarea.trim()) {
      return;
    }
    try {
      await apiFirebase.editarDatos(id, tarea);
      settarea("");
      setmodoEdicion(false);
      setdata(await apiFirebase.obtenerDatos());
    } catch (error) {
      console.log(error);
    }
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
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-danger mr-2"
                      onClick={() => eliminarTarea(item.id)}
                    >
                      eliminar{" "}
                    </button>
                    <button className="btn btn-warning mr-2" onClick={() => editarTarea(item)}>editar </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <div className="card text-white bg-success ">
            <div className="card-header">
              {modoEdicion ? "Editar tarea " : "Tarea Agregar"}
            </div>
            <div className="card-body">
              <form onSubmit={modoEdicion ? editar : addTarea}>
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
              <button className={modoEdicion ? "btn btn-warning btn-block mh-2" : "btn btn-dark btn-block mh-2"}>  {modoEdicion ? "Editar  " : "Tarea "}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
