import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const sensoresConjuntoCol = collection(db, "SensoresConjunto");

export async function criarSensorConjunto(sensorConjunto) {
  return await addDoc(sensoresConjuntoCol, {
    idSensor: sensorConjunto.idSensor,
    idConjunto: sensorConjunto.idConjunto
  });
}

export async function atualizarSensorConjunto(id, sensorConjunto) {
  const idSensorConjunto = doc(db, "SensoresConjunto", `${id}`);
  await updateDoc(idSensorConjunto, {
    idSensor: sensorConjunto.idSensor,
    idConjunto: sensorConjunto.idConjunto
  });
}

export async function deletarSensorConjunto(id) {
  await deleteDoc(doc(db, "SensoresConjunto", id));
}

export async function listarSensoresConjunto() {
  const resp = [];
  const querySnapshot = await getDocs(sensoresConjuntoCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
