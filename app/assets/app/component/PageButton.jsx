import React from 'react';
import classnames from 'classnames';
import styles from 'app/component/PageButton.scss';

const PageButton = ({ pageNo, isCurrentPage, onClick }) => {
  const onPageClick = (pageNo) => {
    if(pageNo !== '...') onClick(pageNo)
  }
  return (
  <div 
    key={pageNo}
    className={classnames(styles.page, isCurrentPage? styles.currentPage: pageNo !== '...' && styles.unselectedPage)}
    onClick={onPageClick.bind(this, pageNo)}
  >{pageNo}</div>)
}

export default PageButton;
