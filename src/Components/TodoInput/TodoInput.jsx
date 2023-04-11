import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleNewTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(title);
      setTitle("");
      e.target.value = "";
    }
  };

  return (
    <TextField
      type="text"
      placeholder="What's next ..."
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => handleNewTodo(e)}
    />
  );
};

export default TodoInput;
