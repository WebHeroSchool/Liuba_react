import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import styles from './Item.module.css';
import PropTypes from'prop-types';


const Item = ({ item, classes, value, isDone, onClickDone, id, onClickDelete }) =>(
  <div>
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

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onCliсkDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
  };

export default Item;
