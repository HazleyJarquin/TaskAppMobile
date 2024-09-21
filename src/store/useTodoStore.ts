import { createWithEqualityFn } from "zustand/traditional";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ITodos } from "../interfaces";

type TodoState = {
  todos: ITodos[];
  addTodo: ({ name, isCompleted }: ITodos) => void;
  removeTodo: (index: number) => void;
  completeTodo: (index: number) => void;
};

export const useTodoStore = createWithEqualityFn(
  persist<TodoState>(
    (set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (index) =>
        set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
      completeTodo: (index) => {
        set((state) => {
          const newTodos = [...state.todos];
          newTodos[index].isCompleted = !newTodos[index].isCompleted;
          return { todos: newTodos };
        });
      },
    }),
    {
      name: "todos-store",
      getStorage: () => AsyncStorage,
    }
  )
);
