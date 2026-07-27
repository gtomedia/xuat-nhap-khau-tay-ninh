import { create } from 'zustand';

interface AppState {
  title: string;
  setTitle: (title: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  title: "HỘI NGHỊ KẾT NỐI CHUỖI CUNG ỨNG",
  setTitle: (title) => set({ title }),
}));
