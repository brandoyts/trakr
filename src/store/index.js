import create from "zustand";

const useAppStore = create((set, get) => ({
	user: {},
	isLoggedIn: false,
	balance: 0,
	income: 0,
	expenses: 0,
	isModalOpen: false,
	form: "login",

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

	switchForm: (payload) => {
		set((state) => ({
			form: payload,
		}));
	},
}));

export default useAppStore;
