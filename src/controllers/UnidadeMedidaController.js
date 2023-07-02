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

const unidadeMedidasCol = collection(db, "UnidadeMedidas");

export async function criarUnidadeMedida(unidadeMedida) {
  return await addDoc(unidadeMedidasCol, {
    nomeUnidade: unidadeMedida.nomeUnidade,
  });
}

export async function consultarUnidadeMedida(id) {
  const idUnidadeMedidaRef = doc(db, "UnidadeMedidas", `${id}`);
  return (await getDoc(idUnidadeMedidaRef)).data();
}

export async function atualizarUnidadeMedida(id, unidadeMedida) {
  const idUnidadeMedidaRef = doc(db, "UnidadeMedidas", `${id}`);
  await updateDoc(idUnidadeMedidaRef, {
    nomeUnidade: unidadeMedida.nomeUnidade,
  });
}

export async function deletarUnidadeMedida(id) {
  await deleteDoc(doc(db, "UnidadeMedidas", id));
}

export async function listarUnidadeMedidas() {
  const resp = [];
  const querySnapshot = await getDocs(unidadeMedidasCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
