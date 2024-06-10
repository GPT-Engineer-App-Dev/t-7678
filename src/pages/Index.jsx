import { useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const Index = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <Heading mb={6}>Todo App</Heading>
      <AddTodo onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </Container>
  );
};

export default Index;
