import { initializeApp } from 'firebase/app';
import {
    signOut,
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
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
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

/** ********************************************
 * Sign In Auhtentication Flows
 ********************************************* */

// Google Popup Signin
const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Google Redirect Signin
const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Email and Passowrd Signin
const signInAuthUserWithEmailAndPassword = (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
};

/** ********************************************
 * Sign Up Auhtentication Flows
 ********************************************* */

// Email and Password Signup
const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
};

/** ********************************************
 * Sign Out
 ********************************************* */
const signOutUser = () => signOut(auth);

/** ********************************************
 * Get Current Auth User
 ********************************************* */
const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
            unsubscribe();
            if (userAuth) resolve(userAuth);
            reject(new Error('Unable to get current authenticated user'));
        });
    });

/** ********************************************
 * Export functions
 ********************************************* */
export {
    signOutUser,
    getCurrentUser,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword,
    createAuthUserWithEmailAndPassword,
};
