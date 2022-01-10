import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../db/firebase";


const Admin = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      console.log("existe");
      setUser(auth.currentUser);
    } else {
      console.log("no existe");
      props.history.push("/login");
    }
  }, [props.history]);

  return (
    <div className="mt-5">
      <h3 className="text-center">Ruta protegida</h3>
    
    </div>
  );
};

export default withRouter(Admin);
