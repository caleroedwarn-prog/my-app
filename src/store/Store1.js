import { create } from "zustand";

const useStore = create((set) => ({

    isLoggedIn: false,
    user: null,

    login: (username) => set({
        isLoggedIn: true,
        user: username
    }),

    logout: () => set({
        isLoggedIn: false,
        user: null
    })
}));
export default useStore;