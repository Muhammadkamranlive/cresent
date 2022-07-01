import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyCbJQXf30VcLG-ygZzvOsviCTLWB_i_4Os",
	authDomain: "crestexmillfsd.firebaseapp.com",
	projectId: "crestexmillfsd",
	storageBucket: "crestexmillfsd.appspot.com",
	messagingSenderId: "751020039319",
	appId: "1:751020039319:web:b361dc0191657700ef9dd2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const myapp=app;
