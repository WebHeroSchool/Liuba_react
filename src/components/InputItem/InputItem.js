import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';


class InputItem extends React.Component {

  state = {
    inputValue: '',
    isError: false
  };

  onButtonClick = () => {
   if (this.state.inputValue === false) {
     this.setState({
       isError: true
     })
   } else {
     this.setState({
        inputValue: '',
        isError: false
    })

  this.props.onClickAdd(this.state.inputValue.toLowerCase());
  }
};


render(){

  let textField;

        if (this.state.isError === true) {
          textField = <TextField
            error
            label="Error"
            id="standard-textarea"
            fullWidth
            margin="normal"
            multiline
            defaultValue=" "
            helperText="The field cannot be empty!"
            value={this.state.inputValue}
            onChange={event => this.setState({ inputValue: event.target.value })}
          />
        } else {
          textField = textField = <TextField
            id="standard-textarea"
            label="Enter your next task"
            style={{ width: "85%" }}
            margin="normal"
            multiline
            value={this.state.inputValue.toUpperCase()}
            onChange={event => this.setState({inputValue: event.target.value})}
           />
        }

      return (<div>
        <div> {textField} </div>
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
