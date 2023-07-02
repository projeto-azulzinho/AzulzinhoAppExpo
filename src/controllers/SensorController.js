import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const sensorsCol = collection(db, "Sensores");

export async function criarSensor(sensor) {
  return await addDoc(sensorsCol, {
    nomeSensor: sensor.nomeSensor,
  });
}

export async function atualizarSensor(id, sensor) {
  const idSensor = doc(db, "Sensores", `${id}`);
  await updateDoc(idSensor, {
    nomeSensor: sensor.nomeSensor,
  });
}

export async function deletarSensor(id) {
  await deleteDoc(doc(db, "Sensores", id));
}

export async function listarSensores() {
  const resp = [];
  const querySnapshot = await getDocs(sensorsCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}

export async function getSensor(sensorId) {
  const listaSensores = await listarSensores()
  let sensorFinal = null
  listaSensores.forEach((sensor) => {
    if(sensor.id == sensorId)
      sensorFinal = sensor
  })
  return sensorFinal;
}
