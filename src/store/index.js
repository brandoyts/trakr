import create from "zustand";

const useAppStore = create((set, get) => ({
	balance: 0,
	income: 0,
	expenses: 0,
	isModalOpen: false,
	form: "login",
	user: null,
	categories: new Set(),

	setCategories: (payload) => {
		set((state) => ({
			categories: payload,
		}));
	},

	toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),

	switchForm: (payload) => {
		set((state) => ({
			form: payload,
		}));
	},

	setUser: (payload) => {
		set((state) => ({
			user: payload,
			// form: "login",
		}));
	},
}));

export default useAppStore;
