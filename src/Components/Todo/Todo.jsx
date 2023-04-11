import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const Todo = ({ todos, handleSetComplete, handleSetDelete }) => {
  const { completed, title, id } = todos;
  console.log(completed);
  return (
    <div>
      <FormControlLabel
        label={title}
        control={
          <Checkbox
            value={id}
            checked={completed}
            onClick={() => handleSetComplete(id)}
            color="primary"
          />
        }
      />
      <Button onClick={() => handleSetDelete(id)}>Delete</Button>
    </div>
  );
};

export default Todo;
