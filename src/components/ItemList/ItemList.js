import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

 const ItemList = ({ items, onClickDone, onClickDelete }) => (<List>
  {items.map(item => <List key={item.value}>
    <Item
      value={item.value}
      isDone={item.isDone}
      id={item.id}
      onClickDone = {onClickDone}
      onClickDelete={onClickDelete}
    />
  </List>)}
</List>);

ItemList.propTypes = {
      items: PropTypes.array.isRequired,
      onClickDone: PropTypes.func.isRequired,
      onCliсkDelete: PropTypes.func.isRequired
  };

export default ItemList;
