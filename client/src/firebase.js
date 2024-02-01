import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "department-for-education.firebaseapp.com",
  projectId: "department-for-education",
  storageBucket: "department-for-education.appspot.com",
  messagingSenderId: "1092692788867",
  appId: "1:1092692788867:web:35364f634ed4cb2ffbbdb6",
};

export const app = initializeApp(firebaseConfig);
