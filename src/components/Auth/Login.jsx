import React, { useRef } from "react";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";
import useAppStore from "../../store/index";

export default function Login() {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const switchForm = useAppStore((state) => state.switchForm);
	const { signin } = useFirebaseAuth();

	const onSubmit = (e) => {
		e.preventDefault();
		signin(emailRef.current.value, passwordRef.current.value);
	};

	return (
		<div className="flex-1 p-5">
			<form onSubmit={onSubmit} className="flex flex-col gap-5">
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="email">Email:</label>
					<input
						className="border-2 rounded-md p-2"
						type="text"
						id="email"
						ref={emailRef}
					/>
				</div>
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="password">password:</label>
					<input
						className="border-2 rounded-md p-2"
						type="password"
						id="password"
						ref={passwordRef}
					/>
				</div>
				<div className="form-group flex flex-col gap-2">
					<button className="bg-green-500 text-white p-2 rounded-md text-xl">
						Login
					</button>
				</div>
				<span className="text-sm text-gray-500">
					Dont have an account yet?{" "}
					<span
						onClick={() => switchForm("register")}
						className="cursor-pointer text-green-700"
					>
						Register here!
					</span>
				</span>
			</form>
		</div>
	);
}
