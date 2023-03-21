import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import db from "../connection/firebaseConfig";

const modosColetaCol = collection(db, "ModoColetas");

export async function criarModoColeta(modoColeta) {
  return await addDoc(modosColetaCol, {
    nomeModo: modoColeta.nomeModo,
    tempo: modoColeta.tempo,
    idConjunto: modoColeta.idConjunto,
  });
}

export async function atualizarModoColeta(id, modoColeta) {
  const idModoColeta = doc(db, "ModoColetas", `${id}`);
  await updateDoc(idModoColeta, {
    nomeModo: modoColeta.nomeModo,
    tempo: modoColeta.tempo,
    idConjunto: modoColeta.idConjunto,
  });
}

export async function deletarModoColeta(id) {
  await deleteDoc(doc(db, "ModoColetas", id));
}

export async function listarModosSensores() {
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
