import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/todo/todo.slice";

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-2xl border border-gray-200 rounded-md shadow-sm m-auto p-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Todos.</h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside">
        {todos.length === 0 ? (
          <h2>No Todos yet. :( </h2>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-4 font-medium text-lg"
            >
              {todo.text}
              <button
                onClick={() => handleRemove(todo.id)}
                className="px-4 py-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
