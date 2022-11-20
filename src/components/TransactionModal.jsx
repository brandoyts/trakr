import React from "react";
import useStore from "../store";
import useAuth from "../hooks/useAuth";

export default function TransactionModal() {
	const toggleModal = useStore((state) => state.toggleModal);
	const isModalOpen = useStore((state) => state.isModalOpen);
	const { register } = useAuth();

	const handleRegister = () => {
		const user = {
			name: "brando",
			email: "g22@mail.com",
			password: "test123",
		};

		register(user);
	};

	return (
		<div
			className={`absolute bg-white top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl min-w-full sm:min-w-[75%] md:min-w-[50%] lg:min-w-[500px] transition-all ${
				isModalOpen ? "opacity-100" : "opacity-0"
			}`}
		>
			TransactionModal
			<div className="button-group flex gap-3">
				<button
					onClick={toggleModal}
					className="bg-gray-400 p-2 rounded-md w-[100px] font-bold text-lg text-white"
				>
					Cancel
				</button>
				<button
					onClick={handleRegister}
					className="bg-green-500 p-2 rounded-md w-[100px] font-bold text-lg text-white"
				>
					Save
				</button>
			</div>
		</div>
	);
}
