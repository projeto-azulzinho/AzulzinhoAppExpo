import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const sensoresConjuntoCol = collection(db, "SensoreConjuntos");

export async function criarSensorConjunto(sensorConjunto) {
  return await addDoc(sensoresConjuntoCol, {
    idSensor: sensorConjunto.idSensor,
    idConjunto: sensorConjunto.idConjunto,
  });
}

export async function atualizarSensorConjunto(id, sensorConjunto) {
  const idSensorConjunto = doc(db, "SensoreConjuntos", `${id}`);
  await updateDoc(idSensorConjunto, {
    idSensor: sensorConjunto.idSensor,
    idConjunto: sensorConjunto.idConjunto,
  });
}

export async function deletarSensorConjunto(id) {
  await deleteDoc(doc(db, "SensoreConjuntos", id));
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

export async function listarConjuntosID(idConjunto) {
  const q = query(sensoresConjuntoCol, where("id", "==", `${idConjunto}`))

  const resp = [];
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      resp.push({...doc.data(), id: doc.id})
    })
  })
  return resp;
}
