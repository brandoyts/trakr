import React, { useEffect } from "react";
import TransactionCard from "./TransactionCard";
import useStore from "../store";

export default function Transactions() {
	const addIncome = useStore((state) => state.addIncome);
	const addExpense = useStore((state) => state.addExpense);

	const income = useStore((state) => state.income);
	const expenses = useStore((state) => state.expenses);

	const toggleModal = useStore((state) => state.toggleModal);

	useEffect(() => {
		useStore.setState({ balance: +income });
		// useStore.setState({ balance: -expenses });
	}, [income, expenses]);

	const handleAddIncome = () => {
		addIncome();
	};

	const handleAddExpense = () => {
		addExpense();
	};

	return (
		<div className="bg-white p-5 rounded-xl">
			<div className="flex justify-between items-center my-4">
				<h2 className="text-md font-bold">Transactions</h2>
				<span>View more</span>
			</div>
			<div
				className="flex flex-col gap-4 max-h-[400px] overflow-y-scroll "
				id="transactions"
			>
				<TransactionCard type="income" />
				<TransactionCard type="food" />
				<TransactionCard type="entertainment" />
				<TransactionCard type="home" />
				<TransactionCard type="entertainment" />
				<TransactionCard type="home" />
				<TransactionCard type="food" />
				<TransactionCard type="food" />
				<TransactionCard type="home" />
				<TransactionCard type="food" />
			</div>
			<div className="flex justify-center mt-5">
				<button
					className="self-center bg-green-400 rounded-full text-white"
					onClick={toggleModal}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-11 h-11"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 4.5v15m7.5-7.5h-15"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
