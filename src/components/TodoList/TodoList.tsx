import { Todo as TodoModel } from "@/models/Todo";
import { todosRemainingSelector } from "@/redux/selectors";
import { useSelector } from "react-redux";
import Todo from "./Todo/Todo";

function TodoList() {
  const todos = useSelector(todosRemainingSelector) as Array<TodoModel>

  return (
    <div className="flex flex-col gap-5 overflow-y-scroll h-full">
      {todos.map(todo => (
        <Todo key={todo.id} id={todo.id} name={todo.name} isCompleted={todo.isCompleted} />
      ))}
    </div>
  );
}

export default TodoList;
