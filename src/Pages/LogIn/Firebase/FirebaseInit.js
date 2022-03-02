import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig';
const firebaseInitilization = () => {
    initializeApp(firebaseConfig);

}

export default firebaseInitilization;