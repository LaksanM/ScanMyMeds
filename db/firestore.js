import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAG3n5hiGB6cGDcRRG0sl49MevNyzn32Ps",
    authDomain: "medic-1a732.firebaseapp.com",
    databaseURL: "https://medic-1a732-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "medic-1a732",
    storageBucket: "medic-1a732.appspot.com",
    messagingSenderId: "813246850010",
    appId: "1:813246850010:web:cb3ed2e8a019ed643056e3",
    measurementId: "G-KDQDYG8GYG"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;