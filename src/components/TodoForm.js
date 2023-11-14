import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todo.slice";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form
      className="p-4 max-w-2xl border border-gray-200 rounded-md shadow-sm m-auto mt-6 mb-4"
      onSubmit={handleAdd}
    >
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_text"
          id="floating_text"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <label
          for="floating_text"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Add Todo
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
