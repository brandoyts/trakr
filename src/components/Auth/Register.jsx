import React from "react";
import useAppStore from "../../store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSchema from "../../schema/RegisterSchema";
import useFirebaseAuth from "../../hooks/useFirebaseAuth";

export default function Register() {
	const switchForm = useAppStore((state) => state.switchForm);
	const { signup } = useFirebaseAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(RegisterSchema),
	});

	const onSubmit = (userData) => {
		signup(userData);
	};

	return (
		<div className="flex-1 p-5">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="name">Name:</label>
					<input
						className="border-2 rounded-md p-2"
						type="text"
						id="name"
						autoComplete="off"
						{...register("name")}
					/>
					<span className="text-red-500">
						{errors?.name && errors?.name.message}
					</span>
				</div>
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="email">Email:</label>
					<input
						autoComplete="off"
						className="border-2 rounded-md p-2"
						type="text"
						id="email"
						{...register("email")}
					/>
					<span className="text-red-500">
						{errors?.email && errors?.email.message}
					</span>
				</div>
				<div className="form-group flex flex-col gap-2">
					<label htmlFor="password">password:</label>
					<input
						className="border-2 rounded-md p-2"
						type="password"
						id="password"
						{...register("password")}
					/>
					<span className="text-red-500">
						{errors?.password && errors?.password.message}
					</span>
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
