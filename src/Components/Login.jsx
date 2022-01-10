import React, { useCallback, useState } from "react";
import loginFirebase from "../db/loginFirebase";
const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [error, seterror] = useState("");
  const [registro, setregistro] = useState(true);

  const procesandoDatos = (e) => {
    e.preventDefault();

    if (email == "") {
      seterror("Ingrese su email");
      return;
    }
    if (pass == "" || pass.length < 6) {
      seterror("Ingrese su contraseña");
      return;
    }
    seterror("");
    console.log(email, pass);
    if (registro) {
      registrar();
    } else {
      login();
    }
  };

  const login = useCallback(async () => {
    try {
    const data = await loginFirebase.loguearUsuario(email, pass);
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [email, pass]);

  const registrar = useCallback(async () => {
    try {
      const data = await loginFirebase.registrarUsuario(email, pass);
      loginFirebase.coleecionUser(data);
      setemail("");
      setpass("");
    } catch (error) {
      console.log(error);
    }
  }, [email, pass]);

  return (
    <div id="Login">
      <div className="mt-4">
        <h3 className="text-center">{registro ? " registro" : "acceso"} </h3>
      </div>
      <form onSubmit={procesandoDatos}>
        <div className="mb-3 mt-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setpass(e.target.value)}
            value={pass}
          />
        </div>

        <button type="submit" className="btn btn-primary" type="submit">
          Registrarte
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          type="button"
          onClick={() => setregistro(!registro)}
        >
          {registro ? "acceso" : "registro"}
        </button>
      </form>
    </div>
  );
};

export default Login;
