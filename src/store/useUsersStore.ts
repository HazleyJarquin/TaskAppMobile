import { createWithEqualityFn } from "zustand/traditional";
import { IUsersResponse } from "../interfaces";

type UsersSate = {
  users: IUsersResponse[];
  setUsers: (users: IUsersResponse[]) => void;
};

export const useUsersStore = createWithEqualityFn<UsersSate>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
