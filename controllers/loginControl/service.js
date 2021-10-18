require('dotenv').config()
const {firebaseApp} = require('../../config/firebase')
const {getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword} = require('firebase/auth')
const { GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect, getRedirectResult} = require('firebase/auth')

async function createUser(email,password){
    const auth = await getAuth();
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message)
    }
}

//Authen
async function signInWithEmail(email,password) {
    const auth = await getAuth();
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
        let userCredential = await signInWithRedirect(auth, provider); 
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function signInWithFacebook(){
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    try {
        let userCredential = await signInWithRedirect(auth, provider); 
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function signInWithGoogleOAuth(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
        let result = await getRedirectResult(auth);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}

async function signInWithFacebookOAuth(){
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    try {
        let result = await getRedirectResult(auth);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        return user
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    signInWithEmail,
    signInWithGoogle,
    createUser
}
    

