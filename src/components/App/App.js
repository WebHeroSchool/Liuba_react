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
        isDone: true
      },
      {
        value: 'finish 26 lesson',
        isDone: true
      },
      {
        value: 'start a new lesson',
        isDone: false
      }
  ],
  count: 6
};

  onClickDone = isDone => {};
  onClickFooter = () => this.setState(state => ({count: state.count -1}));

render() {
    return(
      <div className={styles.wrap}>
          <h1 className={styles.title}>TO-DO LIST </h1>
          <InputItem />
          <ItemList items = {this.state.items} onClickDone={this.onClickDone}/>
          <Footer count ={this.state.count} onClickFooter={this.onClickFooter}/>
      </div>);
    }
};


export default App;
