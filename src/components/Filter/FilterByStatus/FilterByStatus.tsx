import Radio from "@/components/Radio/Radio";
import { filterStatusSelector } from "@/redux/selectors";
import { filterActions } from "@/redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

function FilterByStatus() {
  const status = useSelector(filterStatusSelector)
  const dispatch = useDispatch()

  const handleFilterChange = (value: string) => {
    dispatch(filterActions.statusFilterChange(value))
  }

  return (
    <div>
      <p className="font-semibold mb-1">Filter By Status</p>
      <div className="flex gap-4 iteams-center">
        <Radio id="all" name="filter-by-status" label="All" value="all" checked={status === 'all'} onChange={handleFilterChange} />
        <Radio id="todo" name="filter-by-status" label="Todo" value="todo" checked={status === 'todo'} onChange={handleFilterChange} />
        <Radio id="completed" name="filter-by-status" label="Completed" checked={status === 'completed'} value="completed" onChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default FilterByStatus;
