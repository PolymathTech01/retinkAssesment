import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLkAfDRBEoFV9ko60-G41nTD5Jxk0_R3E',
  authDomain: 'retinkassessment.firebaseapp.com',
  projectId: 'retinkassessment',
  storageBucket: 'retinkassessment.appspot.com',
  messagingSenderId: '613047328767',
  appId: '1:613047328767:web:f65526c4bd52e3d00b51ca',
  measurementId: 'G-GYV8NFGT5V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
