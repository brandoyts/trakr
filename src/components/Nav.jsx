import React from "react";
import useAuth from "../hooks/useAuth";

export default function Nav() {
	const { logout, user } = useAuth();
	return (
		<nav className="flex justify-between pt-10 ">
			<span className="font-bold text-3xl text-gray-400">
				Hi {user?.displayName}👋
			</span>

			<button className="text-md p-1 text-gray-500" onClick={logout}>
				Logout
			</button>
		</nav>
	);
}
