import { firebase } from "./firebase";

const obtenerDatos = async () => {
  try {
    const db = firebase.firestore();
    const data = await db.collection("tareas").get();
    const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return arrayData;
  } catch (error) {
    console.log(error);
  }
};

const agregarDatos = async (tarea) => {
  try {
    const db = firebase.firestore();
    const nuevaTarea = {
      name: tarea,
      fecha: Date.now(),
    };
    const data = await db.collection("tareas").add(nuevaTarea);
  } catch (error) {
    console.log(error);
  }
};
const apiFirebase = { obtenerDatos, agregarDatos };

export default apiFirebase;
