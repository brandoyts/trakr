import React from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";
import useAppStore from "../store";

export default function Nav() {
	const user = useAppStore((state) => state.user);
	const { logout } = useFirebaseAuth();

	return (
		<nav className="flex justify-between pt-10 ">
			<span className="font-bold text-xl text-gray-400">
				Hi {user?.displayName}👋
			</span>

			<button className="text-md p-1 text-gray-500" onClick={logout}>
				Logout
			</button>
		</nav>
	);
}
