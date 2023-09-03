import { initializeApp } from 'firebase/app';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';

import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

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
export const signInWithGooglePopup = async () =>
    signInWithPopup(auth, googleProvider);

// google popup
export const signInWithGoogleRedirect = async () =>
    signInWithRedirect(auth, googleProvider);

/** ********************************************
 * initialize a firestore db instance
 ********************************************* */
const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return;

    // create user doc ref
    const userDocRef = doc(db, 'users', userAuth.uid);

    // get user doc ref
    const userSnapshot = await getDoc(userDocRef);

    // if user data doesn't exist
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    // if user data exist
    return userDocRef;
};

/** ********************************************
 * sign out auth user
 ********************************************* */
export const signOutUser = async () => signOut(auth);

/** ********************************************
 * adds an observer for changes to the user's sign-in state
 ********************************************* */
export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback);
};
