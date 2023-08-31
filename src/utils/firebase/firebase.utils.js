import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signInWithRedirect,
} from 'firebase/auth';

/** ********************************************
 * firebase app configuration
 ********************************************* */
const firebaseConfig = {
    apiKey: 'AIzaSyDNA1OAkXqdwB7wkYROrtXS_hIZfPiH4RY',
    authDomain: 'mulahazati-754fd.firebaseapp.com',
    projectId: 'mulahazati-754fd',
    storageBucket: 'mulahazati-754fd.appspot.com',
    messagingSenderId: '314150120275',
    appId: '1:314150120275:web:794915e8471414f2bfcfa6',
};

/** ********************************************
 * initialize the firebase application
 ********************************************* */
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

/** ********************************************
 * cretae instance of google provider
 ********************************************* */
const googleProvider = new GoogleAuthProvider();

/** ********************************************
 * cretae auth instance
 ********************************************* */
const auth = getAuth();

/** ********************************************
 * authentication flow
 ********************************************* */
// google popup
export const signInWithGooglePopup = async () => {
    await signInWithPopup(auth, googleProvider);
};

// google popup
export const signInWithGoogleRedirect = async () => {
    await signInWithRedirect(auth, googleProvider);
};

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
};
