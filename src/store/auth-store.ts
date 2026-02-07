import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/user";

const STORAGE_KEY = `auth-storage`;

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => set({ token }),
      login: (user, token) => {
        try {
          localStorage.setItem("token", token);
        } catch (e) {
          console.warn("Failed to save token to localStorage:", e);
        }
        set({ user, token, isAuthenticated: true });
      },
      logout: () => {
        try {
          localStorage.removeItem("token");
        } catch (e) {
          console.warn("Failed to remove token from localStorage:", e);
        }
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
