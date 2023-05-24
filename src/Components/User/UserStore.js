import { create } from "zustand";

const useUserStore = create((set, get) => ({
  userId: 1,
  users: null,
  loading: false,
  fetchUsers: async () => {
    set({ loading: true });
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${get().userId}`
    );
    const data = await res.json();
    set({ users: data });
    set({ loading: false });
  },
}));

export default useUserStore;
