import Button from "@/components/Button/Button";
import Checkbox from "@/components/CheckBox/Checkbox";
import TextField from "@/components/TextField/TextField";
import { cn } from "@/lib/utils";
import { todoActions } from "@/redux/slices/todoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface Props {
  id: string;
  name: string;
  isCompleted: boolean;
}

function Todo({ id, name, isCompleted }: Props) {
  const [checked, setChecked] = useState(isCompleted);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = (checked: boolean) => {
    setChecked(checked);
  };

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleCancelEditClick = () => {
    setIsEdit(false);
  };

  const handleRemoveClick = () => {
    dispatch(todoActions.deleteTodo({ id }))
    toast.success('Remove todo successfully')
  }

  return (
    <div className="flex gap-3">
      <div className="flex-1">
        {isEdit ? (
          <TextField value={name} />
        ) : (
          <div className={cn({ "opacity-50 line-through": checked })}>
            <Checkbox
              id={id}
              label={name}
              checked={checked}
              onChange={handleCheckboxChange}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {isEdit ? (
          <>
            <Button onClick={handleCancelEditClick} variant="danger" type="outlined" size="sm">
              Cancel
            </Button>
            <Button type="outlined" variant="primary" size="sm">
              Save
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleEditClick} type="outlined" size="sm">
              Edit
            </Button>
            <Button type="outlined" variant="danger" size="sm" onClick={handleRemoveClick}>
              Remove
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
