import { Todo } from "@/models/Todo";
import { todoActions } from "@/redux/slices/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import { toast } from "react-toastify";

function AddTodo() {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleTextFieldChange = (value: string) => {
    setTaskName(value);
  }

  const handleAddClick = () => {
    console.log('clic')
    dispatch(todoActions.addTodo({
      id: uuidv4(),
      name: taskName,
      isCompleted: false
    } as Todo))
    setTaskName("")
    toast.success("Add todo successfully")
  }

  return (
    <div className="flex gap-3">
      <div className="flex-1">
        <TextField value={taskName} placeholder="Task name" onChange={handleTextFieldChange} />
      </div>

      <Button variant="primary" onClick={handleAddClick} disabled={!taskName}>Add</Button>
    </div>
  );
}

export default AddTodo;
