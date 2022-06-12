import React from 'react';
import styles from 'app/component/ActionButton.scss';

const ActionButton = ({ children }) => {
  return (
    <div className={styles.buttonContainer}>{children}</div>
  )
}

export default ActionButton;
