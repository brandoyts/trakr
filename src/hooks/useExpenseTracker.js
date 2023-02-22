import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../firebase";

const db = getFirestore(firebaseApp);

const useExpesnseTracker = () => {
	const getCategories = async () => {
		const querySnapshot = await getDocs(collection(db, "categories"));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
		});
	};

	return {
		getCategories,
	};
};

export default useExpesnseTracker;
