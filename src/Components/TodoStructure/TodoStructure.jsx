import Title from "../Title/Title";
import { Container, Grid } from "@mui/material";
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

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));
    if (items) {
      setTodo(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <Container
      maxWidth="md"
      style={{ backgroundColor: "#4B5174", borderRadius: "15px" }}>
      <Grid
        container
        spacing={1}
        xs={12}
        md={10}
        p={2}
        m={"20% auto"}>
        <Grid
          item
          container
          xs={12}
          md={12}>
          <Title />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}>
          <TodoInput addTodo={addTodo} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          style={{ width: "100%" }}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default TodoStructure;
