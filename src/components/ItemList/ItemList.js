import React from 'react';
 import Item from '../Item/Item'
 import styles from './ItemList.module.css';
 import Checkbox from '@material-ui/core/Checkbox';
 import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
 import ListItemText from '@material-ui/core/ListItemText';
 import ListItem from '@material-ui/core/ListItem';
 import ListItemIcon from '@material-ui/core/ListItemIcon';

 const ItemList = ({ items, isDone, onClickDone }) =>(<div>

     {items.map(item => (
       <ListItem key={item.value} className={item}>
         <ListItemIcon>
           <Checkbox color="primary" inputProps={{'aria-label': 'uncontrolled-checkbox'}} onClick = {() => console.log(item.isDone)}/>
         </ListItemIcon>
         <ListItemText><Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} /></ListItemText>
             <DeleteOutlineIcon />
       </ListItem>
     ))}
 </div>);
export default ItemList;
