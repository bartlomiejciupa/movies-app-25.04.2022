import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBr8mG0UM_zKhzp4kGUAIkMdQN1GM4jOtY",
    authDomain: "my-first-base-3b675.firebaseapp.com",
    projectId: "my-first-base-3b675",
    storageBucket: "my-first-base-3b675.appspot.com",
    messagingSenderId: "155838946774",
    appId: "1:155838946774:web:aee234e1739f1513959877",
    measurementId: "G-R2DN77Z25N"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp); 
const auth = getAuth(firebaseApp);

export { db, auth };