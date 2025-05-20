import AddTodo from "./components/AddTodo";

function App() {
  return (
    <main className="w-[500px] mx-auto flex flex-col bg-white p-5 shadow-[0_0_10px_4px_#dbdbdb] rounded-md h-[90vh]">
      
      <h1 className="text-4xl font-semibold text-center">Todo App</h1>

      <div className="py-6">

        <AddTodo />
      </div>

      <div></div>
    </main>
  );
}

export default App;
