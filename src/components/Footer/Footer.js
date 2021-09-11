import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import PropTypes from'prop-types';

const Footer = ({ count, onClick, onClickFooter }) => (<footer className={styles.wrap}>
<div className={styles.count} onClick={onClickFooter}> {count} items left: </div>
    <div>
      <Button className={styles.button}>ALL</Button>
      <Button color="primary">Active </Button>
      <Button color="primary">Completed </Button>
      <Button color="secondary">Clear Completed </Button>
    </div>
    </footer>
  )

Footer.propTypes = {
  count: PropTypes.number.isRequired
};

export default Footer;
