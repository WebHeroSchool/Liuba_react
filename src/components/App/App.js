import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component{
  state ={

    items: [
      {
        value:'write my own styles',
        isDone: true,
        id: 1
      },
      {
        value: 'finish 26 lesson',
        isDone: true,
        id: 2
      },
      {
        value: 'start a new lesson',
        isDone: false,
        id: 3
      }
  ],
  count: 3
};

  onClickDone = id => {
    const newItemList = this.state.items.map(item=>{
      const newItem = { ...item };

      if (item.id === id){
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    this.setState({ items: newItemList });
  };

  onClickDelete = id => {
    const newItemList = this.state.items.filter ( item => item.id !==id);
    this.setState({items: newItemList});
  };

  onClickAdd = value => {
    if (value !== '') {
  this.setState(state =>({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count +1
      }
    ],
    count: state.count +1,
    error: false
  }));
  } else {
    this.setState(state => ({ error: true }))
  }
};
render() {
    return(
      <div className={styles.wrap}>
          <h1 className={styles.title}>TO-DO LIST </h1>
          <InputItem
          onClickAdd={this.onClickAdd}
          error={this.state.error}
          />
          <ItemList items = {this.state.items}
          onClickDone= {this.onClickDone}
          onClickDelete= {this.onClickDelete}
          />
          <Footer count={this.state.count}/>
      </div>);
    }
};


export default App;
