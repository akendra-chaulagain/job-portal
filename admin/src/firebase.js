import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.React_APP_AUTODOMAIN,
  projectId: process.env.React_APP_projectId,
  storageBucket: process.env.React_APP_storageBucket,
  messagingSenderId: process.env.React_APP_messagingSenderId,
  appId: process.env.React_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
