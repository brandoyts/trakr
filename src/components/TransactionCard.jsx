import React from "react";
import { CiMoneyBill } from "react-icons/ci";
import { MdOutlineFastfood, MdOutlineToys } from "react-icons/md";
import { GoHome } from "react-icons/go";

export default function TransactionCard({ type }) {
	const renderIcon = () => {
		switch (type) {
			case "income":
				return (
					<span className="bg-orange-400 rounded-full p-3 text-4xl text-white">
						<CiMoneyBill />
					</span>
				);

			case "food":
				return (
					<span className="bg-pink-400 rounded-full p-3 text-4xl text-white">
						<MdOutlineFastfood />
					</span>
				);

			case "home":
				return (
					<span className="bg-yellow-400 rounded-full p-3 text-4xl text-white">
						<GoHome />
					</span>
				);

			case "entertainment":
				return (
					<span className="bg-red-400 rounded-full p-3 text-4xl text-white">
						<MdOutlineToys />
					</span>
				);
			default:
				break;
		}
	};

	return (
		<div className="flex items-center flex-wrap justify-between bg-[#f3f5f7] rounded-2xl p-5">
			<div className="flex items-center justify-center gap-4 ">
				{renderIcon()}
				<span className="text-sm capitalize ">{type}</span>
			</div>
			<div className="flex flex-col">
				<span>-45.00</span>
				<span className="text-sm text-gray-500 self-end">Today</span>
			</div>
		</div>
	);
}
