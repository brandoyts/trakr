import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBbcpqsURD1tOWRCHblTFoXYWpoKXgkel4",
	authDomain: "trakr-cd4eb.firebaseapp.com",
	projectId: "trakr-cd4eb",
	storageBucket: "trakr-cd4eb.appspot.com",
	messagingSenderId: "373839381101",
	appId: "1:373839381101:web:f5323dc43acb51d0db7564",
	measurementId: "G-H5MSY09SS2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
