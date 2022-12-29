import React from "react";
import { TextField, Button, Grid } from '@mui/material';

const AddTodo = React.memo(
  ({ inputValue, onInputChange, onInputKeyPress, onButtonClick }) => (

      <Grid container>
        <Grid xs={10} style={{marginLeft: 25}} item>
          <TextField
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            onKeyPress={onInputKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={1} style={{marginLeft: 20}} item>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>

  )
);

export default AddTodo;
