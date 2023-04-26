import React, { useCallback } from 'react';

export default function TransactionCard({ type, amount }) {
	const renderIcon = useCallback(() => {
		switch (type) {
			case 'Income':
				return (
					<span className="bg-orange-400 rounded-full p-3 text-4xl text-white">
						{/* <CiMoneyBill /> */}
					</span>
				);
			case 'Food':
				return (
					<span className="bg-pink-400 rounded-full p-3 text-4xl text-white">
						{/* <MdOutlineFastfood /> */}
					</span>
				);
			case 'Home':
				return (
					<span className="bg-yellow-400 rounded-full p-3 text-4xl text-white">
						{/* <GoHome /> */}
					</span>
				);
			case 'Entertainment':
				return (
					<span className="bg-red-400 rounded-full p-3 text-4xl text-white">
						{/* <MdOutlineToys /> */}
					</span>
				);
			default:
				break;
		}
	}, [type]);

	return (
		<div className="flex items-center flex-wrap justify-between bg-[#f3f5f7] rounded-2xl p-5">
			<div className="flex items-center justify-center gap-4 ">
				{renderIcon()}
				<span className="text-sm capitalize ">{type}</span>
			</div>
			<div className="flex flex-col">
				<span>{type === 'Income' ? `+${amount}` : `-${amount}`}</span>
				<span className="text-sm text-gray-500 self-end">Today</span>
			</div>
		</div>
	);
}
