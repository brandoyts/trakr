import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseApp from '../firebase';
import useAppStore from '../store';

export const auth = getAuth(firebaseApp);

const useFirebaseAuth = () => {
	const [authLoading, setAuthLoading] = useState(true);
	const setUser = useAppStore((state) => state.setUser);
	const switchForm = useAppStore((state) => state.switchForm);

	useEffect(() => {
		const unlisten = onAuthStateChanged(auth, (user) => {
			setAuthLoading(false);
			return user ? setUser(user) : setUser(null);
		});

		return () => unlisten();
	}, [setUser]);

	const signup = async (user) => {
		try {
			setAuthLoading(true);
			await createUserWithEmailAndPassword(auth, user.email, user.password);

			// update new user's displayName
			const newUser = await updateProfile(auth.currentUser, {
				displayName: user.name,
			});

			setUser(newUser);
		} catch (error) {
			setUser(null);
		} finally {
			setAuthLoading(false);
			switchForm('login');
		}
	};

	const signin = async (email, password) => {
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			setUser(user);
		} catch (error) {
			setUser(null);
			console.log(error, 'error');
		} finally {
			setAuthLoading(false);
		}
	};

	const logout = async () => {
		await signOut(auth);
		setUser(null);
	};

	return {
		authLoading,
		signin,
		signup,
		logout,
	};
};

export default useFirebaseAuth;
