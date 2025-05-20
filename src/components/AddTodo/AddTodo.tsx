import { useState } from "react";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

function AddTodo() {
  const [taskName, setTaskName] = useState("");

  const handleTextFieldChange = (value: string) => {
    setTaskName(value);
  }

  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <TextField value={taskName} placeholder="Task name" onChange={handleTextFieldChange} />
      </div>

      <Button variant="primary">Add</Button>
    </div>
  );
}

export default AddTodo;
