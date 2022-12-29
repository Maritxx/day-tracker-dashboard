import "./styles.css";
import React from "react";
import { useInputValue, useTodos } from "./custom-hooks";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { Typography } from "@mui/material";

const TaskList = React.memo(() => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo, changeEmergency } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <>
      <Typography variant="h2">Task List</Typography>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
        />
      <TodoList
        items={todos}
        onItemCheck={checkTodo}
        onItemRemove={removeTodo}
        onChangeEmergency={changeEmergency}
        />
    </>
  );
});

export default TaskList
