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

const grandezaCol = collection(db, "Grandezas");

export async function criarGrandeza(grandeza) {
  const listUnidadesMedidasId = [];
  grandeza.idUnidadeMedida.forEach((unidadeMedidaId) => {
    const idUnidadeMedidaRef = doc(
      db,
      "UnidadeMedidas",
      `${unidadeMedidaId.id}`
    );
    listUnidadesMedidasId.push(idUnidadeMedidaRef);
  });
  /*   const idUnidadeMedidaRef = doc(
    db,
    "UnidadeMedidas",
    `${grandeza.idUnidadeMedida}`
  ); */
  return await addDoc(grandezaCol, {
    nomeGrandeza: grandeza.nomeGrandeza,
    idUnidadeMedida: listUnidadesMedidasId,
  });
}

export async function consultarGrandeza(id) {
  const idGrandezaRef = doc(db, "Grandezas", `${id}`);
  return (await getDoc(idGrandezaRef)).data();
}

export async function atualizarGrandeza(id, grandeza) {
  const idUnidadeMedidaRef = doc(
    db,
    "UnidadeMedidas",
    `${grandeza.idUnidadeMedida}`
  );
  const idGrandeza = doc(db, "Grandezas", `${id}`);
  await updateDoc(idGrandeza, {
    nomeGrandeza: grandeza.nomeGrandeza,
    idUnidadeMedida: idUnidadeMedidaRef,
  });
}

export async function deletarGrandeza(id) {
  await deleteDoc(doc(db, "Grandezas", id));
}

export async function listarGrandezas() {
  const resp = [];
  const querySnapshot = await getDocs(grandezaCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
