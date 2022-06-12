import React, { useState } from 'react';
import classnames from 'classnames';

import SortIcon from 'app/component/SortIcon';

import styles from 'app/component/TableHeaderCell.scss';

const TableHeaderCell = ({sorting=true, value, children, sortHandler, className, headerClassName}) => {
  const [sortState, setSortState] = useState(undefined);
  const classNames = classnames(styles.tableHeaderCell, className);
  const headerClassNames = classnames(styles.tableHeader, headerClassName)
  const updateSort = () => {
      setSortState(currentSortState => {
          const newState = currentSortState === 'asc'? 'desc': currentSortState === 'desc'? undefined : 'asc';
          if(sortHandler) sortHandler(value, newState);
          return newState;
      });
  }
  return (
      <th className={headerClassNames}>
      <div className={classNames}>{children} {sorting && <SortIcon sortState={sortState} onClick={updateSort}/>} </div>
      </th>
  )
}

export default TableHeaderCell
