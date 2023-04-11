import React from "react";
import {
  ButtonFilterContainer,
  ButtonFilter,
  TodoFilterContainer,
  ItemsLeft,
} from "./TodoFilterContainer.components";
import { Button } from "@mui/material";

const TodoFilter = ({
  total,
  activeFilter,
  activeFilterActive,
  activeFilterAll,
  activeFilterCompleted,
  handleClearCompleted,
}) => {
  return (
    <TodoFilterContainer>
      <ItemsLeft total={total} />
      <ButtonFilterContainer>
        <ButtonFilter
          action={() => activeFilterAll()}
          active={activeFilter}
          filter="all"
        />
        <ButtonFilter
          action={() => activeFilterActive()}
          active={activeFilter}
          filter="active"
        />
        <ButtonFilter
          action={() => activeFilterCompleted()}
          active={activeFilter}
          filter="completed"
        />
      </ButtonFilterContainer>
      <Button onClick={() => handleClearCompleted()}>Clear completed</Button>
    </TodoFilterContainer>
  );
};

export default TodoFilter;
