import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import {firebaseConfig} from "./config";

  const app = initializeApp(firebaseConfig);
  
  const db=getFirestore(app);

  export const addUser = async (userdata)=>{
    const docRef= await addDoc(collection(db, "user"),{
      userdata
    });
    console.log(docRef)
}