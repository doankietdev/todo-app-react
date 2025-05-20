import { Todo as TodoModel } from "@/models/Todo";
import { todosRemainingSelector } from "@/redux/selectors";
import { useSelector } from "react-redux";
import Todo from "./Todo/Todo";
import { useState } from "react";

function TodoList() {
  const todos = useSelector(todosRemainingSelector) as Array<TodoModel>
  const [isEditing, setIsEditing] = useState(false)

  const handleEditing = () => {
    setIsEditing(true)
  }

  const handleEditEnd = () => {
    setIsEditing(false)
  }

  return (
    <div className="flex flex-col gap-5 overflow-y-scroll h-full">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} actionsDisabled={isEditing} onEditing={handleEditing} onEditEnd={handleEditEnd} />
      ))}
    </div>
  );
}

export default TodoList;
