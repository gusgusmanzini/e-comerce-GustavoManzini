// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "TU_API_KEY",
//   authDomain: "TU_AUTH_DOMAIN",
//   projectId: "TU_PROJECT_ID",
//   storageBucket: "TU_STORAGE_BUCKET",
//   messagingSenderId: "TU_MESSAGING_SENDER_ID",
//   appId: "TU_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase solo si no ha sido inicializado previamente
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializar Firestore
const db = getFirestore(app);

export { db };
