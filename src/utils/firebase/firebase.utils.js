import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signInWithRedirect,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';

import {
    doc,
    getDoc,
    getFirestore,
    query,
    setDoc,
    updateDoc,
} from 'firebase/firestore';

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
 * initialize a firestore db instance
 ********************************************* */
const db = getFirestore();

/** ********************************************
 * authentication flow
 ********************************************* */
// google popup
export const signInWithGooglePopup = async () =>
    signInWithPopup(auth, googleProvider);

// google popup
export const signInWithGoogleRedirect = async () =>
    signInWithRedirect(auth, googleProvider);

// sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return signInWithEmailAndPassword(auth, email, password);
};

// create user with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return;

    // get user document ref
    const userDocRef = doc(db, 'users', userAuth.uid);

    // read user document
    let userSnapshot = await getDoc(userDocRef);

    // if user document doesn't exist
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

        // get updated snaphot
        userSnapshot = await getDoc(userDocRef);
    }

    return userSnapshot;
};

// TO BE REFACTORED//
export const getAuthUserDocument = async (userAuth) => {
    const currentUserDocRef = doc(db, 'users', userAuth.uid);
    const q = query(currentUserDocRef);
    const querySnapshot = await getDoc(q);
    return querySnapshot.data();
};
// firebase.database().ref('users/' + uid).once("value", snap => {
//     console.log(snap.val())
// })

/** ********************************************
 * sign out auth user
 ********************************************* */
export const signOutUser = async () => signOut(auth);

/** ********************************************
 * observer to get current auth user
 ********************************************* */
export const getCurrentUser = () =>
    new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe();
                resolve(userAuth);
            },
            reject
        );
    });

/** ********************************************
 * update current user profile
 ********************************************* */

// update user document
export const updateCurrentUserDocument = async (userAuth, updatedData) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    try {
        await updateDoc(userDocRef, { ...updatedData });
    } catch (error) {
        console.log('Error updating user document:', error);
    }

    const updatedUserSnapshot = await getDoc(userDocRef);

    return updatedUserSnapshot;
};
