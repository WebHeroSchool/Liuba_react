import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'прописать пропсы'} /></li>
    <li><Item todoItem={'залить на гитхаб'} /></li>
</ul>);

export default ItemList;
