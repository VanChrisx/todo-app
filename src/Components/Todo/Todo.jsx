import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const Todo = ({ todos, handleSetComplete, handleSetDelete }) => {
  const { completed, title, id } = todos;
  console.log(completed);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#413D5E",
        padding: "2%",
        borderRadius: "15px",
        marginTop: "1%",
      }}>
      <FormControlLabel
        label={title}
        style={{ width: "100%", color: "white" }}
        control={
          <Checkbox
            value={id}
            checked={completed}
            onClick={() => handleSetComplete(id)}
            color="primary"
          />
        }
      />
      <Button onClick={() => handleSetDelete(id)}>Borrar</Button>
    </div>
  );
};

export default Todo;
