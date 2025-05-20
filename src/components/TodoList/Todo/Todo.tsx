import Button from "@/components/Button/Button";
import Checkbox from "@/components/CheckBox/Checkbox";
import DatePickerField from "@/components/DatePickerField/DatePickerField";
import TextField from "@/components/TextField/TextField";
import { cn } from "@/lib/utils";
import { Todo as TodoModel } from "@/models/Todo";
import { todoActions } from "@/redux/slices/todoSlice";
import { Badge } from "flowbite-react";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  todo: TodoModel;
  actionsDisabled: boolean
  onEditing?: () => void,
  onEditEnd?: () => void,
}

function Todo({ todo, actionsDisabled = false, onEditing = () => {}, onEditEnd = () => {} }: Props) {
  const [checked, setChecked] = useState(todo.isCompleted);
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDeadline, setEditedDeadline] = useState(new Date(todo.deadline));
  const dispatch = useDispatch();
  
  const handleCheckboxChange = (checked: boolean) => {
    setChecked(checked);
    dispatch(
      todoActions.updateTodo({
        id: todo.id,
        updateData: {
          isCompleted: checked,
        },
      })
    );
  };

  const handleEditClick = () => {
    setIsEdit(true)
    onEditing()
  };

  const handleCancelEditClick = () => {
    setIsEdit(false);
    setEditedName(todo.name);
    setEditedDeadline(new Date(todo.deadline));
    onEditEnd()
  };

  const handleRemoveClick = () => {
    dispatch(todoActions.deleteTodo({ id: todo.id }));
    toast.success("Remove todo successfully");
  };

  const handleEditTextFieldChange = (value: string) => {
    setEditedName(value);
  };

  const handleEditDeadlineChange = (date: Date | null) => {
    if (date) {
      setEditedDeadline(date);
    }
  };

  const handleEditSaveClick = () => {
    dispatch(
      todoActions.updateTodo({
        id: todo.id,
        updateData: {
          name: editedName,
          deadline: editedDeadline
        },
      })
    );
    setIsEdit(false);
    toast.success("Edit todo successfully");
  };
  return (
    <div className="flex gap-3">
      <div className="flex-1">
        {isEdit ? (
          <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_200px]">
              <div>
                <TextField
                  label="Task name"
                  value={editedName}
                  onChange={handleEditTextFieldChange}
                />
              </div>
              <div className="grid">
                <DatePickerField
                  label="Deadline"
                  value={editedDeadline}
                  onChange={handleEditDeadlineChange}
                />
              </div>
            </div>
          </>
        ) : (
          <div className={cn({ "opacity-50 line-through": checked })}>
            <Checkbox
              id={todo.id}
              label={todo.name}
              checked={checked}
              disabled={actionsDisabled}
              onChange={handleCheckboxChange}
            >
              <div className="w-fit">
                <Badge
                  color={
                    todo.isCompleted
                      ? "success"
                      : moment(todo.deadline).isSame(moment(), "day")
                      ? "failure"
                      : "warning"
                  }
                >
                  {moment(todo.deadline).format("LL")}
                </Badge>
              </div>
            </Checkbox>
          </div>
        )}
      </div>

      <div className="flex items-end gap-2">
        {isEdit ? (
          <>
            <Button
              onClick={handleCancelEditClick}
              variant="danger"
              type="outlined"
              size="sm"
            >
              Cancel
            </Button>
            <Button
              type="outlined"
              variant="primary"
              size="sm"
              onClick={handleEditSaveClick}
            >
              Save
            </Button>
          </>
        ) : (
          <>
            <Button disabled={actionsDisabled} onClick={handleEditClick} type="outlined" size="sm">
              Edit
            </Button>
            <Button
              type="outlined"
              variant="danger"
              size="sm"
              disabled={actionsDisabled}
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
