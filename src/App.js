import { Provider } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
