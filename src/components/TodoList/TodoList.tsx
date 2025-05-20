import Todo from "./Todo/Todo";

function TodoList() {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <Todo id="1" name="Study Java" isCompleted />
      <Todo id="1" name="Study Java" isCompleted />
      <Todo id="1" name="Study Java" isCompleted />
      <Todo id="1" name="Study Java" isCompleted />
    </div>
  );
}

export default TodoList;
