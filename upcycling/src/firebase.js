import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore , collection, addDoc} from "firebase/firestore"
import { GoogleAuthProvider, signInWithPopup,
    FacebookAuthProvider,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,onAuthStateChanged,getAuth
} from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {

    apiKey: "AIzaSyAmeVNxGFJCe4nWo7zDNNa4GePbQyA93tw",
    authDomain: "upcycling-project-ex.firebaseapp.com",
    projectId: "upcycling-project-ex",
    storageBucket: "upcycling-project-ex.appspot.com",
    messagingSenderId: "763504697046",
    appId: "1:763504697046:web:7eab09dda319dcba2b3377"

};
// Initialize Firebase 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        await addDoc(collection(firestore, "users"), {
            uid: user.uid,
            email: user.email,
        });
        return true
    } catch (error) {
        return {error: error.message}
    }
};
const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        return true
    } catch (error) {
        return {error: error.message}
    }
};

const SignOut = async() => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        return false
    }
};



export { app , auth , db , firestore , storage ,signIn , signUp, SignOut};