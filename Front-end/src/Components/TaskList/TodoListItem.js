import React from "react";
import {
  MenuItem,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Select
} from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutline';

const TodoListItem = React.memo(
  ({ text, divider, checked, onChangeEmergency,onCheckBoxToggle, onButtonClick }) => {
    const [emergency, setEmergency] = React.useState('');
    const handleChange = (event) => {
      setEmergency(event.target.value)
    };

    return (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={checked} disableRipple />
      <ListItemText primary={text} />
      <Select
         sx={{ m: 1, minWidth: 80, marginRight: 5 }}
        labelId="emergency"
        id="emergency"
        value= {emergency}
        label="emergency"
        onChange={handleChange}
      >
        <MenuItem value={10}>Low</MenuItem>
        <MenuItem value={20}>Normal</MenuItem>
        <MenuItem value={30}>High</MenuItem>
      </Select>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    )
    }
);

export default TodoListItem;
