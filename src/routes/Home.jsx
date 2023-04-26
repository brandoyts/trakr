import React, { useEffect } from 'react';
// import AppOverlay from "../components/AppOverlay";
import AppWrapper from '../components/AppWrapper';
import BalanceCard from '../components/BalanceCard';
import Nav from '../components/Nav';
import TransactionModal from '../components/TransactionModal';
import Transactions from '../components/Transactions';
import useExpesnseTracker from '../hooks/useExpenseTracker';
import useAppStore from '../store';

export default function Home() {
	const isModalOpen = useAppStore((state) => state.isModalOpen);
	const { getCategories, getTransactions } = useExpesnseTracker();

	useEffect(() => {
		getCategories();
		getTransactions();
	}, [getCategories]);

	return (
		<>
			{/* {isModalOpen && <AppOverlay />} */}
			{isModalOpen && <TransactionModal />}
			<AppWrapper>
				<Nav />
				<BalanceCard />
				<Transactions />
			</AppWrapper>
		</>
	);
}
