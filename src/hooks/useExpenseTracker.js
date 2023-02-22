import { getFirestore, collection, getDocs } from "firebase/firestore";
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

	return {
		getCategories,
	};
};

export default useExpesnseTracker;
