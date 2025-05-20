import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./components/Filter/Filter";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <main className="lg:w-[800px] mx-auto flex flex-col bg-white p-5 shadow-[0_0_10px_4px_#dbdbdb] rounded-md h-[90vh]">
      
      <h1 className="text-4xl font-semibold text-center">Todo App</h1>

      <div className="py-6 h-full overflow-y-hidden flex flex-col gap-6">
        <Filter />
        <AddTodo />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
