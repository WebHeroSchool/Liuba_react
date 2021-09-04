import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
  <TextField
          id="standard-textarea"
          label="Добавить задание"
          fullWidth
          margin="normal"
          multiline
        />
</div>);

export default InputItem;
