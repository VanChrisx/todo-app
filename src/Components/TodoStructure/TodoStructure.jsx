import Title from "../Title/Title";
import { Container } from "@mui/material";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import { useEffect, useState } from "react";

const TodoStructure = () => {
  const [todos, setTodo] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleSetComplete = (id) => {
    const updateList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodo(updateList);
  };

  const handleSetDelete = (id) => {
    const updateList = todos.filter((todo) => todo.id !== id);
    setTodo(updateList);
  };

  const handleClearCompleted = () => {
    const updateList = todos.filter((todo) => !todo.completed);
    setTodo(updateList);
  };

  const activeFilterAll = () => {
    setActiveFilter("all");
  };

  const activeFilterActive = () => {
    setActiveFilter("active");
  };

  const activeFilterCompleted = () => {
    setActiveFilter("completed");
  };

  const addTodo = (title) => {
    if (title == "") {
      alert("por favor llenar el campo");
    } else {
      const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
      const newTodo = {
        id: lastId + 1,
        title,
        completed: false,
      };
      setTodo([...todos, newTodo]);
    }
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  console.log(activeFilter);
  return (
    <Container maxWidth="xs">
      <Title />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        activeFilter={activeFilter}
        handleSetComplete={handleSetComplete}
        handleSetDelete={handleSetDelete}
        activeFilterCompleted={activeFilterCompleted}
        activeFilterActive={activeFilterActive}
        activeFilterAll={activeFilterAll}
        handleClearCompleted={handleClearCompleted}
      />
    </Container>
  );
};

export default TodoStructure;
