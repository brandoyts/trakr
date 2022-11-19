import { useState, useEffect } from "react";
import firebaseApp from "../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
} from "firebase/auth";

const useAuth = () => {
	const [error, setError] = useState(null);
	const [user, setUser] = useState(null);

	const auth = getAuth(firebaseApp);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => setUser(user));
	}, []);

	console.log(user);

	const register = async (user) => {
		try {
			const newUser = await createUserWithEmailAndPassword(
				auth,
				user.email,
				user.password
			);

			// update new user's displayName
			updateProfile(auth.currentUser, {
				displayName: user.name,
			});

			// console.log(newUser);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		user,
		register,
	};
};

export default useAuth;
