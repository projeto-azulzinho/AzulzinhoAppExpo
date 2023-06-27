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
import { deletarConjunto } from "./ConjuntoController";

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

export async function deletarSensoresConjunto(conjuntoId) {
  const listaSensoresConjunto = await listarSensoresConjunto()
  listaSensoresConjunto.forEach( (conjuntoSensor) => {
      if(conjuntoSensor.idConjunto.stringValue == conjuntoId)
        deletarSensorConjunto(conjuntoSensor.id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
})
}

export async function deletarSensorDeConjunto(sensorId) {
  const listaSensoresConjunto = await listarSensoresConjunto()
  
  listaSensoresConjunto.forEach( (conjuntoSensor) => { 
    conjuntoSensor.idSensor.arrayValue.values.forEach(idSensor => {
      if(idSensor.stringValue == sensorId) {
        deletarSensorConjunto(conjuntoSensor.id)
        .then(res => console.log(res)
        .catch(err => console.log(err)))
        
        deletarConjunto(conjuntoSensor.idConjunto.stringValue)
        .then(res => console.log(res)
        .catch(err => console.log(err)))
      }
    })

    
  })

}

export async function getSensorDeConjunto(conjuntoNomeId) {
  const listaSensoresConjunto = await listarSensoresConjunto()
  // console.log(listaSensoresConjunto)
  let res = []
  listaSensoresConjunto.forEach( (conjuntoSensor) => { 
    if(conjuntoSensor.idConjunto.stringValue == conjuntoNomeId) {
      res = conjuntoSensor.idSensor.arrayValue.values.map(sensorId => sensorId.stringValue)
    }
  })

  return res
      
}
