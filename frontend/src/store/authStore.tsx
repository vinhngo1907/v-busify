import { create } from "zustand";

interface AuthStore {
    isAuth: boolean;
    user: User | null;
    isLoading: boolean;
    setIsAuth: (isAuth: boolean) => void;
    setUser: (user: User | null) => void;
    setIsLoading: (isLoading: boolean) => void;
}

interface User {
    id: number;
    email: string;
    address: string;
    picture: string;
    role: string;
}

export const userAuthStore = create<AuthStore>(set => ({
    isAuth: false,
    user: null,
    isLoading: true,
    setIsAuth: isAuth => set({ isAuth }),
    setUser: user => set({ user }),
    setIsLoading: isLoading => set({ isLoading })
}));