import React from "react";
import TodoFilter from "../TodoFilter/TodoFilter";
import Todo from "../Todo/Todo";

const TodoList = ({
  todos,
  activeFilter,
  handleSetComplete,
  handleSetDelete,
  handleClearCompleted,
  activeFilterAll,
  activeFilterCompleted,
  activeFilterActive,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todos={todo}
            handleSetComplete={handleSetComplete}
            handleSetDelete={handleSetDelete}
          />
        );
      })}

      <TodoFilter
        handleClearCompleted={handleClearCompleted}
        total={todos.length}
        activeFilter={activeFilter}
        activeFilterActive={activeFilterActive}
        activeFilterAll={activeFilterAll}
        activeFilterCompleted={activeFilterCompleted}
      />
    </div>
  );
};

export default TodoList;
