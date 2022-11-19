import create from "zustand";
import { register } from "../utils/auth";

const useAppStore = create((set, get) => ({
	user: {},
	isLoggedIn: true,
	balance: 0,
	income: 0,
	expenses: 0,
	isModalOpen: false,

	toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),

	addIncome: (payload) =>
		set((state) => {
			return {
				income: state.income + 5,
			};
		}),

	addExpense: (payload) => {
		set((state) => ({
			expenses: state.expenses + 3,
			balance: state.balance - state.expenses,
		}));
	},

	register: async (payload) => {
		console.log("register");
		const user = await register(
			"Brando Endona",
			"lopli@gmail.com",
			"secret123"
		);

		// set((state) => ({
		// 	expenses: state.expenses + 3,
		// 	balance: state.balance - state.expenses,
		// }));
	},
}));

export default useAppStore;
