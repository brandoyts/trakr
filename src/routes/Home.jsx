import React from "react";
import AppOverlay from "../components/AppOverlay";
import AppWrapper from "../components/AppWrapper";
import BalanceCard from "../components/BalanceCard";
import Nav from "../components/Nav";
import TransactionModal from "../components/TransactionModal";
import Transactions from "../components/Transactions";
import useAppStore from "../store";

export default function Home() {
	const isModalOpen = useAppStore((state) => state.isModalOpen);

	return (
		<>
			{isModalOpen && <AppOverlay />}
			{isModalOpen && <TransactionModal />}
			<TransactionModal />
			<AppWrapper>
				<Nav />
				<BalanceCard />
				<Transactions />
			</AppWrapper>
		</>
	);
}
