import React, { useCallback } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Loader from "../components/Loader";
import useAppStore from "../store";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

export default function AuthPage() {
	const form = useAppStore((state) => state.form);
	const user = useAppStore((state) => state.user);
	const { authLoading } = useFirebaseAuth();

	const renderForm = useCallback(() => {
		if (form === "login") {
			return <Login />;
		}

		return <Register />;
	}, [form]);

	if (authLoading) return <Loader />;

	if (user) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<>
			<div className="absolute bg-white top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl min-w-full sm:min-w-[75%] md:min-w-[90%] lg:min-w-[800px] transition-all min-h-[500px]">
				<div className="md:flex justify-evenly gap-5 ">
					{renderForm()}
					<div className="hidden sm:hidden md:block flex-1 bg-[#f2f2f2] h-[500px]">
						<img
							className="flex-1"
							src="assets/svg/undraw_authentication_re_svpt.svg"
							alt="authImage"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
