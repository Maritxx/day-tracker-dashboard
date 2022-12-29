import React from "react";
import { List } from '@mui/material';

import TodoListItem from "./TodoListItem";

const TodoList = React.memo(({ items, onItemCheck, onItemRemove, onChangeEmergency }) => (
  <>
    {items.length > 0 && (
          <List style={{ overflow: "scroll" }}>
            {items.map((todo, idx) => (
              <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== items.length - 1}
              onButtonClick={() => onItemRemove(idx)}
              onCheckBoxToggle={() => onItemCheck(idx)}
              onChangeEmergency={() => onChangeEmergency(idx)}
              />
              ))}
          </List>
    )}
  </>
));

export default TodoList;
