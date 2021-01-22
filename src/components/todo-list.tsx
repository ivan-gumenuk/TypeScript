import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { ITodo } from "./interfaces";
import OneItem from "./one-todo";

let useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "30px",
  },
});

type TodoListProps = {
  todos: ITodo[];
  toggleDone(id: number): void;
  remove(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleDone, remove }) => {
  const styles = useStyles();
  if (todos.length === 0)
    return (
      <Container className={styles.root}>
        <Typography variant="h4">Please, add some task...</Typography>;
      </Container>
    );
  else
    return (
      <Container className={styles.root}>
        {todos.map((item) => (
          <OneItem
            key={item.id}
            title={item.title}
            id={item.id}
            done={item.done}
            onDone={toggleDone}
            onRemove={remove}
          />
        ))}
      </Container>
    );
};

export default TodoList;
