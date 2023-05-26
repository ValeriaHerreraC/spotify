import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {getDatabase} from 'firebase/database'
import {firebaseConfig} from "./config";

  const app = initializeApp(firebaseConfig);
  
  const db=getFirestore(app);

  export const dataBase = getDatabase()

  export const addUser = async (userdata)=>{
    const docRef= await addDoc(collection(db, "users"),{
      userdata
    });
    console.log(docRef)
}
