import React, { useRef } from "react";
import useAppStore from "../store";
import Categories from "./Categories";

export default function TransactionModal() {
	const toggleModal = useAppStore((state) => state.toggleModal);
	const isModalOpen = useAppStore((state) => state.isModalOpen);
	const categoryRef = useRef("");
	const amountRef = useRef("");

	return (
		<div
			className={`absolute bg-white top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl min-w-full sm:min-w-[75%] md:min-w-[50%] lg:min-w-[500px] transition-all flex flex-col gap-5 ${
				isModalOpen ? "opacity-100" : "opacity-0"
			}`}
		>
			<div className="form-group flex flex-col justify-center gap-1">
				<label htmlFor="categories" className="text-xl font-bold">
					Category:{" "}
				</label>
				<Categories />
			</div>
			<div className="form-group flex flex-col justify-center gap-1">
				<label htmlFor="amount" className="text-xl font-bold">
					Amount:{" "}
				</label>
				<input
					type="text"
					inputMode="numeric"
					pattern="[0-9]*"
					className="w-full border"
				/>
			</div>
			<div className="button-group flex gap-3">
				<button
					onClick={toggleModal}
					className="bg-gray-400 p-2 rounded-md w-[100px] font-bold text-lg text-white"
				>
					Cancel
				</button>
				<button className="bg-green-500 p-2 rounded-md w-[100px] font-bold text-lg text-white">
					Save
				</button>
			</div>
		</div>
	);
}
