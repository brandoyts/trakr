import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
import firebaseApp from "../firebase";
import useAppStore from "../store";
const db = getFirestore(firebaseApp);

const useExpesnseTracker = () => {
	const setCategories = useAppStore((state) => state.setCategories);

	const getCategories = async () => {
		const querySnapshot = await getDocs(collection(db, "categories"));

		const _categories = new Set();
		querySnapshot.forEach((doc) => {
			_categories.add(doc.data().name);
		});

		setCategories(_categories);
	};

	const getTransactions = async () => {
		const transactionsRef = await collection(db, "users/transactions").get();

		console.log(transactionsRef);
	};

	return {
		getCategories,
		getTransactions,
	};
};

export default useExpesnseTracker;
