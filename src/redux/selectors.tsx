import { Todo } from "@/models/Todo";
import { createSelector } from "reselect";

const todosSelector = (state: any) => state.todos.todos
const filterStatusSelector = (state: any) => state.filter.status

const todosRemainingSelector = createSelector(
  todosSelector,
  filterStatusSelector,
  (todos, status) => {
    if (status === 'all') return todos

    if (status === 'todo' || status === 'completed') {
      return todos.filter((todo: Todo) => status === 'completed' ? todo.isCompleted : !todo.isCompleted);
    }

    return todos
  }
);

export { filterStatusSelector, todosRemainingSelector };

