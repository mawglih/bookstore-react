import { auth, provider } from './firebase';

//Sign in with google
export const doSignInGoogle = () => auth.signInWithPopup(provider);

//Keep signin
export const doOnStateChange = (user) => auth.onAuthStateChanged(user);

//Sign out
export const doSignOut = () => auth.signOut();