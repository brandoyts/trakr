import React, { forwardRef } from "react";
import useAppStore from "../../store";

export default function Register({ click }) {
	const switchForm = useAppStore((state) => state.switchForm);
	return (
		<div className="flex-1 p-5">
			<form action="#" className="flex flex-col gap-5">
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="name">Name:</label>
					<input className="border-2 rounded-md p-2" type="text" id="name" />
				</div>
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="email">Email:</label>
					<input className="border-2 rounded-md p-2" type="text" id="email" />
				</div>
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="password">password:</label>
					<input
						className="border-2 rounded-md p-2"
						type="password"
						id="password"
					/>
				</div>
				<div className="form-group flex flex-col gap-2">
					<button className="bg-green-500 text-white p-2 rounded-md text-xl">
						Register
					</button>
				</div>
				<span className="text-sm text-gray-500">
					Already have an account?{" "}
					<span
						onClick={() => switchForm("login")}
						className="cursor-pointer text-green-700"
					>
						Login here!
					</span>
				</span>
			</form>
		</div>
	);
}
