import { create } from 'zustand';

interface AppState {
  title: string;
  setTitle: (title: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  title: "HỘI NGHỊ KẾT NỐI CHUỖI CUNG ỨNG HÀNG HÓA XUẤT NHẬP KHẨU, THƯƠNG MẠI ĐIỆN TỬ - TỈNH TÂY NINH NĂM 2026",
  setTitle: (title) => set({ title }),
}));
