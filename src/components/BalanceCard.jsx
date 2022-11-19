import React from "react";
import useStore from "../store";

export default function BalanceCard() {
	const balance = useStore((state) => state.balance);
	const income = useStore((state) => state.income);
	const expenses = useStore((state) => state.expenses);

	return (
		<div className="bg-green-500 p-6 text-white flex flex-col gap-6 rounded-3xl">
			<div className="flex flex-col gap-2 items-center">
				<span>Total Balance</span>
				<span className="font-bold text-[2rem] tracking-wider">
					₱{`${balance}.00`}
				</span>
			</div>
			<div className="flex justify-between flex-wrap gap-5">
				<div className="flex flex-col gap-1">
					<span>Income</span>
					<span>{`${income}.00`}</span>
				</div>
				<div className="flex flex-col gap-1">
					<span>Expneses</span>
					<span>{`${expenses}.00`}</span>
				</div>
			</div>
		</div>
	);
}
