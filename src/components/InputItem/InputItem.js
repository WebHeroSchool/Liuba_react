import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';


class InputItem extends React.Component {

  state = {
    inputValue: '',
    error: false,
    labelText: 'Enter your task'

  };

  onButtonClick = () => {
        this.setState ({
          inputValue: '',
          labelText: 'Enter your next task'

  });

     if(this.state.inputValue === ''){
       this.setState({error : true, labelText: 'The field cannot be empty!'});
     } else if (this.props.items.every(item => item.value !== this.state.inputValue)){
        this.setState({error:false, labelText: 'Enter your next task'});
        this.props.onClickAdd(this.state.inputValue);
    }else {
          this.setState ({error: true, labelText: 'This task already exists!'});
    }
  };


render(){

      return (<div className={styles.wrap}>
        <TextField
          id="standard-textarea"
          label={this.state.labelText}
          error={this.state.error}
          style={{ width: "85%" }}
          margin="normal"
          multiline
          value={this.state.inputValue.toUpperCase()}
          onChange={event => this.setState({inputValue: event.target.value.toLowerCase() })}
         />
        <AddBoxRoundedIcon
        className={styles.AddBoxRoundedIcon}
        color="primary"
        fontSize="large"
        onClick={this.onButtonClick}
        />
        </div>);
    }
  }

export default InputItem;
