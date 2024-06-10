import { Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <Flex align="center" justify="space-between" p={2} borderWidth={1} borderRadius="md" mb={2}>
      <Checkbox isChecked={todo.completed} onChange={() => onToggle(todo.id)}>
        <Text as={todo.completed ? "del" : "span"} ml={2}>
          {todo.text}
        </Text>
      </Checkbox>
      <IconButton
        icon={<FaTrash />}
        size="sm"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      />
    </Flex>
  );
};

export default TodoItem;