import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCnMsEu8mrSHvfawKft8cwUF0rKj7FQPiw",
  authDomain: "proyecto-9ddf2.firebaseapp.com",
  projectId: "proyecto-9ddf2",
  storageBucket: "proyecto-9ddf2.appspot.com",
  messagingSenderId: "711163621216",
  appId: "1:711163621216:web:423c1093b1546580ba7805"
}

// Inicializa Firebase solo si no hay ninguna app inicializada
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];



const db = getFirestore(app);

export  { db };

export default firebaseConfig
