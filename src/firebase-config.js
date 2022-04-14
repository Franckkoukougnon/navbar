import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiuMv3EtYrnsLIDBbXAULweBYjRYYBqEo",
  authDomain: "navbar-project-e0940.firebaseapp.com",
  projectId: "navbar-project-e0940",
  storageBucket: "navbar-project-e0940.appspot.com",
  messagingSenderId: "436414911797",
  appId: "1:436414911797:web:3283b6796027312a20287c",
  measurementId: "G-01R4D4VGDG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
