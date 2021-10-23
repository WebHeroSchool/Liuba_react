import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';


const Todo = () =>  {
  const initialState ={
       items: JSON.parse(localStorage.getItem('items')) ||
       [],

      count: 0,
      filter: 'all'
};

   const [items, setItems] = useState(initialState.items);
   const [count, setCount] = useState(initialState.count);
   const [filter, setFilter] =useState('allTasks');
   let itemsFilter;

   useEffect(() => {localStorage.setItem('items', JSON.stringify(items));})

   const onClickDone = id => {
     const newItemList = items.map( item => {
       const newItem ={ ...item };
       if (item.id === id){
         newItem.isDone = !item.isDone;
       }

       return newItem;
     });
     setItems(newItemList);
   };

   const onClickDelete = id => {
     const newItemList = items.filter(item => {
       return item.id !== id;
     });
     setItems(newItemList);
   };

   const onClickAdd = value => {
     setItems(
       [...items,
         {
           value: value,
           isDone: false,
           id: count + 1
         }]);
     setCount(count + 1);
   };

   const onClickDeleteDone = id => {
     const newItemList = items.filter(item => {
       return item.isDone !== true;
     });
       setItems(newItemList);
   };

   const activeTask = (items.filter((item) => item.isDone === false)).length;
   const doneTask = (items.filter((item) => item.isDone === true)).length;

   const onClickFilter = filtered => setFilter(filtered);

   switch (filter) {
     case 'done':
       itemsFilter = items.filter(item => item.isDone);
       break;
     case 'active':
       itemsFilter = items.filter(item => !item.isDone);
       break;
     default:
       itemsFilter = items;
   }
     return(
       <div className={styles.wrap}>
       <div>
       <h1 className={styles.title}>TODOS:</h1>
       <InputItem
         items = {items}
         onClickAdd = {onClickAdd}
       />
       <ItemList
         items={itemsFilter}
         onClickDone = {onClickDone}
         onClickDelete = {onClickDelete}
       />
       </div>
       <Footer
         filtered={filter}
         onClickFilter={onClickFilter}
         activeTasks = {activeTask}
         doneTasks = {doneTask}
         onClickDeleteDone={onClickDeleteDone}
        />
       </div>);

};

export default Todo;
