import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDNA1OAkXqdwB7wkYROrtXS_hIZfPiH4RY',
    authDomain: 'mulahazati-754fd.firebaseapp.com',
    projectId: 'mulahazati-754fd',
    storageBucket: 'mulahazati-754fd.appspot.com',
    messagingSenderId: '314150120275',
    appId: '1:314150120275:web:794915e8471414f2bfcfa6',
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
