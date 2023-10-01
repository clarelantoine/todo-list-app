import {
    doc,
    getDoc,
    getFirestore,
    setDoc,
    updateDoc,
} from 'firebase/firestore';

/** ********************************************
 * initialize firebase firestore database
 ********************************************* */
const db = getFirestore();

/** ********************************************
 * Create User Document
 ********************************************* */
const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshotExist = (await getDoc(userDocRef)).exists();

    console.log('userSnapshotExist:', userSnapshotExist);

    if (!userSnapshotExist) {
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
            throw new Error('error creating the user', error.message);
        }
    }
    const userSnapshot = await getDoc(userDocRef);

    return userSnapshot;
};

/** ********************************************
 * Update current user document
 ********************************************* */
const updateCurrentUserDocument = async (userAuth, updatedData) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    try {
        await updateDoc(userDocRef, { ...updatedData });
    } catch (error) {
        throw new Error('Error updating user document:', error);
    }

    const updatedUserSnapshot = await getDoc(userDocRef);

    return updatedUserSnapshot;
};

/** ********************************************
 * Export functions
 ********************************************* */
export { createUserDocumentFromAuth, updateCurrentUserDocument };
