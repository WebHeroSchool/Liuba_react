import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item'


 const ItemList = ({ items, onClickDone }) => (<List>
  {items.map(item => <li key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone = {onClickDone}
    />
  </li>)}
</List>);

export default ItemList;
