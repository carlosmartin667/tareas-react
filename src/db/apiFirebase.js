import { firebase } from "./firebase";

const optenerDatos = async () => {
  try {
    const db = firebase.firestore();
    const data = await db.collection("tareas").get();
    return data
  } catch (error) {
    console.log(error);
  }
};
const apiFirebase = { optenerDatos };

export default apiFirebase;
