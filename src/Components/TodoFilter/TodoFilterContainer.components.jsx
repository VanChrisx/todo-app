import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const TodoFilterContainer = ({ children }) => {
  return <div>{children}</div>;
};

const ItemsLeft = ({ total }) => {
  return (
    <div>
      <p>{total}items</p>
    </div>
  );
};

const ButtonFilterContainer = ({ children }) => {
  return <div>{children}</div>;
};

const ButtonFilter = ({ action, active, filter }) => {
  return (
    <Button onClick={action} active={active} filter={filter}>
      {filter}
    </Button>
  );
};

export { TodoFilterContainer, ItemsLeft, ButtonFilterContainer, ButtonFilter };
