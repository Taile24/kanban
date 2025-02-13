import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.REACT_app_apiKey,
    authDomain: process.env.REACT_app_authDomain,
    projectId: process.env.REACT_app_projectId,
    storageBucket: process.env.REACT_app_storageBucket,
    messagingSenderId: process.env.REACT_app_messagingSenderId,
    appId: process.env.REACT_app_appId,
    measurementId: process.env.REACT_app_measurementId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();


auth.languageCode = 'vi';