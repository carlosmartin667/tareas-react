import React from "react";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../db/firebase";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };
  return (
    <div id="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark  bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>

              {props.firebaseUser !== null ? (
                <button className="btn btn-dark" onClick={() => cerrarSesion()}>
                  Cerrar Sesión
                </button>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
