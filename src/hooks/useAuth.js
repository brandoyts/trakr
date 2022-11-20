import { useState, useEffect } from "react";
import firebaseApp from "../firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

const useAuth = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState(null);

	const auth = getAuth(firebaseApp);

	useEffect(() => {
		onAuthStateChanged(auth, (user) =>
			setUser({
				displayName: user?.displayName,
				email: user?.email,
			})
		);
		setIsLoading(false);
	}, []);

	const register = async (user) => {
		try {
			await createUserWithEmailAndPassword(auth, user.email, user.password);

			// update new user's displayName
			await updateProfile(auth.currentUser, {
				displayName: user.name,
			});

			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		signOut(auth);
	};

	return {
		user,
		register,
		logout,
	};
};

export default useAuth;
