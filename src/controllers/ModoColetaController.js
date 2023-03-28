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

const modosColetaCol = collection(db, "ModoColetas");

export async function criarModoColeta(modoColeta) {
  const idConjuntoRef = doc(db, "Conjuntos", `${modoColeta.idConjunto}`);
  return await addDoc(modosColetaCol, {
    nomeModo: modoColeta.nomeModo,
    tempo: modoColeta.tempo,
    idConjunto: idConjuntoRef,
  });
}

export async function consultarModoColeta(id) {
  const idModoColetaRef = doc(db, "ModoColetas", `${id}`);
  return (await getDoc(idModoColetaRef)).data();
}

export async function atualizarModoColeta(id, modoColeta) {
  const idConjuntoRef = doc(db, "Conjuntos", `${modoColeta.idConjunto}`);
  const idModoColeta = doc(db, "ModoColetas", id);
  await updateDoc(idModoColeta, {
    nomeModo: modoColeta.nomeModo,
    tempo: modoColeta.tempo,
    idConjunto: idConjuntoRef,
  });
}

export async function deletarModoColeta(id) {
  await deleteDoc(doc(db, "ModoColetas", id));
}

export async function listarModoColetas() {
  const resp = [];
  const querySnapshot = await getDocs(modosColetaCol);
  querySnapshot.docs.forEach((doc) => {
    let objecto = {
      id: doc.id,
      ...doc._document.data.value.mapValue.fields,
    };
    resp.push(objecto);
  });
  return resp;
}
