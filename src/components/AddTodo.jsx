import { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() !== "") {
      onAdd({
        id: uuidv4(),
        text,
        completed: false,
      });
      setText("");
    }
  };

  return (
    <Flex mb={4}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        mr={2}
      />
      <Button onClick={handleAdd}>Add</Button>
    </Flex>
  );
};

export default AddTodo;