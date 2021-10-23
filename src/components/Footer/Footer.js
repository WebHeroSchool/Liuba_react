import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

  const Footer = ({id, onClickDeleteDone, onClickFilter, activeTasks, doneTasks }) => (<footer>
      <div className={styles.count}
        onClick={() => onClickFilter('active')}>
            {activeTasks} items left:
      </div>
      <div className={styles.buttons}>
        <Button onClick={() => onClickFilter('allTask')}>
          ALL {activeTasks + doneTasks}
        </Button>
        <Button color="primary" onClick={() => onClickFilter('active')}>
          Active {activeTasks}
        </Button>
        <Button color="primary" onClick={() => onClickFilter('done')}>
          Completed {doneTasks}
        </Button>
        <Button color="secondary" onClick={() => onClickDeleteDone(id)}>
          Clear Completed
        </Button>
      </div>
      </footer>
    );
    
export default Footer;
