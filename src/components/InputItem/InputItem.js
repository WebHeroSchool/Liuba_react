import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

const InputItem = () => (<div className={styles.input}>
  <TextField
          endIcon={<AddBoxRoundedIcon />}
          id="standard-textarea"
          label="Enter your next task"
          fullWidth
          margin="normal"
          multiline
        />
<AddBoxRoundedIcon className={styles.AddBoxRoundedIcon} color="primary" fontSize="large" />
</div>);

export default InputItem;
