import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const medicoesCol = collection(db, "Medicoes");

export async function criarMedicao(medicao) {
  const idSensorRef = doc(db, "Sensores", `${medicao.idSensor}`);
  return await addDoc(medicoesCol, {
    dataMedicao: medicao.dataMedicao,
    valor: medicao.valor,
    idSensor: idSensorRef,
  });
}

export async function consultarMedicao(id) {
  const idMedicaoRef = doc(db, "Medicoes", `${id}`);
  return (await getDoc(idMedicaoRef)).data();
}

export async function atualizarMedicao(id, medicao) {
  const idSensorRef = doc(db, "Sensores", `${medicao.idSensor}`);
  const idMedicao = doc(db, "Medicao", `${id}`);
  await updateDoc(idMedicao, {
    dataMedicao: medicao.dataMedicao,
    valor: medicao.valor,
    idSensor: idSensorRef,
  });
}

export async function deletarMedicao(id) {
  await deleteDoc(doc(db, "Medicoes", id));
}

export async function listarMedicoes() {
  const resp = [];
  const querySnapshot = await getDocs(medicoesCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
