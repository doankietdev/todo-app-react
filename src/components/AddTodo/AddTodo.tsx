import { Todo } from "@/models/Todo";
import { todoActions } from "@/redux/slices/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import { toast } from "react-toastify";
import DatePickerField from "../DatePickerField/DatePickerField";

function AddTodo() {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState(new Date() as Date | null);
  const dispatch = useDispatch();

  const handleTextFieldChange = (value: string) => {
    setTaskName(value);
  };

  const handleDealineChange = (date: Date | null) => {
    setDeadline(date)
  }

  const handleAddClick = () => {
    console.log("clic");
    dispatch(
      todoActions.addTodo({
        id: uuidv4(),
        name: taskName,
        deadline,
        isCompleted: false,
      } as Todo)
    );
    setTaskName("");
    toast.success("Add todo successfully");
  };

  return (
    <div className="flex flex-col gap-3 border-b-2 p-4">
      <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-[1fr_200px]">
        <div>
          <TextField
            label="Task name"
            value={taskName}
            placeholder="Task name"
            onChange={handleTextFieldChange}
          />
        </div>
        <div className="grid">
          <DatePickerField label="Deadline" value={deadline} onChange={handleDealineChange} />
        </div>
      </div>

      <div className="self-end">
      <Button variant="primary" onClick={handleAddClick} disabled={!taskName}>
        Add
      </Button>
      </div>
    </div>
  );
}

export default AddTodo;
