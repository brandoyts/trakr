import React, { useRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import useStore from "../store";

export default function AuthPage() {
	const isLoggedIn = useStore((state) => state.isLoggedIn);
	const tabRef = useRef(null);

	if (isLoggedIn) return <Navigate to="/" replace />;

	return (
		<div className="absolute bg-white top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl min-w-full sm:min-w-[75%] md:min-w-[50%] lg:min-w-[500px] transition-all min-h-[500px]">
			<Tab />
			<Login />
			<Register />
		</div>
	);
}

function Tab() {
	return (
		<div>
			<span>Login</span>
			<span>Register</span>
		</div>
	);
}

function Login() {
	return (
		<div>
			<h1>Login</h1>
		</div>
	);
}

function Register() {
	return (
		<div>
			<h1>Register</h1>
		</div>
	);
}
