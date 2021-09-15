import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBmpTn6jpBjtZ_x-_u9RBA9WjGT1fPV-Cw",
  authDomain: "streamify-65ab1.firebaseapp.com",
  projectId: "streamify-65ab1",
  storageBucket: "streamify-65ab1.appspot.com",
  messagingSenderId: "369635984774",
  appId: "1:369635984774:web:298e72297c9ac53b7ad807"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
