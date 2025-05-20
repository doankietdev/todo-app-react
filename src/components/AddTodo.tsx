import Button from "./Button";
import TextField from "./TextField";

function AddTodo() {
  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <TextField placeholder="Task name" />
      </div>

      <Button variant="primary">Add</Button>
    </div>
  );
}

export default AddTodo;
