import React from 'react';
import classnames from 'classnames';
import PageButton from 'app/component/PageButton';
import styles from 'app/component/PaginationCard.scss';

const PaginationCard = ({perPage, totalCount, currentPage, className, onPageClick}) => {
  const totalPages = Math.floor(totalCount / perPage) + ((totalCount % perPage)? 1: 0);
  const pageList = [];
  let lastPage = 0;
  [...Array(totalPages).keys()].forEach((pageNo) => {
    pageNo = pageNo + 1;
    if ([1, 2, totalPages-1, totalPages, Math.floor(totalPages / 2) + 1, currentPage - 1, currentPage, currentPage + 1].includes(pageNo)) {
      pageList.push(pageNo);
      lastPage = pageNo;
    } else {
      if (lastPage != '...') {
        pageList.push('...')
        lastPage = '...'
      }
    }
  })
  const onPageClickHandle = (pageNo) => {
    if(onPageClick) {
      onPageClick(pageNo);
    }
  }
  return (
      <div className={classnames(styles.paginatorContainer, className)}>
        <div className={classnames(styles.countDetailContainer)}>
          <span> {`${((currentPage - 1) * perPage) + 1} - ${currentPage * perPage} out of ${totalCount}`}</span>
        </div>
        <div className={styles.pagesContainer}>
          {pageList.map((pageNo, index) => (
            <PageButton key={index} pageNo={pageNo} isCurrentPage={ pageNo == currentPage } onClick={onPageClickHandle}/>
            )
          )}
        </div>
      </div>
    )
}

export default PaginationCard;
