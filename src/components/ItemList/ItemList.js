import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import styles from './ItemList.module.css';


 const ItemList = ({ items, onClickDone, onClickDelete }) => {

   if (items.length === 0) {
		return <div className={styles.wrap_no_cases}>You have no tasks! <br/> Want to add something? </div>
	}
else {
  return<List>
			{items.map(item => <List key={item.id}>
				<Item
					value={item.value}
					isDone={item.isDone}
					id={item.id}
					onClickDone={onClickDone}
					onClickDelete={onClickDelete}
				/>
			</List >)}
		</List >;
	}
};

ItemList.propTypes = {
      items: PropTypes.array,
      onClickDone: PropTypes.func,
      onCliсkDelete: PropTypes.func
  };

export default ItemList;
