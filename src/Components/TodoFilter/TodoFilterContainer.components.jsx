import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";

const TodoFilterContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1%",
      }}>
      {children}
    </div>
  );
};

const ItemsLeft = ({ total }) => {
  return (
    <div style={{ alignSelf: "center", paddingLeft: "2%", color: "white" }}>
      <Typography
        variant="h6"
        color="white">
        Tasks to do: {total}
      </Typography>
    </div>
  );
};

const ButtonFilterContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
      }}>
      {children}
    </div>
  );
};

const ButtonFilter = ({ action, active, filter }) => {
  return (
    <Button
      onClick={action}
      active={active}
      filter={filter}
      variant="contained"
      style={{ backgroundColor: "#302B61" }}>
      {filter}
    </Button>
  );
};

export { TodoFilterContainer, ItemsLeft, ButtonFilterContainer, ButtonFilter };
