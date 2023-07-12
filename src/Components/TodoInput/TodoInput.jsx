import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleNewTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(todo);
      setTodo("");
      e.target.value = "";
    }
  };

  return (
    <TextField
      style={{ width: "100%", backgroundColor: "#413D5E" }}
      sx={{ input: { color: "white" } }}
      color="success"
      type="text"
      placeholder="What's next ..."
      onChange={(e) => setTodo(e.target.value)}
      onKeyDown={(e) => handleNewTodo(e)}
    />
  );
};

export default TodoInput;
