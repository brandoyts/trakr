import firebaseApp from "../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

export const register = async (name, email, password) => {
	const res = await createUserWithEmailAndPassword(auth, email, password);

	if (res) {
		// const user = res.user;
		// user.updateProfile({
		// 	displayName: name,
		// });
		console.log(firebaseApp.auth().currentUser);
	}
};
