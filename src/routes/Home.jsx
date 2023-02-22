import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect } from "react";
import AppOverlay from "../components/AppOverlay";
import AppWrapper from "../components/AppWrapper";
import BalanceCard from "../components/BalanceCard";
import Nav from "../components/Nav";
import TransactionModal from "../components/TransactionModal";
import Transactions from "../components/Transactions";
import firebaseApp from "../firebase";
import useExpesnseTracker from "../hooks/useExpenseTracker";
import useAppStore from "../store";

const db = getFirestore(firebaseApp);

export default function Home() {
	const isModalOpen = useAppStore((state) => state.isModalOpen);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const res = await getDocs(collection(db, "categories"));
				// console.log(res);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		};

		getCategories();
	}, []);

	return (
		<>
			{isModalOpen && <AppOverlay />}
			{isModalOpen && <TransactionModal />}
			<AppWrapper>
				<Nav />
				<BalanceCard />
				<Transactions />
			</AppWrapper>
		</>
	);
}
