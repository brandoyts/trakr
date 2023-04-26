import React, { useCallback, useEffect } from 'react';
import useStore from '../store';
import TransactionCard from './TransactionCard';

export default function Transactions() {
	const transactions = useStore((state) => state.transactions);

	const toggleModal = useStore((state) => state.toggleModal);

	useEffect(() => {
		console.log(transactions, 'asdasd');

		// const income = transactions
		// 	.filter((transaction) => transaction.category === 'Income')
		// 	.map((transaction) => transaction.amount)
		// 	.reduce((a, b) => a + b);

		// // const expense = transactions
		// // 	.filter((transaction) => transaction.category != 'Income')
		// // 	.map((transaction) => transaction.amount)
		// // 	.reduce((a, b) => a + b);
		// console.log(income);
		useStore.setState({ balance: -520 });
	}, []);

	const renderTransactionCards = useCallback(() => {
		return transactions.map((transaction) => (
			<TransactionCard
				key={transaction.id}
				type={transaction.category}
				amount={transaction.amount}
			/>
		));
	}, [transactions]);

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
				{renderTransactionCards()}
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
