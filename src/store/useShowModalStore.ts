import { createWithEqualityFn } from "zustand/traditional";

type ShowModalState = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

export const useModalStore = createWithEqualityFn<ShowModalState>((set) => ({
  showModal: false,
  setShowModal: (showModal) => set({ showModal }),
}));
