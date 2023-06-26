import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const grandezaSensorCol = collection(db, "GrandezaSensores");

export async function criarGrandezaSensor(grandezaSensor) {
  const listGrandezasId = [];
  grandezaSensor.idGrandeza.forEach((grandezaId) => {
    const idGrandezaRef = doc(db, "Grandezas", `${grandezaId.id}`);
    listGrandezasId.push(idGrandezaRef);
  });
  const idSensorRef = doc(db, "Sensores", grandezaSensor.idSensor);
  return await addDoc(grandezaSensorCol, {
    idGrandeza: listGrandezasId,
    idSensor: idSensorRef,
  });
}

export async function atualizarGrandezaSensor(id, grandezaSensor) {
  const idGrandezaSensor = doc(db, "GrandezaSensores", `${id}`);
  await updateDoc(idGrandezaSensor, {
    idGrandeza: grandezaSensor.idGrandeza,
    idSensor: grandezaSensor.idSensor,
  });
}

export async function deletarGrandezaSensor(id) {
  await deleteDoc(doc(db, "GrandezaSensores", id));
}

export async function listarGrandezasSensor() {
  const resp = [];
  const querySnapshot = await getDocs(grandezaSensorCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
