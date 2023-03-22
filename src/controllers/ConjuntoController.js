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

const conjuntosCol = collection(db, "Conjuntos");

export async function criarConjunto(conjunto) {
  return await addDoc(conjuntosCol, {
    nomeConjunto: conjunto.nomeConjunto,
  });
}

export async function consultarConjunto(id) {
  const idConjuntoRef = doc(db, "Conjuntos", `${id}`);
  return (await getDoc(idConjuntoRef)).data();
}

export async function atualizarConjunto(id, conjunto) {
  const idConjuntoRef = doc(db, "Conjuntos", `${id}`);
  await updateDoc(idConjuntoRef, {
    nomeConjunto: conjunto.nomeConjunto,
  });
}

export async function deletarConjunto(id) {
  await deleteDoc(doc(db, "Conjuntos", id));
}

export async function listarConjuntos() {
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
