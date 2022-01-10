import { firebase, db } from "./firebase";

const registrarUsuario = async (email, password) => {
  try {
    const auth = firebase.auth();
    const data = await auth.createUserWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email-already-in-use") {
      return "Usuario ya registrado...";
    }
    if (error.code === "auth/invalid-email") {
      return "Email no válido";
    }
  }
};
const loguearUsuario = async (email, password) => {
  try {
    console.log(email, password);
    const data = await firebase.auth().signInWithEmailAndPassword(email, password);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const coleecionUser = async (data) => {
  try {
    console.log(data.user.email);
    await db.collection("usuarios").doc(data.user.uid).set({
      fechaCreacion: Date.now(),
      //   displayName: data.user.displayName,
      //   photoURL: data.user.photoURL,
      email: data.user.email,
      uid: data.user.uid,
    });
  } catch (error) {
    console.log(error);
  }
};
const loginFirebase = { registrarUsuario, loguearUsuario, coleecionUser };

export default loginFirebase;
