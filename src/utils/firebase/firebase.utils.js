import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mjEKb4vpNLI16FtqgKVMD0M9f8l9YAM",
  authDomain: "crwn-jc-db.firebaseapp.com",
  projectId: "crwn-jc-db",
  storageBucket: "crwn-jc-db.appspot.com",
  messagingSenderId: "294743348577",
  appId: "1:294743348577:web:5ab56c372528ee08e76120"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef); 
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
  //if user data exists

  //if it doesnt

  


}