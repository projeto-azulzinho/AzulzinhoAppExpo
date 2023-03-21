import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const unidadesMedidaCol = collection(db, "UnidadeMedidas");

export async function criarUnidadeMedida(unidadeMedida) {
  return await addDoc(unidadesMedidaCol, {
    nomeUnidade: unidadeMedida.nomeUnidade,
  });
}

export async function atualizarUnidadeMedida(id, unidadeMedida) {
  const idUnidadeMedida = doc(db, "UnidadeMedidas", `${id}`);
  await updateDoc(idUnidadeMedida, {
    nomeUnidade: unidadeMedida.nomeUnidade,
  });
}

export async function deletarUnidadeMedida(id) {
  await deleteDoc(doc(db, "UnidadeMedidas", id));
}

export async function listarUnidadeMedidas() {
  const resp = [];
  const querySnapshot = await getDocs(unidadesMedidaCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
