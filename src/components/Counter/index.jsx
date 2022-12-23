import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, minusNumber } from '../../redux/modules/counter';

import styles from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  console.log('counter', counter);

  const dispatch = useDispatch();

  const plusCount = () => {
    dispatch(addNumber(1));
  };
  const minusCount = () => {
    dispatch(minusNumber(1));
  };
  return (
    <div>
      <div className={styles.row}>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={minusCount}
        >
          -
        </button>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={plusCount}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default Counter;
