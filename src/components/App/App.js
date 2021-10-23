import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () =>
(<Router>
    <div className={styles.wrap}>
    <Card className={styles.card}>
      <MenuList className={styles.menu}>
      <Link to='/' className={styles.link}><MenuItem className={styles.menu}>About me</MenuItem></Link>
      <Link to='/todo' className={styles.link}><MenuItem>TO-DO LIST</MenuItem></Link>
      <Link to='/contacts' className={styles.link}> <MenuItem>Contacts</MenuItem></Link>
      </MenuList>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
      <div className={styles.logo}>Designed at Web Hero School</div>
    </Card>
  </div>

  </Router>

);

export default App;
