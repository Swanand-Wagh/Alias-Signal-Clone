import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaPmhhRNcJx6nT8REub8RWe6Nr5eveBhg",
  authDomain: "alias-signal-clone.firebaseapp.com",
  projectId: "alias-signal-clone",
  storageBucket: "alias-signal-clone.appspot.com",
  messagingSenderId: "853179249391",
  appId: "1:853179249391:web:f4ae35ae6deb044ccca11a",
  measurementId: "G-HDDNQT2EG8",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
