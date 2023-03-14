import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const conjuntosCol = collection(db, "Grandezas");

export async function criarGrandeza(conjunto) {
  return await addDoc(conjuntosCol, {
    nomeGrandeza: conjunto.nomeGrandeza,
  });
}

export async function atualizarGrandeza(id, conjunto) {
  const idGrandeza = doc(db, "Grandezas", `${id}`);
  await updateDoc(idGrandeza, {
    nomeGrandeza: conjunto.nomeGrandeza,
  });
}

export async function deletarGrandeza(id) {
  await deleteDoc(doc(db, "Grandezas", id));
}

export async function listarGrandezas() {
  const resp = [];
  const querySnapshot = await getDocs(conjuntosCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
