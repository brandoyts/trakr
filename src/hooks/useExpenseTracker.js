import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import firebaseApp from '../firebase';
import useAppStore from '../store';
const db = getFirestore(firebaseApp);

const useExpesnseTracker = () => {
	const setCategories = useAppStore((state) => state.setCategories);
	const setTransactions = useAppStore((state) => state.setTransactions);
	const user = useAppStore((state) => state.user);

	const getCategories = async () => {
		const querySnapshot = await getDocs(collection(db, 'categories'));

		const categories = new Set();
		querySnapshot.forEach((doc) => {
			categories.add(doc.data().name);
		});

		setCategories(categories);
	};

	const getTransactions = async () => {
		const q = query(
			collection(db, 'transactions'),
			where('user', '==', user.uid)
		);
		const querySnapshot = await getDocs(q);

		const transactions = [];

		querySnapshot.forEach((doc) => {
			transactions.push({ id: doc.id, ...doc.data() });
		});

		setTransactions(transactions);
	};

	const calculateBalance = async () => {};

	return {
		getCategories,
		getTransactions,
		calculateBalance,
	};
};

export default useExpesnseTracker;
