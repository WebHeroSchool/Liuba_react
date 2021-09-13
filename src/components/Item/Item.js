import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import styles from './Item.module.css';
import PropTypes from'prop-types';

class Item extends React.Component{
  // componentDidMount() {
  //   this.timer = setInterval(() => console.log('text'), 1000 );
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render () {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
        return (<div>
            <ListItem>
                <Checkbox color="primary"
                checked={isDone}
                inputProps={{'aria-label': 'uncontrolled-checkbox'}}
                onClick = {() => onClickDone(id)}/>
              <ListItemText>
                   <span className={
                   classnames({
                     [styles.item]: true,
                     [styles.done]: isDone
                   })
                 }>
                     {value}
                 </span>
             </ListItemText>
             <DeleteOutlineIcon onClick = {() => onClickDelete (id)} />
            </ListItem>
      </div>);
  }
}

Item.propTypes = {
    value: PropTypes.string,
    isDone: PropTypes.bool,
    onClickDone: PropTypes.func,
    onCliсkDelete: PropTypes.func,
    id: PropTypes.number
  };

export default Item;
