import React, { useState } from 'react';

import SortSign from 'app/images/sort-sign.svg';
import UpSort from 'app/images/up-arrow.svg';
import DownSort from 'app/images/down-arrow.svg';

const SortIcon = ({sortState, onClick}) => {
  const getSign = (sortState === 'asc'? <UpSort />: sortState === 'desc'? <DownSort />: <SortSign />);
  return (<span onClick={onClick}>{getSign}</span>);
}

export default SortIcon;
