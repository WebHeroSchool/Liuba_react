import React from 'react';
import Item from '../Item/Item';

const moreArr = [1,2,3].map(item => item =1);


const ItemList = ({ items }) => (<ul>
    {items.map(item => <li key ={item.value}>
        <Item value={item.value} isDone={item.isDone} />
    </li>)}
</ul>);

export default ItemList;
